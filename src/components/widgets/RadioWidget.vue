<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { JsonSchema, UISchema, WidgetProps } from '/@/types';

export default defineComponent({
  name: 'RadioWidget',
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Number], default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema<string | number>>, required: true },
    required: { type: Boolean, required: true },
  },
  setup(props: WidgetProps<string | number>, { emit }) {
    return {
      options: props.jsonSchema.enum ?? [],
      onClick: (value: string | number) => {
        // allow "unselect" when field is optional
        emit('update:modelValue',  value === props.modelValue && !props.required ? '' : value)
      }
    }
  }
});
</script>

<template>
  <div class="radio-widget">
    <span v-for="(value, index) in options" :key="index">
      <input
        type="radio"
        :value="value"
        :checked="value === modelValue"
        @click="onClick(value)"
      />
      <label v-text="value" />
    </span>
  </div>
</template>
