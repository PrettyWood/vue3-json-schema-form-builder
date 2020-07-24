<script lang="ts">
import { defineComponent } from 'vue';

import BaseInput from './BaseInput.vue';

export default defineComponent({
  name: 'UpDownWidget',
  components: { BaseInput },
  inheritAttrs: false,
  props: {
    modelValue: { type: Number, default: undefined },
  },
});
</script>

<template>
  <div class="range-widget">
    <BaseInput type="range" :modelValue="modelValue" v-bind="$attrs" />
    <span style="margin-left: 5px;" v-text="modelValue" />
  </div>
</template>
