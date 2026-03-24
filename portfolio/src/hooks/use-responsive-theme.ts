"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useResponsiveTheme() {
  const { setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setTheme("newspaper");
        } else if (window.innerWidth > 1024) {
          setTheme("book");
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isMounted, setTheme]);
}
