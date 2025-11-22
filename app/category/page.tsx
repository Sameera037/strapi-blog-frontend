// app/category/page.tsx
import { getCategories } from "../../lib/api";

export default async function CategoryListPage() {
  const res = await getCategories();
  const categories = res?.data || [];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {categories.map((cat: any) => {
          const slug = cat.slug || cat?.attributes?.slug;
          const name = cat.name || cat?.attributes?.name;

          return (
            <a
              key={cat.id}
              href={`/category/${slug}`}
              className="p-5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] 
                         border border-gray-700 transition 
                         text-lg font-semibold text-center"
            >
              {name}
            </a>
          );
        })}
      </div>
    </main>
  );
}
