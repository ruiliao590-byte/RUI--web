"use client";

import * as React from "react";

export type Theme = "book" | "night";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "rui-theme";

function isTheme(value: string | null): value is Theme {
  return value === "book" || value === "night";
}

export function ThemeProvider({
  children,
  defaultTheme = "book",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);

  const setTheme = React.useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    }
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", nextTheme);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isTheme(stored) && stored !== theme) {
      setThemeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
      return;
    }

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const value = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const parts = window.location.pathname.split("/").filter(Boolean);
    const first = parts[0] || "";
    const basePrefix = first && first !== "_next" ? `/${first}` : "";
    const bgUrl = `${basePrefix}/paper-texture.jpg`;
    document.documentElement.style.setProperty("--bg-image", `url('${bgUrl}')`);
  }, []);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
