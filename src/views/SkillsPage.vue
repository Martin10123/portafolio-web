<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

const skillCategories = [
  {
    title: 'Frontend',
    iconSvg: '/icons/frontend.svg',
    gradient: 'from-orange-500 to-amber-400',
    description: 'Interfaces modernas y responsivas',
    skills: [
      { name: 'React', level: 90, icon: 'devicon-react-original colored' },
      { name: 'Angular.js', level: 85, icon: 'devicon-angular-plain colored' },
      { name: 'Vue.js', level: 85, icon: 'devicon-vuejs-plain colored' },
      { name: 'JavaScript', level: 92, icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', level: 85, icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', level: 90, icon: 'devicon-tailwindcss-original colored' },
      { name: 'Bootstrap', level: 80, icon: 'devicon-bootstrap-plain colored' },
    ],
  },
  {
    title: 'Backend',
    iconSvg: '/icons/backend.svg',
    gradient: 'from-amber-500 to-yellow-400',
    description: 'APIs robustas y escalables',
    skills: [
      { name: 'Spring Boot', level: 85, icon: 'devicon-spring-original colored' },
      { name: 'Laravel', level: 80, icon: 'devicon-laravel-original colored' },
      { name: 'Python', level: 80, icon: 'devicon-python-plain colored' },
      { name: 'Node.js', level: 75, icon: 'devicon-nodejs-plain colored' },
      { name: 'NestJS', level: 75, icon: 'devicon-nestjs-original colored' },
      { name: 'SQL Server', level: 85, icon: 'devicon-microsoftsqlserver-plain colored' },
      { name: 'MySQL', level: 82, icon: 'devicon-mysql-original colored' },
    ],
  },
  {
    title: 'Herramientas',
    iconSvg: '/icons/others.svg',
    gradient: 'from-orange-600 to-red-400',
    description: 'Productividad y desarrollo',
    skills: [
      { name: 'Git', level: 90, icon: 'devicon-git-plain colored' },
      { name: 'GitHub', level: 90, icon: 'devicon-github-original' },
      { name: 'Firebase', level: 80, icon: 'devicon-firebase-plain colored' },
      { name: 'Figma', level: 70, icon: 'devicon-figma-plain colored' },
      { name: 'VS Code', level: 95, icon: 'devicon-vscode-plain colored' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    iconSvg: '/icons/cloud.svg',
    gradient: 'from-blue-500 to-cyan-400',
    description: 'Configuración de entornos en la nube, contenedores y pipelines de CI/CD para despliegues automatizados',
    skills: [
      { name: 'Docker', level: 75, icon: 'devicon-docker-plain colored' },
      { name: 'OKD', level: 70, icon: 'devicon-openshift-plain colored' },
      { name: 'GitHub Actions', level: 75, icon: 'devicon-github-original' },
    ],
  },
];

const techStack = [
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Angular', icon: 'devicon-angular-original colored' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Spring Boot', icon: 'devicon-spring-original colored' },
  { name: 'Laravel', icon: 'devicon-laravel-original colored' },
  { name: 'Python', icon: 'devicon-python-original colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
  { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-original colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
  { name: 'Express', icon: 'devicon-express-original' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'NestJS', icon: 'devicon-nestjs-original colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'Redux', icon: 'devicon-redux-original colored' },
];

const stats = [
  { 
    label: 'Años de Experiencia', 
    value: '3+', 
    iconClass: 'devicon-github-original'
  },
  { 
    label: 'Proyectos Completados', 
    value: '15+', 
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-orange-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`
  },
  { 
    label: 'Tecnologías', 
    value: '20+', 
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-orange-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>`
  },
  { 
    label: 'Líneas de Código', 
    value: '100K+', 
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-orange-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>`
  },
];

onMounted(() => {
  gsap.fromTo('.skills-title',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 },
  );

  gsap.fromTo('.stats-card',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.4 },
  );

  gsap.fromTo('.skill-category-card',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out', delay: 0.6 },
  );

  gsap.fromTo('.skill-item',
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.04, duration: 0.5, ease: 'power2.out', delay: 1 },
  );

  gsap.fromTo('.tech-pill',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, stagger: 0.03, duration: 0.4, ease: 'back.out(1.7)', delay: 1.2 },
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
      <div class="skills-title text-center mb-12">
        <p
          class="text-orange-400/80 text-xs tracking-[0.35em] uppercase mb-5 font-light"
        >
          Mi stack
        </p>
        <h2 class="text-4xl md:text-6xl font-bold mb-5">
          Mis <span class="gradient-text">Habilidades</span>
        </h2>
        <div class="section-divider" />
        <p class="text-stone-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mt-6">
          Tecnologías y herramientas que domino para crear soluciones digitales completas
        </p>
      </div>

      <!-- ═══ Stats Grid ═══ -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="stats-card glass-card rounded-xl p-6 text-center group hover:border-orange-500/30 transition-all duration-300"
        >
          <div class="flex justify-center mb-2" v-if="stat.iconSvg" v-html="stat.iconSvg"></div>
          <i v-else-if="stat.iconClass" :class="stat.iconClass" class="text-3xl text-orange-400 mb-2"></i>
          <div class="text-2xl md:text-3xl font-bold gradient-text mb-1">{{ stat.value }}</div>
          <div class="text-xs text-stone-400 font-light">{{ stat.label }}</div>
        </div>
      </div>

      <!-- ═══ Skill Category Cards ═══ -->
      <div
        class="skills-categories grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="skill-category-card glass-card rounded-2xl p-7 group transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/30"
        >
          <!-- Header -->
          <div class="flex items-center gap-4 mb-3">
            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg p-3"
              :class="category.gradient"
            >
              <img :src="category.iconSvg" :alt="category.title" class="w-full h-full object-contain" />
            </div>
            <div>
              <h3
                class="text-xl font-semibold text-stone-100 group-hover:text-orange-400 transition-colors duration-300"
              >
                {{ category.title }}
              </h3>
              <p class="text-xs text-stone-500 font-light">{{ category.description }}</p>
            </div>
          </div>

          <!-- Skills with progress bars -->
          <div class="space-y-4 mt-6">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-item group/skill"
            >
              <div class="flex items-center justify-between mb-1.5">
                <div class="flex items-center gap-2">
                  <i :class="skill.icon" class="text-xl"></i>
                  <span
                    class="text-sm text-stone-300 font-light group-hover/skill:text-orange-400 transition-colors duration-300"
                  >
                    {{ skill.name }}
                  </span>
                </div>
                <span class="text-xs text-stone-500 font-light">{{ skill.level }}%</span>
              </div>
              <!-- Progress bar -->
              <div class="h-1.5 bg-stone-800/60 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-1000 ease-out skill-progress"
                  :style="{ width: skill.level + '%' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ Tech Cloud ═══ -->
      <div class="text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-stone-100 mb-3">
          Tecnologías y <span class="gradient-text">Stack Completo</span>
        </h3>
        <p class="text-stone-400 text-sm mb-8 font-light">
          Herramientas y frameworks con los que he trabajado
        </p>
        <div
          class="tech-cloud flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          <span
            v-for="tech in techStack"
            :key="tech.name"
            class="tech-pill px-5 py-3 rounded-xl text-sm font-medium border border-stone-700/60 text-stone-300 bg-stone-900/40 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/10 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 cursor-default backdrop-blur-sm flex items-center gap-2"
          >
            <i :class="tech.icon" class="text-lg"></i>
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
.skill-progress {
  animation: progressFill 1.5s ease-out forwards;
  transform-origin: left;
}

@keyframes progressFill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.tech-pill:hover {
  transform: translateY(-2px) scale(1.05);
}

.stats-card:hover {
  transform: translateY(-4px);
}
</style>
