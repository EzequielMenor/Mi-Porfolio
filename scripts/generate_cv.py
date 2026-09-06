#!/usr/bin/env python3
"""
generate_cv.py
Generates one-page PDF CVs for both Spanish (CV_Ezequiel_Menor.pdf)
and English (CV_Ezequiel_Menor_EN.pdf) based on cv.json and cv.en.json.
"""

import json
import os
import re
import shutil
from pathlib import Path
from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Table, TableStyle

ROOT = Path(__file__).resolve().parent.parent

# Register fonts if available, otherwise fallback to standard Helvetica
for font_name, path in [
    ('Inter', '/System/Library/Fonts/Supplemental/Arial.ttf'),
    ('Inter-Bold', '/System/Library/Fonts/Supplemental/Arial Bold.ttf'),
]:
    try:
        if os.path.exists(path):
            pdfmetrics.registerFont(TTFont(font_name, path))
    except Exception:
        pass

base_font = 'Inter' if 'Inter' in pdfmetrics.getRegisteredFontNames() else 'Helvetica'
bold_font = (
    'Inter-Bold' if 'Inter-Bold' in pdfmetrics.getRegisteredFontNames() else 'Helvetica-Bold'
)


def esc(s: any) -> str:
    return str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def link(label: str, url: str) -> str:
    return f'<link href="{esc(url)}" color="#1c1917"><u>{esc(label)}</u></link>'


def md_bold(s: str) -> str:
    # Convierte **texto** en <b>texto</b> sobre texto ya escapado
    return re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s)


