import type { Dict } from './index'

export const en: Dict = {
  sections: {
    about: 'About',
    education: 'Education',
    experience: 'Work experience',
    otherWork: 'Other work',
    projects: 'Projects',
    skills: 'Skills',
  },
  hero: {
    email: 'Email',
    phone: 'Phone',
    tooltips: {
      email: (name) => `Email ${name}`,
      phone: (name) => `Call ${name}`,
      profile: (name, network) => `Visit ${name}'s profile on ${network}`,
    },
  },
  experience: {
    present: 'Present',
  },
  education: {
    present: 'Present',
    gpa: (score) => `GPA: ${score}`,
  },
  projects: {
    featured: 'Featured',
    repoMobile: 'Mobile app →',
    repoDesktop: 'Desktop app →',
    repoBackend: 'Backend →',
  },
  keyboard: {
    hint: 'Press Cmd+K to open the command palette.',
    placeholder: 'Search command',
    print: 'Print',
    actionsSection: 'Actions',
    visitSocial: (network) => `Visit ${network}`,
    socialSection: 'Social',
  },
  layout: {
    themeToggle: 'Toggle theme',
    themeToggleTitle: 'Toggle between light and dark mode',
    switcherEn: 'EN',
    switcherEs: 'ES',
    pageTitle: (name, label) => `${name}'s Portfolio - ${label}`,
    metaDescription: (name, label) =>
      `${name}'s Portfolio — ${label} specialised in websites, apps and AI agents`,
  },
  footer: {
    builtWith: 'Built with',
  },
}
