# Engineering Workflow — Definición del mensaje

> **Estado:** aprobado para implementación · **Fecha:** 2026-09-06
> **Ticket padre:** Añadir Engineering Workflow al portfolio y CV
> **Relación:** complementa EZE-259 (case studies). Los case studies cuentan **qué** se
> construyó; esta iniciativa cuenta **cómo** se construyó.
> **Alcance de este documento:** definir nombre, mensaje, terminología y evidencia antes
> de tocar `cv.json`, `cv.en.json` o cualquier `.astro`.

---

## 1. Nombre definitivo

**`Engineering Workflow`** — nombre canónico único, se usa igual en ES y en EN.

| Superficie   | Texto                                                                |
| ------------ | -------------------------------------------------------------------- |
| Portfolio ES | Kicker `Engineering Workflow` · Título **«Cómo construyo software»** |
| Portfolio EN | Kicker `Engineering Workflow` · Título **«How I build software»**    |
| CV ES / EN   | Bloque titulado `Engineering Workflow` (5 bullets)                   |
| URL / anchor | `#engineering-workflow`                                              |
| Repo (docs)  | `docs/engineering-workflow/`                                         |

**Descartados y por qué:**

- ❌ _Metodologías_ / _Methodology_ — se lee como Scrum/Kanban/XP, que no es lo que
  quiero contar ni lo que aplico formalmente.
- ❌ _AI Workflow_ / _Desarrollo con IA_ — convierte la herramienta en el titular y
  dispara la lectura de «vibe coding».
- ❌ _Development Practices_ — correcto pero genérico; no diferencia y se confunde con
  una lista de buenas intenciones.
- ❌ _Stack de herramientas_ / _Tooling_ — justo lo que el ticket pide evitar.

**Razón de la elección:** «Engineering Workflow» nombra un **proceso con etapas y
artefactos verificables**, es reconocible para un recruiter técnico internacional sin
traducción, y deja la IA en su sitio real: un actor dentro del flujo, no el flujo.

---

## 2. Mensaje central

**Claim ES (1 frase):**

> Cada cambio entra por un ticket y sale por un PR verificado. La IA acelera el trabajo;
> el criterio, la revisión y la validación siguen siendo míos.

**Claim EN:**

> Every change starts as a ticket and lands as a verified PR. AI accelerates the work —
> judgement, review and validation stay mine.

**Promesa operativa (la que sostiene todo lo demás):**

> Nada está «terminado» hasta que pasa tests, typecheck/build y revisión sobre el código
> final.

**Lectura en < 15 segundos para recruiter:** ticket → rama → PR → checks en verde → merge.
Trazable de punta a punta.

---

## 3. El flujo canónico (10 etapas)

Orden fijo, no negociable, idéntico en CV, portfolio y diagrama:

`Idea → Ticket → Plan → Branch → Implementación → Tests → PR → Review → Verificación → Merge`

Agrupación en **3 fases** (es la que usa el diagrama del portfolio):

| Fase          | Etapas                             | Pregunta que responde                 |
| ------------- | ---------------------------------- | ------------------------------------- |
| **Definir**   | Idea · Ticket · Plan               | ¿Qué vamos a hacer y hasta dónde?     |
| **Construir** | Branch · Implementación · Tests    | ¿Cómo se hace sin romper nada?        |
| **Integrar**  | PR · Review · Verificación · Merge | ¿Por qué esto puede entrar en `main`? |

### Detalle por etapa

| #   | Etapa (ES / EN)                 | Qué ocurre                                                                                         | Artefacto que deja                                         | No cuenta como hecho si…                                                      |
| --- | ------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 1   | Idea / Idea                     | Captura libre, sin compromiso de alcance                                                           | Nota o idea registrada                                     | —                                                                             |
| 2   | Ticket / Ticket                 | Se acota el alcance y se escribe el criterio de aceptación                                         | Ticket con criterio de aceptación                          | No hay criterio de aceptación escrito                                         |
| 3   | Plan / Plan                     | Plan técnico corto; si hay decisión de arquitectura, se registra                                   | Plan, spec o ADR                                           | Se decide arquitectura «sobre la marcha» sin dejar rastro                     |
| 4   | Branch / Branch                 | Una rama por ticket, siempre desde `main`                                                          | Rama `feat/*`, `fix/*`, `docs/*`                           | Se trabaja directo sobre `main`                                               |
| 5   | Implementación / Implementation | Cambios pequeños y autocontenidos, commits semánticos, sin dependencias injustificadas             | Commits `feat:` / `fix:` / `refactor:` / `test:` / `docs:` | Un commit mezcla varios tickets o el cambio no se puede explicar en una línea |
| 6   | Tests / Tests                   | Se cubre el comportamiento nuevo y se comprueba que nada se rompió                                 | Tests + `typecheck` + `lint` + `build` en local            | «Funciona en mi máquina» sin comprobación ejecutada                           |
| 7   | PR / Pull Request               | Se abre el PR explicando problema, solución y pruebas                                              | PR con descripción estructurada                            | La descripción no dice qué se verificó                                        |
| 8   | Review / Review                 | Revisión asistida por IA como capa extra + mi revisión; cada comentario se resuelve o se justifica | Comentarios resueltos en el PR                             | Se ignora un comentario de revisión sin respuesta                             |
| 9   | Verificación / Verification     | Comprobaciones en verde **sobre el código final**, no sobre una versión anterior                   | Evidencia de checks (salida de tests/typecheck/build)      | Hay un check en rojo o el código cambió después de verificar                  |
| 10  | Merge / Merge                   | Integración en `main` y cierre del ticket                                                          | Merge + ticket cerrado                                     | El ticket queda abierto sin referencia al cambio                              |

