// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setMode(stored);
    document.documentElement.className = stored;
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.className = next;
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="px-4 py-1.5 text-sm border border-gray-600 rounded-lg bg-[#0F172A] hover:bg-[#1E293B]"
    >
      {mode === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
