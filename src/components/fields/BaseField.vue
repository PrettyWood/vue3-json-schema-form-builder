<script lang="ts">
/**
 * Main field component, which is basically the registry
 */
import { computed, defineAsyncComponent, defineComponent, onMounted, ComponentPublicInstance, PropType } from 'vue';

import NumberField from './NumberField.vue';
import StringField from './StringField.vue';
import { JsonSchema, JsonSchemaType, UISchema } from '/@/types';

const FIELD_MAPPING: Record<JsonSchemaType, ComponentPublicInstance<any> | undefined> = {
  array: undefined,
  boolean: undefined,
  integer: NumberField,
  null: undefined,
  number: NumberField,
  string: StringField,
  object: defineAsyncComponent(() => import('./ObjectField.vue')),  // avoid circular dependency
};

export default defineComponent({
  name: 'BaseField',
  props: {
    formData: { type: [Object, String, Number], default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: (): UISchema => ({}) },
  },
  setup(props, { emit }) {
    onMounted(() => {
      if (props.formData === undefined && props.jsonSchema.default !== undefined) {
        emit('update:formData', props.jsonSchema.default);
      }
    });
    return {
      field: computed((): ComponentPublicInstance | undefined => {
        // we can have an array in JSON Schema (e.g. "type": ["number", "string"])
        const jsonSchemaType = Array.isArray(props.jsonSchema.type)
          ? props.jsonSchema.type[0]
          : props.jsonSchema.type;
        return jsonSchemaType ? FIELD_MAPPING[jsonSchemaType] : undefined;
      }),
    }
  }
});
</script>

<template>
  <component class="field" :is="field" v-bind="$props" />
</template>