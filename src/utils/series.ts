export const BLOG_SERIES = [
  {
    slug: 'storage-engine',
    title: 'Building A Storage Engine',
    description:
      'LSM trees, WAL records, memtables, SSTables, Bloom filters, compaction, and the road toward a serious database core.',
    tags: ['storage-engine', 'lsm-tree', 'databases']
  },
  {
    slug: 'redis',
    title: 'Redis Internals',
    description:
      'Event loops, profiling, protocol details, and the parts of a Redis clone that turn into systems lessons.',
    tags: ['redis']
  },
  {
    slug: 'kafka',
    title: 'Kafka From The Log Up',
    description:
      'Append-only logs, segments, offsets, consumer progress, and the storage contract behind streaming infrastructure.',
    tags: ['kafka']
  }
] as const;

export type BlogSeries = (typeof BLOG_SERIES)[number];
