✅ Next.js Blog Frontend – README (Updated & Professional)
🚀 Overview

This is a modern, fully responsive blog frontend built with Next.js (App Router) and styled using TailwindCSS.
It connects to a Strapi Headless CMS backend and supports dynamic pages for:

Home page (latest posts)

Single post view

Authors page & author posts

Categories & filtered posts

Search functionality

Dark mode UI

This project is built with clean architecture, strong SEO, and reusable components.

🛠 Tech Stack
Technology	Purpose
Next.js 14+ (App Router)	Frontend Framework
React	UI Components
TailwindCSS	Styling
TypeScript	Type Safety
Axios / Fetch API	API Requests
next-themes	Dark Mode
📁 Project Structure
my-blog/
│── app/
│   ├── page.tsx                  # Home page
│   ├── post/[slug]/page.tsx      # Single post page
│   ├── authors/page.tsx          # Authors list
│   ├── author/[id]/page.tsx      # Author details
│   ├── category/[slug]/page.tsx  # Category posts
│   ├── search/page.tsx           # Search UI
│
│── components/
│── lib/                          # API helper functions
│── public/
│── .env.local
│── tailwind.config.js
│── package.json

⚙️ Setup Instructions (Local Development)
1️⃣ Clone the Repository
git clone https://github.com/Sameera037/strapi-blog-frontend.git
cd strapi-blog-frontend

2️⃣ Install Dependencies
npm install

3️⃣ Add Environment Variables

Create a .env.local file:

NEXT_PUBLIC_STRAPI_URL=http://localhost:1337


(To use a hosted Strapi backend, replace with its URL.)

🚀 Development Server

Start the frontend:

npm run dev


Runs at:

👉 http://localhost:3000

📡 Connecting to the Backend

Your Strapi backend should contain:

Posts

Authors

Categories

Media uploads

API endpoints used:

GET /api/posts?populate=*
GET /api/categories?populate=*
GET /api/authors?populate=*


All requests are handled in:

/lib/api.ts

🌙 Dark Mode Support

Dark mode is implemented using next-themes,
which remembers the user's theme preference automatically.

🔍 Search Functionality

Users can search posts by:

Title

Description

Content

Search runs client-side for faster performance.

💡 Key Features

✔ Modern UI (Tailwind + custom components)
✔ Fully responsive
✔ App Router (Next.js 14+)
✔ Category wise filtering
✔ Author wise filtering
✔ SEO-friendly routing
✔ Dynamic pages using slugs
✔ Dark mode toggle
✔ Works with any Strapi backend

📦 Backend Repository (Required)

👉 Strapi Backend GitHub:
https://github.com/Sameera037/strapi-blog-backend

🤝 Contributing

Fork the project

Create a feature branch

Commit your changes

Push and submit a PR

📄 License

This project is licensed under the MIT License.
