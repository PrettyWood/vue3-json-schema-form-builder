<script lang="ts">
import { computed, defineComponent, ComponentPublicInstance, PropType } from 'vue';

import { JsonSchema, UISchema, Widget, WidgetProps } from '/@/types';

import ColorWidget from './ColorWidget.vue';
import DateWidget from './DateWidget.vue';
import EmailWidget from './EmailWidget.vue';
import PasswordWidget from './PasswordWidget.vue';
import RadioWidget from './RadioWidget.vue';
import RangeWidget from './RangeWidget.vue';
import SelectWidget from './SelectWidget.vue';
import TextWidget from './TextWidget.vue';
import TextareaWidget from './TextareaWidget.vue';
import UpDownWidget from './UpDownWidget.vue';
import UrlWidget from './UrlWidget.vue';

const WIDGET_MAPPING: Record<Widget, ComponentPublicInstance<any>> = {
  color: ColorWidget,
  date: DateWidget,
  email: EmailWidget,
  password: PasswordWidget,
  radio: RadioWidget,
  range: RangeWidget,
  select: SelectWidget,
  text: TextWidget,
  textarea: TextareaWidget,
  updown: UpDownWidget,
  url: UrlWidget,
};

const JSON_SCHEMA_FORMAT_WIDGET_MAPPING: Record<string, Widget> = {
  'date': 'date',
  'email': 'email',
  'idn-email': 'email',
  'uri': 'url',
  'uri-reference': 'url',
}

function getWidgetName(jsonSchema: JsonSchema, uiSchema: UISchema<string | number> | undefined): Widget {
  // priority to the explicit widget set by the user
  if (uiSchema?.['ui:widget']) {
    return uiSchema['ui:widget'];
  }

  // default widget based on JSON schema
  // https://json-schema.org/understanding-json-schema/reference/string.html?highlight=email#built-in-formats
  if (jsonSchema.enum) {
    return 'select';
  } else if (jsonSchema.format && jsonSchema.format in JSON_SCHEMA_FORMAT_WIDGET_MAPPING) {
    return JSON_SCHEMA_FORMAT_WIDGET_MAPPING[jsonSchema.format]
  }

  // fallback
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
    required: { type: Boolean, required: true },
  },
  setup(props: WidgetProps<string | number>) {
    return {
      widget: computed(() => WIDGET_MAPPING[getWidgetName(props.jsonSchema, props.uiSchema)])
    }
  }
});
</script>

<template>
  <component :is="widget" v-bind="$props" />
</template>