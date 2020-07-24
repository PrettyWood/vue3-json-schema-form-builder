<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { JsonSchema, UISchema, WidgetProps } from '/@/types';

export default defineComponent({
  name: 'SelectWidget',
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Number], default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema<string | number>>, required: true },
    required: { type: Boolean, required: true },
  },
  setup(props: WidgetProps<string | number>) {
    const defaultOptions = props.jsonSchema.enum ?? [];
    return {
      // add empty option to remove value if field is optional
      options: props.required ? defaultOptions : ['', ...defaultOptions],
    }
  }
});
</script>

<template>
  <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option
      v-for="(value, index) in options"
      :key="index"
      v-text="value"
    />
  </select>
</template>
