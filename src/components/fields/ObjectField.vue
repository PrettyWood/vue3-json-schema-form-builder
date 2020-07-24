<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { useDescription, useTitle } from './hooks';
import BaseField from './BaseField.vue';
import { JsonSchema, UISchema, FieldProps } from '/@/types';

export default defineComponent({
  name: 'ObjectField',
  components: { BaseField },
  props: {
    formData: { type: Object as PropType<Record<string, any>>, default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema<Record<string, any>>>, default: (): UISchema<Record<string, any>> => ({}) },
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
      title: useTitle(props),
      description: useDescription(props),
    };
  },
});
</script>

<template>
  <div class="object-field">
    <fieldset>
      <legend v-if="title" class="title" v-text="title" />
      <p v-if="description" class="description" v-text="description" />
      <BaseField
        v-for="(fieldJsonSchema, fieldName) in jsonSchema.properties"
        :key="fieldName"
        :formData="(formData || {})[fieldName]"
        :jsonSchema="fieldJsonSchema"
        :uiSchema="uiSchema[fieldName]"
        @update:formData="onUpdate(fieldName, $event)"
      />
    </fieldset>
  </div>
</template>
