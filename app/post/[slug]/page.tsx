// app/post/[slug]/page.tsx
import { getPostBySlug } from "../../../lib/api";

export default async function PostPage({ params }: any) {
  const { slug } = await params;

  if (!slug) return <div className="p-8 text-white">Invalid slug</div>;

  const res = await getPostBySlug(slug);
  const post = res?.data?.[0];

  if (!post) return <div className="p-8 text-white">Post Not Found</div>;

  const coverUrl =
    post?.cover?.url || post?.cover?.data?.attributes?.url || "";

  const fullImage = coverUrl
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverUrl}`
    : "/default.jpg";

  // Simple rich-text to plain HTML (your previous logic)
  let contentHtml = "";
  if (Array.isArray(post?.content)) {
    contentHtml = post.content
      .map((block: any) => block.children?.map((c: any) => c.text).join(" "))
      .join("<br/><br/>");
  }

  return (
    <main className="min-h-screen text-white px-4 flex justify-center">
      <div className="max-w-3xl w-full py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        <img
          src={fullImage}
          alt={post.title}
          className="rounded-xl shadow-lg mb-8 w-full max-h-[420px] object-cover"
        />

        <article
          className="prose prose-invert prose-lg leading-relaxed mt-8"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </main>
  );
}
