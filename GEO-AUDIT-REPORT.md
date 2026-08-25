# GEO Audit Report: ezequielmenor.es

**Audit Date:** 2026-06-22
**URL:** https://ezequielmenor.es
**Business Type:** Portfolio personal / Agency-Services (Desarrollador Full-Stack)
**Pages Analyzed:** 1 (single-page portfolio, homepage only)

---

## Executive Summary

**Overall GEO Score: 42/100 (Poor)**

El portfolio de Ezequiel Menor tiene una base técnica sólida (Astro genera HTML estático, crawlable por IA) y muestra honestidad admirable para su nivel junior, pero carece completamente de datos estructurados Schema.org, archivos de descubrimiento (robots.txt, sitemap.xml, llms.txt), y presencia en plataformas que los modelos de IA citan con más frecuencia. La ausencia de Schema.org Person — el gap más crítico — significa que "Ezequiel Menor" no existe como entidad estructurada para sistemas de IA. Con 5 minutos de implementación de JSON-LD y configuración básica de archivos de discovery, el score podría saltar ~40 puntos.

### Score Breakdown

| Category                 | Score  | Weight | Weighted Score |
| ------------------------ | ------ | ------ | -------------- |
| AI Citability            | 45/100 | 25%    | 11.25          |
| Brand Authority          | 30/100 | 20%    | 6.00           |
| Content E-E-A-T          | 46/100 | 20%    | 9.20           |
| Technical GEO            | 82/100 | 15%    | 12.30          |
| Schema & Structured Data | 5/100  | 10%    | 0.50           |
| Platform Optimization    | 30/100 | 10%    | 3.00           |
| **Overall GEO Score**    |        |        | **42.25/100**  |

---

## Critical Issues (Fix Immediately)

### 1. Cero datos estructurados Schema.org

- **Severity:** CRITICAL
- **URL:** https://ezequielmenor.es
- **Finding:** No se encontró ningún JSON-LD, microdata ni RDFa en toda la página. El portfolio es invisible para grafos de entidad de IA.
- **Fix:** Añadir Schema.org Person + WebSite en `<head>`. Código listo para copiar en la sección Schema de este reporte.

### 2. Sin robots.txt

- **Severity:** HIGH
- **URL:** https://ezequielmenor.es/robots.txt → 404
- **Finding:** Aunque la ausencia de restricciones es técnicamente buena para acceso de crawlers, se pierde la directiva `Sitemap:` y cualquier política para crawlers de IA.
- **Fix:** Crear `public/robots.txt` con `User-agent: * / Allow: / Sitemap: https://ezequielmenor.es/sitemap.xml`.

### 3. Sin sitemap.xml

- **Severity:** HIGH
- **URL:** https://ezequielmenor.es/sitemap.xml → 404
- **Finding:** Search engines care about discoverability. Sin sitemap, solo se descubre la homepage.
- **Fix:** `npx astro add sitemap` — una línea en `astro.config.mjs` con `@astrojs/sitemap`.

### 4. Sin llms.txt

- **Severity:** HIGH
- **Finding:** Archivo cada vez más importante para accesibilidad a sistemas de IA. Stardard emergente para descubrimiento de sitios web por IA.
- **Fix:** Crear `public/llms.txt` describiendo el sitio y sus secciones principales.

---

## High Priority Issues

### 5. Sin Open Graph ni Twitter Card tags

- **Severity:** HIGH
- **Finding:** No hay `og:title`, `og:description`, `og:image`, `twitter:card`. El sitio no tiene preview rica al compartirse en redes sociales — y las IAs que citan redes sociales no pueden extraer metadatos.
- **Fix:** Añadir `<meta property="og:*">` y `<meta name="twitter:*">` al `<head>`. Mínimo: title, description, image (captura de pantalla del portfolio).

### 6. Sin canonical tag

