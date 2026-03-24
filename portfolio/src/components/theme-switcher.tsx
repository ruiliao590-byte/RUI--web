"use client";

import { useTheme } from "next-themes";
import { Book, Newspaper } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "book" ? "newspaper" : "book")}
      className="fixed bottom-8 right-8 bg-accent text-background p-3 rounded-full shadow-lg"
    >
      {theme === "book" ? (
        <Newspaper className="w-6 h-6" />
      ) : (
        <Book className="w-6 h-6" />
      )}
    </button>
  );
}
