<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:111827,35:312e81,70:be185d,100:f9a8d4&height=190&section=header&text=Atelier&fontSize=68&fontColor=ffffff&animation=twinkling&fontAlignY=36&desc=An%20editorial%20home%20for%20projects%2C%20notes%20and%20experiments.&descAlignY=58&descSize=16" alt="Atelier animated header" />

  <p>
    <img src="https://img.shields.io/badge/Next.js-15-111827?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111827" alt="React 19" />
    <img src="https://img.shields.io/badge/Motion-Framer%20Motion-8B5CF6?style=for-the-badge" alt="Framer Motion" />
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-F9A8D4?style=for-the-badge" alt="MIT License" /></a>
  </p>
</div>

## âœ¦ The site

Atelier is Christopher Joshy's personal website, built as an editorial portfolio rather than a template grid. It has dedicated routes for work, notes, experiments, links, current focus, achievements, and an archive.

## ðŸ§µ Page composition

```mermaid
flowchart LR
  A[Next.js App Router] --> B[Editorial pages]
  B --> C[Shared motion and visual components]
  C --> D[Work and archive detail routes]
  B --> E[Contact and links]
```

## ðŸŽ¨ Design details

- Custom page composition and typography in the App Router.
- Framer Motion and Lenis support page and scroll motion.
- Reusable spotlights, capability map, cursor, and editorial-ending components.
- Tailwind CSS utilities plus project-specific global styles.

## ðŸ§° Stack

| Area | Tools |
|---|---|
| Framework | Next.js 15, React 19, TypeScript |
| Styling | Tailwind CSS, custom CSS |
| Motion | Framer Motion, Lenis |
| Icons/utilities | Lucide React, `clsx`, `tailwind-merge` |
| Hosting config | Vercel |

## ðŸš€ Run locally

```bash
git clone https://github.com/ChristopherJoshy/Atelier.git
cd atelier
npm ci
npm run dev
```

Open `http://localhost:3000`. To create a production build:

```bash
npm run build
npm start
```

## ðŸ—‚ï¸ Layout

```text
app/         routes and page layouts
components/  reusable editorial and motion components
lib/         site data and helpers
assets/      custom client-side interactions
```

## ðŸ“„ License

MIT. See [`LICENSE`](LICENSE).