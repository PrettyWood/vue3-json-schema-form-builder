<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { useDescription, useTitle } from './hooks';
import BaseWidget from '../widgets/BaseWidget.vue';
import { JsonSchema, UISchema, FieldProps } from '/@/types';

export default defineComponent({
  name: 'StringField',
  components: { BaseWidget },
  props: {
    formData: { type: String, default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: undefined },
  },
  setup(props: FieldProps<string>, { emit }) {
    function onUpdate(value: string) {
      const newValue = value === '' ? undefined : value;
      emit('update:formData', newValue);
      console.debug('StringField: emit', newValue);
    }
    return {
      title: useTitle(props),
      description: useDescription(props),
      onUpdate,
    };
  },
});
</script>

<template>
  <div class="string-field">
    <label class="title" v-if="title" v-text="title" />
    <p class="description" v-if="description" v-text="description" />
    <BaseWidget
      :modelValue="formData"
      :jsonSchema="jsonSchema"
      :uiSchema="uiSchema"
      @update:modelValue="onUpdate"
    />
  </div>
</template>