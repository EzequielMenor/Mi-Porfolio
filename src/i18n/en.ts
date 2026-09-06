import type { Dict } from './index'

export const en: Dict = {
  sections: {
    about: 'About',
    education: 'Education',
    experience: 'Work experience',
    otherWork: 'Other work',
    projects: 'Projects',
    skills: 'Skills',
    workflow: 'Workflow',
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
    caseStudy: 'Case study →',
  },
  caseStudy: {
    kicker: 'Case study',
    back: '← Projects',
    problem: 'The problem',
    decisions: 'Key technical decisions',
    built: 'What I actually built',
    tradeoff: 'Trade-off',
    state: 'Current state',
    stack: 'Stack',
    links: 'Links',
    bridge: 'Engineering Workflow →',
  },
  workflow: {
    kicker: 'Engineering Workflow',
    title: 'How I build software',
    intro:
      'What gets built matters — but so does how it is designed, implemented and verified.',
    claim:
      'Every change starts as a ticket and lands as a verified PR. AI accelerates the work — judgement, review and validation stay mine.',
    flowLabel: 'The flow, in one line',
    phases: [
      { name: 'Define', question: 'What are we doing, and how far?' },
      { name: 'Build', question: 'How is it done without breaking anything?' },
      { name: 'Integrate', question: 'Why can this land on main?' },
    ],
    stages: [
      { name: 'Idea', desc: 'Free capture, no scope commitment.' },
      {
        name: 'Ticket',
        desc: 'I set scope and acceptance criteria. No ticket, no branch.',
      },
      {
        name: 'Plan',
        desc: 'Decisions and approach before implementing; architecture goes to an ADR.',
      },
      {
        name: 'Branch',
        desc: 'One branch per ticket from main: isolated, traceable changes.',
      },
      {
        name: 'Implementation',
        desc: 'Incremental development and clean code, with semantic commits.',
      },
      {
        name: 'Tests',
        desc: 'Tests, typecheck, lint and build as the project requires. No executed check, no done.',
      },
      {
        name: 'PR',
        desc: 'The PR explains problem, solution and what was verified. Review before integrating.',
      },
      {
        name: 'Review',
        desc: 'AI-assisted review as an extra layer plus my own; every comment is resolved or justified.',
      },
      {
        name: 'Verification',
        desc: 'Green checks on the final code: acceptance criteria met, no regressions.',
      },
      {
        name: 'Merge',
        desc: 'I integrate into main only when everything passes, and close the ticket.',
      },
    ],
    aiTitle: 'AI, with judgement',
    aiIntro:
      'I use AI agents as one more actor in the flow: they get a bounded scope, deliver against explicit criteria, and their output goes through the same verifications as mine.',
    delegateTitle: 'What I delegate',
    dontDelegateTitle: "What I don't delegate",
    delegate: [
      'Exploring code and locating context',
      'Draft plans and specs',
      'Implementing bounded units',
      'Generating and extending tests',
      'AI-assisted review as an extra layer',
      'Mechanical refactors and documentation',
    ],
    dontDelegate: [
      'Defining scope and acceptance criteria',
      'Architecture decisions (they go to an ADR, signed by me)',
      'Approving a merge',
      'Deciding whether behaviour is correct',
      'Answering for the change to a third party',
      'Interpreting an ambiguous client requirement',
    ],
    rulesTitle: 'Hard rules',
    rules: [
      'No ticket, no branch: no agent codes on an unbounded idea.',
      'Whoever implements does not verify: verification is a separate role.',
      "An agent's output is a draft until it passes tests, typecheck and review.",
    ],
    evidenceTitle: 'Where to see it',
    evidenceIntro:
      'Practices verified today in public repos. The full workflow is being adopted progressively: everything linked here exists and can be checked.',
    example: {
      title: 'Real example · AIES — PR #1',
      sentence:
        'Shows the integrated flow: a bounded roadmap task enters through its own branch and lands merged on main with the verification documented in the PR.',
      steps: [
        {
          label: 'Ticket',
          text: 'Tasks T0+T1 from the public roadmap, each with exit criteria.',
          link: {
            label: 'ROADMAP-TUI.md',
            url: 'https://github.com/EzequielMenor/AIES/blob/main/ROADMAP-TUI.md',
          },
        },
        {
          label: 'Branch',
          text: 'feat/TUI from main: one branch per line of work.',
          link: {
            label: 'Branches',
            url: 'https://github.com/EzequielMenor/AIES/branches',
          },
        },
        {
          label: 'PR',
          text: '#1 with problem, solution and a checked test plan.',
          link: { label: 'PR #1', url: 'https://github.com/EzequielMenor/AIES/pull/1' },
        },
        {
          label: 'Checks',
          text: 'pnpm test + tsc --noEmit in green; mandatory before opening the PR.',
          link: {
            label: 'CONTRIBUTING §5',
            url: 'https://github.com/EzequielMenor/AIES/blob/main/CONTRIBUTING.md#5-flujo-de-trabajo-para-pull-requests-prs',
          },
        },
        {
          label: 'Merge',
          text: 'Merged into main on 23 Aug 2026. Architecture decisions live in 14 ADRs.',
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
        text: 'Integrated flow: feat/* branches, PRs #1–#3 merged, mandatory typecheck + test before integrating, 14 ADRs and a roadmap with exit criteria.',
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
        text: 'Define phase: AGENTS.md with explicit limits for agents, strict TypeScript and ESLint. It works on main without PRs today — the evidence is upfront definition, not PR-gating.',
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
    closing: 'This is how I build it. Here is what I built.',
    closingLink: 'See projects',
    toolsNote: 'Tickets in Linear · Branches and PRs on GitHub',
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
