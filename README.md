# Cory Coward Portfolio

The source for [cory.tech](https://cory.tech), a personal portfolio and resume
site for Cory Coward, backend and embedded software engineer.

The site is built with Astro, TypeScript, and React. It uses a dark,
professional visual language with restrained retro-futurist accents.

## Development

This project requires Node.js 22.12 or later. With `nvm` installed, run
`nvm use` from the repository root to select the version recorded in `.nvmrc`.

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321` by default.

To produce a production build:

```sh
npm run build
```

The generated static site is written to `dist/`. Preview that build locally with
`npm run preview`.

## Testing

The test suite combines Astro type and content validation with Playwright smoke
and accessibility checks. Install Chromium once after installing dependencies:

```sh
npx playwright install chromium
```

Then run the complete suite:

```sh
npm test
```

Playwright builds the site and starts its own temporary production preview on
port `4323`. The same test command runs automatically for pushes and pull
requests through GitHub Actions.

## Project Structure

```text
src/
├── components/  Reusable Astro and React components
├── content/     Work-history data, project case studies, and authoring templates
├── models/      Shared TypeScript models for structured content
├── pages/       Route definitions and page composition
└── styles/      Shared and page-level CSS
tests/            Playwright smoke and accessibility checks
public/          Static assets served without processing
```

Project case studies live in `src/content/projects/`, where Astro’s content
collection validates their frontmatter and generates static detail pages. Start
new entries from `src/content/templates/project.md`; the template sits outside
the collection and is never published.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run check` | Type-check Astro components and content. |
| `npm run test:e2e` | Run browser smoke and accessibility tests. |
| `npm test` | Run all type, content, and browser tests. |
| `npm run astro -- --help` | View Astro CLI help. |

## Technology

- [Astro](https://astro.build)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Playwright](https://playwright.dev)
