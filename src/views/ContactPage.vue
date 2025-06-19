<script setup lang="ts">
import LinksToContact from "../components/LinksToContact.vue";
</script>

<template>
  <section class="py-24 px-6" id="contactPage">
    <div class="text-center mb-16" data-aos="fade-up">
      <h2 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">
        Contacto
      </h2>
      <div class="w-16 h-px bg-gray-300 mx-auto"></div>
    </div>

    <div class="text-center mb-16" data-aos="zoom-in" data-aos-delay="100">
      <p
        class="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto"
      >
        ¿Tienes un proyecto en mente? Me encantaría saber más sobre él.
      </p>
    </div>

    <div
      class="rounded-lg text-card-foreground shadow-sm bg-gray-50 border border-gray-200 max-w-md mx-auto p-8 grid gap-6"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <p
        class="text-center text-lg text-gray-700 flex items-center justify-center gap-2"
      >
        <img class="size-6" src="/icons/email.svg" alt="email.svg" />
        martinsimarra4@gmail.com
      </p>

      <LinksToContact />

      <a
        class="w-full !bg-black mt-8 text-center text-white font-semibold py-3 rounded-lg hover:opacity-50 transition-colors"
        href="mailto:martinsimarra4@gmail.com"
        target="_blank"
      >
        Enviar un mensaje
      </a>
    </div>
  </section>
</template>
