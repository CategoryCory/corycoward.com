# Cory Coward Portfolio

The source for [cory.tech](https://cory.tech), a personal portfolio and resume
site for Cory Coward, backend and embedded software engineer.

The site is built with Astro, TypeScript, and React. It uses a dark,
professional visual language with restrained retro-futurist accents.

## Development

This project requires Node.js 22.12 or later.

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

## Project Structure

```text
src/
├── components/  Reusable Astro and React components
├── data/        Typed, code-owned site data such as work history
├── pages/       Route definitions and page composition
└── styles/      Shared and page-level CSS
public/          Static assets served without processing
```

Use `src/data/` for compact structured data reused across the site. Use Astro
content collections for authored project case studies and other content that
needs rich text, images, and generated detail pages.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run astro -- --help` | View Astro CLI help. |

## Technology

- [Astro](https://astro.build)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
