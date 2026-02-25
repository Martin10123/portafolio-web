<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

interface Props {
  activeSection: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  navigate: [sectionId: string];
}>();

const isMenuOpen = ref(false);
const navRef = ref<HTMLElement>();

const sections = [
  { id: 'homePage', label: 'Inicio' },
  { id: 'aboutmePage', label: 'Sobre mí' },
  { id: 'worksPage', label: 'Proyectos' },
  { id: 'skillsPage', label: 'Habilidades' },
  { id: 'contactPage', label: 'Contacto' },
];

const navigateToSection = (sectionId: string) => {
  emit('navigate', sectionId);
  isMenuOpen.value = false;
};

onMounted(() => {
  // Navbar visible inmediatamente, luego se anima
  if (navRef.value) {
    navRef.value.style.opacity = '1';
    gsap.from(navRef.value, 
      {
        y: -20,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
      }
    );
  }
});
</script>

<template>
  <!-- Mobile overlay -->
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
    @click="isMenuOpen = false"
  />

  <header
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <div
        class="rounded-2xl px-6 py-3 flex items-center justify-between bg-stone-900/80 backdrop-blur-xl border border-white/5 shadow-2xl shadow-orange-500/5"
      >
        <!-- Logo -->
        <button
          @click="navigateToSection('homePage')"
          class="text-xl font-light tracking-wider hover:opacity-80 transition-opacity"
        >
          <span class="gradient-text font-bold text-2xl">M</span>
          <span class="text-stone-200">artin</span>
        </button>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-1">
          <button
            v-for="section in sections"
            :key="section.id"
            @click="navigateToSection(section.id)"
            class="relative px-4 py-2 text-sm font-light transition-all duration-300 rounded-xl cursor-pointer"
            :class="
              props.activeSection === section.id
                ? 'text-orange-400'
                : 'text-stone-400 hover:text-stone-200'
            "
          >
            {{ section.label }}
            <span
              v-if="props.activeSection === section.id"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-400"
            />
          </button>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="md:hidden text-stone-300 cursor-pointer p-1"
          @click="isMenuOpen = !isMenuOpen"
          :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        class="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
        :class="isMenuOpen ? 'max-h-96 mt-2' : 'max-h-0'"
      >
        <div
          class="rounded-2xl bg-stone-900/95 backdrop-blur-xl border border-white/5 p-4 space-y-1"
        >
          <button
            v-for="section in sections"
            :key="section.id"
            @click="navigateToSection(section.id)"
            class="w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 cursor-pointer"
            :class="
              props.activeSection === section.id
                ? 'text-orange-400 bg-orange-400/10'
                : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'
            "
          >
            {{ section.label }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
