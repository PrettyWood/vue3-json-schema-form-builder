<script lang="ts">
import Ajv from 'ajv';
import { defineComponent, PropType, ref, watchEffect } from 'vue';

import { JsonSchema, UISchema } from '/@/types';
import BaseField from './fields/BaseField.vue';

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
  components: { BaseField },
  props: {
    formData: { type: [Object, String, Number], default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: undefined },
    liveValidation: { type: Boolean, default: false },
  },
  setup(props) {
    const errors = ref<string[]>([]);
    function validate() {
      errors.value = validateFormData(props.formData, props.jsonSchema);
    }
    watchEffect(() => {
      if (props.liveValidation) validate();
    });
    return { errors, validate };
  }
});
</script>

<template>
  <form class="form-builder" @submit.prevent="validate()">
    <ul class="errors">
      <li v-for="(error, index) in errors" :key="index" v-text="error" />
    </ul>
    <BaseField
      :formData="formData"
      :jsonSchema="jsonSchema"
      :uiSchema="uiSchema"
      @update:formData="$emit('update:formData', $event)"
    />
    <button type="submit">Submit</button>
  </form>
</template>
