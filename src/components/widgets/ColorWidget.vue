<script lang="ts">
import { defineComponent } from 'vue';

import BaseInput from './BaseInput.vue';

export default defineComponent({
  name: 'ColorWidget',
  components: { BaseInput },
});
</script>

<template>
  <BaseInput type="color" v-bind="$attrs" />
</template>
