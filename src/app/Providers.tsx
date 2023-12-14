"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

interface PageProps {
  children: ReactNode;
}

export default function Providers({ children }: PageProps) {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      {children}
    </ThemeProvider>
  );
}
