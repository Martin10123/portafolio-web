<script setup lang="ts">
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section
    class="p-8 flex flex-col items-center justify-center min-h-svh"
    id="homePage"
  >
    <div class="text-center max-w-4xl mx-auto md:px-6">
      <h1
        class="text-6xl md:!text-7xl font-normal text-black !mb-6 text-center md:!mb-4 animate__animated animate__fadeInUp animate__slow"
      >
        Hola, Soy Martin
      </h1>

      <p
        class="text-lg md:text-2xl text-gray-700 mb-12 font-light text-center leading-relaxed md:px-6 animate__animated animate__fadeInDown animate__delay animate__slow"
      >
        Desarrollador Full Stack con experiencia en la creación de aplicaciones
        modernas y eficientes.
      </p>

      <div
        class="w-full grid gap-4 md:flex md:justify-center md:gap-6 animate__animated animate__fadeInUp animate__delay-1s animate__slow"
      >
        <button
          class="w-full border border-gray-200 rounded-md px-4 py-4 cursor-pointer hover:opacity-80 transition-colors bg-black text-white md:w-max md:px-6 md:py-3"
          @click="scrollToSection('worksPage')"
        >
          Ver proyectos
        </button>
        <button
          class="w-full border border-gray-200 text-gray-600 rounded-md px-4 py-4 cursor-pointer hover:bg-gray-100 transition-colors md:w-max md:px- md:py-3"
          @click="scrollToSection('contactPage')"
        >
          Contactar
        </button>
      </div>
    </div>

    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <img class="size-7" src="/icons/arrowDown.svg" alt="arrowDown" />
    </div>
  </section>
</template>
