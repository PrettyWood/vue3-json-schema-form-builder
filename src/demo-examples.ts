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
      title: 'A registration form',
      description: 'A simple form example.',
      type: 'object',
      required: ['firstName', 'lastName'],
      properties: {
        firstName: {
          type: 'string',
          title: 'First name',
          default: 'Chuck',
        },
        lastName: {
          type: 'string',
          title: 'Last name',
        },
        age: {
          type: 'integer',
          title: 'Age',
        },
        bio: {
          type: 'string',
          title: 'Bio',
        },
        password: {
          type: 'string',
          title: 'Password',
          minLength: 3,
        },
        telephone: {
          type: 'string',
          title: 'Telephone',
          minLength: 10,
        },
      },
    },
    uiSchema: {
      firstName: {
        // "ui:autofocus": true,
        // "ui:autocomplete": "family-name"
      },
      lastName: {
        // "ui:autocomplete": "given-name"
      },
      age: {
        // 'ui:widget': 'updown',
        'ui:title': 'Age of person',
        // 'ui:description': '(earthian year)',
      },
      bio: {
        // 'ui:widget': 'textarea',
      },
      password: {
        // 'ui:widget': 'password',
      },
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