**Regla de trazabilidad:** ticket ↔ rama ↔ commits ↔ PR ↔ verificación. Dado un cambio en
`main`, se puede reconstruir por qué existe.

---

## 4. Dónde entra la IA (marco de uso controlado)

**Frase para portfolio:**

> Uso agentes de IA como un actor más del flujo: reciben alcance acotado, entregan contra
> criterios explícitos y su salida pasa por las mismas verificaciones que la mía.

| Qué delego                           | Qué **no** delego                                       |
| ------------------------------------ | ------------------------------------------------------- |
| Explorar código y localizar contexto | Definir alcance y criterio de aceptación                |
| Borradores de plan y de spec         | Decisiones de arquitectura (van a un ADR, las firmo yo) |
| Implementación de unidades acotadas  | Aprobar un merge                                        |
| Generación y ampliación de tests     | Decidir si el comportamiento es correcto                |
| Revisión automática como capa extra  | Responder por el cambio ante un tercero                 |
| Refactor mecánico y documentación    | Interpretar un requisito ambiguo del cliente            |

**Reglas duras (las que separan esto del vibe coding):**

1. **Sin ticket no hay rama.** Un agente no empieza a escribir código sobre una idea sin
   acotar.
2. **Quien implementa no es quien verifica.** La verificación es un rol separado — es
   literalmente una decisión registrada en AIES ([ADR-002 · Rol de verificación](https://github.com/EzequielMenor/AIES/blob/main/05-Decisions/ADR-002-rol-de-verificacion.md)).
3. **La salida de un agente es un borrador** hasta que pasa tests, typecheck y revisión.
4. **Los límites son explícitos y previos**: presupuesto, alcance, qué no tocar, cuándo
   parar y pedir ayuda.
5. **Sin atribución falsa**: los commits no llevan trailers de autoría de herramientas
   generativas (política documentada en el `CONTRIBUTING.md` de AIES). La responsabilidad
   del cambio es mía.

---

## 5. Mensaje para el CV (5 bullets)

Cada bullet ≤ 1 línea. Mismo contenido y mismo orden en ES y EN.

### ES

- **Ticket-driven:** cada cambio nace de un ticket con alcance y criterio de aceptación, y se cierra con evidencia.
- **Una rama por ticket y PR antes de integrar:** ningún cambio relevante entra directo a `main`.
- **Verificación obligatoria antes de «terminado»:** tests, typecheck/build y lint en verde.
- **Revisión asistida por IA como capa extra de calidad;** la decisión de merge es mía.
- **Cambios pequeños y trazables:** commits semánticos, documentación y ADRs cuando hay decisión de arquitectura.

### EN

- **Ticket-driven:** every change starts from a ticket with scope and acceptance criteria, and closes with evidence.
- **One branch per ticket and a PR before integrating:** no relevant change lands directly on `main`.
- **Verification is mandatory before “done”:** tests, typecheck/build and lint in green.
- **AI-assisted review as an extra quality layer;** the merge decision is mine.
- **Small, traceable changes:** semantic commits, documentation and ADRs whenever an architecture decision is made.

**Versión ultra-corta** (si hace falta una sola línea en el summary o en el hero):

> ES: «Ticket-driven, PR-gated, verificado antes de dar nada por terminado.»
> EN: «Ticket-driven, PR-gated, verified before done.»

---

## 6. Mensaje para el portfolio (estructura expandible)

Orden de lectura de la sección, de arriba abajo:

1. **Kicker + título + claim** — `Engineering Workflow` / «Cómo construyo software» / la
   frase del §2.
2. **Diagrama del flujo** — 10 nodos en 3 fases (Definir · Construir · Integrar).
   Horizontal en desktop, apilado o con scroll en móvil. Sin imágenes externas: SVG/CSS
   inline para mantener el sitio estático y rápido.
3. **3 tarjetas de prácticas** (prácticas, no herramientas):
   - **Ticket-driven** — alcance claro antes de escribir código.
   - **PR-gated** — una rama por ticket, revisión antes de integrar.
   - **Verified before done** — tests, typecheck/build y evidencia antes de cerrar.
     Cada tarjeta: _qué hago · por qué · evidencia enlazada_.
4. **Bloque «IA con criterio»** — dos columnas (delego / no delego) + las reglas duras del
   §4 comprimidas a 3.
5. **Evidencia real** — 2 casos enlazados (§7), con texto de una línea cada uno.
6. **Cierre** — puente a los case studies de EZE-259: _«Esto es cómo lo construyo. Aquí
   está lo que construí.»_

**Regla de contenido:** ninguna herramienta aparece sin su para-qué. Si una herramienta no
sostiene una práctica del §3, no entra en la sección.

---

## 7. Evidencia verificable

Verificado el 2026-09-06 contra los repos públicos con `gh`.

### ✅ Verificado — se puede afirmar y enlazar

| Claim                                          | Evidencia                                                                                                                  | Enlace                                                                                                                        |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Una rama por ticket/cambio                     | Ramas `feat/tool-trace`, `feat/tui-activity-legibility`, `feat/tui-t4-history-truncation-v2`, `feat/TUI`                   | [AIES · branches](https://github.com/EzequielMenor/AIES/branches)                                                             |
| PR antes de integrar a `main`                  | PR #1, #2 y #3 mergeados a `main`; #4 y #5 abiertos en revisión                                                            | [AIES · pulls](https://github.com/EzequielMenor/AIES/pulls?q=is%3Apr) · [PR #3](https://github.com/EzequielMenor/AIES/pull/3) |
| Verificación antes de «terminado»              | `pnpm run typecheck` y `pnpm test` obligatorios antes de abrir PR, documentados en la guía de contribución                 | [AIES · CONTRIBUTING.md §3 y §5](https://github.com/EzequielMenor/AIES/blob/main/CONTRIBUTING.md)                             |
| Commits semánticos y zero-bloat                | Convenciones explícitas: Conventional Commits, prohibición de dependencias injustificadas, sin atribución de IA en commits | [AIES · CONTRIBUTING.md §4](https://github.com/EzequielMenor/AIES/blob/main/CONTRIBUTING.md)                                  |
| Decisiones de arquitectura trazables           | 14+ ADRs numerados y fechados                                                                                              | [AIES · 05-Decisions](https://github.com/EzequielMenor/AIES/tree/main/05-Decisions)                                           |
| Quien implementa no verifica                   | Decisión formal de separar el rol de verificación                                                                          | [ADR-002](https://github.com/EzequielMenor/AIES/blob/main/05-Decisions/ADR-002-rol-de-verificacion.md)                        |
| Planificación con criterios de salida medibles | Roadmap con tareas T0–T6, estado por tarea y criterios de salida                                                           | [AIES · ROADMAP-TUI.md](https://github.com/EzequielMenor/AIES/blob/main/ROADMAP-TUI.md)                                       |
| Agentes con instrucciones y límites explícitos | Guía para agentes: stack versionado, advertencias de API, alcance del proyecto                                             | [CoreOS · AGENTS.md](https://github.com/EzequielMenor/CoreOS/blob/main/AGENTS.md)                                             |
| Calidad de código en CoreOS                    | TypeScript strict + ESLint configurado                                                                                     | [CoreOS · eslint.config.js](https://github.com/EzequielMenor/CoreOS/blob/main/eslint.config.js)                               |

### ⚠️ No verificado — **no** se afirma en público

| Claim tentador                  | Realidad                                                                                       | Decisión                                                                                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| «CI en cada PR»                 | Ninguno de los dos repos tiene GitHub Actions (AIES solo tiene `FUNDING.yml`)                  | **No se menciona CI.** Se dice «verificación local obligatoria antes del PR». Añadir Actions a AIES queda como follow-up opcional.                                    |
| «Todos mis proyectos usan PR»   | CoreOS trabaja en `single branch (main)`, sin CI — está declarado en su propio `AGENTS.md`     | Se matiza: «ningún **cambio relevante** entra directo a `main`». CoreOS se usa como ejemplo de **definición, documentación y límites para agentes**, no de PR-gating. |
| «Tickets en Linear (EZE-###)»   | El tracker es privado, no enlazable                                                            | Se habla de «ticket» como práctica y se enlaza el roadmap público de AIES como evidencia de planificación por tareas.                                                 |
| «Tests en todos los proyectos»  | En AIES hay suite (`pnpm test`) y tests de installer; en CoreOS el peso está en typecheck/lint | Se enuncia «tests, typecheck/build y lint» como práctica de verificación, sin cuantificar cobertura.                                                                  |
| «X% más rápido gracias a la IA» | Sin medición                                                                                   | Prohibido. Ninguna métrica de productividad sin evidencia.                                                                                                            |

### Reparto de ejemplos (los 2 casos del portfolio)

- **AIES** → ejemplo del **flujo completo**: ramas por feature, PRs revisados y mergeados,
  typecheck + tests antes de integrar, ADRs, roadmap con criterios de salida.
- **CoreOS** → ejemplo de **definir antes de construir**: `AGENTS.md` con stack versionado
  y límites explícitos para agentes, TypeScript strict, ESLint, documentación pública
  cuidada.

---

## 8. Glosario — terminología consistente

Obligatoria en CV, portfolio, diagrama y textos EN/ES.

| Concepto                   | ES                               | EN                    | No usar                                                                 |
| -------------------------- | -------------------------------- | --------------------- | ----------------------------------------------------------------------- |
| Unidad de trabajo acotada  | ticket                           | ticket                | «historia de usuario», «tarea» (salvo al citar el roadmap de AIES)      |
| Línea de trabajo aislada   | rama                             | branch                | «fork» (fork es otra cosa)                                              |
| Propuesta de integración   | PR / pull request                | PR / pull request     | «merge request»                                                         |
| Comprobaciones ejecutables | verificación · checks            | verification · checks | «controles de calidad» (vago)                                           |
| Revisión con apoyo de IA   | revisión asistida por IA         | AI-assisted review    | «revisión automática» (implica que no hay humano), «review con ChatGPT» |
| Programa de IA con alcance | agente                           | agent                 | «bot», «IA» a secas cuando es un agente concreto                        |
| Condición de cierre        | criterio de aceptación           | acceptance criteria   | «definición de hecho» mezclado con DoD de Scrum                         |
| Decisión de arquitectura   | ADR (se mantiene la sigla en EN) | ADR                   | «documento de diseño»                                                   |
| Política de dependencias   | zero-bloat                       | zero-bloat            | «código ligero»                                                         |
| Estado final de un cambio  | mergeado                         | merged                | «subido», «pusheado»                                                    |

**Nota de bilingüismo:** en el texto ES se mantienen en inglés, sin traducir: `ticket`,
`branch`, `PR`, `merge`, `checks`, `typecheck`, `build`, `lint`, `clean code`, `ADR`,
`Engineering Workflow`. Traducirlos rompe la recognición del recruiter técnico.

---

## 9. Anti-mensajes (lo que esta sección nunca dice)

- ❌ «Metodologías ágiles», «Scrum», «Kanban», «sprints» — no es el mensaje y no lo aplico
  formalmente.
- ❌ Logos o listas de herramientas sin para-qué.
- ❌ «Desarrollo con IA» como titular.
- ❌ «La IA escribe mi código» / «delego la implementación» sin mencionar verificación.
- ❌ «CI/CD en todos los proyectos».
- ❌ «100% de los cambios pasan por PR».
- ❌ Métricas de productividad no medidas.
- ❌ Cualquier proceso que no esté respaldado por el §7 «Verificado».

---

## 10. Criterios de terminado de este ticket

- [x] Nombre definitivo elegido y justificado: **Engineering Workflow** (§1).
- [x] Claim central en 1 frase, ES y EN (§2).
- [x] Flujo de 10 etapas definido con artefactos y condición de «hecho» (§3).
- [x] Marco de uso de IA: qué se delega, qué no, reglas duras (§4).
- [x] Mensaje resumido en 5 bullets para CV, ES y EN, + versión de 1 línea (§5).
- [x] Estructura expandible a sección visual de portfolio (§6).
- [x] Evidencia real verificada y claims no verificables explícitamente descartados (§7).
- [x] Glosario ES/EN consistente (§8) y anti-mensajes (§9).

---

## 11. Siguientes pasos (tickets derivados)

1. **Sección portfolio** — `src/components/sections/Workflow.astro` + claves en
   `src/i18n/es.ts` y `en.ts` + montaje en `src/pages/index.astro` y `src/pages/en/index.astro`.
2. **Diagrama** — SVG/CSS inline, 10 nodos en 3 fases, responsive, sin dependencias nuevas.
3. **Bloque CV** — añadir la estructura de datos en `cv.json` y `cv.en.json` (propuesta:
   campo `workflow` con `claim` + `bullets[]`, mismo shape en ambos idiomas) y regenerar los
   PDF `CV_Ezequiel_Menor.pdf` / `CV_Ezequiel_Menor_EN.pdf`.
4. **Evidencia enlazada** — 2 tarjetas (AIES, CoreOS) con los enlaces del §7.
5. _(Opcional, fuera de alcance)_ — GitHub Actions en AIES con `typecheck` + `test` para
   poder sostener en el futuro el claim de checks automáticos en cada PR.
