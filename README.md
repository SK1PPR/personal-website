# Khushal Agrawal - Engineering Notebook

Personal website for a systems and infrastructure engineer, built with Astro, MDX, Tailwind CSS, and Cloudflare Pages.

## Features

- Astro static site generation
- MDX blog posts and project case studies
- Tailwind CSS with dark mode
- Syntax highlighting for code blocks
- RSS feed at `/rss.xml`
- Sitemap generation
- OpenGraph and Twitter metadata
- Search-engine friendly URLs
- Cloudflare Pages ready

## Local Development

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:4321`.

## Content

- Blog posts: `src/content/blog/*.mdx`
- Projects: `src/content/projects/*.mdx`
- Systems Lab: `src/content/lab/*.mdx`
- Site constants and social links: `src/consts.ts`
- Resume PDF: replace `public/resume.pdf`

## Build

```bash
npm run build
npm run preview
```

## Cloudflare Pages Deployment

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a new project and connect the repository.
3. Use these build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `20` or newer
4. Add the production domain.
5. Update `site` in `astro.config.mjs`, `SITE.url` in `src/consts.ts`, and `public/robots.txt` to match the final domain.

The included `wrangler.toml` sets `pages_build_output_dir = "dist"` for Pages workflows.
