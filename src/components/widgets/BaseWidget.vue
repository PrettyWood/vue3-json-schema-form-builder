<script lang="ts">
import { computed, defineComponent, ComponentPublicInstance, PropType } from 'vue';

import { JsonSchema, UISchema, Widget } from '/@/types';

import EmailWidget from './EmailWidget.vue';
import PasswordWidget from './PasswordWidget.vue';
import TextWidget from './TextWidget.vue';
import TextareaWidget from './TextareaWidget.vue';
import UpDownWidget from './UpDownWidget.vue';

const WIDGET_MAPPING: Record<Widget, ComponentPublicInstance<any>> = {
  email: EmailWidget,
  password: PasswordWidget,
  text: TextWidget,
  textarea: TextareaWidget,
  updown: UpDownWidget,
};

function getWidgetName(jsonSchema: JsonSchema, uiSchema: UISchema<string | number> | undefined): Widget {
  if (uiSchema?.['ui:widget']) {
    return uiSchema['ui:widget'];
  }
  switch (jsonSchema.type) {
    case 'integer':
      return 'updown';
    case 'number':
      return 'updown';
    case 'string':
      return 'text';
    default:
      return 'text';
  }
}

export default defineComponent({
  name: 'BaseWidget',
  props: {
    modelValue: { type: [String, Number], default: undefined },
    jsonSchema: { type: Object as PropType<JsonSchema>, required: true },
    uiSchema: { type: Object as PropType<UISchema<string | number>>, required: true },
  },
  setup(props) {
    return {
      widget: computed(() => WIDGET_MAPPING[getWidgetName(props.jsonSchema, props.uiSchema)])
    }
  }
});
</script>

<template>
  <component :is="widget" v-bind="$props" />
</template>