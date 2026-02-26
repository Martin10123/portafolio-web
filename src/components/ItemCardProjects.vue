<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] transition-colors border-stone-700/50 bg-stone-800/80 text-stone-400 hover:border-orange-500/40 font-light"
  >
    {{ title }}
  </div>
</template>
