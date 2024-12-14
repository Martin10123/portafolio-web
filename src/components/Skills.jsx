import React from "react";

export const Skills = () => {
  return (
    <section
      className="w-full pt-24 md1:pt-0 md1:min-h-screen md1:grid md1:grid-cols-[auto,1fr] md1:gap-6"
      id="skills"
    >
      <div className="py-8 px-4 md1:w-[60%]">
        <h2 className="mb-10 text-4xl font-bold text-gray-900 md1:mb-20">
          Habilidades
        </h2>

        <figure className="mb-10 md1:hidden">
          <img src="/skills_foto.svg" alt="skills_foto" />
        </figure>

        <div className="flex flex-col">
          <div className="flex items-start relative pb-20 justify-start">
            <svg
              className="flex-shrink-0 relative top-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z" />
            </svg>
            <div className="border-r-2 border-black absolute h-full top-6 left-[0.7rem] z-10"></div>

            <div>
              <h3 className="font-bold text-[2rem] mb-6">Frontend</h3>
              <ul className="flex flex-wrap gap-4 md1:gap-10">
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img className="size-40 md1:size-16" src="/html.svg" alt="" />
                  <span className="text-lg font-medium">HTML</span>
                </li>
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img className="size-40 md1:size-16" src="/css.svg" alt="" />
                  <span className="text-lg font-medium">CSS</span>
                </li>

                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/react.svg"
                    alt=""
                  />
                  <span className="text-lg font-medium">React</span>
                </li>
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/tailwind.svg"
                    alt=""
                  />
                  <span className="text-lg font-medium">Tailwind CSS</span>
                </li>
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img className="size-40 md1:size-16" src="/vue.svg" alt="" />
                  <span className="text-lg font-medium">Vue</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start relative pb-20 justify-start">
            <svg
              className="flex-shrink-0 relative top-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z" />
            </svg>
            <div className="border-r-2 border-black absolute h-full top-6 left-[0.7rem] z-10"></div>

            <div>
              <h3 className="font-bold text-[2rem] mb-6">Backend</h3>
              <ul className="flex flex-wrap gap-4 md1:gap-10">
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/springboot.svg"
                    alt=""
                  />
                  <span className="text-lg font-medium">Spring boot</span>
                </li>
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/firebase.svg"
                    alt=""
                  />
                  <span className="text-lg font-medium">Firebase</span>
                </li>
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/mysql.svg"
                    alt=""
                  />
                  <span className="text-lg font-medium">MySql</span>
                </li>
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/laravel.svg"
                    alt=""
                  />
                  <span className="text-lg font-medium">Laravel</span>
                </li>
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/javascript.svg"
                    alt=""
                  />
                  <span className="text-lg font-medium">JavaScript</span>
                </li>
                <li className="grid gap-4 md1:text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/typescript.svg"
                    alt=""
                  />
                  <span className="text-lg font-medium">Typescript</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start relative pb-5 justify-start">
            <svg
              className="flex-shrink-0 relative top-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z" />
            </svg>
            <div className="border-r-2 border-black absolute h-full top-6 left-[0.7rem] z-10"></div>

            <div className="">
              <h3 className="font-bold text-[2rem] mb-6">Software</h3>
              <ul className="flex flex-wrap gap-4 md1:gap-10">
                <li className="text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/vsc.svg"
                    alt="Visual studio codgrid gap-4e"
                  />
                  <span className="text-lg font-medium">
                    Visual studio code
                  </span>
                </li>
                <li className="text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/postman.svg"
                    alt="Visual studio codgrid gap-4e"
                  />
                  <span className="text-lg font-medium">Postman</span>
                </li>
                <li className="text-center hover:transform hover:scale-110 duration-300 cursor-pointer">
                  <img
                    className="size-40 md1:size-16"
                    src="/netbeans.svg"
                    alt="Visual studio codgrid gap-4e"
                  />
                  <span className="text-lg font-medium">Netbeans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <figure className="hidden md1:block py-8 relative top-28">
        <img src="/skills_foto.svg" alt="" />
      </figure>
    </section>
  );
};
