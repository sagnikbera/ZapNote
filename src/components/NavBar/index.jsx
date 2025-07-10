import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-auto bg-yellow-100 dark:bg-yellow-300 rounded-xl p-1">
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>
        <h1 className="hidden md:block text-xl font-bold text-gray-900 dark:text-white font-mono">
          ~ Your Note App
        </h1>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="border px-3 py-1 rounded-md text-sm font-semibold bg-gray-200 dark:bg-gray-800 dark:text-white hover:shadow transition"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
};

export default NavBar;
