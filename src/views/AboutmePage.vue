<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

const experience = [
  {
    company: 'Cotecmar',
    role: 'Desarrollador de Software',
    period: 'Mayo 2024 - Actualidad',
    year: '2024',
    description:
      'Desarrollé interfaces de usuario modernas en Vue.js integradas con Laravel + Inertia.js para múltiples módulos internos. Optimicé flujos de trabajo logrando +30% en eficiencia operativa e implementé una plataforma unificada de componentes reutilizables que automatizó procesos clave.',
    technologies: ['Vue.js', 'Laravel', 'Inertia.js', 'SQL Server'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    company: 'Saroa',
    role: 'Desarrollador FullStack',
    period: 'Oct 2025 – Ene 2026',
    year: '2025',
    description:
      'Contratado para apoyar la finalización de un proyecto crítico con fecha límite. Desarrollé funcionalidades frontend en React enfocadas en entrega rápida de módulos clave, e implementé servicios backend en .NET con arquitectura de microservicios.',
    technologies: ['React', '.NET', 'Microservicios', 'TypeScript'],
    color: 'from-amber-500 to-yellow-500',
  },
  {
    company: 'Arismendy Andrade',
    role: 'Desarrollador FullStack',
    period: 'Feb 2023 – May 2024',
    year: '2023',
    description:
      'Desarrollé scripts en Python para automatización de tareas administrativas y operativas, optimizando tiempos y reduciendo errores manuales. Mejoré el uso de bases de datos y apoyé la optimización de procesos internos con soporte técnico.',
    technologies: ['Python', 'Excel', 'Automatización', 'SQL'],
    color: 'from-yellow-500 to-orange-400',
  },
];

const softSkills = [
  {
    title: 'Trabajo en equipo',
    description: 'La colaboración es clave para el éxito.',
    emoji: '👥',
    gradient: 'from-orange-500/40 to-amber-500/40',
  },
  {
    title: 'Resolución',
    description: 'Soluciones creativas para desafíos complejos.',
    emoji: '🧩',
    gradient: 'from-amber-500/40 to-yellow-500/40',
  },
  {
    title: 'Comunicación',
    description: 'Comunicación clara y efectiva.',
    emoji: '💬',
    gradient: 'from-orange-600/40 to-orange-400/40',
  },
  {
    title: 'Proactivo',
    description: 'Iniciativa constante para proponer mejoras.',
    emoji: '🚀',
    gradient: 'from-red-500/40 to-orange-500/40',
  },
];

onMounted(() => {
  gsap.fromTo(
    '.about-hero',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 },
  );

  gsap.fromTo(
    '.timeline-left',
    { x: -80, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.3, duration: 0.9, ease: 'power3.out', delay: 0.5 },
  );

  gsap.fromTo(
    '.timeline-right',
    { x: 80, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.3, duration: 0.9, ease: 'power3.out', delay: 0.65 },
  );

  gsap.fromTo(
    '.skill-card',
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.8 },
  );
});
</script>

