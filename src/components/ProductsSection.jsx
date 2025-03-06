import { CardProduct } from "./CardProduct";
import facebookDemo from "../images/facebookdemo.png";
import universityDemo from "../images/university.png";
import taxisDemo from "../images/taxis-app.png";
import enviappDemo from "../images/envi-app.png";

export const ProductsSection = () => {
  return (
    <section
      className="w-full bg-white px-4 py-8 lg:p-20 min-h-screen"
      id="projects"
    >
      <div className="">
        <div className="md1:text-center md1:grid md1:gap-4 md1:pt-6">
          <h2 className="text-3xl font-bold lg:text-5xl">
            Proyectos desarrollados
          </h2>
          <p className="text-base mt-4 xl:max-w-[70%] xl:m-auto">
            En esta sección encontrarás los proyectos que he desarrollado
            recientemente. Puedes ver más detalles de cada proyecto haciendo
            clic en el botón {"'Proyecto'"}.
          </p>
        </div>

        <div className="flex flex-col flex-wrap justify-center gap-8 mt-4 md:flex-row md:mt-10">
          <CardProduct
            title="Facebook Demo"
            description="
            Esta es una demo de la pagina de facebook, imitando su
            diseño y muchas de sus funcionalidades. Tales como el inicio
            de sesion, el registro de usuarios, la publicacion de
            estados, la publicacion de fotos, los comentarios, los
            likes, etc."
            image={facebookDemo}
            year="2021"
            github="https://github.com/Martin10123/FacebookApp"
            webpage="https://facebook-demo-15cde.web.app/"
          />
          <CardProduct
            title="Universidad"
            description="
              Este es un portal de una universidad, en el cual pueden
              registrarse los estudiantes y buscar personas que te ayuden
              a realizar tareas y si eres un experto en alguna materia,
              puedes ofrecer tus servicios. Si conocen ofertas de trabajo,
              pueden publicarlas en el portal, y si eres un estudiante,
              puedes postularte a ellas.
            "
            image={universityDemo}
            year="2021"
            github="https://github.com/Martin10123/students-university"
            webpage="https://students-university.web.app/auth/login"
          />
          <CardProduct
            title="EnviApp"
            description="
              EnviApp es una aplicacion web que le permitira a los usuarios
              enviar paquetes, productos, entre otros a cualquier parte del mundo. Los
              usuarios pueden registrarse, iniciar sesion, ver los envios
              que han realizado, ver los envios que han recibido, y
              calificar a los usuarios que han enviado paquetes. Todo por medio
              de los propios usuarios, sin intermediarios.
            "
            image={enviappDemo}
            year="2021"
            github="https://github.com/Martin10123/enviApp"
            webpage="https://envi-app.vercel.app/"
          />
          <CardProduct
            title="Gestión de taxis"
            description="
              Esta es una aplicacion web que le permitira a los usuarios
              gestionar los taxis de una empresa. Los usuarios pueden
              registrarse, iniciar sesion, ver los taxis que han registrado,
              ver los taxis que han sido asignados a un conductor, y
              calificar a los conductores que han usado los taxis. Llevando un 
              control de los taxis de la empresa y de los conductores.
            "
            image={taxisDemo}
            year="2021"
            github="https://github.com/Martin10123/manage-transport"
            webpage="https://manage-transport.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};
