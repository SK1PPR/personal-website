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
- Use the series tags below when a post belongs to a series.
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

## Series And Tags

Series pages live at `/series/<slug>/` and are generated from `src/utils/series.ts`.

Do not manually edit a series page to add a post. A post appears in a series when its frontmatter includes one of that series' tags.

Current blog series:

| Series | URL | Required tags |
| --- | --- | --- |
| Building A Storage Engine | `/series/storage-engine/` | `storage-engine`, `lsm-tree`, or `databases` |
| Redis Internals | `/series/redis/` | `redis` |
| Kafka From The Log Up | `/series/kafka/` | `kafka` |

Tagging rules:

- Use `storage-engine` on every post about the Rust storage engine project.
- Use `lsm-tree` when the post is specifically about LSM structure, memtables, SSTables, WAL, compaction, or Bloom filters in the storage engine.
- Use `databases` for broader database-internals posts that should also appear in the storage-engine series.
- Use `redis` for Redis clone and Redis internals posts.
- Use `kafka` for Kafka clone, Kafka architecture, log segment, offset, broker API, or consumer progress posts.
- Use supporting tags for the technical angle, for example `rust`, `c++`, `performance`, `storage`, `distributed-systems`, `linux`, or `observability`.
- Do not use series tags on unrelated posts just to increase visibility.

Examples:

```mdx
tags: ["storage-engine", "lsm-tree", "rust", "databases", "systems"]
```

```mdx
tags: ["redis", "rust", "performance", "databases"]
```

```mdx
tags: ["kafka", "distributed-systems", "storage"]
```

When adding a new series:

1. Add it to `BLOG_SERIES` in `src/utils/series.ts`.
2. Pick one or more stable tags that identify membership.
3. Add those tags to each matching blog post.
4. Run `npm run build`.
5. Confirm `dist/series/<slug>/index.html` is generated.

Series are for major project-backed threads. Mini-notes and study notes usually belong in Systems Lab instead.

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

Use Labs for mini-series and study notes that are not full blog posts. Examples:

- Rust arena allocation notes
- `io_uring` first-principles notes
- Bloom filters
- write-ahead log sketches
- consistent hashing experiments

Lab entries do not appear on blog series pages. If a lab note relates to a blog series, share tags where useful, but keep the artifact in `src/content/lab`.

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
- If the post belongs to a series, confirm it appears at `/series/<slug>/`.
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
