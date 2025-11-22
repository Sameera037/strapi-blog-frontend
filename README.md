Next.js Blog Frontend – README (Professional Version)
🚀 Overview

This is a modern, fully responsive blog frontend built with Next.js (App Router) and styled using TailwindCSS.
It connects to a Strapi Headless CMS backend and supports dynamic pages for:

Home page (latest posts)

Single post view

Authors page & author posts

Categories page & filtered posts

Search functionality

Dark mode UI

This project is optimized for performance, SEO, and clean UI/UX.

🛠️ Tech Stack
Technology	Purpose
Next.js 14+ (App Router)	Frontend framework
React	Component-based UI
TailwindCSS	Styling
TypeScript	Type safety
Axios	API requests
next-themes	Dark Mode
Vercel	Deployment (optional)
📁 Project Structure
my-blog/
│── app/
│   ├── page.tsx            # Home page
│   ├── post/[slug]/page.tsx   # Single post page
│   ├── authors/page.tsx       # Authors list
│   ├── author/[id]/page.tsx   # Author details
│   ├── category/[slug]/page.tsx # Category page
│   ├── search/page.tsx        # Search UI
│── components/
│── lib/                     # API helper functions
│── public/
│── .env.local
│── tailwind.config.js
│── package.json

⚙️ Setup Instructions (Local Development)
1️⃣ Clone the Repository
git clone <your-frontend-repo-url>
cd my-blog

2️⃣ Install Dependencies
npm install

3️⃣ Add Environment Variables

Create a .env.local file:

NEXT_PUBLIC_STRAPI_URL=http://localhost:1337


When deployed online, replace it with:
https://your-strapi-backend-url.com

🚀 Development Server

Start the frontend:

npm run dev


Runs at:

👉 http://localhost:3000

📡 Connecting to Strapi Backend

Your Strapi backend must have these collections:

Posts

Authors

Categories

Media Uploads

API used:

GET /api/posts?populate=*
GET /api/categories?populate=*
GET /api/authors?populate=*


All API calls are handled through:

/lib/api.ts

🌙 Dark Mode Support

Dark mode is implemented using:

next-themes


It remembers theme preference using localStorage.

🔍 Search Feature

Users can search posts by:

Title

Description

Content

The search is performed client-side for speed.

💡 Key Features
✔ Modern UI (Tailwind + custom components)
✔ Fully responsive design
✔ App Router (Next.js 14+)
✔ Category filter pages
✔ Author details with all posts
✔ Dynamic routing for posts & categories
✔ Smooth dark mode toggle
✔ SEO friendly structure
✔ Highly flexible — works with any Strapi backend
📦 Deployment (Optional)
🔹 Deploy Frontend on Vercel

Just push to GitHub → Import repo in Vercel.

Set the following environment variable:

NEXT_PUBLIC_STRAPI_URL=https://your-live-strapi-backend.com

🤝 Contributing

Fork the project

Create a new branch:

git checkout -b feature/xyz


Commit changes

Push to your branch

Submit a pull request

📄 License

This project is licensed under the MIT License.

⭐ Acknowledgements

Next.js Team

Strapi Community

TailwindCSS

Open-source contributors
