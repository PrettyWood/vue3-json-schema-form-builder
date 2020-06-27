<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { JsonSchema, UISchema, StringFieldProps } from '/@/types';

export default defineComponent({
  name: 'StringField',
  props: {
    formData: { type: String, default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: undefined },
  },
  setup(props: StringFieldProps, { emit }) {
    function onUpdate(value: string) {
      const newValue = value === '' ? undefined : value;
      emit('update:formData', newValue);
      console.debug('StringField: emit', newValue);
    }
    return {
      onUpdate,
    };
  },
});
</script>

<template>
  <div class="string-field">
    <input
      :value="formData"
      @input="onUpdate($event.target.value)"
    />
  </div>
</template>