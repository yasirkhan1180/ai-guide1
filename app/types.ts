// app/types.ts
export interface Article {
  _id: string;
  title: string;
  slug: string;
  categoryTag: string;
  excerpt: string;
  readTime: number;
  publishedAt: string;
  author: string;
}