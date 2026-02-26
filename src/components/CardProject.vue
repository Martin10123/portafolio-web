<script setup lang="ts">
import ItemCardProjects from "./ItemCardProjects.vue";

defineProps<{
  title: string;
  image?: string;
  description: string;
  linkGitHub?: string;
  linkDemo?: string;
  technologies: string[];
}>();
</script>

<template>
  <div class="bg-stone-900/70 border border-stone-700/50 hover:border-orange-500/30 rounded-2xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 backdrop-blur-md">
    <div>
      <img
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        :src="image || 'icons/avatar.svg'"
        :alt="title"
      />
    </div>
    <div class="flex flex-col space-y-1.5 p-6 pb-4">
      <h3
        class="text-2xl leading-none tracking-tight text-stone-100 font-medium group-hover:text-orange-400 transition-colors duration-300"
      >
        {{ title }}
      </h3>
      <p class="text-sm text-stone-400 font-light leading-relaxed">
        {{ description }}
      </p>

      <div class="flex items-center flex-wrap gap-2 mt-4">
        <ItemCardProjects
          v-for="tech in technologies"
          :key="tech"
          :title="tech"
        />
      </div>

      <div class="grid grid-cols-2 gap-4 mt-4">
        <a
          class="border border-stone-700/60 hover:border-orange-500/40 text-stone-400 hover:text-orange-400 rounded-xl px-4 py-2.5 text-xs flex items-center justify-center gap-2 transition-all duration-300"
          :href="linkGitHub || '#'"
          target="_blank"
        >
          <img class="size-6" src="/icons/github-2.svg" alt="github-2.svg" />
          Codigo
        </a>
        <a
          class="rounded-xl px-4 py-2.5 text-xs flex items-center justify-center gap-2 font-medium text-white transition-all duration-300"
          style="background: linear-gradient(135deg, #f97316, #fbbf24);"
          :href="linkDemo || '#'"
          target="_blank"
        >
          <img class="size-6" src="/icons/share.svg" alt="share.svg" />Demo
        </a>
      </div>
    </div>
  </div>
</template>
