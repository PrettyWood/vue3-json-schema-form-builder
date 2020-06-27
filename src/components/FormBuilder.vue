<script lang="ts">
import Ajv from 'ajv';
import { defineComponent, PropType, ref, watch } from 'vue';

import { JsonSchema, UISchema } from '/@/types';
import StringField from './fields/StringField.vue';

function validateFormData(formData: any, jsonSchema: JsonSchema): string[] {
  const ajv = new Ajv({
    errorDataPath: 'property',
    allErrors: true,
  });
  ajv.validate(jsonSchema, formData);
  /**
   * ajv.errors = [
   *   {
   *     dataPath: ".firstName",
   *     message: "is a required property",
   *     ...
   *   },
   *   {
   *     dataPath: ".lastName",
   *     ...
   *   }
   * ]
   */
  const ajvErrors = ajv.errors ?? [];
  return ajvErrors.map(({ dataPath, message }) => `${dataPath} ${message}`);
}

export default defineComponent({
  name: 'FormBuilder',
  components: { StringField },
  props: {
    formData: { type: String, default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: undefined },
  },
  setup(props) {
    const errors = ref<string[]>([]);
    // Reset error message on form change (should probably be moved)
    watch(
      () => props.jsonSchema,
      () => (errors.value = []),
      { immediate: true },
    );
    function validate() {
      errors.value = validateFormData(props.formData, props.jsonSchema);
    }
    return { errors, validate };
  }
});
</script>

<template>
  <form class="form-builder" @submit.prevent="validate()">
    <ul class="errors">
      <li v-for="(error, index) in errors" :key="index" v-text="error" />
    </ul>
    <StringField
      :formData="formData"
      :jsonSchema="jsonSchema"
      :uiSchema="uiSchema"
      @update:formData="$emit('update:formData', $event)"
    />
    <button type="submit">Submit</button>
  </form>
</template>