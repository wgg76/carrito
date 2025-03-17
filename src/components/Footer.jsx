import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 dark:bg-gray-900 text-white p-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Mercado Digital. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
