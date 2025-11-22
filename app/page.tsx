// app/page.tsx
import { getPosts } from "../lib/api";

export default async function Home() {
  const posts = await getPosts();
  const data = posts?.data || [];

  return (
    <main className="p-2">
      <h1 className="text-4xl font-bold text-center mb-10">
        Latest Posts
      </h1>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {data.map((post: any) => {
          const slug = post.slug;
          const title = post.title;
          const excerpt = post.excerpt;

          const img =
            post?.cover?.url ||
            post?.cover?.data?.attributes?.url ||
            post?.cover?.formats?.medium?.url ||
            post?.cover?.formats?.small?.url;

          const fullImage = img
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${img}`
            : "/default.jpg";

          return (
            <a
              key={post.id}
              href={`/post/${slug}`}
              className="
                flex gap-6 p-5 rounded-xl shadow-lg border
                bg-white border-gray-300 hover:bg-gray-100
                dark:bg-[#0F172A] dark:border-gray-800 dark:hover:bg-[#1E293B]
                transition
              "
            >
              <img
                src={fullImage}
                alt={title}
                className="w-48 h-32 object-cover rounded-lg"
              />

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2
                               text-gray-900 dark:text-white">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {excerpt}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
