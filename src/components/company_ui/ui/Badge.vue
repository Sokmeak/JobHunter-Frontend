<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  pill:    { type: Boolean, default: false }
})

const badgeClasses = computed(() => [
  'badge',
  \`bg-\${props.variant}\`,
  props.pill ? 'rounded-pill' : ''
])
</script>
