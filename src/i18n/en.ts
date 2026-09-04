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
    bio: 'I build full-stack products with TypeScript, React Native, Java/Spring Boot and artificial intelligence.',
    downloadCV: 'Download CV',
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
    coreosTag: 'Mobile · AI · Local-first',
    aiesTag: 'AI Agents Harness · In active development',
    stackdTag: 'Co-founder / Agency',
    tfgTag: 'Full-Stack Thesis',
    otherProjects: 'Other Projects',
    visitWebsite: 'Website →',
    visitCoreos: 'Visit CoreOS →',
    repoSource: 'View source →',
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
      `${name}'s Portfolio — ${label} specialised in mobile applications, backend and applied AI`,
  },
  footer: {
    builtWith: 'Built with',
  },
}
