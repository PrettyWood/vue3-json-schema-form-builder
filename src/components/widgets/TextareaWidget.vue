<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextareaWidget',
  props: {
    modelValue: { type: String, default: undefined },
  },
});
</script>

<template>
  <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>
