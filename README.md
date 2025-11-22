Strapi Blog Frontend (Next.js)

A modern, responsive blog frontend built with Next.js + TailwindCSS, connected to a Strapi backend.

✨ Features

Display all posts

Single post page

Category filtering

Author posts

Search bar

Responsive UI

Dark mode UI

🛠 Tech Stack

Next.js 14 (App Router)

TailwindCSS

TypeScript

Axios

next-themes for Dark Mode

🚀 Setup Instructions

Clone the project:

git clone https://github.com/Sameera037/strapi-blog-frontend.git
cd strapi-blog-frontend
npm install
npm run dev


Create .env.local:

NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

🌐 Folder Structure
/app
  /post/[slug]
  /category
  /author
/components
/lib (API functions)

🔗 Backend Repo

👉 https://github.com/Sameera037/strapi-blog-backend
