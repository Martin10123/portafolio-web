import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { SocialMediaIcons } from "./SocialMediaIcons";

export const Navbar = () => {
  const [openOptions, setOpenOptions] = useState(false);

  const handleOpenOptions = () => {
    setOpenOptions(!openOptions);
  };

  const handleCloseOptions = () => {
    setOpenOptions(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-[9999]">
      <nav className="flex justify-between items-center p-4 container mx-auto">
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="size-16" src="/logo.png" alt="Logo" />
          <h2 className="text-xl font-semibold text-black">M-S</h2>
        </div>

        <div>
          <CgMenuRightAlt
            size={30}
            className="cursor-pointer text-gray-500 hover:text-blue-500 md1:hidden"
            onClick={handleOpenOptions}
          />

          <ul
            className={`absolute top-[4.6rem] right-0 w-full bg-white border border-gray-200 rounded-lg shadow-md mt-2 p-4 grid transform -translate-x-full duration-200 ${
              openOptions ? "translate-x-0" : ""
            } md1:relative md1:shadow-none md1:bg-transparent md1:border-none md1:p-0 md1:flex md1:translate-x-0 md1:top-0 md1:m-0 md1:gap-4
              `}
          >
            <a href="#aboutme" onClick={handleCloseOptions}>
              <li className="text-gray-500 text-base border-b px-2 py-4 rounded-b hover:bg-gray-100 duration-300 cursor-pointer md1:text-black md1:font-semibold md1:py-0 md1:border-none md1:hover:text-blue-500 md1:hover:bg-transparent">
                Sobre mi
              </li>
            </a>
            <a href="#skills" onClick={handleCloseOptions}>
              <li className="text-gray-500 text-base border-b px-2 py-4 rounded-b hover:bg-gray-100 duration-300 cursor-pointer md1:text-black md1:font-semibold md1:py-0 md1:border-none md1:hover:text-blue-500 md1:hover:bg-transparent">
                Servicios
              </li>
            </a>
            <a href="#projects" onClick={handleCloseOptions}>
              <li className="text-gray-500 text-base border-b px-2 py-4 rounded-b hover:bg-gray-100 duration-300 cursor-pointer md1:text-black md1:font-semibold md1:py-0 md1:border-none md1:hover:text-blue-500 md1:hover:bg-transparent">
                Proyectos
              </li>
            </a>
            <a href="#contact" onClick={handleCloseOptions}>
              <li className="text-gray-500 text-base border-b px-2 py-4 rounded-b hover:bg-gray-100 duration-300 cursor-pointer md1:text-black md1:font-semibold md1:py-0 md1:border-none md1:hover:text-blue-500 md1:hover:bg-transparent">
                Contacto
              </li>
            </a>
            <li className="text-base px-2 py-4 rounded-b mt-4 md1:hidden">
              <SocialMediaIcons />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
