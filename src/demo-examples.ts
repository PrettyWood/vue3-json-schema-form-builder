import { JsonSchema, UISchema } from '/@/types';

export interface Example {
  title: string;
  jsonSchema: JsonSchema;
  uiSchema?: UISchema;
  formData?: any;
}

const EXAMPLES: Example[] = [
  {
    title: 'Basic string',
    jsonSchema: {
      type: 'string'
    },
  }
];

export default EXAMPLES;
