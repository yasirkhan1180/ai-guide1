// sanity/schemaTypes/article.ts
export const article = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main headline of your article',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary for the blog feed',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array', // Using array for rich text (Portable Text)
      of: [{ type: 'block' }],
    },
  ],
};