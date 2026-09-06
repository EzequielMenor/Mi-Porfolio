import type { Lang } from '@/i18n'

export interface CaseStudyContent {
  name: string
  tagline: string
  status: string
  meta: { title: string; description: string }
  problem: string
  decisions: Array<{ title: string; text: string }>
  built: string[]
  tradeoff: string
  state: string
  stack: string[]
  links: Array<{ label: string; url: string }>
  screenshots?: Array<{ src: string; alt: string; caption: string }>
  workflowNote: string
}

export const caseStudySlugs = ['coreos', 'aies'] as const
export type CaseStudySlug = (typeof caseStudySlugs)[number]

const coreosShots = [
  {
    src: 'https://raw.githubusercontent.com/EzequielMenor/CoreOS/main/assets/screenshots/Today.png',
    alt: 'Pantalla Today de CoreOS',
    caption: 'Today — tareas pendientes y capturas sin clasificar.',
  },
  {
    src: 'https://raw.githubusercontent.com/EzequielMenor/CoreOS/main/assets/screenshots/Capture.png',
    alt: 'Pantalla Capture de CoreOS',
    caption: 'Capture — un único campo de texto libre.',
  },
  {
    src: 'https://raw.githubusercontent.com/EzequielMenor/CoreOS/main/assets/screenshots/Biblioteca.png',
    alt: 'Pantalla Library de CoreOS',
    caption: 'Library — notas por recencia con búsqueda full-text.',
  },
]

const coreosShotsEn = coreosShots.map((s, i) => ({
  ...s,
  alt: ['CoreOS Today screen', 'CoreOS Capture screen', 'CoreOS Library screen'][i],
  caption: [
    'Today — pending tasks and unclassified captures.',
    'Capture — a single free-text field.',
    'Library — notes by recency with full-text search.',
  ][i],
}))

