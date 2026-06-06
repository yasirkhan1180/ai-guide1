// app/types.ts
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string; // Ensure this is exactly "category"
  readTime: number;
  date: string;
  author: string;
  content: string;
}