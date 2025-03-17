import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Función para obtener el tema inicial de localStorage
  const getInitialTheme = () => {
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? savedTheme : "light";
    } catch (error) {
      console.error("Error al leer el tema de localStorage:", error);
      return "light";
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Cada vez que el tema cambia, se guarda en localStorage
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error al guardar el tema en localStorage:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
