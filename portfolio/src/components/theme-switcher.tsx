"use client";

import { useTheme, type Theme } from "@/components/theme-provider";
import { Moon, Sun, Newspaper } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const themes = ["book", "newspaper", "night"] as const;
    const currentIndex = themes.indexOf((theme || "book") as Theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    setTheme(nextTheme);
  };

  const currentTheme = theme || "book";
  const label = currentTheme === "book" ? "书" : currentTheme === "newspaper" ? "报" : "夜";

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 z-[9999]">
      <span className="text-[11px] font-serif opacity-50 tracking-[0.2em] uppercase pointer-events-none transition-colors duration-500">
        {currentTheme === "night" ? "第十九卷" : "瑞阿瑞"}
      </span>
      <button
        onClick={toggleTheme}
        className="group relative p-3 transition-all duration-500 hover:scale-125 cursor-pointer flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 border border-foreground/10"
        aria-label="切换主题"
        type="button"
      >
        <div className="absolute inset-0 rounded-full blur-md bg-foreground/5 group-hover:bg-foreground/10 transition-all"></div>
        <span className="absolute -top-2 -right-2 text-[10px] font-bold text-foreground/70 bg-background/70 border border-foreground/10 rounded-full w-5 h-5 flex items-center justify-center">
          {label}
        </span>
        {currentTheme === "night" ? (
          <Sun className="w-5 h-5 text-foreground relative z-10" />
        ) : currentTheme === "book" ? (
          <Moon className="w-5 h-5 text-foreground relative z-10" />
        ) : (
          <Newspaper className="w-5 h-5 text-foreground relative z-10" />
        )}
      </button>
    </div>
  );
}
