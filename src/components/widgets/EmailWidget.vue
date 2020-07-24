<script lang="ts">
import { defineComponent } from 'vue';

import BaseInput from './BaseInput.vue';

export default defineComponent({
  name: 'EmailWidget',
  components: { BaseInput },
});
</script>

<template>
  <BaseInput type="email" v-bind="$attrs" />
</template>
