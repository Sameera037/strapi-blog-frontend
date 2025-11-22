📚 Strapi Blog Frontend (Next.js)

A modern, responsive blog website frontend built using Next.js, styled with TailwindCSS, and powered by a Strapi Headless CMS backend.

This project displays blog posts, categories, authors, and media content fetched from Strapi’s REST API.

✨ Features

✔ Home page listing all posts

✔ Single post page with full content + image

✔ Filter by Category

✔ Filter by Author

✔ Dark mode / Light mode toggle

✔ Responsive UI (mobile-first)

✔ SEO-friendly structure

✔ Fetches data from live Strapi backend

✔ Image optimization using Next.js

🛠 Tech Stack
Component	Technology
Framework	Next.js 14 (App Router)
Styling	TailwindCSS
Language	TypeScript
API Calls	fetch / REST API
Theme	next-themes (Dark Mode)
Deployment	Vercel
🚀 Setup Instructions
1️⃣ Clone the project
git clone https://github.com/Sameera037/strapi-blog-frontend.git
cd strapi-blog-frontend

2️⃣ Install dependencies
npm install

3️⃣ Create .env.local

For local Strapi backend:

NEXT_PUBLIC_STRAPI_URL=http://localhost:1337


For deployed Strapi backend (Cloudflare Tunnel):

NEXT_PUBLIC_STRAPI_URL=https://your-cloudflare-or-backend-url.com

4️⃣ Start the development server
npm run dev


Open the app at:
👉 http://localhost:3000

🌐 Folder Structure
/app
  /page.tsx               → Home page
  /post/[id]              → Single post
  /category/[slug]        → Category-wise posts
  /author/[id]            → Author-wise posts
/components               → UI components
/lib                      → API utility functions
/public                   → Static assets

🔗 Backend Repository

The frontend is connected to the following Strapi backend:

👉 https://github.com/Sameera037/strapi-blog-backend

🚀 Deployment

This frontend can be easily deployed to Vercel:

Connect your GitHub repo

Add environment variable:

NEXT_PUBLIC_STRAPI_URL=<your-backend-url>


Click Deploy

Vercel will automatically build and host your site.

📄 License

This project is for educational and internship use.
