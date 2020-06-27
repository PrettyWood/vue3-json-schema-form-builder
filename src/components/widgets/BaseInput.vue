<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { JsonSchema } from '/@/types';

export default defineComponent({
  name: 'BaseInput',
  props: {
    modelValue: { type: [String, Number], default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
  },
});
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>