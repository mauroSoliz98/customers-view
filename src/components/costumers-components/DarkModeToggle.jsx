// DarkToggle.jsx
import { useEffect, useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 rounded-full bg-gray-200 hover:bg-purple-600 hover:text-white dark:bg-gray-800 text-black dark:text-white shadow"
    >
      {darkMode ? <RiSunFill size={30}/> : <RiMoonClearFill size={30} />}
    </button>
  );
};

export default DarkModeToggle;