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
  <div class="bg-white rounded-lg border border-gray-200 overflow-hidden group">
    <div>
      <img
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        :src="image || 'icons/avatar.svg'"
        :alt="title"
      />
    </div>
    <div class="flex flex-col space-y-1.5 p-6 pb-4">
      <h3
        class="text-2xl leading-none tracking-tight text-gray-900 font-medium"
      >
        {{ title }}
      </h3>
      <p class="text-sm text-gray-600 font-light">
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
          class="border border-gray-300 rounded-lg px-4 py-2 text-sm flex items-center justify-center gap-2"
          :href="linkGitHub || '#'"
          target="_blank"
        >
          <img class="size-6" src="/icons/github-2.svg" alt="github-2.svg" />
          Codigo
        </a>
        <a
          class="border border-gray-300 rounded-lg px-4 py-2 text-sm flex items-center justify-center gap-2 !bg-black text-white"
          :href="linkDemo || '#'"
          target="_blank"
        >
          <img class="size-6" src="/icons/share.svg" alt="share.svg" />Demo
        </a>
      </div>
    </div>
  </div>
</template>
