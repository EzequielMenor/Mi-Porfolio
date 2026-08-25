# AGENTS.md — Mi-Porfolio

## Project Overview

Single-page Astro portfolio site. Content is driven by `cv.json` following the [JSON Resume schema](https://jsonresume.org/schema/).

## Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run astro`   | Run Astro CLI directly   |

## Architecture

- **Entry point**: `src/pages/index.astro` — the only page
- **CV data source**: `cv.json` — all personal/professional data lives here
- **Components**: `src/components/`, `src/layouts/`
- **Path aliases**: `@cv` → `cv.json`, `@/*` → `src/*`

## Important Conventions

- **Prettier** handles formatting. Configured in `.prettierrc` with `prettier-plugin-astro` for `.astro` files. Run `npx prettier --write .` before committing.
- **No separate design system** — this IS the design (based on BartoszJarocki/cv). Don't restyle from scratch; match existing aesthetics.
- **Tailwind CSS v4** via `@astrojs/tailwind`. Styled with utility classes in `.astro` files.

## Deployment

GitHub Pages auto-deploys from `main` via `.github/workflows/deploy.yml` using `withastro/action@v2`.

## Skill Registry

See `.atl/skill-registry.md` for available skills. SDD (Spec-Driven Development) is configured in `openspec/` directory.
