import { BsMenuButtonWide } from "react-icons/bs";
import { technologies } from "../helpers/techologies";

export const ConfidenceQualitySection = () => {
  return (
    <section
      className="min-h-screen w-full bg-[#f5f5f5b5] flex flex-col justify-center px-4 py-8 lg:p-20"
      id="skills"
    >
      <div className="md1:text-center md1:grid md1:gap-4 md1:pt-6">
        <h2 className="text-3xl font-bold lg:text-5xl">
          Habilidades y Tecnologías
        </h2>
        <p className="text-base mt-4 xl:max-w-[70%] xl:m-auto">
          En esta sección encontrarás las habilidades y tecnologías que manejo
          actualmente. Puedes ver información más detallada de cada una de ellas
          haciendo clic en los logos.
        </p>
      </div>

      <div className="w-full px-4 py-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="lg:max-w-[35rem] lg:m-auto">
          <h4 className="text-base font-bold text-blue-500">Tecnologías</h4>

          <p className="text-base my-6 text-gray-500">
            En la actualidad, tengo conocimientos en los siguientes lenguajes de
            programación y tecnologías:
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-2">
            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>HTML5</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>CSS3</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>TailwindCSS</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>JavaScript</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>Typescript</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>ReactJS</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>VueJS</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>Java</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>Spring boot</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>MySQL</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>MongoDB</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>Firebase</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>Github</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>Git</span>
            </li>

            <li className="flex items-center space-x-2">
              <BsMenuButtonWide className="text-blue-500" />
              <span>Postman</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-4 gap-8 mt-10 lg:mt-0">
          {technologies.map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="size-14 duration-300 hover:scale-75 cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
