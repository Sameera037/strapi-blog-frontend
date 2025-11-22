import { getAllAuthors } from "@/lib/api";
import Link from "next/link";

export default async function AuthorsPage() {
  const res = await getAllAuthors();
  const authors = res?.data || [];

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Authors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {authors.map((author: any) => {
          const avatar =
            author.avatar?.formats?.thumbnail?.url ||
            author.avatar?.url ||
            "/default-avatar.png";

          return (
            <Link
              key={author.id}
              href={`/author/${author.id}`}
              className="p-5 rounded-xl bg-[#0F1620] border border-gray-700 
                         hover:bg-[#1A2332] flex items-center gap-4"
            >
              <img
                src={`http://localhost:1337${avatar}`}
                alt={author.name}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h2 className="text-lg font-semibold">{author.name}</h2>
                <p className="text-gray-400 text-sm">View posts →</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
