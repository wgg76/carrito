import React from "react";
import ThemeButton from "./ThemeButton";

const Header = ({ onToggleCart }) => {
  return (
    <header className="bg-gray-700 dark:bg-gray-900 text-white p-3 flex justify-between items-center">
      <h1 className="text-7xl font-bold m-4 text-white">Mercado Digital</h1>
      <div className="flex space-x-4">
        <button
          onClick={onToggleCart}
          className="bg-gray-400 px-3 py-2 rounded hover:bg-gray-800 transition"
        >
          Carrito de Compras
        </button>
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
