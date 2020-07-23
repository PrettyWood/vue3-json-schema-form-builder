<script lang="ts">
import { defineComponent } from 'vue';

import BaseInput from './BaseInput.vue';

export default defineComponent({
  name: 'PasswordWidget',
  components: { BaseInput },
});
</script>

<template>
  <BaseInput type="password" v-bind="$attrs" />
</template>
