<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { JsonSchema, UISchema } from '/@/types';

export default defineComponent({
  name: 'BaseWidget',
  props: {
    modelValue: { type: [String, Number], default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: undefined },
  },
});
</script>

<template>
  <input
    v-bind="inputAttrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>