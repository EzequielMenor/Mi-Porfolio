import { es } from './es'
import { en } from './en'

export type Lang = 'es' | 'en'

export interface Dict {
  sections: {
    about: string
    education: string
    experience: string
    otherWork: string
    projects: string
    skills: string
    workflow: string
  }
  hero: {
    bio: string
    downloadCV: string
    email: string
    phone: string
    tooltips: {
      email: (name: string) => string
      phone: (name: string) => string
      profile: (name: string, network: string) => string
    }
  }
  experience: {
    present: string
  }
  education: {
    present: string
    gpa: (score: string | number) => string
  }
  projects: {
    featured: string
    coreosTag: string
    aiesTag: string
    stackdTag: string
    tfgTag: string
    otherProjects: string
    visitWebsite: string
    visitCoreos: string
    repoSource: string
    repoMobile: string
    repoDesktop: string
    repoBackend: string
    caseStudy: string
  }
  caseStudy: {
    kicker: string
    back: string
    problem: string
    decisions: string
    built: string
    tradeoff: string
    state: string
    stack: string
    links: string
    bridge: string
  }
  workflow: {
    kicker: string
    title: string
    intro: string
    claim: string
    flowLabel: string
    phases: Array<{ name: string; question: string }>
    stages: Array<{ name: string; desc: string }>
    aiTitle: string
    aiIntro: string
    delegateTitle: string
    dontDelegateTitle: string
    delegate: string[]
    dontDelegate: string[]
    rulesTitle: string
    rules: string[]
    evidenceTitle: string
    evidenceIntro: string
    example: {
      title: string
      sentence: string
      steps: Array<{ label: string; text: string; link: { label: string; url: string } }>
    }
    evidence: Array<{
      name: string
      text: string
      links: Array<{ label: string; url: string }>
    }>
    closing: string
    closingLink: string
    toolsNote: string
  }
  keyboard: {
    hint: string
    placeholder: string
    print: string
    actionsSection: string
    visitSocial: (network: string) => string
    socialSection: string
  }
  layout: {
    themeToggle: string
    themeToggleTitle: string
    switcherEn: string
    switcherEs: string
    pageTitle: (name: string, label: string) => string
    metaDescription: (name: string, label: string) => string
  }
  footer: {
    builtWith: string
  }
}

const dicts: Record<Lang, Dict> = { es, en }

export function getDict(lang: Lang): Dict {
  return dicts[lang] ?? es
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/')
  if (segment === 'en') return 'en'
  return 'es'
}