const es = {
  coreos: {
    name: 'CoreOS',
    tagline: 'Capture first. Organize later.',
    status: 'v0.1.0 · V1 personal · En desarrollo activo',
    meta: {
      title: 'CoreOS — Case study · Ezequiel Menor',
      description:
        'Case study de CoreOS: second brain local-first que captura texto libre y lo organiza con IA. Problema, decisiones técnicas, trade-offs y estado real.',
    },
    problem:
      'La mayoría de apps de notas y tareas te obligan a decidir dónde va algo antes de guardarlo: elige cuaderno, proyecto, lista, etiqueta. Ese coste de decisión es lo que frena la mayoría de capturas. CoreOS lo elimina: escribes texto libre, se persiste en el dispositivo y la IA lo organiza después — nunca antes, nunca a costa del original.',
    decisions: [
      {
        title: 'Persistir antes de clasificar',
        text: 'El insert en SQLite ocurre antes de cualquier llamada a la IA. Si el modelo falla, la captura queda pending y se reintenta desde Today: el texto crudo nunca se pierde.',
      },
      {
        title: 'raw_text es canónico',
        text: 'El LLM solo emite metadatos (tipo, título sugerido, tags): nunca reescribe, resume ni parte el texto del usuario. En notas, el original se guarda verbatim.',
      },
      {
        title: 'Local-first sin backend',
        text: 'Sin servidor, sin cuentas, sin sync en la nube. SQLite vive en el dispositivo y las API keys en expo-secure-store (iOS Keychain / Android EncryptedSharedPreferences).',
      },
      {
        title: 'Búsqueda real: FTS5',
        text: 'Tabla virtual notes_fts con tokenizer porter unicode61 y ranking bm25, sincronizada por triggers en INSERT/UPDATE/DELETE.',
      },
    ],
    built: [
      'Una V1 personal con tres pestañas: Today (tareas con overdue-first y capturas pendientes con reintento), Capture (un único campo de texto) y Library (notas agrupadas por recencia con búsqueda full-text).',
      'Un clasificador asíncrono que despacha capturas a cinco tipos (nota, gasto, tarea, hábito, sueño), con schema forzado en cliente y lock optimista en la misma transacción.',
      'Captura desde fuera de la app: share sheet de iOS y deeplink coreos://capture.',
      'Editor Markdown con autosave, pin, soft-delete con undo y normalización de fechas en texto libre (hoy, mañana, d/m/y, ISO).',
      'Pipeline con invariantes documentadas: procesado secuencial, funciones exportadas que nunca lanzan excepciones y mutex contra lotes concurrentes.',
    ],
    tradeoff:
      'Datos sin UI (por ahora). El clasificador ya escribe las tablas de gastos, hábitos y sueño, pero sus pantallas de gestión quedan fuera de la V1 a propósito: prefiero capturar el dato estructurado hoy y diseñar la UI después, antes que retrasar el pipeline central. El coste es honesto: hay datos que aún no se pueden consultar desde la app.',
    state:
      'v0.1.0 · V1 personal en desarrollo activo. No es un producto comercial. Todavía no hay suite de tests automatizada: la calidad se apoya en TypeScript strict, ESLint y typecheck antes de cada cambio.',
    stack: [
      'Expo SDK 57',
      'React Native 0.86',
      'TypeScript (strict)',
      'expo-router',
      'Zustand',
      'expo-sqlite + FTS5',
      'expo-secure-store',
      'Reanimated 4',
      'LLM: endpoint compatible OpenAI',
    ],
    links: [
      { label: 'Web', url: 'https://coreos.ezequielmenor.es' },
      { label: 'Repositorio', url: 'https://github.com/EzequielMenor/CoreOS' },
      {
        label: 'AGENTS.md',
        url: 'https://github.com/EzequielMenor/CoreOS/blob/main/AGENTS.md',
      },
    ],
    screenshots: coreosShots,
    workflowNote:
      'Cómo trabajo aquí: definir antes de construir — AGENTS.md con límites explícitos para agentes, TypeScript strict y ESLint. CoreOS trabaja en main sin PRs; la evidencia es la definición previa.',
  },
  aies: {
    name: 'AIES',
    tagline: 'AIES organiza el trabajo; los agentes realizan el trabajo.',
    status: '0.3.0-beta · En desarrollo activo',
    meta: {
      title: 'AIES — Case study · Ezequiel Menor',
      description:
        'Case study de AIES: harness y runtime que orquesta agentes de IA con contexto aislado y verificación objetiva. Problema, decisiones, trade-offs y estado.',
    },
    problem:
      'Las herramientas que delegan trabajo en agentes de IA caen en dos extremos: un único agente que acumula cientos de miles de tokens de historial — el contexto saturado degrada el razonamiento — o flujos hiper-burocráticos para cambiar una línea. Y encima, verificación falsa: el mismo agente que escribe el bug asume que funciona sin comprobarlo objetivamente.',
    decisions: [
      {
        title: 'Orquestador puro (No-Tools)',
        text: 'No lee archivos, no ejecuta bash ni escribe código. Solo evalúa el estado y decide el siguiente paso en un contrato estructurado y validado (principio P-01).',
      },
      {
        title: 'Subagentes especializados efímeros',
        text: 'Explorer (solo lectura), Implementer (edición mínima) y Verifier (comprobación objetiva). Cada uno recibe únicamente el contexto que necesita, con allowlist estricta de herramientas, y se destruye al terminar su unidad.',
      },
      {
        title: 'Proceso adaptativo proporcional',
        text: 'Tarea trivial: directo a ejecución en 1 turno, cero ceremonia. Tarea compleja: descomposición controlada y re-descomposición dinámica (ADR-006) sin perder el trabajo completado.',
      },
      {
        title: 'Trust boundary con Zod',
        text: 'Toda salida del modelo se valida contra esquemas antes de tocar el sistema. Los fallos de formato no rompen el ciclo; límites estrictos de iteraciones, tiempo y tokens (ADR-005).',
      },
    ],
    built: [
      'Un runtime TypeScript con bucle decidir → ejecutar → observar sobre estado explícito (RuntimeState), sin acumular historial conversacional muerto.',
      'CLI standalone aies con modos oneshot y REPL, estado serializable entre sesiones y recuperación automática ante corrupciones.',
      'TUI nativa de terminal: stream vertical de alto contraste, spinners de línea única, árboles de ejecución y telemetría por turno.',
      'Instalador con actualizaciones seguras: detecta cambios locales dirty o divergentes antes de actualizar y nunca los pisa (backup/stash/abort).',
      'Repositorio documentado por capas: visión, 20 principios, requisitos, arquitectura, comportamiento, 14 ADRs y experimentos reproducibles.',
    ],
    tradeoff:
      'Verificar por separado cuesta turnos — y compra confianza. El agente que implementa no verifica (ADR-002): el runtime gasta turnos extra de orquestación a cambio de veredictos formales PASS/FAIL en vez de «parece que funciona». La apuesta se mide con experimentos propios (06-research): H-01 registra hasta un 40–60% menos de tokens innecesarios en tareas multi-archivo y H-02 confirma overhead mínimo en tareas simples.',
    state:
      '0.3.0-beta · en desarrollo activo. PRs #1–#3 mergeados a main (TUI con bucle visible, actualizaciones seguras del instalador); #4 y #5 en revisión. Roadmap de TUI con tareas T0–T6 y criterios de salida por tarea.',
    stack: [
      'TypeScript',
      'Node.js ≥ 20',
      'pnpm',
      'Zod',
      'TUI nativa de terminal',
      'Providers LLM configurables',
    ],
    links: [
      { label: 'Web', url: 'https://aies.ezequielmenor.es/' },
      { label: 'Repositorio', url: 'https://github.com/EzequielMenor/AIES' },
      {
        label: 'ADRs',
        url: 'https://github.com/EzequielMenor/AIES/tree/main/05-Decisions',
      },
      {
        label: 'Research',
        url: 'https://github.com/EzequielMenor/AIES/tree/main/06-research',
      },
    ],
    workflowNote:
      'El flujo verificado detrás de este proyecto (roadmap → rama → PR → checks → merge) vive en Engineering Workflow, con la evidencia enlazada.',
  },
} satisfies Record<CaseStudySlug, CaseStudyContent>