<template>
  <section class="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden">
    <div class="min-h-full relative z-10 py-24 px-8 md:px-12 lg:px-16">
      <!-- Decorative gradient orbs -->
      <div class="fixed top-20 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div class="fixed bottom-20 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div class="relative max-w-6xl mx-auto">

        <!-- Hero Section -->
        <div class="about-hero text-center mb-20">
          <p class="text-orange-400/80 text-xs tracking-[0.35em] uppercase mb-5 font-light">Conóceme</p>
          <h2 class="text-5xl md:text-7xl font-bold mb-7">
            Sobre <span class="gradient-text">mí</span>
          </h2>
          <div class="section-divider mb-10" />
          <p class="text-stone-300 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Desarrollador de Software con
            <span class="text-orange-400 font-medium">3 años de experiencia</span>
            especializado en <span class="text-orange-400 font-medium">React, Vue.js, Laravel, Python y Spring Boot</span>.
            Lideré el desarrollo de soluciones en
            <span class="text-orange-400 font-medium">Cotecmar</span> logrando un
            <span class="text-orange-400 font-medium">+30% en eficiencia operativa</span>
            e implementé una plataforma unificada de componentes que automatizó procesos clave y redujo tiempos de desarrollo.
            Reconocido por mi proactividad, resolución de problemas y trabajo en equipo.
          </p>

          <!-- Social links -->
          <div class="flex justify-center gap-3">
            <a href="https://www.linkedin.com/in/martinsimarrapro/" target="_blank" rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl border border-stone-700/80 text-stone-400 text-sm hover:text-orange-400 hover:border-orange-500/40 transition-all duration-300 flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/Martin10123" target="_blank" rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl border border-stone-700/80 text-stone-400 text-sm hover:text-orange-400 hover:border-orange-500/40 transition-all duration-300 flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Education -->
        <div class="mb-20">
          <div class="glass-card rounded-3xl p-8 md:p-10 border border-orange-500/20 max-w-3xl mx-auto">
            <h3 class="text-xl font-bold text-stone-100 mb-5 flex items-center gap-3">
              <span class="text-3xl">🎓</span>
              Educación
            </h3>
            <p class="text-xl font-bold text-stone-100">Tecnológico Comfenalco</p>
            <p class="text-orange-400 font-medium mt-1">Ingeniería de Sistemas — Tecnólogo en Desarrollo de Software</p>
            <p class="text-stone-500 text-sm mt-2">Cartagena, Colombia · Abril 2025</p>
          </div>
        </div>

        <!-- Alternating Timeline -->
        <div class="mb-20">
          <h3 class="text-3xl md:text-5xl font-bold text-center mb-16">
            💼 Experiencia <span class="gradient-text">Profesional</span>
          </h3>

          <div class="relative">
            <!-- Center vertical line (desktop only) -->
            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/70 via-amber-400/50 to-transparent" />

            <div class="space-y-10 md:space-y-16">
              <div
                v-for="(exp, index) in experience"
                :key="exp.company"
                class="relative"
                :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'"
              >
                <!-- Desktop: dot on center line -->
                <div
                  class="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full border-2 border-orange-400 bg-stone-900 z-20 shadow-[0_0_12px_rgba(249,115,22,0.5)]"
                />

                <div
                  class="md:w-[46%]"
                  :class="index % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'"
                >
                  <div class="glass-card rounded-3xl p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/20 border border-transparent group">
                    <!-- Header -->
                    <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h4 class="text-xl md:text-2xl font-bold text-stone-100 group-hover:text-orange-400 transition-colors duration-300">
                          {{ exp.company }}
                        </h4>
                        <p class="text-orange-400/80 text-sm font-medium mt-0.5">{{ exp.role }}</p>
                      </div>
                      <div class="flex flex-col items-end gap-2">
                        <span class="text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-400/10 border border-orange-400/20 whitespace-nowrap">
                          {{ exp.period }}
                        </span>
                        <span
                          class="text-xs font-bold px-3 py-1 rounded-xl text-white"
                          :class="`bg-gradient-to-r ${exp.color}`"
                        >
                          {{ exp.year }}
                        </span>
                      </div>
                    </div>

                    <p class="text-stone-400 text-sm font-light leading-relaxed mb-5">
                      {{ exp.description }}
                    </p>

                    <!-- Tech tags -->
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tech in exp.technologies"
                        :key="tech"
                        class="text-xs px-3 py-1.5 rounded-full bg-stone-800/80 text-stone-300 border border-stone-700/60 hover:border-orange-500/40 transition-colors duration-300"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills Grid -->
        <div class="mb-16">
          <h3 class="text-3xl md:text-5xl font-bold text-center mb-16">
            ✨ Habilidades <span class="gradient-text">Blandas</span>
          </h3>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div
              v-for="skill in softSkills"
              :key="skill.title"
              class="skill-card rounded-2xl p-6 text-center group cursor-default transition-all duration-500 hover:scale-105 border border-stone-700/50 hover:border-orange-500/40 bg-stone-900/60 backdrop-blur-md"
            >
              <div
                class="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                :class="`bg-gradient-to-br ${skill.gradient}`"
              >
                {{ skill.emoji }}
              </div>
              <h4 class="text-sm font-semibold text-stone-100 mb-2 group-hover:text-orange-400 transition-colors duration-300">
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
