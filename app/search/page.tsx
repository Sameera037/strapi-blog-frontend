// app/search/page.tsx
import { searchPosts } from "../../lib/api";
import SearchBar from "../../components/SearchBar";

export default async function SearchPage({ searchParams }: any) {
  const sp = await searchParams;
  const q = sp?.q || "";

  const res = q ? await searchPosts(q) : { data: [] };
  const posts = res?.data || [];

  return (
    <main className="p-8">
      <SearchBar />

      <h1 className="text-2xl font-bold mb-6">
        Search Results for: <span className="text-blue-400">{q}</span>
      </h1>

      {!posts.length && <p>No results found.</p>}

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {posts.map((post: any) => {
          const p = post.attributes || post;
          return (
            <a
              key={p.id}
              href={`/post/${p.slug}`}
              className="p-5 rounded-xl bg-[#0F172A] border border-gray-700 hover:bg-[#1E293B] transition"
            >
              <h2 className="text-xl font-bold mb-1">{p.title}</h2>
              <p className="text-gray-400">{p.excerpt}</p>
            </a>
          );
        })}
      </div>
    </main>
  );
}
