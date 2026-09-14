# ChartMept — Data Visualisation & Analytics

A modern, responsive landing page for a chart/data analytics tool, built with [Next.js 15](https://nextjs.org) (App Router), [React 18](https://react.dev), and [Tailwind CSS v3](https://tailwindcss.com) with a shadcn/ui-style theme.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start the dev server (Turbopack)     |
| `npm run build`  | Create a production build            |
| `npm run start`  | Serve the production build           |
| `npm run lint`   | Lint (requires `bunx`; use `npx tsc --noEmit` and `npx eslint .` otherwise) |

## Structure

- `src/app/layout.tsx` — root layout & metadata
- `src/app/page.tsx` — landing page
- `src/app/globals.css` — Tailwind entry + shadcn theme variables (incl. chart colors)
- `src/lib/utils.ts` — `cn()` helper for shadcn components (`@/` alias)
- `tailwind.config.ts` — theme with chart color palette, `content` globbed across `./src/**`
- `components.json` — shadcn/ui config (components live in `src/components`, not yet added)

This project uses the `@/*` path alias from `tsconfig.json`, mapping to `./src/*`.