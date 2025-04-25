<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="form-control"
    v-model="internalValue"
    @input="$emit('update:modelValue',internalValue)"
  />
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: [String, Number],
  type:       { type: String, default: 'text' },
  placeholder:{ type: String, default: '' }
})

const internalValue = ref(props.modelValue)
watch(() => props.modelValue, v => internalValue.value = v)
</script>
