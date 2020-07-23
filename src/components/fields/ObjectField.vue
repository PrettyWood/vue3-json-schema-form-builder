<script lang="ts">
import { defineComponent, PropType } from 'vue';

import BaseField from './BaseField.vue';
import { JsonSchema, UISchema, FieldProps } from '/@/types';

export default defineComponent({
  name: 'ObjectField',
  components: { BaseField },
  props: {
    formData: { type: Object as PropType<Record<string, any>>, default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: undefined },
  },
  setup(props: FieldProps<Record<string, any>>, { emit }) {
    function onUpdate(fieldName: string, value: any) {
      let newFormData: Record<string, any> | undefined = { ...props.formData, [fieldName]: value };
      if (Object.values(newFormData).every((x) => x === undefined)) {
        newFormData = undefined;
      }
      emit('update:formData', newFormData);
      console.debug('ObjectField: emit', newFormData);
    }
    return {
      onUpdate,
    };
  },
});
</script>

<template>
  <div class="object-field">
    <fieldset>
      <legend v-if="jsonSchema.title" class="title" v-text="jsonSchema.title" />
      <p v-if="jsonSchema.description" class="description" v-text="jsonSchema.description" />
      <BaseField
        v-for="(fieldJsonSchema, fieldName) in jsonSchema.properties"
        :key="fieldName"
        :formData="(formData || {})[fieldName]"
        :jsonSchema="fieldJsonSchema"
        :uiSchema="(uiSchema || {})[fieldName]"
        @update:formData="onUpdate(fieldName, $event)"
      />
    </fieldset>
  </div>
</template>
