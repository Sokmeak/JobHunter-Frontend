<template>
  <select
    class="form-select"
    v-model="internalValue"
    @change="$emit('update:modelValue',internalValue)"
  >
    <option
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
    >{{ opt.label }}</option>
  </select>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: [String, Number],
  options:    { type: Array, default: () => [] }
})

const internalValue = ref(props.modelValue)
watch(() => props.modelValue, v => internalValue.value = v)
</script>
