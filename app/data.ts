import { Post } from "./types";

export const posts: Post[] = [
  {
    slug: "the-attention-mechanism-explained",
    title: "The Attention Mechanism, Explained for the Rest of Us",
    excerpt: "Every modern language model is built on attention. But what does it actually mean for a model to 'attend' to something? We break down the key intuition without the linear algebra.",
    category: "Fundamentals",
    readTime: 7,
    date: "2024-05-28",
    author: "Sophia Lin",
    content: `<p>In 2017, a paper titled <em>Attention Is All You Need</em> changed the trajectory of machine learning. The transformer architecture it introduced has since become the backbone of GPT-4, Claude, Gemini, and virtually every powerful language model in existence. At its heart is a deceptively simple idea: <strong>attention</strong>.</p>`,
  },
  {
    slug: "context-windows-and-what-they-mean",
    title: "Context Windows Are Getting Longer. Here's Why It Matters.",
    excerpt: "From 4K tokens in early GPT-3 to millions of tokens today, the expansion of model context is quietly reshaping what AI can actually do — and what its limits are.",
    category: "Models",
    readTime: 5,
    date: "2024-05-20",
    author: "Marcus Webb",
    content: `<p>One of the most important — and least discussed — axes along which AI models have improved isn't raw capability. It's memory. Specifically, the size of the <em>context window</em>: the amount of text a model can read and reason about in a single pass.</p>`,
  },
  {
    slug: "prompt-engineering-is-dead-long-live-prompt-engineering",
    title: "Prompt Engineering Is Dead. Long Live Prompt Engineering.",
    excerpt: "Everyone said prompting was a temporary skill that would be engineered away. Two years later, the discipline is more sophisticated than ever — just different.",
    category: "Practice",
    readTime: 6,
    date: "2024-05-12",
    author: "Priya Anand",
    content: `<p>In 2022, a peculiar job title began appearing on LinkedIn: <em>Prompt Engineer</em>. Salaries were reported in the $200–$300K range. The role attracted mockery and fascination in equal measure.</p>`,
  },
  {
    slug: "the-case-for-slower-ai",
    title: "The Case for Slower AI",
    excerpt: "Every major lab is racing to ship faster, cheaper, more capable models. A growing minority of researchers is asking whether the pace itself is the problem.",
    category: "Opinion",
    readTime: 8,
    date: "2024-05-03",
    author: "David Kwon",
    content: `<p>Speed is the operating assumption of the AI industry. Faster training runs. Faster inference. Faster product iterations. Faster benchmarks bested.</p>`,
  },
  {
    slug: "what-embeddings-actually-are",
    title: "What Embeddings Actually Are",
    excerpt: "Vectors, semantic space, cosine similarity — these words get thrown around constantly in AI discussions. Here's a ground-up explanation of what embeddings are and why they're everywhere.",
    category: "Fundamentals",
    readTime: 6,
    date: "2024-04-24",
    author: "Sophia Lin",
    content: `<p>If you've read anything about how modern AI systems work, you've encountered the word "embedding." It shows up in discussions of language models, recommendation systems, image search, and semantic retrieval.</p>`,
  },
  {
    slug: "fine-tuning-vs-prompting",
    title: "Fine-Tuning vs. Prompting: A Practical Framework",
    excerpt: "Should you prompt-engineer your way to the behavior you want, or invest in fine-tuning? The answer depends on factors most guides don't mention.",
    category: "Practice",
    readTime: 7,
    date: "2024-04-15",
    author: "Marcus Webb",
    content: `<p>One of the most common questions in applied AI development: should I fine-tune a model, or can I get what I need through prompting alone?</p>`,
  },
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}