<script setup lang="ts">
defineProps<{
  title: string;
  skills: string[];
  icon: string;
}>();
</script>

<template>
  <div class="bg-white rounded-lg p-6 border border-gray-200">
    <div class="flex flex-col items-center mb-4">
      <div class="bg-gray-100 p-4 rounded-full mb-4">
        <img class="size-8" :src="icon" :alt="title" />
      </div>
      <h2 class="text-2xl leading-none tracking-tight text-black font-medium">
        {{ title }}
      </h2>
    </div>

    <ul class="grid gap-2">
      <li
        class="text-gray-600 text-center py-2 px-3 rounded-lg bg-gray-50 font-normal"
        v-for="skill in skills"
        :key="skill"
      >
        {{ skill }}
      </li>
    </ul>
  </div>
</template>
