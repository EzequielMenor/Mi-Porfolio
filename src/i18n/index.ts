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
  }
  hero: {
    bio: string
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
    repoMobile: string
    repoDesktop: string
    repoBackend: string
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
