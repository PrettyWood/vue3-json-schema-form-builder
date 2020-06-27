<script lang="ts">
import { defineComponent } from 'vue';

import BaseInput from './BaseInput.vue';

export default defineComponent({
  name: 'TextWidget',
  components: { BaseInput },
});
</script>

<template>
  <BaseInput type="text" v-bind="$attrs" />
</template>
