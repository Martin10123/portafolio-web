<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import gsap from 'gsap';

const activeFilter = ref('all');

const allProjects = [
  {
    title: 'Demo Facebook',
    description:
      'Simulación de funcionalidades de Facebook: publicaciones, comentarios y reacciones en tiempo real.',
    image: '/images/facebookdemo.png',
    linkDemo: 'https://facebook-demo-15cde.web.app/',
    linkGitHub: 'https://github.com/Martin10123/FacebookApp',
    technologies: ['React', 'Firebase', 'CSS', 'JavaScript'],
    type: 'personal',
  },
  {
    title: 'Universidad Page',
    description:
      'Portal universitario para registro, búsqueda de ayuda académica y publicación de ofertas laborales.',
    image: '/images/university.png',
    linkDemo: 'https://students-university.web.app/auth/register',
    linkGitHub: 'https://github.com/Martin10123/students-university',
    technologies: ['React', 'Firebase', 'CSS', 'JavaScript'],
    type: 'personal',
  },
  {
    title: 'Métodos Numéricos',
    description:
      'Resolución de problemas matemáticos con Newton-Raphson, Trapezoidal y más métodos numéricos.',
    image: '/images/methodsNumeric.png',
    linkDemo: 'https://metodos-numericos-eight.vercel.app/',
    linkGitHub: 'https://github.com/Martin10123/metodos-numericos',
    technologies: ['React', 'Tailwind', 'TypeScript'],
    type: 'personal',
  },
  {
    title: 'Gestión Taxis',
    description:
      'Gestión de taxis empresariales: login, perfiles, taller y asignación de vehículos con backend robusto.',
    image: '/images/taxis-app.png',
    linkDemo: 'https://manage-transport.vercel.app/',
    linkGitHub: 'https://github.com/Martin10123/manage-transport',
    technologies: ['React', 'Spring Boot', 'Zustand', 'TypeScript', 'SQL Server'],
    type: 'collaborative',
  },
  {
    title: 'EnviApp',
    description:
      'Plataforma de envíos de paquetes entre usuarios sin intermediarios, con sistema de calificaciones.',
    image: '/images/envi-app.png',
    linkDemo: 'https://envi-app.vercel.app',
    linkGitHub: 'https://github.com/Martin10123/enviApp',
    technologies: ['React', 'Node.js', 'Express', 'Zustand', 'TypeScript'],
    type: 'collaborative',
  },
];

const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'personal', label: 'Personales' },
  { id: 'collaborative', label: 'Colaborativos' },
];

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return allProjects;
  return allProjects.filter((p) => p.type === activeFilter.value);
});

onMounted(() => {
  gsap.from('.works-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2,
  });

  gsap.from('.works-desc', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.4,
  });

  gsap.from('.filter-btn', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power3.out',
    delay: 0.6,
  });

  gsap.from('.project-card', {
    y: 60,
    opacity: 0,
    stagger: 0.1,
    duration: 0.7,
    ease: 'power3.out',
    delay: 0.8,
  });
});
</script>

<template>
  <section class="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden">
    <div class="min-h-full relative z-10 py-24 px-6">
    <!-- Background decorations -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/3 rounded-full blur-[150px] pointer-events-none"
    />

    <div class="relative max-w-6xl mx-auto">
      <!-- ═══ Section Title ═══ -->
      <div class="works-title text-center mb-6">
        <p
          class="text-orange-400/80 text-xs tracking-[0.35em] uppercase mb-5 font-light"
        >
          Mi trabajo
        </p>
        <h2 class="text-4xl md:text-6xl font-bold mb-5">
          Mis <span class="gradient-text">Proyectos</span>
        </h2>
        <div class="section-divider" />
      </div>

      <p
        class="works-desc text-stone-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto text-center mb-12"
      >
        Cada proyecto representa un desafío único y una oportunidad para aplicar
        mis habilidades en desarrollo web full stack.
      </p>

      <!-- ═══ Filter Bar ═══ -->
      <div class="filter-bar flex justify-center gap-3 mb-14">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="activeFilter = filter.id"
          class="filter-btn px-5 py-2.5 rounded-xl text-sm font-light transition-all duration-300 cursor-pointer"
          :class="
            activeFilter === filter.id
              ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
              : 'text-stone-400 border border-stone-700/60 hover:text-stone-200 hover:border-stone-600'
          "
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- ═══ Projects Grid ═══ -->
      <div
        class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card glass-card rounded-2xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden h-48">
            <img
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              :src="project.image"
              :alt="project.title"
            />
            <!-- Overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            />
            <!-- Type badge -->
            <span
              class="absolute top-4 right-4 text-[10px] px-2.5 py-1 rounded-full backdrop-blur-sm font-medium uppercase tracking-wider"
              :class="
                project.type === 'personal'
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              "
            >
              {{ project.type === 'personal' ? 'Personal' : 'Colaborativo' }}
            </span>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3
              class="text-lg font-semibold text-stone-100 mb-2 group-hover:text-orange-400 transition-colors duration-300"
            >
              {{ project.title }}
            </h3>
            <p class="text-stone-400 text-sm font-light leading-relaxed mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-[10px] px-2.5 py-1 rounded-full bg-stone-800/80 text-stone-400 border border-stone-700/50"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-3">
              <a
                :href="project.linkGitHub"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-700/60 text-stone-400 text-xs hover:text-orange-400 hover:border-orange-500/40 transition-all duration-300"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Código
              </a>
              <a
                :href="project.linkDemo"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300"
                style="
                  background: linear-gradient(135deg, #f97316, #fbbf24);
                  color: white;
                "
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
