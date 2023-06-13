"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const ThemeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <div
      className="text-slate-900 dark:text-slate-50"
      onClick={() => setTheme("light")}
    >
      {currentTheme === "light" ? "dark" : "light"}
    </div>
  );
};

export default ThemeToggler;
