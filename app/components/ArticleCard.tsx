import Link from 'next/link';
import { Article } from "@/app/types"; // Import your interface

export default function ArticleCard({ article }: { article: Article }) {
  // Use the interface to safely access fields
  if (!article) return null;

  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="h-48 bg-gray-100 group-hover:bg-gray-200 transition-colors" />
        
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2 font-inter group-hover:text-blue-600 transition-colors">
            {article.title || "Untitled"}
          </h2>
          <p className="text-gray-600 line-clamp-3 font-merriweather text-sm">
            {article.excerpt || "No summary available."}
          </p>
          <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center">
            Read more →
          </div>
        </div>
      </article>
    </Link>
  );
}