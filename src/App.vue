<script setup lang="ts">
import { ref, provide } from 'vue';
import ThreeBackground from './components/ThreeBackground.vue';
import Navbar from './components/Navbar.vue';
import HomePage from './views/HomePage.vue';
import AboutmePage from './views/AboutmePage.vue';
import WorksPage from './views/WorksPage.vue';
import SkillsPage from './views/SkillsPage.vue';
import ContactPage from './views/ContactPage.vue';

const activeSection = ref('homePage');

const navigateToSection = (sectionId: string) => {
  activeSection.value = sectionId;
};

// Provide navigation function to child components
provide('navigateToSection', navigateToSection);
provide('activeSection', activeSection);
</script>

<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <!-- 3D Background -->
    <ThreeBackground />

    <!-- Navigation -->
    <Navbar :active-section="activeSection" @navigate="navigateToSection" />

    <!-- Full-Screen Sections with Parallax Transitions -->
    <div class="relative w-full h-full">
      <!-- Home Page -->
      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <HomePage v-if="activeSection === 'homePage'" key="home" />
      </Transition>

      <!-- About Page -->
      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <AboutmePage v-if="activeSection === 'aboutmePage'" key="about" />
      </Transition>

      <!-- Works Page -->
      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <WorksPage v-if="activeSection === 'worksPage'" key="works" />
      </Transition>

      <!-- Skills Page -->
      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <SkillsPage v-if="activeSection === 'skillsPage'" key="skills" />
      </Transition>

      <!-- Contact Page -->
      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <ContactPage v-if="activeSection === 'contactPage'" key="contact" />
      </Transition>
    </div>
  </div>
</template>

<style>
/* Parallax slide-fade transition */
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  transform: translateX(100%) scale(0.95);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-30%) scale(0.98);
  opacity: 0;
}
</style>
