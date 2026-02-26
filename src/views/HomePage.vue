<script setup lang="ts">
import { onMounted, inject } from 'vue';
import gsap from 'gsap';

const navigateToSection = inject<(id: string) => void>('navigateToSection');

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-greeting', { y: 30, opacity: 0, duration: 0.8, delay: 0.6 })
    .from('.hero-name', { y: 60, opacity: 0, duration: 1.1 }, '-=0.4')
    .from('.hero-role', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.hero-desc', { y: 25, opacity: 0, duration: 0.8 }, '-=0.4')
    .from('.hero-stats .stat-item', { y: 30, opacity: 0, stagger: 0.15, duration: 0.6 }, '-=0.3')
    .from('.hero-cta button', { y: 20, opacity: 0, stagger: 0.12, duration: 0.5 }, '-=0.2')
    .from('.hero-social a', { scale: 0, opacity: 0, stagger: 0.08, duration: 0.4 }, '-=0.2')
    .from('.hero-decorative', { scale: 0, opacity: 0, stagger: 0.1, duration: 0.8 }, '-=0.6');
});
</script>

<template>
  <section
    class="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
  >
    <!-- ── Decorative gradient orbs ── -->
    <div
      class="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[120px] pointer-events-none"
    />
    <div
      class="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[120px] pointer-events-none"
    />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none"
    />

    <!-- ── Decorative floating shapes ── -->
    <div
      class="hero-decorative absolute top-[15%] left-[10%] w-16 h-16 border border-orange-500/10 rounded-xl rotate-45 animate-float hidden md:block"
    />
    <div
      class="hero-decorative absolute top-[25%] right-[12%] w-10 h-10 border border-amber-400/15 rounded-full animate-float-delayed hidden md:block"
    />
    <div
      class="hero-decorative absolute bottom-[20%] left-[15%] w-6 h-6 bg-orange-500/10 rounded-full animate-float-delayed hidden md:block"
    />
    <div
      class="hero-decorative absolute bottom-[30%] right-[8%] w-20 h-20 border border-orange-400/8 rounded-2xl -rotate-12 animate-float hidden md:block"
    />
    <div
      class="hero-decorative absolute top-[60%] left-[5%] w-3 h-3 bg-amber-400/20 rounded-full animate-pulse hidden md:block"
    />
    <div
      class="hero-decorative absolute top-[20%] right-[25%] w-2 h-2 bg-orange-500/30 rounded-full animate-pulse hidden md:block"
    />

    <!-- ── Hero Content ── -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <!-- Greeting -->
      <p
        class="hero-greeting text-stone-500 text-sm md:text-base font-light mb-6 tracking-[0.3em] uppercase"
      >
        Bienvenido a mi portafolio
      </p>

      <!-- Name -->
      <h1
        class="hero-name text-5xl! sm:text-6xl! md:text-7xl! lg:text-8xl! m-0! font-bold mb-5 leading-tight"
      >
        Hola, Soy
        <span class="gradient-text block sm:inline"> Martin</span>
      </h1>

      <!-- Role badge -->
      <div class="hero-role flex items-center justify-center gap-4 mb-8">
        <div class="w-12 h-px bg-gradient-to-r from-transparent to-orange-500/50" />
        <p
          class="text-orange-400/90 text-base md:text-xl font-light tracking-wider"
        >
          Desarrollador Full Stack
        </p>
        <div class="w-12 h-px bg-gradient-to-l from-transparent to-orange-500/50" />
      </div>

      <!-- Description -->
      <p
        class="hero-desc text-stone-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12"
      >
        Creando experiencias web modernas y eficientes. Especializado en
        <span class="text-orange-400/80">React</span>,
        <span class="text-orange-400/80">Vue.js</span>,
        <span class="text-orange-400/80">Spring Boot</span> y
        <span class="text-orange-400/80">Laravel</span>.
      </p>

      <!-- Stats -->
      <div
        class="hero-stats flex justify-center items-center gap-6 md:gap-14 mb-12"
      >
        <div class="stat-item text-center">
          <p class="text-3xl md:text-4xl font-bold gradient-text">3+</p>
          <p class="text-stone-500 text-[11px] md:text-xs font-light mt-1.5 tracking-wide uppercase">
            Años exp.
          </p>
        </div>
        <div class="w-px h-10 bg-stone-800" />
        <div class="stat-item text-center">
          <p class="text-3xl md:text-4xl font-bold gradient-text">5+</p>
          <p class="text-stone-500 text-[11px] md:text-xs font-light mt-1.5 tracking-wide uppercase">
            Proyectos
          </p>
        </div>
        <div class="w-px h-10 bg-stone-800" />
        <div class="stat-item text-center">
          <p class="text-3xl md:text-4xl font-bold gradient-text">40%</p>
          <p class="text-stone-500 text-[11px] md:text-xs font-light mt-1.5 tracking-wide uppercase">
            Optimización
          </p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="hero-cta flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <button
          @click="navigateToSection?.('worksPage')"
          class="glow-btn px-8 py-3.5 rounded-xl text-white font-medium text-sm cursor-pointer"
        >
          Ver proyectos
        </button>
        <button
          @click="navigateToSection?.('contactPage')"
          class="px-8 py-3.5 rounded-xl text-stone-300 font-medium text-sm border border-stone-700/80 hover:border-orange-500/40 hover:text-orange-400 transition-all duration-300 cursor-pointer backdrop-blur-sm"
        >
          Contactar
        </button>
      </div>

      <!-- Social Links -->
      <div class="hero-social flex justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/martinsimarrapro/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-full border border-stone-700/80 flex items-center justify-center text-stone-500 hover:text-orange-400 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
        <a
          href="https://github.com/Martin10123"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-full border border-stone-700/80 flex items-center justify-center text-stone-500 hover:text-orange-400 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
          aria-label="GitHub"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=573006830624&text=Hola%20Martin,%20me%20gustaria%20contactarte."
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-full border border-stone-700/80 flex items-center justify-center text-stone-500 hover:text-orange-400 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
