# AGENTS.md
 
Nuxt 4 + Vue 3 + Tailwind CSS, SSG, deployed on Netlify.

## Commands

```bash
pnpm dev       # dev server
pnpm build     # production build (SSR output)
pnpm generate  # static site generation (SSG) — the actual deployment artifact
pnpm preview   # preview generated site
```

`postinstall` runs `nuxt prepare` automatically on `pnpm install`.  
No lint / typecheck / test scripts configured.

## Architecture

- **Nuxt 4 `app/` directory** — pages, components, layouts, composables live under `app/`, not root
- **Pages**: `/` (index), `/experience`, `/projects`, `/blogs`, `/blog/:slug`
- **API routes** (Nitro, under `server/api/`):
  - `GET /api/blog-posts` — fetches from Medium RSS (`https://medium.com/feed/@rianw`), returns list
  - `GET /api/blog-post?id=...` — fetches single post from Medium RSS by ID
  - `GET /api/github-projects` — fetches GitHub repos for user `rianabd01`, filtered by topic `portofolio`
- **Custom composable**: `useCachedAsyncData` in `app/composables/` — wraps `useAsyncData` with payload + static data cache lookup
- **Route rules** (in `nuxt.config.ts`): `/`, `/blogs`, `/projects`, `/blog/**` are prerendered; `/api/**` has CORS
- **Nitro prerender**: crawls links and also prerenders `/api/blog-posts` and `/api/github-projects`

## Key gotchas

- **Blog content comes from Medium RSS** at build time — there is no local markdown content pipeline. The `server/blog-posts/` directory and `gray-matter`/`marked` dependencies are unused (dead code — do not rely on them).
- **GitHub projects filtered by topic tag `portofolio`** (note: typo is intentional). Only repos with this exact topic appear on the site.
- **`.env` required** for `GITHUB_API_TOKEN` — the token is needed at build time for the GitHub API call. The file is gitignored but must exist in the environment.
- **No shared types** — types like `GitHubApiResponse` and `BlogPostsApiResponse` are defined inline in each page component.
- **Custom CSS utility classes** with `claude-` prefix (`claude-container`, `claude-card`, `claude-btn-primary`, `claude-nav-link`, etc.) defined in `app/assets/css/main.css`.
- **Deployed at** `https://rianspace.netlify.app` (hardcoded in `app/components/SiteMeta.vue`).
