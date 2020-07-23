<script lang="ts">
import { defineComponent } from 'vue';

import BaseInput from './BaseInput.vue';

export default defineComponent({
  name: 'UpDownWidget',
  components: { BaseInput },
});
</script>

<template>
  <BaseInput type="number" v-bind="$attrs" />
</template>
