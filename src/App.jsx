// src/App.jsx
import React, { useContext, useState } from "react";
import { CartProvider } from "./Context/CartContext";
import { ThemeProvider, ThemeContext } from "./Context/ThemeContext";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <Header onToggleCart={toggleCart} />
        <div className="container mx-auto p-4">
          <ProductList />
        </div>
        {showCart && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg w-11/12 md:w-1/2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Carrito de Compras</h2>
                <button onClick={toggleCart} className="text-red-500 font-bold">
                  Cerrar
                </button>
              </div>
              <Cart />
            </div>
          </div>
        )}
         {/* Footer al final */}
         <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
    

  );
};

export default App;
