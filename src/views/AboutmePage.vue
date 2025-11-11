<script setup lang="ts">
import CardSkillsUser from "../components/CardSkillsUser.vue";
import LinksToContact from "../components/LinksToContact.vue";
</script>

<template>
  <section class="py-24 px-6 bg-gray-50" id="aboutmePage">
    <div class="container mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Sobre mi
        </h2>
        <div class="w-16 h-px bg-gray-300 mx-auto"></div>
      </div>

      <div class="text-center mb-16" data-aos="fade-up">
        <p
          class="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto"
        >
          Desarrollador de Software con 3 año de experiencia en desarrollo web
          full stack. He optimizado procesos internos en Cotecmar, reduciendo
          tiempos operativos en un 40%, y mejorado la experiencia de usuario en
          proyectos freelance con un incremento del 35%. Combino herramientas
          como Laravel, Spring Boot, React y Vue.
        </p>

        <LinksToContact />
      </div>

      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Habilidades blandas
        </h2>
        <div class="w-16 h-px bg-gray-300 mx-auto"></div>
      </div>

      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div data-aos="fade-up" data-aos-delay="0">
          <CardSkillsUser
            title="Trabajo en equipo"
            description="Me encanta trabajar en equipo, creo que la colaboración es clave para el éxito de cualquier proyecto. Siempre estoy dispuesto a escuchar y aprender de los demás."
            icon="/icons/team.svg"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <CardSkillsUser
            title="Resolución de problemas"
            description="Me apasiona resolver problemas y encontrar soluciones creativas. Siempre estoy buscando formas de mejorar y optimizar los procesos."
            icon="/icons/problem-solving.svg"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <CardSkillsUser
            title="Comunicación"
            description="Creo que la comunicación es fundamental para el éxito de cualquier proyecto. Siempre estoy dispuesto a escuchar y compartir ideas."
            icon="/icons/voice-activate.svg"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <CardSkillsUser
            title="Proactivo"
            description="Soy una persona proactiva, siempre estoy buscando formas de mejorar y optimizar los procesos. Me gusta tomar la iniciativa en algunos proyectos y proponer nuevas ideas."
            icon="/icons/active-user.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
