'use client'
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (typeof window !== 'undefined' && localStorage.getItem('theme') === 'system') {
      setTheme(isDarkMode ? 'dark' : 'light');
    }
  }, [setTheme]);

  const toggleThemeHandler = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return <button onClick={toggleThemeHandler}>Switch theme</button>;
}