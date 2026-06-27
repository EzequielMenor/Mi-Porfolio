# Stackd Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Añadir presencia de Stackd en el portfolio personal de Ezequiel — como entrada en Experience y como proyecto destacado con link a stackd.codes.

**Architecture:** Cambio directo en cv.json (un solo archivo de datos). El portfolio es Astro + JSON Resume, así que no hay lógica extra — solo datos.

**Tech Stack:** cv.json (JSON Resume schema)

---

## File Map

- `cv.json` — único archivo a modificar
  - Añadir entrada en `work` para Stackd
  - Añadir entrada en `projects` para Stackd

---

## Tasks

### Task 1: Añadir Stackd como entrada en Work

**Files:**
- Modify: `cv.json` — inserting new work entry in `work` array

- [ ] **Step 1: Añadir entrada de trabajo de Stackd en cv.json**

Localizar el array `work` en cv.json (línea 35). Insertar la siguiente entrada como primera (antes de Clínicas Dorsia):

```json
{
  "name": "Stackd",
  "position": "Co-fundador y desarrollador",
  "url": "https://www.stackd.codes",
  "startDate": "2026-01-01",
  "endDate": null,
  "summary": "Agencia de software bersama primos. Construimos webs, apps, SaaS, automatización con IA y mantenimiento. Tres personas, un mismo proyecto cada vez.",
  "highlights": [
    "Webs, apps, SaaS, automatización con IA",
    "Proyectos reales en producción: SMASH, NOOK, Volea.io, Getflow",
    "Co-fundador junto a Arnau y Mateo"
  ]
}
```

- [ ] **Step 2: Commit**

```bash
git add cv.json && git commit -m "feat: add Stackd as co-founder work experience"
```

---

### Task 2: Añadir Stackd como proyecto destacado

**Files:**
- Modify: `cv.json` — inserting new project entry in `projects` array

- [ ] **Step 1: Añadir proyecto Stackd en cv.json**

Localizar el array `projects` en cv.json (línea 184). Insertar la siguiente entrada como primera (antes de GymAnalytics):

```json
{
  "name": "Stackd",
  "isActive": true,
  "featured": true,
  "description": "Agencia de software que construimos tres primos. webs, apps, SaaS, automatización con IA y mantenimiento — con el mismo equipo de principio a fin.",
  "highlights": [
    "Co-fundadores: Arnau, Ezequiel y Mateo",
    "Proyectos: SMASH, NOOK, Volea.io, Getflow",
    "stackd.codes"
  ],
  "url": "https://www.stackd.codes"
}
```

- [ ] **Step 2: Commit**

```bash
git add cv.json && git commit -m "feat: add Stackd as featured project with link to stackd.codes"
```

---

## Verification

Después de ambos commits, verificar que:
1. `npm run dev` levanta sin errores
2. La sección Experience muestra Stackd como primera entrada
3. La sección Projects muestra Stackd como proyecto destacado

---

## Post-Implementation

- Astro 7.0 upgrade queda pendiente como PR separado si se desea
