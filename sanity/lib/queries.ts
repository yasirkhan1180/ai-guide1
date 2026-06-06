import { groq } from "next-sanity";

export const ALL_ARTICLES_QUERY = groq`*[_type == "article"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  categoryTag,
  publishedAt
}`;