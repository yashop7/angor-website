import { useState, useEffect } from 'react';
import { SunIcon } from '../assets/icons/SunIcon';
import { MoonIcon } from '../assets/icons/MoonIcon';

export const ThemeButton = ({ showLabel = false, className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
      setIsDarkMode(shouldBeDark);
    };
    
    checkTheme();
    
    const handleThemeChange = (event) => {
      setIsDarkMode(event.detail.isDarkMode);
    };
    
    window.addEventListener('themechange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    window.dispatchEvent(new CustomEvent('themechange', { 
      detail: { isDarkMode: newTheme } 
    }));
  };

  if (!mounted) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="size-10 bg-lightbgLight3 dark:bg-bgDark3 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showLabel && (
        <span className="text-sm text-lightprimaryText dark:text-primaryText">
          Theme:
        </span>
      )}
      <button
        onClick={toggleTheme}
        className="relative size-10 rounded-full p-2.5 transition-all duration-300 ease-in-out bg-lightbgLight1 dark:bg-bgDark3 border border-lightmainBorder dark:border-mainBorder hover:bg-lightbgLight/90 dark:hover:bg-bgDark3Hover hover:scale-105 shadow-sm hover:shadow-md"
        aria-label="Toggle theme"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full text-lightprimaryText transition-all duration-300 ease-in-out transform opacity-100 rotate-0 scale-100 dark:opacity-0 dark:rotate-180 dark:scale-75">
            <SunIcon />
          </div>

          <div className="absolute w-full h-full text-slate-400 dark:text-slate-300 transition-all duration-300 ease-in-out transform opacity-0 -rotate-180 scale-75 dark:opacity-100 dark:rotate-0 dark:scale-100">
            <MoonIcon />
          </div>
        </div>
      </button>
    </div>
  );
};