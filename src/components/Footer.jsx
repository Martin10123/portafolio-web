import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-20">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 rounded-lg">
        <div className="sm:flex sm:items-center sm:justify-center">
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0">
            <li>
              <a href="#aboutme" className="hover:underline me-4 md:me-6">
                Sobre mi
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline me-4 md:me-6">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline me-4 md:me-6">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 font-medium sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-800 font-medium text-center">
          © {new Date().getFullYear()}{" "}
          <a
            href="/hojadevida.pdf"
            target="_blank"
            download="hojadevida.pdf"
            className="hover:underline"
          >
            Portafolio
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
