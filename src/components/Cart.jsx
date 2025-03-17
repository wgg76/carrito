import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, Number(newQuantity));
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div className="max-h-96 overflow-y-auto">
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4 p-2 border-b">
                {/* aca muestra la imagen del producto */}
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <span>
                    {item.name} - ${item.price.toFixed(2)} x{" "}
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="ml-2 w-16 p-1 border rounded bg-white text-black"
                    />
                  </span>
                </div>

                {/* este es el botón Eliminar */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <h3 className="text-xl font-bold mt-4">Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;