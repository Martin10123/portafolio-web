<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-100 bg-gray-100 text-gray-700 font-light"
  >
    {{ title }}
  </div>
</template>
