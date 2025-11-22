// app/category/[slug]/page.tsx
import { getCategoryBySlug } from "../../../lib/api";

export default async function CategorySlugPage({ params }: any) {
  const { slug } = await params;

  const res = await getCategoryBySlug(slug);
  const rawCategory = res?.data?.[0];

  if (!rawCategory)
    return <div className="text-white p-8">Category Not Found</div>;

  const category = rawCategory.attributes || rawCategory;
  const posts = category.posts || [];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">{category.name}</h1>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {posts.map((post: any) => {
          const p = post.attributes || post;

          const img =
            p?.cover?.url ||
            p?.cover?.data?.attributes?.url ||
            p?.cover?.formats?.medium?.url;

          const fullImage = img
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${img}`
            : "/default.jpg";

          return (
            <a
              key={p.id}
              href={`/post/${p.slug}`}
              className="flex gap-6 p-5 bg-[#0F172A] hover:bg-[#1E293B] 
                         rounded-xl border border-gray-700"
            >
              <img
                src={fullImage}
                className="w-40 h-28 rounded-lg object-cover"
              />

              <div>
                <h2 className="text-2xl font-semibold mb-1">{p.title}</h2>
                <p className="text-gray-400">{p.excerpt}</p>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
