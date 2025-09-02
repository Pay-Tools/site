import React, { useState, useEffect } from "react";

const AdaptiveLogo = ({ className = "h-10 w-auto" }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  // Detect system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const darkLogo = "https://customer-assets.emergentagent.com/job_paytools-gateway/artifacts/doathdfz_Group%202%281%29.png";
  const lightLogo = "https://customer-assets.emergentagent.com/job_paytools-gateway/artifacts/847hwine_Group%201%281%29.png";

  return (
    <div className="relative">
      {/* Logo for Dark Theme */}
      <img 
        src={darkLogo}
        alt="PayTools Logo" 
        className={`${className} transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
      />
      
      {/* Logo for Light Theme */}
      <img 
        src={lightLogo}
        alt="PayTools Logo" 
        className={`${className} transition-opacity duration-300 ${!isDark ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
      />
    </div>
  );
};

export default AdaptiveLogo;