def build_cv(cv_path: Path, out_path: Path, public_path: Path, lang: str = 'es'):
    cv_data = json.loads(cv_path.read_text(encoding='utf-8'))

    styles = getSampleStyleSheet()

    styles.add(
        ParagraphStyle(
            name='CVName',
            fontName=bold_font,
            fontSize=20,
            leading=24,
            textColor=colors.HexColor('#1c1917'),
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name='CVLabel',
            fontName=base_font,
            fontSize=9.5,
            leading=12.5,
            textColor=colors.HexColor('#44403c'),
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name='CVContact',
            fontName=base_font,
            fontSize=7.8,
            leading=10.5,
            textColor=colors.HexColor('#57534e'),
            spaceAfter=7,
        )
    )
    styles.add(
        ParagraphStyle(
            name='CVSectionTitle',
            fontName=bold_font,
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor('#1c1917'),
            uppercase=True,
            spaceBefore=6,
            spaceAfter=3.5,
        )
    )
    styles.add(
        ParagraphStyle(
            name='CVItemTitle',
            fontName=bold_font,
            fontSize=8.8,
            leading=11,
            textColor=colors.HexColor('#1c1917'),
            spaceAfter=1,
        )
    )
    styles.add(
        ParagraphStyle(
            name='CVMeta',
            fontName=base_font,
            fontSize=7.5,
            leading=10,
            textColor=colors.HexColor('#78716c'),
            spaceAfter=1.5,
        )
    )
    styles.add(
        ParagraphStyle(
            name='CVBody',
            fontName=base_font,
            fontSize=7.8,
            leading=10.5,
            textColor=colors.HexColor('#44403c'),
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name='CVBullet',
            fontName=base_font,
            fontSize=7.6,
            leading=10,
            textColor=colors.HexColor('#44403c'),
            leftIndent=8,
            firstLineIndent=-8,
            spaceAfter=1,
        )
    )
    styles.add(
        ParagraphStyle(
            name='CVSmall',
            fontName=base_font,
            fontSize=7.3,
            leading=9.5,
            textColor=colors.HexColor('#57534e'),
            spaceAfter=1.5,
        )
    )

    months_es = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    months_en = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    months = months_en if lang == 'en' else months_es

    def fmt_date(d: str) -> str:
        if not d:
            return ''
        parts = d.split('-')
        if len(parts) >= 2:
            return f'{months[int(parts[1]) - 1]} {parts[0]}'
        return parts[0]

    def date_range(start: str, end: str) -> str:
        s, e = fmt_date(start), fmt_date(end)
        present = 'Present' if lang == 'en' else 'Actual'
        return f'{s} - {e}' if e else (f'{s} - {present}' if s else '')

    basics = cv_data.get('basics', {})
    profiles = {p['network']: p['url'] for p in basics.get('profiles', [])}

    contact_parts = [
        f"{basics.get('location', {}).get('city', '')}, {basics.get('location', {}).get('region', '')}",
        link('ezequielmenor.es', 'https://ezequielmenor.es'),
    ]
    for net in ['LinkedIn', 'GitHub', 'InfoJobs']:
        if profiles.get(net):
            contact_parts.append(link(net, profiles[net]))

    story = [
        Paragraph(esc(basics.get('name', '')), styles['CVName']),
        Paragraph(esc(basics.get('label', '')), styles['CVLabel']),
        Paragraph(' · '.join(contact_parts), styles['CVContact']),
        Paragraph(esc(basics.get('summary', '')), styles['CVBody']),
    ]

    # Section: Experience
    exp_title = 'Experience' if lang == 'en' else 'Experiencia'
    story.append(Paragraph(exp_title, styles['CVSectionTitle']))

    for w in cv_data.get('work', []):
        if w.get('type') == 'secondary':
            continue
        item_blocks = [
            Paragraph(esc(w['name']), styles['CVItemTitle']),
            Paragraph(
                f"{esc(w.get('position', ''))} · {date_range(w.get('startDate'), w.get('endDate'))}",
                styles['CVMeta'],
            ),
            Paragraph(esc(w.get('summary', '')), styles['CVBody']),
        ]
        if w.get('highlights'):
            item_blocks.append(
                Paragraph(' · '.join(esc(h) for h in w.get('highlights', [])), styles['CVSmall'])
            )
        story.append(KeepTogether(item_blocks))

    # Section: Projects
    proj_title = 'Featured Projects' if lang == 'en' else 'Proyectos Destacados'
    story.append(Paragraph(proj_title, styles['CVSectionTitle']))

    for p in cv_data.get('projects', []):
        if not p.get('featured'):
            continue

        item_blocks = []
        name_text = esc(p['name'])
        if p.get('name') == 'CoreOS':
            name_text = f"<b>{esc(p['name'])}</b> — Personal Operating System"
        else:
            name_text = f"<b>{esc(p['name'])}</b>"

        item_blocks.append(Paragraph(name_text, styles['CVItemTitle']))
        item_blocks.append(Paragraph(esc(p.get('description', '')), styles['CVBody']))

        if p.get('cvHighlights'):
            for bullet in p['cvHighlights']:
                item_blocks.append(Paragraph(f"• {esc(bullet)}", styles['CVBullet']))
        elif p.get('highlights'):
            item_blocks.append(
                Paragraph(' · '.join(esc(h) for h in p.get('highlights', [])), styles['CVSmall'])
            )

        repos = p.get('repos') or {}
        urls = []
        web_label = 'Website' if lang == 'en' else 'Sitio web'
        repo_label = 'Source' if lang == 'en' else 'Código'

        if p.get('url'):
            urls.append(link(web_label, p['url']))
        if repos.get('repo'):
            urls.append(link(repo_label, repos['repo']))
        if repos.get('mobile'):
            urls.append(link('App' if lang == 'en' else 'Móvil', repos['mobile']))
        if repos.get('desktop'):
            urls.append(link('Desktop' if lang == 'en' else 'Escritorio', repos['desktop']))
        if repos.get('backend'):
            urls.append(link('Backend', repos['backend']))

        if urls:
            item_blocks.append(Paragraph(' · '.join(urls), styles['CVSmall']))

        story.append(KeepTogether(item_blocks))

    # Section: Education
    edu_title = 'Education' if lang == 'en' else 'Formación'
    story.append(Paragraph(edu_title, styles['CVSectionTitle']))

    for e in cv_data.get('education', []):
        story.append(
            KeepTogether(
                [
                    Paragraph(esc(e['area']), styles['CVItemTitle']),
                    Paragraph(
                        f"{esc(e.get('studyType', ''))} · {esc(e.get('institution', ''))} · {date_range(e.get('startDate'), e.get('endDate'))}",
                        styles['CVMeta'],
                    ),
                ]
            )
        )

    # Section: Skills
    skills_title = 'Skills' if lang == 'en' else 'Habilidades'
    story.append(Paragraph(skills_title, styles['CVSectionTitle']))

    rows = []
    for s in cv_data.get('skills', []):
        level_text = esc(s.get('level', ''))
        name_cell = Paragraph(
            f"<b>{esc(s['name'])}</b><br/><font color='#78716c'>{level_text}</font>",
            styles['CVSmall'],
        )
        kw_cell = Paragraph(' · '.join(esc(k) for k in s.get('keywords', [])), styles['CVSmall'])
        rows.append([name_cell, kw_cell])

    skills_table = Table(rows, colWidths=[50 * mm, 120 * mm], hAlign='LEFT')
    skills_table.setStyle(
        TableStyle(
            [
                ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                ('LEFTPADDING', (0, 0), (-1, -1), 0),
                ('RIGHTPADDING', (0, 0), (-1, -1), 4),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
            ]
        )
    )
    story.append(skills_table)

    # Section: Engineering Workflow
    workflow = cv_data.get('workflow')
    if workflow:
        story.append(
            Paragraph(esc(workflow.get('name', 'Engineering Workflow')), styles['CVSectionTitle'])
        )
        for bullet in workflow.get('bullets', []):
            story.append(Paragraph(f'• {md_bold(esc(bullet))}', styles['CVBullet']))

    # Build PDF
    doc = SimpleDocTemplate(
        str(out_path),
        pagesize=A4,
        rightMargin=15 * mm,
        leftMargin=15 * mm,
        topMargin=12 * mm,
        bottomMargin=10 * mm,
    )
    doc.build(story)

    shutil.copy2(out_path, public_path)

    reader = PdfReader(str(out_path))
    page_count = len(reader.pages)
    print(f"[{lang.upper()}] Generated {out_path.name} -> {page_count} page(s)")
    return page_count


def main():
    es_json = ROOT / 'cv.json'
    en_json = ROOT / 'cv.en.json'

    # Spanish CV
    out_es = ROOT / 'CV_Ezequiel_Menor.pdf'
    pub_es = ROOT / 'public' / 'CV_Ezequiel_Menor.pdf'
    pages_es = build_cv(es_json, out_es, pub_es, lang='es')

    # English CV
    out_en = ROOT / 'CV_Ezequiel_Menor_EN.pdf'
    pub_en = ROOT / 'public' / 'CV_Ezequiel_Menor_EN.pdf'
    pages_en = build_cv(en_json, out_en, pub_en, lang='en')

    if pages_es != 1 or pages_en != 1:
        raise ValueError(
            f"ERROR: CV page overflow! ES={pages_es}, EN={pages_en}. Must be exactly 1 page each."
        )

    print("SUCCESS: Both CVs generated and strictly verified as 1 page each!")


if __name__ == '__main__':
    main()
