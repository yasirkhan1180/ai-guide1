import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

async function getPrivacyPage() {
  // We use [0] to get the single object instead of an array
  const query = groq`*[_type == "page" && slug.current == "privacy-policy"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function PrivacyPage() {
  const page = await getPrivacyPage();

  // DEBUG: Look at your terminal! If this shows 'undefined' or 'null', 
  // your query isn't matching your document.
  console.log("FETCHED DATA:", page);

  if (!page) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1>Page not found</h1>
        <p>Could not find a document with slug: privacy-policy</p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Ensure your schema field is actually named 'title' */}
      <h1 className="text-4xl font-bold mb-10">{page.title || "Untitled"}</h1>
      
      <div className="prose prose-blue max-w-none">
        {/* If your schema field is NOT named 'content', change 'page.content' below */}
        {page.content ? (
          <PortableText value={page.content} />
        ) : (
          <p>No content found for this page.</p>
        )}
      </div>
    </main>
  );
}