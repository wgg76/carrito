// src/components/ThemeButton.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
  onClick={toggleTheme}
  className={`px-3 py-2 rounded focus:outline-none ${
    theme === "light"
      ? "bg-black text-white" 
      : "bg-white text-black" 
  }`}
>
  Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
</button>
  );
};

export default ThemeButton;
