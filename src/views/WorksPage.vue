<script setup lang="ts">
import CardProject from "../components/CardProject.vue";
</script>

<template>
  <section class="py-24 px-6" id="worksPage">
    <div class="container mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Proyectos
        </h2>
        <div class="w-16 h-px bg-gray-300 mx-auto"></div>
      </div>

      <div class="text-center mb-16" data-aos="fade-up">
        <p
          class="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto"
        >
          Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada
          uno de ellos representa un desafío único y una oportunidad para
          aplicar mis habilidades en desarrollo web full stack.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <div data-aos="zoom-in" data-aos-delay="100">
          <CardProject
            title="Demo Facebook"
            description="Una aplicación web que simula las funcionalidades básicas de Facebook, incluyendo la creación de publicaciones, comentarios y reacciones."
            image="/images/facebookdemo.png"
            link-demo="https://facebook-demo-15cde.web.app/"
            link-git-hub="https://github.com/Martin10123/FacebookApp"
            :technologies="[
              'React',
              'Firebase',
              'CSS puro',
              'JavaScript',
              'Git',
              'GitHub',
            ]"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <CardProject
            title="Universidad Page"
            description="Este es un portal de una universidad, en el cual pueden registrarse los estudiantes y buscar personas que te ayuden a realizar tareas y si eres un experto en alguna materia, puedes ofrecer tus servicios. Si conocen ofertas de trabajo, pueden publicarlas aqui!."
            image="/images/university.png"
            link-demo="https://students-university.web.app/auth/register"
            link-git-hub="https://github.com/Martin10123/students-university"
            :technologies="[
              'React',
              'Firebase',
              'CSS puro',
              'JavaScript',
              'Git',
              'GitHub',
            ]"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <CardProject
            title="Metodos Numéricos"
            description="Una aplicación web que permite a los usuarios resolver problemas matemáticos utilizando diferentes métodos numéricos, como el método de Newton-Raphson, Trapezoidal y más."
            image="/images/methodsNumeric.png"
            link-demo="https://metodos-numericos-eight.vercel.app/"
            link-git-hub="https://github.com/Martin10123/metodos-numericos"
            :technologies="[
              'React',
              'Tailwind CSS',
              'Typescript',
              'Git',
              'GitHub',
            ]"
          />
        </div>
      </div>

      <div class="text-center my-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Proyectos en los que participé como desarrollador
        </h2>
        <div class="w-16 h-px bg-gray-300 mx-auto"></div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <div data-aos="zoom-in" data-aos-delay="100">
          <CardProject
            title="Gestión Taxis"
            description="Aplicación web para la gestión de taxis empresariales. Desarrollé las pantallas de login, registro, inicio, perfil, taller y asignación de vehículos. También creé las tablas de usuarios y vehículos en SQL Server y configuré endpoints básicos usando Spring Boot. La app permite a los dueños ver el estado de sus taxis (asignados, en taller, etc.) y llevar el control de conductores y vehículos."
            image="/images/taxis-app.png"
            link-demo="https://manage-transport.vercel.app/"
            link-git-hub="https://github.com/Martin10123/manage-transport"
            :technologies="[
              'React',
              'Zustand',
              'Spring Boot',
              'Tailwind CSS',
              'Typescript',
              'Java',
              'SqlServer',
              'Git',
              'GitHub',
            ]"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <CardProject
            title="EnviApp"
            description="Aplicación web para envíos de paquetes entre usuarios, sin intermediarios. Desarrollé las pantallas de registro, inicio de sesión, historial de envíos realizados y recibidos. La plataforma permite a los usuarios gestionar sus envíos y calificar a otros usuarios de forma directa y segura."
            image="/images/envi-app.png"
            link-demo="https://envi-app.vercel.app"
            link-git-hub="https://github.com/Martin10123/enviApp"
            :technologies="[
              'React',
              'Zustand',
              'Tailwind CSS',
              'Typescript',
              'Node.js',
              'Express',
              'Git',
              'GitHub',
            ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
