<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

import { JsonSchema, UISchema, FieldProps } from '/@/types';

export default defineComponent({
  name: 'NumberField',
  props: {
    formData: { type: Number, default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: undefined },
  },
  setup(props: FieldProps<number>, { emit }) {
    function onUpdate(value: string) {
      const newValue = value === '' ? undefined : +value;
      emit('update:formData', newValue);
      console.debug('NumberField: emit', newValue);
    }
    return {
      title: computed(() => props.jsonSchema.title),
      description: computed(() => props.jsonSchema.description),
      onUpdate,
    };
  },
});
</script>

<template>
  <div class="number-field">
    <label class="title" v-if="title" v-text="title" />
    <p class="description" v-if="description" v-text="description" />
    <input
      :value="formData"
      @input="onUpdate($event.target.value)"
    />
  </div>
</template>