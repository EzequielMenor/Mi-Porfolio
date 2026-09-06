import type { Dict } from './index'

export const es: Dict = {
  sections: {
    about: 'Sobre mí',
    education: 'Educación',
    experience: 'Experiencia laboral',
    otherWork: 'Otros trabajos',
    projects: 'Proyectos',
    skills: 'Habilidades',
    workflow: 'Workflow',
  },
  hero: {
    bio: 'Construyo productos full-stack con TypeScript, React Native, Java/Spring Boot e inteligencia artificial.',
    downloadCV: 'Descargar CV',
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
    coreosTag: 'Mobile · IA · Local-first',
    aiesTag: 'Harness IA · En desarrollo activo',
    stackdTag: 'Co-fundador / Agencia',
    tfgTag: 'TFG Full-Stack',
    otherProjects: 'Otros Proyectos',
    visitWebsite: 'Sitio web →',
    visitCoreos: 'Visitar CoreOS →',
    repoSource: 'Ver código →',
    repoMobile: 'App móvil →',
    repoDesktop: 'App escritorio →',
    repoBackend: 'Backend →',
  },
  workflow: {
    kicker: 'Engineering Workflow',
    title: 'Cómo construyo software',
    intro:
      'No solo importa qué se construye: importa cómo se diseña, se implementa y se verifica.',
    claim:
      'Cada cambio entra por un ticket y sale por un PR verificado. La IA acelera el trabajo; el criterio, la revisión y la validación siguen siendo míos.',
    flowLabel: 'El flujo, en una línea',
    phases: [
      { name: 'Definir', question: '¿Qué vamos a hacer y hasta dónde?' },
      { name: 'Construir', question: '¿Cómo se hace sin romper nada?' },
      { name: 'Integrar', question: '¿Por qué esto puede entrar en main?' },
    ],
    stages: [
      { name: 'Idea', desc: 'Captura libre, sin compromiso de alcance.' },
      {
        name: 'Ticket',
        desc: 'Acoto alcance y criterio de aceptación. Sin ticket no hay rama.',
      },
      {
        name: 'Plan',
        desc: 'Decisiones y enfoque antes de implementar; si hay arquitectura, queda en un ADR.',
      },
      {
        name: 'Branch',
        desc: 'Una rama por ticket desde main: cambios aislados y trazables.',
      },
      {
        name: 'Implementación',
        desc: 'Desarrollo incremental y clean code, con commits semánticos.',
      },
      {
        name: 'Tests',
        desc: 'Tests, typecheck, lint y build según el proyecto. Sin comprobación ejecutada no cuenta.',
      },
      {
        name: 'PR',
        desc: 'El PR explica problema, solución y qué se verificó. Revisión antes de integrar.',
      },
      {
        name: 'Review',
        desc: 'Revisión asistida por IA como capa extra + mi revisión; cada comentario se resuelve o se justifica.',
      },
      {
        name: 'Verificación',
        desc: 'Checks en verde sobre el código final: criterios de terminado y sin regresiones.',
      },
      {
        name: 'Merge',
        desc: 'Integro en main solo cuando todo pasa, y cierro el ticket.',
      },
    ],
    aiTitle: 'IA con criterio',
    aiIntro:
      'Uso agentes de IA como un actor más del flujo: reciben alcance acotado, entregan contra criterios explícitos y su salida pasa por las mismas verificaciones que la mía.',
    delegateTitle: 'Qué delego',
    dontDelegateTitle: 'Qué no delego',
    delegate: [
      'Explorar código y localizar contexto',
      'Borradores de plan y de spec',
      'Implementación de unidades acotadas',
      'Generación y ampliación de tests',
      'Revisión asistida por IA como capa extra',
      'Refactor mecánico y documentación',
    ],
    dontDelegate: [
      'Definir alcance y criterio de aceptación',
      'Decisiones de arquitectura (van a un ADR, las firmo yo)',
      'Aprobar un merge',
      'Decidir si el comportamiento es correcto',
      'Responder por el cambio ante un tercero',
      'Interpretar un requisito ambiguo del cliente',
    ],
    rulesTitle: 'Reglas duras',
    rules: [
      'Sin ticket no hay rama: ningún agente codea sobre una idea sin acotar.',
      'Quien implementa no verifica: la verificación es un rol separado.',
      'La salida de un agente es un borrador hasta que pasa tests, typecheck y revisión.',
    ],
    evidenceTitle: 'Dónde verlo',
    evidenceIntro:
      'Prácticas verificadas hoy en repos públicos. El workflow completo se está adoptando de forma progresiva: todo lo que se enlaza aquí existe y se puede comprobar.',
    example: {
      title: 'Ejemplo real · AIES — PR #1',
      sentence:
        'Demuestra el flujo integrado: una tarea acotada del roadmap entra por rama propia y sale mergeada a main con la verificación documentada en el PR.',
      steps: [
        {
          label: 'Ticket',
          text: 'Tareas T0+T1 del roadmap público, con criterios de salida por tarea.',
          link: {
            label: 'ROADMAP-TUI.md',
            url: 'https://github.com/EzequielMenor/AIES/blob/main/ROADMAP-TUI.md',
          },
        },
        {
          label: 'Branch',
          text: 'feat/TUI desde main: una rama por línea de trabajo.',
          link: { label: 'Ramas', url: 'https://github.com/EzequielMenor/AIES/branches' },
        },
        {
          label: 'PR',
          text: '#1 con problema, solución y plan de pruebas marcado.',
          link: { label: 'PR #1', url: 'https://github.com/EzequielMenor/AIES/pull/1' },
        },
        {
          label: 'Checks',
          text: 'pnpm test + tsc --noEmit en verde; obligatorios antes de abrir el PR.',
          link: {
            label: 'CONTRIBUTING §5',
            url: 'https://github.com/EzequielMenor/AIES/blob/main/CONTRIBUTING.md#5-flujo-de-trabajo-para-pull-requests-prs',
          },
        },
        {
          label: 'Merge',
          text: 'Mergeado a main el 23 ago 2026. La arquitectura queda en 14 ADRs.',
          link: {
            label: 'ADRs',
            url: 'https://github.com/EzequielMenor/AIES/tree/main/05-Decisions',
          },
        },
      ],
    },
    evidence: [
      {
        name: 'AIES',
        text: 'Flujo integrado: ramas feat/*, PRs #1–#3 mergeados, typecheck + test obligatorios antes de integrar, 14 ADRs y roadmap con criterios de salida.',
        links: [
          { label: 'PR #1', url: 'https://github.com/EzequielMenor/AIES/pull/1' },
          {
            label: 'ADRs',
            url: 'https://github.com/EzequielMenor/AIES/tree/main/05-Decisions',
          },
          {
            label: 'CONTRIBUTING',
            url: 'https://github.com/EzequielMenor/AIES/blob/main/CONTRIBUTING.md',
          },
        ],
      },
      {
        name: 'CoreOS',
        text: 'Fase Definir: AGENTS.md con límites explícitos para agentes, TypeScript strict y ESLint. Hoy trabaja en main sin PRs — la evidencia es la definición previa, no el PR-gating.',
        links: [
          {
            label: 'AGENTS.md',
            url: 'https://github.com/EzequielMenor/CoreOS/blob/main/AGENTS.md',
          },
          {
            label: 'tsconfig (strict)',
            url: 'https://github.com/EzequielMenor/CoreOS/blob/main/tsconfig.json',
          },
          {
            label: 'ESLint',
            url: 'https://github.com/EzequielMenor/CoreOS/blob/main/eslint.config.js',
          },
        ],
      },
    ],
    closing: 'Esto es cómo lo construyo. Aquí está lo que construí.',
    closingLink: 'Ver proyectos',
    toolsNote: 'Tickets en Linear · Ramas y PRs en GitHub',
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
      `Portfolio de ${name} — ${label} especializado en aplicaciones móviles, backend e IA aplicada`,
  },
  footer: {
    builtWith: 'Built with',
  },
}
