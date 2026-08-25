# Propuesta: profesionalizar Mi-Porfolio sin inventar

## Diagnóstico honesto del estado actual

Lo que está bien:

- Estructura clara (Hero → Sobre mí → Educación → Experiencia → Proyectos → Skills).
- Stack moderno (Astro + Tailwind, deploy en GitHub Pages).
- Diseño minimalista tipo terminal — coherente.

Lo que **resta** sin necesidad de mentir:

1. **Hero** muestra `Flutter · React · Kotlin` (líneas 45-47 de Hero.astro) y no coinciden con tu stack real: Kotlin no sale en cv.json, React solo aparece de pasada. Miente por descuido.
2. **About (summary)** es genérico: "creo aplicaciones y sitios web… me apasiona construir soluciones". No dice nada concreto que te diferencie.
3. **Experiencia** mezcla en la misma timeline Stackd (co-fundador agencia), Dorsia (prácticas DAM) y Antica (camarero 2022). Visualmente pesan igual y compiten.
4. **Proyectos**: featured son Stackd + GymAnalytics. Bien. Pero "Game Tower Defense" (featured=false) sale abajo como proyecto serio cuando es un trabajo de clase. Y falta el proyecto en el que más quieres vender: **AIES** (no aparece).
5. **location** tiene `address: "2712 Broadway St", postalCode: "46702"` — eso es una dirección random americana. Es un bug, no aporta nada.
6. **email y phone vacíos** → el botón "Email" no aparece, queda raro en el hero.
7. **Foco IA / harness** (lo que tú quieres vender) → **0 menciones** en toda la web. Ni una sola línea.

## Propuesta concreta (UN solo paquete, justificado)

### A. Reordenar la historia (sin tocar componentes, solo datos)

1. **cv.json**:

   - Quitar `address` y `postalCode` inventados de `location`.
   - Resumen reescrito: engancha con IA + desarrollo full-stack + agencia propia. 2-3 frases, sin fluff.
   - Educación: quitar ESO (no aporta a portfolio técnico) — o dejarla en una sola línea.
   - Experience: dejar Stackd + Dorsia como **principales**. Antica la movemos a una sección aparte abajo ("Otros trabajos") o directamente la quitamos del JSON y se acabó. Tú elegiste "como otros trabajos".
   - Projects: añadir **AIES** como `featured: true`. Quitar Game Tower Defense de "otros" (es trabajo de clase, no aporta a tu pitch).
   - Skills: añadir "AI/LLMs", "Harness / agentes IA", "Astro". Quitar Kotlin (no aparece en ningún proyecto real).

2. **Hero.astro**: cambiar las 3 tech tags hardcodeadas (líneas 45-47) por datos dinámicos desde `cv.json` o por un array controlado. Que sean tags que de verdad usas.

3. **Projects.astro** (componente): tal cual. Solo cambia el JSON.

4. **Experience.astro**: añadir lógica para que si un item tiene `type: "secondary"` se muestre más pequeño/abajo, separado de los principales.

5. **Skills.astro**: añadir icono para "AI" / "LLM" (puedo añadir uno simple).

6. **Sección nueva `About.astro`**: ampliar de 1 párrafo a 3-4 frases estructuradas: (1) quién eres, (2) qué haces, (3) en qué estás ahora, (4) qué buscas. Sin inflar.

### B. Lo que NO voy a hacer (sin tu OK explícito)

- No voy a inflar números: si un proyecto no tiene usuarios reales, no le pongo "10k visitas".
- No voy a añadir logos de empresas donde no trabajé.
- No voy a tocar el DNS (CNAME bug `ezequielemenor` vs `ezequielmenor` lo dejo para cuando hablemos de deploy).
- No voy a meter foto profesional ni a rediseñar el layout — solo contenido + copy.

### C. Riesgos / cosas a verificar

- Hacer build con `pnpm build` después de los cambios para asegurar que compila.
- Prettier tras editar.
- El deploy a GitHub Pages es automático vía `.github/workflows/deploy.yml` según el AGENTS.md.

## Lo que necesito de ti para seguir

1. ✅ Luz verde para ejecutar todo lo de arriba.
2. Resumen real: ¿cómo te describes en 2-3 frases? Dame tú las palabras, no las invente yo.
3. Para AIES: ¿qué pongo exactamente? "Agente AIES" / "harness de agentes" / "¿en desarrollo?" / URL del repo.
4. Para Stackd: confirma "desarrollador" como tu rol (en vez de "co-fundador y desarrollador" actual).
5. Para Dorsia: ¿el nombre de la app de Alice está bien o quieres otro copy?
6. ¿Email público al que sí te pueden escribir? (Gmail profesional, ideal).
