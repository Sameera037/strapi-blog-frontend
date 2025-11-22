const base = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/* ------------------- SAFE FETCH ------------------- */
async function safeFetch(url: string) {
  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error("❌ Failed:", res.status, res.statusText, "URL:", url);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("🔥 Fetch error:", url, err);
    return null;
  }
}

/* ------------------- POSTS ------------------- */
export async function getPosts() {
  return safeFetch(`${base}/api/posts?populate=*`);
}

export async function getPostBySlug(slug: string) {
  return safeFetch(
    `${base}/api/posts?filters[slug][$eq]=${slug}&populate=*`
  );
}

/* ------------------- CATEGORIES ------------------- */
export async function getCategories() {
  return safeFetch(`${base}/api/categories?populate=*`);
}

// ⭐ Properly populated category → posts → cover images
export async function getCategoryBySlug(slug: string) {
  const url = `${base}/api/categories?filters[slug][$eq]=${slug}&populate[posts][populate][cover][populate]=*`;
  console.log("📡 Fetch Category:", url);
  return safeFetch(url);
}

/* ------------------- SEARCH ------------------- */
export async function searchPosts(query: string) {
  return safeFetch(
    `${base}/api/posts?filters[title][$containsi]=${encodeURIComponent(query)}&populate=*`
  );
}

/* ------------------- AUTHORS ------------------- */

// ⭐ Get ALL authors
export async function getAllAuthors() {
  const url = `${base}/api/authors?populate=*`;
  console.log("📡 Fetch All Authors:", url);
  return safeFetch(url);
}

// ⭐ Get ONE author using filters[id][$eq]
export async function getAuthor(id: number | string) {
  const url = `${base}/api/authors?filters[id][$eq]=${id}&populate=*`;
  console.log("📡 Fetch Author:", url);
  return safeFetch(url);
}
