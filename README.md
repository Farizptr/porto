# Fariz Putra Hanggara — Portfolio

Personal portfolio site showcasing my projects, background, and resume.

## Stack

- React 18 and TypeScript
- Vite 6
- Tailwind CSS 3
- Framer Motion
- React Router 7
- Biome for linting and formatting

Deployed on Vercel.

## Getting started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (default `http://localhost:5173`).

Other common commands:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Scripts

| Script        | Command                          | Description                                  |
| ------------- | -------------------------------- | -------------------------------------------- |
| `dev`         | `vite --host 0.0.0.0`            | Start the dev server                         |
| `build`       | `tsc -b && vite build`           | Type-check and build for production          |
| `lint`        | `biome lint . && tsc --noEmit`   | Lint and type-check without modifying files  |
| `lint:fix`    | `biome lint --write .`           | Lint and apply safe fixes                    |
| `format`      | `biome format --write .`         | Format source files with Biome               |
| `typecheck`   | `tsc --noEmit`                   | Type-check only                              |
| `preview`     | `vite preview`                   | Serve the built `dist/` folder locally       |

## Project structure

```
src/
  components/   Layout, Sidebar, MobileMenu, ProjectCard, StatusBadge
  data/         projects.ts (all project content), site.ts (name, contacts, nav)
  pages/        Home, Projects, ProjectDetail, About, Resume
  assets/fonts/ Inter (self-hosted)
public/
  projects/<id>/  project screenshots (WebP)
  resume.pdf      downloadable CV
  favicon.svg
```

## Adding a project

1. Add a new entry to `src/data/projects.ts`. Fill in `id`, the text fields, and `images`.
2. Optional fields: `period`, `role`, `technologies`, `challenges`/`solution`, `liveUrl`, and `repoLinks`. A section is hidden when its field is missing.
3. Set `featured: true` if the project should appear on the Home page.
4. Put the screenshots in `public/projects/<id>/`, using the same `<id>` as the entry.

## Images

Use WebP, with a maximum width of 1600px. For example, with `cwebp`:

```bash
cwebp -q 80 -resize 1600 0 input.png -o output.webp
```

## Deployment

Vercel builds with `npm run build` and serves the `dist` folder. `vercel.json` rewrites all routes to `index.html`, so client-side routes such as `/projects/<id>` work on refresh. `netlify.toml` holds the equivalent config if the site is deployed to Netlify instead.
