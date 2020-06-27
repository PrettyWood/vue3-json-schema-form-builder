<script lang="ts">
import { defineComponent } from 'vue';

import BaseInput from './BaseInput.vue';

export default defineComponent({
  name: 'NumberWidget',
  components: { BaseInput },
});
</script>

<template>
  <BaseInput type="number" v-bind="$attrs" />
</template>
