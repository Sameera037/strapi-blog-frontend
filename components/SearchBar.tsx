// components/SearchBar.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex justify-center mb-8 gap-0 max-w-xl mx-auto"
    >
      <input
        className="flex-1 px-4 py-2 rounded-l-lg bg-[#1E293B] text-white outline-none"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-r-lg bg-blue-600 text-white font-medium"
      >
        Search
      </button>
    </form>
  );
}
