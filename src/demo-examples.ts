import { JsonSchema, UISchema } from '/@/types';

export interface Example {
  title: string;
  jsonSchema: JsonSchema;
  uiSchema?: UISchema;
  formData?: any;
}

const EXAMPLES: Example[] = [
  // number field
  {
    title: 'Number field - basic integer',
    jsonSchema: {
      type: 'integer',
    },
  },
  {
    title: 'Number field - basic float',
    jsonSchema: {
      type: 'number',
    },
  },
  {
    title: 'Number field - basic integer with min and max',
    jsonSchema: {
      type: 'integer',
      minimum: 3,
      maximum: 7,
    },
  },
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
  },
  {
    title: 'String-field - with min and max length',
    jsonSchema: {
      type: 'string',
      minLength: 2,
      maxLength: 3
    }
  },
  // object field
  {
    title: 'Object field - Simple',
    jsonSchema: {
      "title": "A registration form",
      "description": "A simple form example.",
      "type": "object",
      "required": [
        "firstName",
        "lastName"
      ],
      "properties": {
        "firstName": {
          "type": "string",
          "title": "First name",
          "default": "Chuck"
        },
        "lastName": {
          "type": "string",
          "title": "Last name"
        },
        "telephone": {
          "type": "string",
          "title": "Telephone",
          "minLength": 10
        }
      }
    },
    formData: {
      "lastName": "Norris",
      "age": 75,
      "bio": "Roundhouse kicking asses since 1940",
      "password": "noneed"
    }
  }
];

export default EXAMPLES;
