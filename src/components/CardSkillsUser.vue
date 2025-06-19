<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto text-center">
    <div class="rounded-lg p-4 bg-gray-50 w-24 h-24 mx-auto mb-4">
      <img :src="icon" :alt="title" />
    </div>

    <h3 class="text-2xl font-medium text-gray-900 mb-3">
      {{ title }}
    </h3>

    <p class="text-gray-600 font-light text-sm">
      {{ description }}
    </p>
  </div>
</template>
