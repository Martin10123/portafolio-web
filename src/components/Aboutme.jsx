import React from "react";

export const Aboutme = () => {
  const onDownloadCV = () => {
    const a = document.createElement("a");
    a.href = "/hojadevida.pdf";
    a.download = "hojadevida.pdf";
    a.click();

    window.open("/hojadevida.pdf", "_blank");

    a.remove();
  };

  const onGoToSocialMedia = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section
      className="pt-16 md1:w-full md1:h-[calc(100vh-90px)] md1:flex md1:justify-center md1:items-center md1:pt-0"
      id="aboutme"
    >
      <div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            Hola, Soy Martin Simarra
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48">
            Desarrollador de software, apasionado por la tecnología y la
            programación. Me encanta aprender cosas nuevas y compartir mis
            conocimientos con los demás.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:gap-4">
            <a
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-quaternary hover:bg-opacity-50"
              href="#skills"
            >
              Habilidades
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-tertiary hover:bg-opacity-50"
              onClick={onDownloadCV}
            >
              Hoja de vida
              <svg
                className="size-5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                />
              </svg>
            </button>
          </div>

          <ul className="flex items-center justify-center gap-2 my-6">
            <li
              className="bg-[#ffffff24] rounded-full p-2 cursor-pointer duration-300 hover:bg-tertiary"
              onClick={() =>
                onGoToSocialMedia(
                  "mailto:martinsimarra4@gmail.com?subject=Consulta%20sobre%20el%20portafolio&body=Hola%2C%20me%20interesa%20tu%20portafolio.%20Quisiera%20más%20información.%20Gracias!"
                )
              }
            >
              <img className="size-8" src="/gmail.svg" alt="gmail.svg" />
            </li>
            <li
              className="bg-[#ffffff24] rounded-full p-2 cursor-pointer duration-300 hover:bg-tertiary"
              onClick={() =>
                onGoToSocialMedia("https://github.com/Martin10123")
              }
            >
              <img className="size-8" src="/github.svg" alt="github.svg" />
            </li>
            <li
              className="bg-[#ffffff24] rounded-full p-2 cursor-pointer duration-300 hover:bg-tertiary"
              onClick={() =>
                onGoToSocialMedia(
                  "https://www.linkedin.com/in/martin-elias-83038b22b/"
                )
              }
            >
              <img className="size-8" src="/linkedin.svg" alt="linkedin.svg" />
            </li>
            <li
              className="bg-[#ffffff24] rounded-full p-2 cursor-pointer duration-300 hover:bg-tertiary"
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
      </div>
    </section>
  );
};
