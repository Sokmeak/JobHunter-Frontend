<template>
  <button
    :type="type"
    :class="buttonClasses"
    @click="$emit('click',$event)"
  >
    <slot/>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size:    { type: String, default: '' },  # sm, lg or ''
  type:    { type: String, default: 'button' },
  block:   { type: Boolean, default: false }
})

const buttonClasses = computed(() => {
  const cls = ['btn', \`btn-\${props.variant}\`]
  if (props.size) cls.push(\`btn-\${props.size}\`)
  if (props.block) cls.push('w-100')
  return cls
})
</script>
