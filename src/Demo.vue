<script lang="ts">
/**
 * Demo component with different examples
 */
import { defineComponent, ref, computed } from 'vue';

import FormBuilder from './components/FormBuilder.vue';
import EXAMPLES from './demo-examples';

export default defineComponent({
  name: 'Demo',
  components: { FormBuilder },
  setup() {
    let selectedTitle= ref('Object field - Simple');
    const exampleTitles = EXAMPLES.map((e) => e.title);
    const selectedExample = computed(() => EXAMPLES.find((e) => e.title === selectedTitle.value) ?? EXAMPLES[0]);
    function selectExample(title: string) {
      selectedTitle.value = title;
      formData.value = selectedExample.value.formData;
    }
    const liveValidation = ref(false);
    let formData = ref<any>(selectedExample.value.formData);
    return { formData, exampleTitles, selectedExample, selectExample, liveValidation };
  },
});
</script>

<template>
  <div>
    <select name="examples" :value="selectedExample.title">
      <option v-for="(title, index) in exampleTitles" :key="index" @click="selectExample(title)" v-text="title" />
    </select>
    <hr />
    <div class="grid">
      <FormBuilder
        :key="selectedExample.title"
        :jsonSchema="selectedExample.jsonSchema"
        :uiSchema="selectedExample.uiSchema"
        v-model:formData="formData"
        :liveValidation="liveValidation"
      />
      <div class="column2">
        <h3>Live Validation</h3>
        <input type="checkbox" v-model="liveValidation" />
        <h3>Form data</h3>
        <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
        <!-- JSON schema -->
        <hr />
        <h3>JSON Schema</h3>
        <pre>{{ selectedExample.jsonSchema }}</pre>
        <!-- UI schema -->
        <hr />
        <h3>UI Schema</h3>
        <pre>{{ selectedExample.uiSchema }}</pre>
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
  width: 90%;
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