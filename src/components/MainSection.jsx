import { SiReaddotcv } from "react-icons/si";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { MdOutlineContactSupport } from "react-icons/md";

export const MainSection = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV-MARTIN-NORMAL.pdf";
    link.download = "HOJA DE VIDA - MARTIN.pdf";
    link.click();
  };

  const goToContactPhone = () => {
    const linkPhone = document.createElement("a");
    linkPhone.href = "https://wa.me/573006830624";
    linkPhone.target = "_blank";
    linkPhone.click();
  };

  return (
    <section
      className="m-auto w-full px-4 py-8 md1:grid md1:grid-cols-2 md1:gap-8 lg:px-8 xl:min-h-[calc(100vh-83px)]"
      id="aboutme"
    >
      <div className="md1:max-w-lg lg1:max-w-xl md1:m-auto">
        <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          Hola, <br /> Soy Martin Simarra
        </h1>

        <p className="text-base mt-4 text-gray-500 lg:text-lg">
          Desarrollador de software con experiencia en React.js, Vue.js, HTML,
          CSS, Tailwind, TypeScript, JavaScript y Java. Apasionado por la
          creación de soluciones innovadoras, optimizadas y escalables. <br />
          <br /> Siempre en constante aprendizaje y dispuesto a compartir
          conocimientos para impulsar el crecimiento tecnológico.
        </p>

        <div className="flex flex-row gap-2 mt-6 md:gap-4 lg:mt-10">
          <button
            className="w-full border flex items-center justify-center gap-2 bg-white border-blue-500 text-blue-500 px-4 py-3.5 rounded-md hover:bg-blue-500 hover:border-white hover:text-white duration-300"
            onClick={downloadCV}
          >
            <SiReaddotcv size={20} />
            <p>CV</p>
          </button>
          <button
            className="w-full border flex items-center justify-center gap-2 bg-white border-blue-500 text-blue-500 px-4 py-3.5 rounded-md hover:bg-blue-500 hover:border-white hover:text-white duration-300"
            onClick={goToContactPhone}
          >
            <MdOutlineContactSupport size={20} />
            <p>Contactar</p>
          </button>
        </div>

        <div className="mt-8 lg:mt-10">
          <SocialMediaIcons />
        </div>
      </div>

      <div className="mt-8 lg:h-full lg1:mt-0 lg1:flex lg1:justify-center lg1:items-center">
        <img className="max-w-2xl" src="/programming.svg" alt="Jewelry-shop" />
      </div>
    </section>
  );
};
