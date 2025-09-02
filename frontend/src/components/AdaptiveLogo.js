import React, { useState, useEffect } from "react";

const AdaptiveLogo = ({ className = "h-10 w-auto" }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  // Detect system theme preference and manual toggle
  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const hasLightClass = document.documentElement.classList.contains('light');
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(!hasLightClass && mediaQuery.matches);
    };

    checkTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (!document.documentElement.classList.contains('light')) {
        setIsDark(mediaQuery.matches);
      }
    };

    // Listen for manual theme toggle
    const handleThemeToggle = () => {
      checkTheme();
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    window.addEventListener('theme-toggle', handleThemeToggle);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
      window.removeEventListener('theme-toggle', handleThemeToggle);
    };
  }, []);

  const darkLogo = "https://customer-assets.emergentagent.com/job_paytools-gateway/artifacts/doathdfz_Group%202%281%29.png";
  const lightLogo = "https://customer-assets.emergentagent.com/job_paytools-gateway/artifacts/847hwine_Group%201%281%29.png";

  return (
    <div className="relative inline-block">
      {/* Logo for Dark Theme - Show when dark theme is active */}
      <img 
        src={darkLogo}
        alt="PayTools Logo (Dark Theme)" 
        className={`${className} transition-all duration-500 ${isDark ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
      />
      
      {/* Logo for Light Theme - Show when light theme is active */}
      <img 
        src={lightLogo}
        alt="PayTools Logo (Light Theme)" 
        className={`${className} transition-all duration-500 ${!isDark ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
      />
    </div>
  );
};

export default AdaptiveLogo;