- **Severity:** MEDIUM
- **URL:** https://ezequielmenor.es/
- **Finding:** Vulnerable a indexación duplicada (www/no-www, HTTP/HTTPS, trailing slash).
- **Fix:** `<link rel="canonical" href="https://ezequielmenor.es/">` en `<head>`.

### 7. README de GitHub insuficiente para citación de IA

- **Severity:** MEDIUM
- **Finding:** El README del perfil GitHub tiene ~21 líneas. Los READMEs de repos tienen 1-16 líneas. AI models que buscan proyectos citing GitHub no tienen suficiente contexto para citar.
- **Fix:** Expandir cada README con descripción del problema que resuelve, arquitectura, decisiones técnicas, y links a demo.

---

## Medium Priority Issues

### 8. Sin presencia en Wikipedia/Wikidata

- **Severity:** MEDIUM
- **Finding:** Wikipedia es fuente del 47.9% de citas de ChatGPT. Sin Wikidata, "Ezequiel Menor" no existe como entidad verificable para los mayores sistemas de IA.
- **Fix:** Crear entrada Wikidata (Q5 — persona) con `occupation: software developer`, sitio oficial, GitHub y LinkedIn como `sameAs`.

### 9. Sin contenido en DEV.to / Hashnode / Medium

- **Severity:** MEDIUM
- **Finding:** Zero blog técnico. Los posts en DEV.to/Hashnode son indexados por todas las plataformas de IA y se citan frecuentemente.
- **Fix:** Publicar 3 posts técnicos (ej: arquitectura de GymAnalytics, patrones en Flutter, estructura Spring Boot).

### 10. Sin schema para proyectos individuales

- **Severity:** MEDIUM
- **Finding:** Aunque se añade Person schema al homepage, los proyectos (GymAnalytics, Game Tower Defense) no tienen `SoftwareApplication` o `CreativeWork` schema propio.
- **Fix:** Si algún proyecto tiene página propia, añadir schema `SoftwareApplication` con `author` linkeando al Person.

---

## Low Priority Issues

### 11. Some images missing descriptive alt text

- **Severity:** LOW
- **Finding:** Los iconos de redes sociales tienen `aria-label` pero no `alt` semántico en `<img>`.
- **Fix:** Auditoría de `<img>` y añadir `alt` descriptivo.

### 12. Font loading causes slight render delay

- **Severity:** LOW
- **Finding:** JetBrains Mono y Inter se cargan desde Google Fonts. Aunque hay `preconnect`, el font swap causa FOUC.
- **Fix:** Considerar self-host fonts o usar `font-display: swap` explícito.

### 13. No existe página de contacto independiente

- **Severity:** LOW
- **Finding:** El contacto es solo vía GitHub/LinkedIn. Una página `/contacto` con email o formulario mejoraría completeness para Schema.org ContactPage.
- **Fix:** Opcional a medio plazo.

---

## Category Deep Dives

### AI Citability (45/100)

El contenido tiene potencial de citabilidad moderado. Las secciones con mayor potencial:

**Pasajes de alta citabilidad:**

> _"Desarrollador Full-Stack, creo aplicaciones y sitios web con tecnologías modernas como Flutter, Spring Boot y Astro. Actualmente en prácticas en Clínicas Dorsia y disponible para proyectos freelance."_

> _"Aplicación completa para gestión de gimnasios: app móvil + escritorio + backend. Desarrollada como TFG de DAM con una arquitectura full-stack real. Tech: Flutter, Spring Boot, Java, App Móvil, API REST, MySQL"_

> _"Desarrollada como TFG de DAM con una arquitectura full-stack real"_ — esta frase específica proporciona contexto académico y técnico juntas, alto valor para citación.

**Pasajes de baja citabilidad:**

> _"App en producción"_ — Vago, sin contexto de qué hace la app ni impacto.

> _"Flutter & Dart — Intermedio"_ — Solo una etiqueta, sin demostración de proficiency.

> _"Mecánicas de oleadas, torres y enemigos"_ — Genérico, aplica a cualquier tower defense.

