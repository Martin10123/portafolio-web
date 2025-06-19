<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import AboutmePage from "./views/AboutmePage.vue";
import ContactPage from "./views/ContactPage.vue";
import HomePage from "./views/HomePage.vue";
import SkillsPage from "./views/SkillsPage.vue";
import WorksPage from "./views/WorksPage.vue";
</script>

<template>
  <div>
    <Navbar />

    <HomePage />

    <AboutmePage />

    <WorksPage />

    <SkillsPage />

    <ContactPage />

    <footer class="py-8 px-6 border-t border-gray-200 bg-gray-50">
      <div class="max-w-7xl mx-auto text-center">
        <p>© {{ new Date().getFullYear() }} - All rights reserved</p>
        <p class="text-sm text-gray-600">
          Diseñado y desarrollado por
          <a
            href="https://www.linkedin.com/in/martinsimarrapro/"
            class="text-black font-bold underline"
            target="_blank"
            rel="noopener noreferrer"
            >Martin Elias</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>
