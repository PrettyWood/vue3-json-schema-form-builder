<script lang="ts">
/**
 * Main field component, which is basically the registry
 */
import { computed, defineComponent, Component, PropType } from 'vue';

import StringField from './StringField.vue';
import { JsonSchema, JsonSchemaType, UISchema } from '/@/types';

const FIELD_MAPPING: Record<JsonSchemaType, Component | undefined> = {
  array: undefined,
  boolean: undefined,
  integer: undefined,
  null: undefined,
  number: undefined,
  string: StringField,
  object: undefined,
};

export default defineComponent({
  name: 'BaseField',
  props: {
    formData: { type: String, default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: undefined },
  },
  setup(props) {
    return {
      field: computed((): Component | undefined => {
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
  <component :is="field" v-bind="$props" />
</template>