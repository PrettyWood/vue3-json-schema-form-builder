import { JsonSchema, UISchema } from '/@/types';

export interface Example {
  title: string;
  jsonSchema: JsonSchema;
  uiSchema?: UISchema;
  formData?: any;
}

const EXAMPLES: Example[] = [
  // string field
  {
    title: 'String field - basic',
    jsonSchema: {
      type: 'string'
    },
  },
  {
    title: 'String field - basic with title and description',
    jsonSchema: {
      type: 'string',
      title: 'the title',
      description: 'the description'
    },
  }
];

export default EXAMPLES;
