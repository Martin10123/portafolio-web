<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    gradient: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    gradient: 'from-amber-500 to-yellow-400',
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Laravel', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'API REST', level: 90 },
      { name: 'SQL Server', level: 85 },
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    title: 'Herramientas',
    icon: '🛠️',
    gradient: 'from-orange-600 to-red-400',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Firebase', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Docker', level: 60 },
    ],
  },
];

const techStack = [
  'React', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS',
  'Spring Boot', 'Laravel', 'Node.js', 'Firebase', 'SQL Server',
  'MySQL', 'Git', 'Docker', 'Figma', 'Express', 'Java',
];

onMounted(() => {
  gsap.fromTo('.skills-title',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 },
  );

  gsap.fromTo('.skill-category-card',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out', delay: 0.5 },
  );

  gsap.fromTo('.skill-item',
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: 'power2.out', delay: 0.9 },
  );

  gsap.fromTo('.tech-pill',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, stagger: 0.04, duration: 0.4, ease: 'back.out(1.7)', delay: 0.8 },
  );
});
</script>

<template>
  <section class="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden">
    <div class="min-h-full relative z-10 py-24 px-6">
    <!-- Background decorations -->
    <div
      class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"
    />
    <div
      class="absolute top-20 left-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"
    />

    <div class="relative max-w-6xl mx-auto">
      <!-- ═══ Section Title ═══ -->
      <div class="skills-title text-center mb-16">
        <p
          class="text-orange-400/80 text-xs tracking-[0.35em] uppercase mb-5 font-light"
        >
          Mi stack
        </p>
        <h2 class="text-4xl md:text-6xl font-bold mb-5">
          Mis <span class="gradient-text">Habilidades</span>
        </h2>
        <div class="section-divider" />
      </div>

      <!-- ═══ Skill Category Cards ═══ -->
      <div
        class="skills-categories grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
      >
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="skill-category-card glass-card rounded-2xl p-7 group transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5"
        >
          <!-- Header -->
          <div class="flex items-center gap-4 mb-7">
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              :class="category.gradient"
              style="color: white"
            >
              {{ category.icon }}
            </div>
            <h3
              class="text-xl font-semibold text-stone-100 group-hover:text-orange-400 transition-colors duration-300"
            >
              {{ category.title }}
            </h3>
          </div>

          <!-- Skill dots -->
          <div class="space-y-3.5">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-item group/skill flex items-center justify-between gap-3"
            >
              <span
                class="text-sm text-stone-300 font-light group-hover/skill:text-orange-400/80 transition-colors duration-300"
              >
                {{ skill.name }}
              </span>
              <div class="flex gap-1.5 items-center">
                <span
                  v-for="dot in 5"
                  :key="dot"
                  class="skill-dot block rounded-full transition-all duration-300 group-hover/skill:scale-110"
                  :class="
                    dot <= Math.round(skill.level / 20)
                      ? 'w-2.5 h-2.5 bg-gradient-to-br from-orange-500 to-amber-400 shadow-[0_0_6px_rgba(249,115,22,0.45)]'
                      : 'w-2 h-2 bg-stone-700/60'
                  "
                  :style="{ animationDelay: `${0.5 + dot * 0.07}s` }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ Tech Cloud ═══ -->
      <div class="text-center">
        <h3 class="text-xl md:text-2xl font-semibold text-stone-200 mb-8">
          Tecnologías que uso
        </h3>
        <div
          class="tech-cloud flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          <span
            v-for="tech in techStack"
            :key="tech"
            class="tech-pill px-5 py-2.5 rounded-full text-sm font-light border border-stone-700/60 text-stone-400 hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300 cursor-default"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes dotPop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  65% {
    transform: scale(1.4);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.skill-dot {
  animation: dotPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
</style>
