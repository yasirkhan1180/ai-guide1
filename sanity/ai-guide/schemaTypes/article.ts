import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (R) => R.required().min(5) }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (R) => R.required() }),
    defineField({ 
      name: "categoryTag", 
      type: "string", 
      options: { list: ["Fundamentals", "Models", "Practice", "llms", "agents", "prompt-engineering", "fine-tuning", "ai-tools", "research"], layout: "dropdown" } 
    }),
    defineField({ name: "excerpt", type: "text", rows: 3, validation: (R) => R.required() }),
    defineField({ name: "author", type: "string", initialValue: "AI Guide" }),
    defineField({ 
      name: "mainContent", 
      type: "array", 
      of: [{ type: "block" }, { type: "image", fields: [{ name: "alt", type: "string" }] }, { type: "code" }] 
    }),
    defineField({ name: "readTime", type: "number" }),
    defineField({ name: "publishedAt", type: "datetime", initialValue: () => new Date().toISOString() }),
  ],
  preview: {
    select: { title: "title", subtitle: "categoryTag", media: "mainContent.0" },
  },
});