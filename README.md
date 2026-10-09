# Arvane

Website for Arvane, a modern cafe chain. Built with React 19, React Router 6 and Vite, styled with CSS Modules.

## Getting started

```bash
npm install
cp .env.example .env   # WhatsApp number and social links
npm run dev            # http://localhost:5173
npm run build          # production build in dist/
npm run preview        # serve the production build
npm run lint
```

## Project structure

```
src/
├── main.jsx              # Entry: mounts <App />, loads global styles
├── App.jsx               # RouterProvider
├── router.jsx            # Route table; every page is lazy-loaded
├── components/
│   ├── ui/               # Generic, reusable building blocks (no business logic)
│   │   ├── Button/       #   <Button to | href | onClick variant size />
│   │   ├── Card/  Grid/  Section/  SectionHeading/
│   │   ├── FormField/    #   label + input/select/textarea + error
│   │   ├── Alert/  Modal/  Hero/
│   │   └── index.js      #   import { Button, Card } from "@/components/ui"
│   ├── layout/           # App shell: Layout, Header, Footer, Logo
│   └── MenuCard/         # Domain components shared by several pages
├── pages/                # One folder per route
│   └── Home/
│       ├── Home.jsx
│       ├── Home.module.css
│       └── components/   # Components used only by this page
├── hooks/                # useForm, useEscapeKey, useLockBodyScroll, useScrollToHash
├── lib/                  # Framework-free helpers (cn, format, validation, whatsapp, api)
├── data/                 # Content: menu, locations, events, testimonials, ...
├── config/site.js        # Brand, contact, social links, navigation
├── constants/routes.js   # ROUTES — all paths in one place
├── styles/               # tokens.css (design tokens), base.css (reset + element defaults)
└── assets/images/        # Images and videos (imported, so Vite fingerprints them)
```

## Conventions

- **Imports** use the `@/` alias for `src/` (`import { ROUTES } from "@/constants/routes"`).
- **Styling**: each component has its own `Component.module.css` with camelCase class names. Use the design tokens in `styles/tokens.css` (`var(--accent-gold)`, `var(--spacing-lg)`) rather than raw values. No inline `style={{}}`.
- **Assets** must be imported, never referenced by a string path. A string path like `"src/assets/..."` works in dev but is missing from the production build. Menu images are resolved by filename through `menuImage()` in `data/menu/images.js`.
- **Links** use `ROUTES` constants, never hard-coded paths.
- **Forms** use `useForm` with `FormField`, and validation rules live in `lib/validation.js`. Submissions go through `lib/api.js`, which is a stub for now; replace it when a backend exists.
- **Content** (copy, prices, lists) belongs in `data/` or `config/`, not inside components.

## Adding a page

1. Create `src/pages/MyPage/MyPage.jsx` (default export) and `MyPage.module.css`.
2. Add the path to `src/constants/routes.js`.
3. Register it in `src/router.jsx`: `{ path: ROUTES.myPage, lazy: page(() => import("@/pages/MyPage/MyPage")) }`.
4. Link to it from `config/site.js` (`navigation` or `footerNavigation`) if needed.

## Deployment (GitHub Pages)

Every push to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to https://yosefpride.github.io/Arvane-React/.

- **Settings → Pages → Source** must be set to **GitHub Actions**.
- `.env` is not committed. Set the same `VITE_*` values under **Settings → Secrets and variables → Actions → Variables**.
- `base` in `vite.config.js` must match the repository name (`/Arvane-React/`). The router reads it from `import.meta.env.BASE_URL`.
- The workflow copies `index.html` to `404.html`, so refreshing on a deep link such as `/Arvane-React/menu` still loads the app.
