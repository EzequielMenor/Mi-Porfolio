import type { Dict } from './index'

export const es: Dict = {
  sections: {
    about: 'Sobre mí',
    education: 'Educación',
    experience: 'Experiencia laboral',
    otherWork: 'Otros trabajos',
    projects: 'Proyectos',
    skills: 'Habilidades',
  },
  hero: {
    email: 'Email',
    phone: 'Teléfono',
    tooltips: {
      email: (name) => `Enviar un correo a ${name}`,
      phone: (name) => `Llamar a ${name}`,
      profile: (name, network) => `Visitar perfil de ${name} en ${network}`,
    },
  },
  experience: {
    present: 'Actual',
  },
  education: {
    present: 'Actual',
    gpa: (score) => `Nota media: ${score}`,
  },
  projects: {
    featured: 'Destacado',
    repoMobile: 'App móvil →',
    repoDesktop: 'App escritorio →',
    repoBackend: 'Backend →',
  },
  keyboard: {
    hint: 'Pulsa Cmd+K para abrir la paleta de comandos.',
    placeholder: 'Buscar comando',
    print: 'Imprimir',
    actionsSection: 'Acciones',
    visitSocial: (network) => `Visitar ${network}`,
    socialSection: 'Social',
  },
  layout: {
    themeToggle: 'Cambiar tema',
    themeToggleTitle: 'Cambiar entre modo claro y oscuro',
    switcherEn: 'EN',
    switcherEs: 'ES',
    pageTitle: (name, label) => `Portfolio de ${name} - ${label}`,
    metaDescription: (name, label) =>
      `Portfolio de ${name} — ${label} especializado en webs, apps y agentes de IA`,
  },
  footer: {
    builtWith: 'Built with',
  },
}
