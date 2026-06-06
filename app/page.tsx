import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";
import { getAllArticles } from "@/sanity/lib/fetch";
import { Article } from "@/app/types"; // Ensure this import matches your file structure

export default async function HomePage() {
  // Fetching data
  const articles: Article[] = await getAllArticles();

  return (
    <>
      <Header />

      <main className="pt-14">
        {/* ── Hero Section ─────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-22 border-b border-gray-100">
          <p className="font-sans text-[0.65rem] font-600 uppercase tracking-widest text-blue-600 mb-8" style={{ letterSpacing: "0.2em" }}>
            Est. 2026 — Independent AI Writing
          </p>

          <h1 className="font-sans font-700 text-5xl md:text-6xl text-black leading-none tracking-tighter mb-10">
            Understanding<br />
            <span className="text-blue-600">artificial</span><br />
            intelligence.
          </h1>

          <div className="max-w-xl">
            <p className="font-serif text-lg text-gray-600 leading-relaxed italic">
              Clear, rigorous writing on how modern AI systems actually work.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-10 mt-14">
            <StatItem value={articles.length.toString()} label="Articles published" />
            <StatItem value="4" label="Topic categories" />
            <StatItem value="3" label="Contributing writers" />
          </div>
        </section>

        {/* ── Article Feed ─────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between py-8">
            <h2 className="font-sans text-[0.65rem] font-600 uppercase tracking-widest text-gray-500" style={{ letterSpacing: "0.15em" }}>
              Latest Articles
            </h2>
            <span className="font-sans text-[0.65rem] text-gray-400">{articles.length} articles</span>
          </div>

          <div className="max-w-3xl space-y-8">
            {articles.length > 0 ? (
              articles.map((article: Article) => (
                <ArticleCard key={article._id} article={article} />
              ))
            ) : (
              <p className="text-gray-400 py-10 text-center">No articles found in the database.</p>
            )}
          </div>

          <div className="max-w-3xl border-t border-gray-100 pt-10 pb-4">
            <p className="font-sans text-xs text-gray-400 text-center uppercase tracking-widest" style={{ letterSpacing: "0.15em" }}>
              End of feed
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-sans font-700 text-3xl text-black tracking-tight">{value}</p>
      <p className="font-sans text-xs text-gray-500 mt-0.5 uppercase tracking-widest" style={{ letterSpacing: "0.1em" }}>
        {label}
      </p>
    </div>
  );
}