import { useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
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
    <>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="border px-3 py-1 rounded shadow text-sm dark:bg-gray-800 dark:text-white bg-gray-200"
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default ThemeProvider;
