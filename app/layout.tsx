import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "A clean and modern blog built with Next.js + Strapi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-[#0B0D10] text-gray-200
                    ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Navbar */}
        <header className="py-4 border-b border-gray-800 bg-transparent">
          <nav className="max-w-5xl mx-auto px-5 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              MyBlog
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/category" className="hover:text-white">Categories</Link>
              <Link href="/search" className="hover:text-white">Search</Link>
              <Link href="/authors" className="hover:text-white">Authors</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-5 py-10">{children}</main>
      </body>
    </html>
  );
}