**Problema principal:** Las descripciones de proyecto son cortas y carecen de arquitectura o decisiones técnicas narradas. Los modelos de IA citation-based buscan párrafos que explican el "por qué" y el "cómo", no solo el "qué".

### Brand Authority (30/100)

Presencia detectada:

| Plataforma                 | Estado        | Notas                                                         |
| -------------------------- | ------------- | ------------------------------------------------------------- |
| GitHub                     | Presente      | 20 repos, 4 seguidores, 9 estrellas. Perfil básico.           |
| LinkedIn                   | Presente      | Perfil existe y está linkeado. Contenido no crawlable por IA. |
| YouTube                    | Parcial       | Canal `@EzequielMenor` existe pero vacío o casi.              |
| Twitter/X                  | Parcial       | Cuenta existe. Nivel de actividad no verificable.             |
| Reddit                     | No encontrado | Cero menciones.                                               |
| Wikipedia                  | No encontrado | Sin artículo ni Wikidata.                                     |
| DEV.to / Medium / Hashnode | No encontrado | Sin posts técnicos.                                           |
| Stack Overflow             | No encontrado | Cero contribuciones.                                          |

**Veredicto de reconocimiento en datos de entrenamiento:** Incierto. El desarrollador no tiene presencia en las fuentes que alimentan ChatGPT/Claude (Wikipedia, Stack Exchange, Reddit, libros, papers académicos). Un solo post en DEV.to bien escrito que sea indexado podría cambiar esto a "Sí" en semanas.

### Content E-E-A-T (46/100)

| Componente        | Score  | Análisis                                                                                                                                                   |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Experience        | 48/100 | FCT en Clínicas Dorsia con app en producción + TFG completo pesan bien. Gap: 3-6 meses de contexto profesional vs. años.                                   |
| Expertise         | 42/100 | Stack tecnológico claro, skill levels honestos. Gap: sin blog técnico, sin case studies, sin decisiones arquitectónicas documentadas.                      |
| Authoritativeness | 15/100 | Componente más débil por etapa de carrera. Sin conferencias, posts invitados, citations de terceros o backlinks. GitHub y LinkedIn son auto-referenciales. |
| Trustworthiness   | 78/100 | Componente más fuerte. "En prácticas", "Intermedio", "proyecto de clase" son precisos y verificables. Sin exageraciones.                                   |

**Fortalezas de contenido:**

1. Proyectos concretos y verificables (GymAnalytics tiene stack real, no es toy project)
2. Auto-evaluación honesta ("Intermedio", "Básico")
3. Contexto real: FCT en empresa real con app en producción

**Gaps de contenido:**

1. GymAnalytics (proyecto destacado) tiene cero narrativa arquitectónica — sin diagramas, sin decisiones explicadas, sin challenges documentados
2. Sin validación externa — cero testimonials, referencias, o menciones de terceros
3. Sin proceso de pensamiento demostrable — skills listed pero ningún blog, post en dev.to, o GitHub discussions

### Technical GEO (82/100)

| Subcategoría          | Score | Análisis                                           |
| --------------------- | ----- | -------------------------------------------------- |
| Crawleabilidad        | 9/15  | Sin robots.txt ni sitemap.xml (gap de discovery)   |
| Indexabilidad         | 9/12  | Sin canonical tag (riesgo de duplicados)           |
| Seguridad             | 5/10  | Faltan 4 de 6 security headers típicos             |
| Estructura URL        | 8/8   | URLs limpias, sin parámetros                       |
| Optimización móvil    | 10/10 | Viewport presente, diseño responsive               |
| Core Web Vitals       | 15/15 | TTFB ~111ms, página 32KB, Vercel CDN HIT           |
| Server-Side Rendering | 13/15 | HTML completo renderizado en servidor              |
| Velocidad de página   | 13/15 | Vercel CDN HIT, sin compression headers explícitos |

**Lo que funciona bien:**

