# Writing Guide

Use this guide when adding blog posts, lab notes, project pages, or SEO-related code changes.

## Blog Posts

Blog posts live in `src/content/blog/*.mdx`.

Use this frontmatter:

```mdx
---
title: "Specific Technical Title"
description: "One sentence that explains the technical problem, approach, and why it matters."
pubDate: 2026-06-09
updatedDate: 2026-06-09
tags: ["redis", "rust", "performance"]
---
```

Rules:

- Prefer specific titles over broad titles.
- Keep descriptions under roughly 160 characters when possible.
- Use lowercase tags with hyphens.
- Add `updatedDate` when modifying a published post.
- Do not add draft posts unless `draft: true` is intentional.
- Use absolute public image paths, for example `/blog/redis-performance/chart.svg`.
- Every image must have meaningful alt text.

Recommended structure:

```md
## Problem
## Baseline
## Implementation
## Benchmark
## What Changed
## Tradeoffs
## Takeaway
## References
```

This is a technical notebook, not a marketing blog. Explain the system, the constraints, the measurement, and the lesson.

## Systems Lab Entries

Lab notes live in `src/content/lab/*.mdx`.

Use this frontmatter:

```mdx
---
title: "Experiment Name"
description: "What was tested and what the reader will learn."
area: "Performance engineering"
status: "benchmarked"
updated: 2026-06-09
tags: ["go", "bloom-filter", "performance"]
---
```

Good lab notes should include:

- the question being tested
- implementation shape
- commands used
- benchmark or measurement results
- what changed after measuring
- next experiments

## Project Pages

Project pages live in `src/content/projects/*.mdx`.

Use this frontmatter:

```mdx
---
title: "Project Name"
description: "Concise project summary."
category: "Databases"
status: "active"
github: "https://github.com/SK1PPR/project"
featured: true
order: 1
---
```

Recommended sections:

```md
## Architecture Overview
## Technical Challenges
## Benchmarks
## Lessons Learned
## Tools
```

## SEO Checklist

Before finishing a content change:

- Run `npm run build`.
- Confirm the generated URL is clean and descriptive.
- Ensure the first paragraph clearly states the topic.
- Add related internal links where natural.
- Keep one `h1`; use `h2` and `h3` for sections.
- Use code fences with language names.
- Include references for posts based on external material.

## Code Change Checklist

For SEO or layout changes:

- Keep canonical URLs based on `SITE.url`.
- Keep `astro.config.mjs`, `src/consts.ts`, and `public/robots.txt` on the same domain.
- Do not remove RSS or sitemap support.
- Preserve static output for Cloudflare.
- Avoid adding client-side JavaScript unless it is needed.
