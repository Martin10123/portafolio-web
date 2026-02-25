<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

const contactMethods = [
  {
    label: 'Email',
    value: 'martinsimarra4@gmail.com',
    href: 'mailto:martinsimarra4@gmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    value: 'martinsimarrapro',
    href: 'https://www.linkedin.com/in/martinsimarrapro/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'Martin10123',
    href: 'https://github.com/Martin10123',
    icon: 'github',
  },
  {
    label: 'WhatsApp',
    value: '+57 300 683 0624',
    href: 'https://api.whatsapp.com/send?phone=573006830624&text=Hola%20Martin,%20me%20gustaria%20contactarte.',
    icon: 'whatsapp',
  },
];

onMounted(() => {
  gsap.from('.contact-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2,
  });

  gsap.from('.contact-card', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.4,
  });

  gsap.from('.contact-method', {
    x: -30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power3.out',
    delay: 0.6,
  });
});
</script>

<template>
  <section
    class="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden px-6 py-16"
  >
    <!-- Background decorations -->
    <div
      class="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"
    />
    <div
      class="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"
    />

    <div class="relative max-w-2xl mx-auto w-full">
      <!-- ═══ Section Title ═══ -->
      <div class="contact-title text-center mb-12">
        <p
          class="text-orange-400/80 text-xs tracking-[0.35em] uppercase mb-5 font-light"
        >
          Hablemos
        </p>
        <h2 class="text-4xl md:text-6xl font-bold mb-5">
          <span class="gradient-text">Contacto</span>
        </h2>
        <div class="section-divider" />
        <p
          class="text-stone-400 text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto mt-6"
        >
          ¿Tienes un proyecto en mente? Me encantaría saber más sobre él.
          ¡No dudes en contactarme!
        </p>
      </div>

      <!-- ═══ Contact Card ═══ -->
      <div class="contact-card glass-card rounded-2xl p-8 md:p-10">
        <!-- Contact methods -->
        <div class="contact-methods space-y-4 mb-8">
          <a
            v-for="method in contactMethods"
            :key="method.label"
            :href="method.href"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-method flex items-center gap-4 p-4 rounded-xl border border-stone-800/50 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 group"
          >
            <!-- Icon -->
            <div
              class="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
            >
              <!-- Email icon -->
              <svg
                v-if="method.icon === 'email'"
                class="w-5 h-5 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <!-- LinkedIn icon -->
              <svg
                v-else-if="method.icon === 'linkedin'"
                class="w-4 h-4 text-orange-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <!-- GitHub icon -->
              <svg
                v-else-if="method.icon === 'github'"
                class="w-4 h-4 text-orange-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              <!-- WhatsApp icon -->
              <svg
                v-else-if="method.icon === 'whatsapp'"
                class="w-4 h-4 text-orange-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <p class="text-stone-500 text-xs font-light uppercase tracking-wider mb-0.5">
                {{ method.label }}
              </p>
              <p
                class="text-stone-200 text-sm font-light truncate group-hover:text-orange-400 transition-colors duration-300"
              >
                {{ method.value }}
              </p>
            </div>

            <!-- Arrow -->
            <svg
              class="w-4 h-4 text-stone-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <!-- CTA Button -->
        <a
          href="mailto:martinsimarra4@gmail.com"
          class="glow-btn block w-full text-center text-white font-medium py-4 rounded-xl text-sm"
        >
          Enviar un mensaje
        </a>
      </div>

      <!-- Footer -->
      <div class="mt-12 pt-8 border-t border-stone-800/50 text-center">
        <p class="text-stone-500 text-sm font-light">
          © {{ new Date().getFullYear() }} — Todos los derechos reservados
        </p>
        <p class="text-stone-600 text-xs mt-2 font-light">
          Diseñado y desarrollado por
          <a
            href="https://www.linkedin.com/in/martinsimarrapro/"
            class="text-orange-400/80 hover:text-orange-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Martin Elias
          </a>
        </p>
      </div>
    </div>
  </section>
</template>
