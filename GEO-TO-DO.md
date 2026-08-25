# TO-DO: Implementar YA

## 这些 son los cambios que TIENES que hacer sí o sí. No son opcionales.

---

## CRÍTICO (esta semana)

### 1. Añadir Schema.org Person + WebSite JSON-LD

Sin esto, los sistemas de IA no pueden entender quién sos. Es el gap más grande del sitio.

**Archivo:** `src/layouts/BaseLayout.astro` (o donde esté tu `<head>`)

**Pegar esto dentro del `<head>`, antes de cerrar `</head>`:**

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ezequielmenor.es/#person",
        "name": "Ezequiel Menor",
        "url": "https://ezequielmenor.es",
        "jobTitle": "Desarrollador Full-Stack",
        "description": "Desarrollador Full-Stack especializado en Flutter, Spring Boot, TypeScript y Astro. Estudiante de DAM en IES María Enriquez.",
        "sameAs": [
          "https://github.com/EzequielMenor",
          "https://www.linkedin.com/in/ezequiel-menor-4a690027a/"
        ],
        "knowsAbout": [
          "Flutter",
          "Dart",
          "Java",
          "Spring Boot",
          "JavaScript",
          "TypeScript",
          "Astro",
          "SQL",
          "MySQL"
        ],
        "worksFor": { "@type": "Organization", "name": "Clínicas Dorsia" },
        "alumniOf": { "@type": "EducationalOrganization", "name": "IES María Enriquez" },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gandía",
          "addressRegion": "Valencia",
          "addressCountry": "ES"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://ezequielmenor.es/#website",
        "name": "Ezequiel Menor — Portfolio",
        "url": "https://ezequielmenor.es",
        "author": { "@id": "https://ezequielmenor.es/#person" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ezequielmenor.es/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }
</script>
```

**Después de desplegar:** validalo en https://validator.schema.org

---

### 2. Crear robots.txt

**Archivo:** `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://ezequielmenor.es/sitemap.xml
```

---

### 3. Generar sitemap.xml

```bash
npx astro add sitemap
```

**Después en `astro.config.mjs`:**

```js
import { sitemap } from '@astrojs/sitemap'
export default defineConfig({
  site: 'https://ezequielmenor.es',
  integrations: [sitemap()],
})
```

---

### 4. Crear llms.txt

**Archivo:** `public/llms.txt`

```
# Ezequiel Menor — Portfolio

Desarrollador Full-Stack ubicado en Gandía, Valencia. Especializado en Flutter, Spring Boot, Java y desarrollo web con Astro.

## Tecnologías
Flutter, Dart, Java, Spring Boot, JavaScript, TypeScript, Astro, SQL, MySQL

## Proyectos Principales
- GymAnalytics: Sistema completo de gestión de gimnasios (app móvil + escritorio + backend). TFG de DAM con arquitectura full-stack real.
- Game Tower Defense: Juego en Java con mecánicas de oleadas, torres y enemigos.
- Mi Portfolio: Este sitio, construido con Astro y Tailwind CSS.

## Experiencia
- Clínicas Dorsia: Desarrollador de apps (FCT). Desarrollo de aplicación móvil con Flutter para gestión de pacientes y clínicas.
- Disponible para proyectos freelance.

## Contacto
- GitHub: https://github.com/EzequielMenor
- LinkedIn: https://www.linkedin.com/in/ezequiel-menor-4a690027a/
- Portfolio: https://ezequielmenor.es
```

---

## ALTA PRIORIDAD (esta o próxima semana)

### 5. Añadir Open Graph y Twitter Card tags

En tu `<head>`, después del `<title>`:

```html
<meta
  property="og:title"
  content="Portfolio de Ezequiel Menor - Desarrollador Full-Stack"
/>
<meta
  property="og:description"
  content="Desarrollador Full-Stack especializado en Flutter, React y Kotlin. Gandía, Valencia."
/>
<meta property="og:url" content="https://ezequielmenor.es" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://ezequielmenor.es/og-image.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Portfolio de Ezequiel Menor" />
<meta
  name="twitter:description"
  content="Desarrollador Full-Stack especializado en Flutter, React y Kotlin."
/>
<meta name="twitter:image" content="https://ezequielmenor.es/og-image.png" />
```

> **Nota:** Necesitás crear `og-image.png` (1200x630px) — una captura o diseño del portfolio.

---

### 6. Añadir canonical tag

En tu `<head>`:

```html
<link rel="canonical" href="https://ezequielmenor.es" />
```

---

## PRIORIDAD MEDIA (mes que viene)

### 7. Mejorar descripciones de proyectos (especialmente GymAnalytics)

Las descriptions actuales son demasiado cortas. AI systems citan contenido que explica el "por qué" y "cómo", no solo el "qué".

**GymAnalytics — pasar de:**

> "Aplicación completa para gestión de gimnasios: app móvil + escritorio + backend. Desarrollada como TFG de DAM con una arquitectura full-stack real."

**A algo como:**

> "GymAnalytics es un sistema completo de gestión de gimnasios compuesto por tres partes: una app móvil en Flutter para usuarios y entrenadores, una aplicación de escritorio en Java para administración, y un backend REST en Spring Boot con base de datos MySQL. Desarrollado como TFG de DAM. Decisiones arquitectónicas: separación clara entre capas de presentación y lógica de negocio, API REST como contrato entre cliente y servidor, uso de JWT para autenticación."

**Game Tower Defense — pasar de:**

> "Juego tower defense desarrollado en Java como proyecto de clase."

**A algo como:**

> "Juego tower defense en Java implementando patrones de POO (herencia, polimorfismo, composición). Sistema de oleadas con dificultad progresiva, torres con estadísticas individuales (daño, rango, cadencia), y enemigos con tipos diferentes. Proyecto académico con ~1500 líneas de código."

---

### 8. Overhaul GitHub README (perfil + repos)

**Perfil GitHub README** — mínimo 2000 caracteres con:

- Quién sos (párrafo de 2-3 líneas)
- Qué tecnologías usás y en qué nivel
- Proyectos destacados con descripción, stack y links
- Cómo contactarte

**GymAnalytics README** — mínimo 500 caracteres con:

- Qué problema resuelve
- Arquitectura (diagrama simple en texto)
- Stack tecnológico con versiones
- Cómo levantar el proyecto (instrucciones de setup)
- Link a demo si existe

---

## RESUMEN RÁPIDO

| #   | Qué                     | Tiempo | Impacto    |
| --- | ----------------------- | ------ | ---------- |
| 1   | Schema.org JSON-LD      | 5 min  | 🔴 CRÍTICO |
| 2   | robots.txt              | 2 min  | 🟠 ALTO    |
| 3   | sitemap.xml             | 5 min  | 🟠 ALTO    |
| 4   | llms.txt                | 10 min | 🟠 ALTO    |
| 5   | OG + Twitter tags       | 15 min | 🟠 ALTO    |
| 6   | Canonical tag           | 2 min  | 🟡 MEDIO   |
| 7   | Descripciones proyectos | 30 min | 🟡 MEDIO   |
| 8   | GitHub README           | 1 hora | 🟡 MEDIO   |

Empezá por el **1** (Schema.org) — es el que más puntos te da por menos esfuerzo.
