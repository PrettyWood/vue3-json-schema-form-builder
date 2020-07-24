<script lang="ts">
import { defineComponent } from 'vue';

import BaseInput from './BaseInput.vue';

export default defineComponent({
  name: 'UrlWidget',
  components: { BaseInput },
});
</script>

<template>
  <BaseInput type="url" v-bind="$attrs" />
</template>