const en = {
  coreos: {
    ...es.coreos,
    meta: {
      title: 'CoreOS — Case study · Ezequiel Menor',
      description:
        'CoreOS case study: a local-first second brain that captures free-form text and organizes it with AI. Problem, key decisions, trade-offs and real status.',
    },
    problem:
      'Most note and task apps make you decide where something belongs before you can save it: pick a notebook, a project, a list, a tag. That decision cost is what stops most captures from happening. CoreOS removes it: you write free-form text, it is persisted on device, and AI organizes it later — never before, never at the expense of the original.',
    decisions: [
      {
        title: 'Persist before classifying',
        text: 'The SQLite insert happens before any AI call. If the model fails, the capture stays pending and is retryable from Today: raw text is never lost.',
      },
      {
        title: 'raw_text is canonical',
        text: 'The LLM only emits metadata (type, suggested title, tags): it never rewrites, summarizes or splits the user text. Notes store the original verbatim.',
      },
      {
        title: 'Local-first, no backend',
        text: 'No server, no accounts, no cloud sync. SQLite lives on device and API keys stay in expo-secure-store (iOS Keychain / Android EncryptedSharedPreferences).',
      },
      {
        title: 'Real search: FTS5',
        text: 'A notes_fts virtual table with porter unicode61 tokenizer and bm25 ranking, kept in sync by triggers on INSERT/UPDATE/DELETE.',
      },
    ],
    built: [
      'A personal V1 with three tabs: Today (overdue-first tasks plus pending captures with retry), Capture (a single text field) and Library (notes grouped by recency with full-text search).',
      'An async classifier that dispatches captures into five types (note, expense, task, habit, sleep) with client-side schema enforcement and an optimistic lock in the same transaction.',
      'Capture beyond the app: iOS share sheet and coreos://capture deeplink.',
      'Markdown editor with autosave, pin, soft-delete with undo, and date normalization for free-form inputs (today, tomorrow, d/m/y, ISO).',
      'A pipeline with documented invariants: sequential processing, exported functions that never throw, and a mutex against concurrent batches.',
    ],
    tradeoff:
      'Data without UI (for now). The classifier already writes the expense, habit and sleep tables, but their management screens are intentionally out of V1: I prefer capturing structured data today and designing the UI later over delaying the core pipeline. The cost is honest — there is data you cannot browse in the app yet.',
    state:
      'v0.1.0 · personal V1 in active development. Not a commercial product. No automated test suite yet: quality rests on TypeScript strict, ESLint and typecheck before every change.',
    stack: [
      'Expo SDK 57',
      'React Native 0.86',
      'TypeScript (strict)',
      'expo-router',
      'Zustand',
      'expo-sqlite + FTS5',
      'expo-secure-store',
      'Reanimated 4',
      'LLM: OpenAI-compatible endpoint',
    ],
    links: [
      { label: 'Website', url: 'https://coreos.ezequielmenor.es' },
      { label: 'Repository', url: 'https://github.com/EzequielMenor/CoreOS' },
      {
        label: 'AGENTS.md',
        url: 'https://github.com/EzequielMenor/CoreOS/blob/main/AGENTS.md',
      },
    ],
    screenshots: coreosShotsEn,
    workflowNote:
      'How I work here: define before building — AGENTS.md with explicit limits for agents, TypeScript strict and ESLint. CoreOS works on main without PRs; the evidence is the upfront definition.',
  },
  aies: {
    ...es.aies,
    meta: {
      title: 'AIES — Case study · Ezequiel Menor',
      description:
        'AIES case study: a harness and runtime orchestrating AI agents with isolated context and objective verification. Problem, decisions, trade-offs and status.',
    },
    problem:
      'Tools that delegate work to AI agents fall into two extremes: a single agent accumulating hundreds of thousands of tokens of history — saturated context degrades reasoning — or hyper-bureaucratic flows just to change one line. Plus false verification: the same agent that writes the bug assumes it works without objectively checking.',
    decisions: [
      {
        title: 'Pure orchestrator (No-Tools)',
        text: 'It does not read files, run bash or write code. It only evaluates state and decides the next step in a structured, validated contract (principle P-01).',
      },
      {
        title: 'Ephemeral specialized subagents',
        text: 'Explorer (read-only), Implementer (minimal edits) and Verifier (objective checks). Each gets only the context it needs, with a strict tool allowlist, and is destroyed when its unit ends.',
      },
      {
        title: 'Proportional adaptive process',
        text: 'Trivial task: straight to execution in 1 turn, zero ceremony. Complex task: controlled decomposition and dynamic re-decomposition (ADR-006) without losing completed work.',
      },
      {
        title: 'Zod trust boundary',
        text: 'Every model output is validated against schemas before touching the system. Format failures do not break the loop; strict limits on iterations, time and tokens (ADR-005).',
      },
    ],
    built: [
      'A TypeScript runtime with a decide → execute → observe loop over explicit state (RuntimeState), with no dead conversational history.',
      'A standalone aies CLI with oneshot and REPL modes, state serializable between sessions and automatic recovery from corruption.',
      'A terminal-native TUI: high-contrast vertical stream, single-line spinners, execution trees and per-turn telemetry.',
      'An installer with safe updates: it detects local dirty or divergent changes before updating and never overwrites them (backup/stash/abort).',
      'A repo documented by layers: vision, 20 principles, requirements, architecture, behavior, 14 ADRs and reproducible experiments.',
    ],
    tradeoff:
      'Separate verification costs turns — and buys trust. The agent that implements does not verify (ADR-002): the runtime spends extra orchestration turns in exchange for formal PASS/FAIL verdicts instead of "it seems to work". The bet is measured with its own experiments (06-research): H-01 records up to 40–60% less wasted tokens in multi-file tasks and H-02 confirms minimal overhead in simple tasks.',
    state:
      '0.3.0-beta · in active development. PRs #1–#3 merged to main (loop-visible TUI, safe installer updates); #4 and #5 in review. TUI roadmap with tasks T0–T6 and exit criteria per task.',
    stack: [
      'TypeScript',
      'Node.js ≥ 20',
      'pnpm',
      'Zod',
      'Native terminal TUI',
      'Configurable LLM providers',
    ],
    links: [
      { label: 'Website', url: 'https://aies.ezequielmenor.es/' },
      { label: 'Repository', url: 'https://github.com/EzequielMenor/AIES' },
      {
        label: 'ADRs',
        url: 'https://github.com/EzequielMenor/AIES/tree/main/05-Decisions',
      },
      {
        label: 'Research',
        url: 'https://github.com/EzequielMenor/AIES/tree/main/06-research',
      },
    ],
    workflowNote:
      'The verified flow behind this project (roadmap → branch → PR → checks → merge) lives in Engineering Workflow, with linked evidence.',
  },
} satisfies Record<CaseStudySlug, CaseStudyContent>

export const caseStudies: Record<Lang, Record<CaseStudySlug, CaseStudyContent>> = {
  es,
  en,
}
