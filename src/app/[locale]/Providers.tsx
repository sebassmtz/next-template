"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import PageLayout from "@/components/PageLayout/PageLayout";

interface PageProps {
  children: ReactNode;
}

export default function Providers({ children }: PageProps) {

  return <ThemeProvider>
    {children}</ThemeProvider>;
}
