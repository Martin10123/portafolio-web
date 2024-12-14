import React from "react";

export const Sidebar = ({ openSidebar, handleOpenSidebar }) => {
  const onScrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    handleOpenSidebar();
  };

  const onGoToSocialMedia = (url) => {
    window.open(url, "_blank");
  };

  return (
    <aside
      className={`w-full flex flex-col fixed h-screen top-0 left-0 z-[9999] bg-tertiary overflow-auto md1:sticky md1:top-[90px] md1:h-[calc(100vh-90px)] md1:max-w-[22rem] duration-300
     md1:w-max transform ${
       openSidebar ? "translate-x-0" : "-translate-x-full"
     } md1:translate-x-0 md1:transform-none md1:border-r-2 md1:border-quaternary md1:shadow-lg`}
    >
      <div className="flex items-center justify-between p-4 bg-quaternary sticky top-0 z-50 md1:bg-transparent md1:hidden">
        <img
          className="size-14 bg-white object-cover rounded-full cursor-pointer"
          src="/logo.png"
          alt="Imagen principal"
        />

        <button
          type="button"
          className="bg-[#ffffff24] size-10 rounded-full p-2 text-secondary cursor-pointer text-sm flex items-center justify-center"
          onClick={handleOpenSidebar}
        >
          <svg
            aria-hidden="true"
            className="size-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      <div className="w-full h-full p-4 overflow-auto relative z-50 md1:flex md1:flex-col md1:gap-8 py-8">
        <div className="md1:grid md1:gap-6">
          <div>
            <h2 className="text-white text-4xl font-semibold">
              Martin Simarra
            </h2>
            <p className="text-quaternary text-lg font-semibold">
              Desarrollador de Software
            </p>

            <p
              className="text-white text-sm font-normal mt-4 md1:text-base md1:mt-2 md1:text-secondary"
              style={{ lineHeight: "1.5" }}
            >
              Como profesional, me caracterizo por ser una persona responsabley
              dedicada, con una notable capacidad para aportar dinamismo y
              creatividad en cada proyecto que emprendo. Soy un apasionado de la
              tecnología y la programación, y me gusta estar en constante
              aprendizaje para poder ofrecer soluciones innovadoras y de
              calidad.
            </p>
          </div>

          <ul className="flex items-center gap-2 my-4">
            <li
              className="bg-[#ffffff24] rounded-full p-2 cursor-pointer duration-300 md1:hover:bg-quaternary"
              onClick={() =>
                onGoToSocialMedia(
                  "mailto:martinsimarra4@gmail.com?subject=Consulta%20sobre%20el%20portafolio&body=Hola%2C%20me%20interesa%20tu%20portafolio.%20Quisiera%20más%20información.%20Gracias!"
                )
              }
            >
              <img className="size-8" src="/gmail.svg" alt="gmail.svg" />
            </li>
            <li
              className="bg-[#ffffff24] rounded-full p-2 cursor-pointer duration-300 md1:hover:bg-quaternary"
              onClick={() =>
                onGoToSocialMedia("https://github.com/Martin10123")
              }
            >
              <img className="size-8" src="/github.svg" alt="github.svg" />
            </li>
            <li
              className="bg-[#ffffff24] rounded-full p-2 cursor-pointer duration-300 md1:hover:bg-quaternary"
              onClick={() =>
                onGoToSocialMedia(
                  "https://www.linkedin.com/in/martin-elias-83038b22b/"
                )
              }
            >
              <img className="size-8" src="/linkedin.svg" alt="linkedin.svg" />
            </li>
            <li
              className="bg-[#ffffff24] rounded-full p-2 cursor-pointer duration-300 md1:hover:bg-quaternary"
              onClick={() =>
                onGoToSocialMedia("https://www.instagram.com/martinelias1012/")
              }
            >
              <img
                className="size-8"
                src="/instagram.svg"
                alt="instagram.svg"
              />
            </li>
          </ul>
        </div>

        <ul className="flex flex-col gap-2 text-white md1:gap-3">
          <li
            className="bg-[#ffffff24] py-4 px-2 rounded-lg cursor-pointer duration-300 md1:py-3 md1:w-full md1:px-0 md1:hover:bg-quaternary"
            onClick={() => onScrollToSection("aboutme")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 px-2.5 text-sm font-semibold md1:text-base">
                <img className="size-8" src="/home.svg" alt="correo" />
                <p className="text-white">Inicio</p>
              </div>
            </div>
          </li>
          <li
            className="bg-[#ffffff24] py-4 px-2 rounded-lg cursor-pointer duration-300 md1:py-3 md1:w-full md1:px-0 md1:hover:bg-quaternary"
            onClick={() => onScrollToSection("aboutme")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 px-2.5 text-sm font-semibold md1:text-base">
                <img className="size-8" src="/user.svg" alt="correo" />
                <p className="text-white">Sobre mi</p>
              </div>
            </div>
          </li>
          <li
            className="bg-[#ffffff24] py-4 px-2 rounded-lg cursor-pointer duration-300 md1:py-3 md1:w-full md1:px-0 md1:hover:bg-quaternary"
            onClick={() => onScrollToSection("skills")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 px-2.5 text-sm font-semibold md1:text-base">
                <img className="size-8" src="/skills.svg" alt="correo" />
                <p className="text-white">Habilidades</p>
              </div>
            </div>
          </li>
          <li
            className="bg-[#ffffff24] py-4 px-2 rounded-lg cursor-pointer duration-300 md1:py-3 md1:w-full md1:px-0 md1:hover:bg-quaternary"
            onClick={() => onScrollToSection("projects")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 px-2.5 text-sm font-semibold md1:text-base">
                <img className="size-8" src="/projects.svg" alt="correo" />
                <p className="text-white">Proyectos</p>
              </div>
            </div>
          </li>
          <li
            className="bg-[#ffffff24] py-4 px-2 rounded-lg cursor-pointer duration-300 md1:py-3 md1:w-full md1:px-0 md1:hover:bg-quaternary"
            onClick={() => onScrollToSection("contact")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 px-2.5 text-sm font-semibold md1:text-base">
                <img className="size-8" src="/phone.svg" alt="correo" />
                <p className="text-white">Contactos</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};