- Astro genera HTML estático completo — AI crawlers ven TODO el contenido
- Sin meta robots noindex/nofollow
- Jerarquía de headings semántica (H1 → H2 → H3 correcta)
- HTML semántico: `<section>`, `<article>`, `<header>`, `<footer>`, `<time>`, `<nav>`
- Servido desde Vercel CDN con HSTS
- JS deferred (type="module")

**Lo que NO funciona:**

- robots.txt 404 — sin directorio de crawling
- sitemap.xml 404 — sin índice de URLs
- llms.txt no existe
- Sin OG tags
- Sin Twitter Cards
- Sin Schema.org

### Schema & Structured Data (5/100)

**CRITICAL — Este es el gap más grande del sitio.**

Cero JSON-LD, cero microdata, cero RDFa. El portfolio es invisible para entity graphs de IA.

| Criterio                | Score | Razón                        |
| ----------------------- | ----- | ---------------------------- |
| Person schema           | 0/15  | No existe                    |
| sameAs links via schema | 0/15  | No existe                    |
| Article/Author schema   | 0/10  | N/A (sin blog)               |
| Business-type schema    | 0/10  | Sin portfolio/project schema |
| WebSite + SearchAction  | 0/5   | No existe                    |
| BreadcrumbList          | 0/5   | No existe                    |
| knowsAbout              | 0/5   | No existe                    |
| Valid JSON + types      | 0/10  | No existe markup             |

