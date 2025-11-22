import { getAuthor } from "@/lib/api";

export default async function AuthorPage({ params }: any) {
  const { id } = await params;

  const res = await getAuthor(id);
  const author = res?.data?.[0];

  if (!author) {
    return (
      <div className="text-white text-center p-10">Author Not Found</div>
    );
  }

  const avatar =
    author.avatar?.formats?.medium?.url ||
    author.avatar?.formats?.small?.url ||
    author.avatar?.url ||
    "/default-avatar.png";

  const posts = author.posts || [];

  return (
    <main className="p-10 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">
        Posts by {author.name}
      </h1>

      <img
        src={`http://localhost:1337${avatar}`}
        className="w-28 h-28 rounded-full mx-auto mb-6"
      />

      <p className="text-gray-300 mb-10 max-w-xl mx-auto">
        {author.bio?.[0]?.children?.[0]?.text}
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-400">No posts by this author.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post: any) => (
            <a
              key={post.id}
              href={`/post/${post.slug}`}
              className="p-5 rounded-xl bg-[#0F1620] border border-gray-700 
                         hover:bg-[#1A2332] transition"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 mt-2">{post.excerpt}</p>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
