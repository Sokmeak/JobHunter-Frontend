<template>
  <img
    :src="src"
    :alt="alt"
    class="rounded-circle"
    :width="size"
    :height="size"
  />
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "" },
  size: { type: [String, Number], default: 40 },
});
</script>