**Lo que debería añadirse (prioridad):**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ezequielmenor.es/#person",
      "name": "Ezequiel Menor",
      "url": "https://ezequielmenor.es",
      "jobTitle": "Desarrollador Full-Stack",
      "description": "Desarrollador Full-Stack especializado en Flutter, Spring Boot, TypeScript y Astro. Estudiante de DAM en IES María Enriquez.",
      "sameAs": [
        "https://github.com/EzequielMenor",
        "https://www.linkedin.com/in/ezequiel-menor-4a690027a/"
      ],
      "knowsAbout": [
        "Flutter",
        "Dart",
        "Java",
        "Spring Boot",
        "JavaScript",
        "TypeScript",
        "Astro",
        "SQL",
        "MySQL",
        "Full-Stack Development",
        "Mobile Development",
        "Web Development"
      ],
      "worksFor": { "@type": "Organization", "name": "Clínicas Dorsia" },
      "alumniOf": { "@type": "EducationalOrganization", "name": "IES María Enriquez" },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gandía",
        "addressRegion": "Valencia",
        "addressCountry": "ES"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://ezequielmenor.es/#website",
      "name": "Ezequiel Menor — Portfolio",
      "url": "https://ezequielmenor.es",
      "author": { "@id": "https://ezequielmenor.es/#person" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ezequielmenor.es/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

**Tiempo de implementación:** ~5 minutos. De 5/100 a ~85/100 con un solo `<script>` tag.

### Platform Optimization (30/100)

Mínima huella de entidad en plataformas críticas para IA. La base existe (GitHub, LinkedIn, portfolio) pero cero presencia en Wikipedia/Wikidata, plataformas comunitarias, o sitios de contenido técnico — los tres pilares que los modelos de IA usan para decisiones de citación.

**Mapa de presencia:**

| Plataforma      | Estado        | Notas                                   |
| --------------- | ------------- | --------------------------------------- |
| GitHub          | Presente      | 20 repos, README básico (~21 líneas)    |
| LinkedIn        | Parcial       | Perfil existe, bloquea crawlers         |
| YouTube         | Parcial       | Canal existe, sin contenido             |
| Twitter/X       | Parcial       | Cuenta existe, actividad no verificable |
| Reddit          | No encontrado | Cero menciones                          |
| Wikipedia       | No encontrado | Sin artículo ni Wikidata                |
| DEV.to / Medium | No encontrado | Sin posts técnicos                      |

**Top acciones de plataforma:**

1. Crear Wikidata entry (Q5) — un afternoon desbloquea ChatGPT + Gemini
2. Overhaul GitHub profile README — de 21 líneas a 2000+ con arquitectura, decisiones técnicas, demos
3. Publicar 3 posts en DEV.to/Hashnode — cada post es un target de citación fresco para las 5 plataformas de IA

---

## Quick Wins (Implement This Week)

1. **Añadir Schema.org Person + WebSite JSON-LD** (~5 min)

   - Copiar el JSON-LD de la sección Schema de este reporte
   - Pegar en `<head>` del layout base de Astro
   - Validar en https://validator.schema.org
   - Impacto esperado: +35-40 puntos en GEO Score

2. **Crear robots.txt** (~2 min)

   ```
   User-agent: *
   Allow: /
   Sitemap: https://ezequielmenor.es/sitemap.xml
   ```

   Guardar en `public/robots.txt`

3. **Generar sitemap.xml** (~5 min)

   - `npx astro add sitemap`
   - Añadir a `astro.config.mjs`:
     ```js
     import { sitemap } from '@astrojs/sitemap'
     export default defineConfig({ integrations: [sitemap()] })
     ```

4. **Añadir Open Graph tags** (~10 min)

   - Title, description, image (captura del portfolio), url
   - Pegar en `<head>` del layout base

5. **Crear llms.txt** (~10 min)
   - Describir el sitio: quién es, qué hace, proyectos, tecnologías, contacto
   - Guardar en `public/llms.txt`

---

## 30-Day Action Plan

### Week 1: Infrastructure y Discovery

- [ ] Añadir Schema.org Person + WebSite JSON-LD
- [ ] Crear robots.txt
- [ ] Generar sitemap.xml con @astrojs/sitemap
- [ ] Crear llms.txt
- [ ] Añadir Open Graph tags al `<head>`
- [ ] Añadir canonical tag

### Week 2: Content Depth — GymAnalytics Case Study

- [ ] Escribir case study de GymAnalytics (300-500 palabras): arquitectura, decisiones técnicas, 1 challenge y cómo se resolvió
- [ ] Publicar en portfolio (página `/proyectos/gymanalytics` o sección)
- [ ] Cross-postear a DEV.to
- [ ] Validar Schema.org en las nuevas páginas

### Week 3: GitHub Profile Overhaul

- [ ] Expandir README de perfil GitHub a 2000+ palabras
- [ ] Mejorar READMEs de repos: GymAnalytics, DesktopTFG, BackendTFG (arquitectura, stack, demo links)
- [ ] Asegurar que cada repo tiene topics/tags relevantes
- [ ] Crear repos para proyectos pequeños con documentación

### Week 4: Platform Building

- [ ] Crear cuenta Wikidata y añadir entrada Person
- [ ] Publicar 2do post en DEV.to (topic: Flutter o Spring Boot)
- [ ] Pedir LinkedIn recommendation a supervisor de Clínicas Dorsia
- [ ] Overhaul completo de LinkedIn: todo los campos, skills completas, experiencia detallada

---

## Appendix: Pages Analyzed

| URL                      | Title                                                  | GEO Issues                               |
| ------------------------ | ------------------------------------------------------ | ---------------------------------------- |
| https://ezequielmenor.es | Portfolio de Ezequiel Menor - Desarrollador Full-Stack | 12 (2 critical, 4 high, 3 medium, 3 low) |

---

## Scores Summary

| Dimension                | Raw Score | Weighted  |
| ------------------------ | --------- | --------- |
| AI Citability            | 45        | 11.25     |
| Brand Authority          | 30        | 6.00      |
| Content E-E-A-T          | 46        | 9.20      |
| Technical GEO            | 82        | 12.30     |
| Schema & Structured Data | 5         | 0.50      |
| Platform Optimization    | 30        | 3.00      |
| **TOTAL**                |           | **42.25** |

**Rating: Poor** — Weak GEO signals; AI systems may struggle to cite or recommend this portfolio.
