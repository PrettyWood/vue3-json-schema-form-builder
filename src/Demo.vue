<script lang="ts">
/**
 * Demo component with different examples
 */
import { defineComponent, ref } from 'vue';

import FormBuilder from './components/FormBuilder.vue';
import EXAMPLES from './demo-examples';

export default defineComponent({
  name: 'Demo',
  components: { FormBuilder },
  setup() {
    const selectedIndex = ref(0);
    const formData = ref(undefined);
    function select(index: number) {
      selectedIndex.value = index;
      formData.value = EXAMPLES[index].formData;
    }
    select(0);
    return { EXAMPLES, formData, selectedIndex, select };
  },
});
</script>

<template>
  <div>
    <select name="examples" @change="select($event.target.selectedIndex)">
      <option v-for="(ex, index) in EXAMPLES" :key="index" v-text="ex.title" />
    </select>
    <hr />
    <div class="grid">
      <FormBuilder
        :jsonSchema="EXAMPLES[selectedIndex].jsonSchema"
        :uiSchema="EXAMPLES[selectedIndex].uiSchema"
        v-model:formData="formData"
      />
      <div class="column2">
        <h3>Form data</h3>
        <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
        <!-- JSON schema -->
        <hr />
        <h3>JSON Schema</h3>
        <pre>{{ EXAMPLES[selectedIndex].jsonSchema }}</pre>
        <!-- UI schema -->
        <hr />
        <h3>UI Schema</h3>
        <pre>{{ EXAMPLES[selectedIndex].uiSchema }}</pre>
      </div>
    </div>
  </div>
</template>

<style>
hr {
  margin: 20px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
}
.title {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
.description {
  margin: 0 0 10px;
  font-style: italic;
}
button[type='submit'] {
  margin-top: 20px;
}
.field {
  margin-top: 10px;
}
.errors {
  color: red;
}
input[type='text'],
input[type='number'],
input[type='password'],
input[type='email'],
input[type='url'],
input[type='color'],
select,
textarea,
button {
  width: 100%;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 1.4;
  font-size: 14px;
  line-height: 1.42857143;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  cursor: pointer;
  margin-top: 10px;
}
</style>