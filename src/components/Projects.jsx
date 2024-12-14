import facebookIMG from "../images/facebookdemo.png";
import universityIMG from "../images/university.png";

export const Projects = () => {
  return (
    <section className="w-full pt-24 md1:min-h-screen" id="projects">
      <div className="py-8 px-4">
        <h2 className="mb-10 text-4xl font-bold text-gray-900">Proyectos</h2>

        <div>
          <div className="flex flex-col gap-4 justify-center items-center md1:flex-row md1:gap-8 md1:justify-start">
            <div className="md1:w-[26rem]">
              <div className="relative flex w-full flex-col rounded-xl bg-quaternary bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                  <img src={facebookIMG} alt="ui/ux review check" />
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                      Demo - Facebook
                    </h5>
                  </div>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                    Esta es una demo de la pagina de facebook, imitando su
                    diseño y muchas de sus funcionalidades. Tales como el inicio
                    de sesion, el registro de usuarios, la publicacion de
                    estados, la publicacion de fotos, los comentarios, los
                    likes, etc.
                  </p>
                  <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <img
                        className="size-8"
                        src="/react.svg"
                        alt="react.svg"
                      />
                    </span>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <img
                        className="size-8"
                        src="/firebase.svg"
                        alt="firebase.svg"
                      />
                    </span>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <img
                        className="size-8"
                        src="/javascript.svg"
                        alt="javascript.svg"
                      />
                    </span>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <img
                        className="size-8"
                        src="/github.svg"
                        alt="github.svg"
                      />
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-3">
                  <a
                    className="block w-full select-none rounded-lg bg-tertiary py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    href="https://facebook-demo-15cde.web.app/"
                    target="_blank"
                    type="button"
                  >
                    Ver
                  </a>
                </div>
              </div>
            </div>
            <div className="md1:w-[26rem]">
              <div className="relative flex w-full flex-col rounded-xl bg-quaternary bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                  <img src={universityIMG} alt="ui/ux review check" />
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                      Portal - Universidad
                    </h5>
                  </div>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                    Este es un portal de una universidad, en el cual pueden
                    registrarse los estudiantes y buscar personas que te ayuden
                    a realizar tareas y si eres un experto en alguna materia,
                    puedes ofrecer tus servicios. Si conocen ofertas de trabajo,
                    pueden publicarlas en el portal, y si eres un estudiante,
                    puedes postularte a ellas.
                  </p>
                  <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <img
                        className="size-8"
                        src="/react.svg"
                        alt="react.svg"
                      />
                    </span>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <img
                        className="size-8"
                        src="/firebase.svg"
                        alt="firebase.svg"
                      />
                    </span>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <img
                        className="size-8"
                        src="/javascript.svg"
                        alt="javascript.svg"
                      />
                    </span>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <img
                        className="size-8"
                        src="/github.svg"
                        alt="github.svg"
                      />
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-3">
                  <a
                    className="block w-full select-none rounded-lg bg-tertiary py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    href="https://students-university.web.app/auth/login"
                    target="_blank"
                    type="button"
                  >
                    Ver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
