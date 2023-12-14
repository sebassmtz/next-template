"use client";
import { useTheme } from "next-themes";
import { useEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function ThemeSwitcherSelect() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (
      typeof window !== "undefined" &&
      localStorage.getItem("theme") === "system"
    ) {
      setTheme(isDarkMode ? "dark" : "light");
    }
  }, [setTheme]);

  return (
    <select value={resolvedTheme} onChange={(e) => setTheme(e.target.value)}>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}
