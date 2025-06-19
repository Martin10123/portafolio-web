<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const activeSection = ref("homePage");

const sections = [
  { id: "homePage", label: "Inicio", icon: "/icons/home.svg" },
  { id: "aboutmePage", label: "Sobre mí", icon: "/icons/user.svg" },
  { id: "worksPage", label: "Proyectos", icon: "/icons/works.svg" },
  { id: "skillsPage", label: "Habilidades", icon: "/icons/skills.svg" },
  { id: "contactPage", label: "Contacto", icon: "/icons/contact.svg" },
];

const closeMenu = () => {
  isMenuOpen.value = false;
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  }
};

const handleScroll = () => {
  const scrollPosition = window.scrollY + 150;

  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el) {
      const { offsetTop, offsetHeight } = el;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        activeSection.value = section.id;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 md:hidden"
    :class="{
      'opacity-100 pointer-events-auto': isMenuOpen,
      'opacity-0 pointer-events-none': !isMenuOpen,
    }"
    @click="closeMenu"
  />

  <header
    class="w-full border-b border-gray-200 fixed top-0 bg-white/80 backdrop-blur-md z-50 animate__animated animate__fadeInDown"
  >
    <div class="container mx-auto flex items-center justify-between p-4">
      <h2 class="text-2xl font-normal text-gray-900">Martin Simarra</h2>

      <nav class="relative z-50">
        <img
          class="size-7 md:hidden cursor-pointer"
          :src="isMenuOpen ? '/icons/close.svg' : '/icons/menuHamburguer.svg'"
          :alt="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
          @click="isMenuOpen = !isMenuOpen"
        />

        <ul
          class="absolute -right-3.5 top-9 mt-2 w-97.5 py-2 bg-white border border-gray-200 rounded shadow-lg transition-all duration-300 ease-in-out transform origin-top md:hidden"
          :class="{
            'opacity-100 scale-100 pointer-events-auto': isMenuOpen,
            'opacity-0 scale-95 pointer-events-none': !isMenuOpen,
          }"
        >
          <li
            v-for="section in sections"
            :key="section.id"
            class="flex items-center gap-2 p-4 border-b border-gray-200 rounded-xl text-sm hover:bg-gray-100 cursor-pointer transition"
            :class="{
              'text-black font-semibold': activeSection === section.id,
            }"
            @click="scrollToSection(section.id)"
          >
            <img class="size-5" :src="section.icon" :alt="section.label" />
            {{ section.label }}
          </li>
        </ul>

        <ul class="hidden md:flex gap-6 text-sm text-gray-600 font-normal">
          <li
            v-for="section in sections"
            :key="section.id"
            class="text-base cursor-pointer hover:text-black hover:scale-105 transition"
            :class="{
              'border-b-2 border-black font-semibold text-black':
                activeSection === section.id,
            }"
            @click="scrollToSection(section.id)"
          >
            {{ section.label }}
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
