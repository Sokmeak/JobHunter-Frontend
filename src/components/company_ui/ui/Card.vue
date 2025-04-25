<template>
  <div class="card" :class="customClass">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"/>
    </div>
    <div class="card-body">
      <slot/>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  customClass: { type: String, default: '' }
})
</script>
