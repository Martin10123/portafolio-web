<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

const experience = [
  {
    company: 'Cotecmar',
    role: 'Desarrollador Full Stack',
    period: '2022 - Presente',
    year: '2022',
    description:
      'Optimización de procesos internos reduciendo tiempos operativos en un 40%. Desarrollo de aplicaciones web empresariales con arquitecturas robustas y escalables.',
    technologies: ['Laravel', 'Spring Boot', 'React', 'SQL Server'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    company: 'Freelance',
    role: 'Desarrollador Web',
    period: '2021 - 2022',
    year: '2021',
    description:
      'Mejoré la experiencia de usuario en múltiples proyectos con un incremento del 35% en satisfacción. Creación de aplicaciones web modernas para diversos clientes.',
    technologies: ['React', 'Vue.js', 'Firebase', 'Node.js'],
    color: 'from-amber-500 to-yellow-500',
  },
];

const softSkills = [
  {
    title: 'Trabajo en equipo',
    description: 'La colaboración es clave para el éxito.',
    emoji: '👥',
    gradient: 'from-orange-500/30 to-amber-500/30',
  },
  {
    title: 'Resolución',
    description: 'Soluciones creativas para desafíos complejos.',
    emoji: '🧩',
    gradient: 'from-amber-500/30 to-yellow-500/30',
  },
  {
    title: 'Comunicación',
    description: 'Comunicación clara y efectiva.',
    emoji: '💬',
    gradient: 'from-orange-600/30 to-orange-400/30',
  },
  {
    title: 'Proactivo',
    description: 'Iniciativa constante para proponer mejoras.',
    emoji: '🚀',
    gradient: 'from-red-500/30 to-orange-500/30',
  },
];

onMounted(() => {
  gsap.from('.about-hero', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2,
  });

  gsap.from('.timeline-card', {
    x: -80,
    opacity: 0,
    stagger: 0.25,
    duration: 0.9,
    ease: 'power3.out',
    delay: 0.5,
  });

  gsap.from('.skill-card', {
    scale: 0.8,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'back.out(1.7)',
    delay: 0.8,
  });
});
</script>

<template>
  <section class="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden">
    <div class="min-h-full relative z-10 py-24 px-6">
      <!-- Decorative gradient orbs -->
      <div
        class="fixed top-20 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        class="fixed bottom-20 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div class="relative max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="about-hero text-center mb-20">
          <p
            class="text-orange-400/80 text-xs tracking-[0.35em] uppercase mb-5 font-light"
          >
            Conóceme
          </p>
          <h2 class="text-5xl md:text-7xl font-bold mb-7">
            Sobre <span class="gradient-text">mí</span>
          </h2>
          <div class="section-divider mb-10" />
          
          <p
            class="text-stone-300 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Desarrollador de Software con
            <span class="text-orange-400 font-medium">3 años de experiencia</span>
            en desarrollo web full stack. He optimizado procesos internos en
            <span class="text-orange-400 font-medium">Cotecmar</span>, reduciendo
            tiempos operativos en un
            <span class="text-orange-400 font-medium">40%</span>.
          </p>

          <!-- Social links -->
          <div class="flex justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/martinsimarrapro/"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl border border-stone-700/80 text-stone-400 text-sm hover:text-orange-400 hover:border-orange-500/40 transition-all duration-300 flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Martin10123"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl border border-stone-700/80 text-stone-400 text-sm hover:text-orange-400 hover:border-orange-500/40 transition-all duration-300 flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Modern Timeline -->
        <div class="mb-20">
          <h3 class="text-3xl md:text-5xl font-bold text-center mb-16">
            Experiencia
            <span class="gradient-text">Profesional</span>
          </h3>

          <div class="relative max-w-4xl mx-auto space-y-8">
            <div
              v-for="exp in experience"
              :key="exp.company"
              class="timeline-card relative"
            >
              <!-- Card -->
              <div
                class="glass-card rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 group"
              >
                <!-- Year Badge (floating) -->
                <div
                  class="absolute -left-4 top-8 w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg transition-transform duration-500 group-hover:scale-110"
                  :class="`bg-gradient-to-br ${exp.color}`"
                  style="color: white"
                >
                  {{ exp.year }}
                </div>

                <!-- Content -->
                <div class="ml-16 md:ml-20">
                  <div class="flex flex-wrap items-center gap-3 mb-4">
                    <h4 class="text-2xl md:text-3xl font-bold text-stone-100">
                      {{ exp.company }}
                    </h4>
                    <span
                      class="text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full bg-orange-400/10 border border-orange-400/20"
                    >
                      {{ exp.period }}
                    </span>
                  </div>

                  <p class="text-orange-400/80 text-base mb-5 font-medium">
                    {{ exp.role }}
                  </p>

                  <p class="text-stone-400 text-sm font-light leading-relaxed mb-6">
                    {{ exp.description }}
                  </p>

                  <!-- Tech tags -->
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in exp.technologies"
                      :key="tech"
                      class="text-xs px-4 py-2 rounded-full bg-stone-800/80 text-stone-300 border border-stone-700/60 hover:border-orange-500/40 transition-colors duration-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills Grid -->
        <div class="mb-16">
          <h3 class="text-3xl md:text-5xl font-bold text-center mb-16">
            Habilidades
            <span class="gradient-text">Blandas</span>
          </h3>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div
              v-for="skill in softSkills"
              :key="skill.title"
              class="skill-card glass-card rounded-2xl p-6 text-center group cursor-default transition-all duration-500 hover:scale-105"
            >
              <div
                class="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                :class="`bg-gradient-to-br ${skill.gradient}`"
              >
                {{ skill.emoji }}
              </div>
              <h4
                class="text-sm font-semibold text-stone-100 mb-2 group-hover:text-orange-400 transition-colors duration-300"
              >
                {{ skill.title }}
              </h4>
              <p class="text-stone-500 text-xs font-light leading-relaxed">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
