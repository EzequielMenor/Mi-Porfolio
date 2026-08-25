# Spec: Integración de Stackd en Portfolio

**Fecha:** 2026-06-27
**Autor:** Ezequiel Menor

---

## Resumen

Añadir presencia de Stackd (agencia de software de Ezequiel y sus primos) en su portfolio personal de forma sutil pero clara. Objetivo: vender servicios de Stackd y mostrar que es co-fundador.

---

## Enfoque

Mezcla entre opción 1 y 2:

- Nueva entrada en `work` (Experience) como co-fundador
- Proyecto "Stackd" en `projects` con link a stackd.codes
- Formato sutil, sin sección dedicada — integrado en el flujo existente

---

## Cambios en cv.json

### Work — nueva entrada

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

### Projects — nuevo proyecto

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

---

## Impacto en la web

- En **Experience** — aparece como entrada de trabajo actual, visible para recruiters/clientes
- En **Projects** — bloque destacado de Stackd con link directo a la web
- En el footer — se puede añadir link a stackd.codes si encaja estéticamente

---

## Exclusiones

- No se crea sección dedicada a Stackd
- No se modifica el diseño visual del portfolio
- No se actualiza Astro a 7.0 en este cambio (se hará en un PR separado si se desea)

---

## Revisión

- [x] Spec completo y sin placeholders
- [x] Consistente internamente
- [x] Alcance enfocado para un solo PR
- [x] Sin ambigüedades
