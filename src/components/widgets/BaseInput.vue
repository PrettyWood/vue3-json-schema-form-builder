<script lang="ts">
import { computed, defineComponent, mergeProps, PropType } from 'vue';

import { JsonSchema } from '/@/types';

export default defineComponent({
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Number], default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
  },
  setup(props, { attrs }) {
    const inputAttrs = computed<Record<string, any>>(() => {
      let extraAttrs: Record<string, any> = {};
      if (props.jsonSchema.type === 'integer' || props.jsonSchema.type === 'number') {
        extraAttrs = {
          min: props.jsonSchema.minimum,
          max: props.jsonSchema.maximum,
          step: props.jsonSchema.multipleOf ?? (props.jsonSchema.type === 'number' ? 'any' : 1),
        };
      } else if (props.jsonSchema.type === 'string') {
        extraAttrs = {
          minlength: props.jsonSchema.minLength,
          maxlength: props.jsonSchema.maxLength,
        }
      };
      return mergeProps(extraAttrs, attrs);
    })
    return { inputAttrs };
  }
});
</script>

<template>
  <input
    v-bind="inputAttrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
