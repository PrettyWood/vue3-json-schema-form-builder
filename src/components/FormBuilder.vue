<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { JsonSchema, UISchema } from '/@/types';
import StringField from './fields/StringField.vue';

export default defineComponent({
  name: 'FormBuilder',
  components: { StringField },
  props: {
    formData: { type: String, default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema>, default: undefined },
  },
});
</script>

<template>
  <form class="form-builder" @submit.prevent>
    <StringField
      :formData="formData"
      :jsonSchema="jsonSchema"
      :uiSchema="uiSchema"
      @update:formData="$emit('update:formData', $event)"
    />
    <button type="submit">Submit</button>
  </form>
</template>