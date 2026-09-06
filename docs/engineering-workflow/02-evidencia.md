# Engineering Workflow — Evidencia real (canónica)

> **Estado:** verificada y publicada · **Fecha de verificación:** 2026-09-06 (con `gh` contra los repos públicos)
> **Ticket:** Añadir evidencia real del workflow con CoreOS y AIES
> **Coordinación con EZE-259:** los case studies de CoreOS y AIES deben enlazar **estos mismos materiales** (esta lista es la fuente única). No duplicar capturas ni re-verificar claims: citar URL + fecha de verificación.

---

## 1. Ejemplo principal — AIES · PR #1 (flujo integrado)

Cadena publicada en la sección `#engineering-workflow` del portfolio:
**Ticket → Branch → PR → Checks → Merge**

| Paso   | Hecho verificado                                                                                                                | Enlace                                                                             |
| ------ | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Ticket | Tareas T0+T1 del roadmap público, con criterios de salida por tarea                                                             | [ROADMAP-TUI.md](https://github.com/EzequielMenor/AIES/blob/main/ROADMAP-TUI.md)   |
| Branch | `feat/TUI` desde `main`; una rama por línea de trabajo                                                                          | [Ramas](https://github.com/EzequielMenor/AIES/branches)                            |
| PR     | PR #1 `feat(tui): visibilizar eventos del bucle y añadir reanudación (T0+T1)`, con problema, solución y plan de pruebas marcado | [PR #1](https://github.com/EzequielMenor/AIES/pull/1)                              |
| Checks | `pnpm test` + `tsc --noEmit` en verde; obligatorios antes de abrir el PR (§3 y §5)                                              | [CONTRIBUTING.md](https://github.com/EzequielMenor/AIES/blob/main/CONTRIBUTING.md) |
| Merge  | Mergeado a `main` el 2026-08-23. Decisiones de arquitectura en 14 ADRs                                                          | [05-Decisions](https://github.com/EzequielMenor/AIES/tree/main/05-Decisions)       |

**Frase que acompaña al ejemplo (ES):** «Demuestra el flujo integrado: una tarea acotada del
roadmap entra por rama propia y sale mergeada a main con la verificación documentada en el PR.»

Apoyo adicional verificado: PRs #2 y #3 también mergeados a `main`; #4 y #5 abiertos en revisión.

## 2. Ejemplo secundario — CoreOS (solo fase Definir)

CoreOS trabaja hoy en `main` **sin PRs ni CI** (declarado en su propio `AGENTS.md`). Se usa
exclusivamente como evidencia de **definición previa**, nunca de PR-gating.

| Hecho verificado                                                   | Enlace                                                                                 |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| `AGENTS.md` con stack versionado y límites explícitos para agentes | [AGENTS.md](https://github.com/EzequielMenor/CoreOS/blob/main/AGENTS.md)               |
| TypeScript strict (`"strict": true`)                               | [tsconfig.json](https://github.com/EzequielMenor/CoreOS/blob/main/tsconfig.json)       |
| ESLint configurado                                                 | [eslint.config.js](https://github.com/EzequielMenor/CoreOS/blob/main/eslint.config.js) |

## 3. Reglas de uso de esta evidencia

1. **Distinguir estado actual de adopción:** la sección dice explícitamente «prácticas
   verificadas hoy… el workflow completo se está adoptando de forma progresiva».
2. **Claims prohibidos** (heredados de `01-mensaje.md` §7): «CI en cada PR», «100% de cambios
   con PR», métricas de productividad sin medición.
3. **Nada privado:** el tracker Linear no se enlaza; «ticket» se evidencia con el roadmap
   público de AIES.
4. **Re-verificación:** si un case study se publica >3 meses después de la fecha de arriba,
   comprobar que los enlaces siguen vivos antes de citar.
