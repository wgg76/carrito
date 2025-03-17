// src/components/ProductList.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        // Transformamos los datos para que tengan la misma estructura que Fake Store API
        const transformedData = data.map((product) => ({
          ...product,
          image: product.images[0], // Asignamos la primera imagen al campo "image"
        }));
        console.log("Productos transformados:", transformedData);
        setProducts(transformedData);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);
  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-10 text-center">Explora Nuestro Catálogo</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           {/*se agrego un slice en el componente donde se renderiza la lista, ya quetenia muchos productos la lista */}
          {products.slice(0, 20).map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
          </div>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ProductList;
