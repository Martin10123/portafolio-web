<script setup lang="ts">
import CardProgrammingSkills from "../components/CardProgrammingSkills.vue";
</script>

<template>
  <section class="py-24 px-6 bg-gray-50" id="skillsPage">
    <div class="container mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Habilidades
        </h2>
        <div class="w-16 h-px bg-gray-300 mx-auto"></div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        <CardProgrammingSkills
          title="Frontend"
          icon="icons/frontend.svg"
          :skills="[
            'React',
            'Vue.js',
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'Bootstrap',
          ]"
        />

        <CardProgrammingSkills
          title="Backend"
          icon="icons/backend.svg"
          :skills="[
            'Spring Boot',
            'Laravel',
            'API REST',
            'SQLServer',
            'Firebase',
            'MySQL',
          ]"
        />

        <CardProgrammingSkills
          title="Diseño UI/UX"
          icon="icons/design.svg"
          :skills="['Figma']"
        />
      </div>
    </div>
  </section>
</template>
