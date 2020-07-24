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
        birthDate: {
          type: 'string',
          title: 'Date of birth',
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
        email: {
          type: 'string',
        },
        website: {
          type: 'string',
        },
        favoriteColor: {
          type: 'string',
          default: '#e1eae2',
          title: 'Favorite color',
        }
      },
    },
    uiSchema: {
      firstName: {
        "ui:autofocus": true,
        "ui:autocomplete": "family-name"
      },
      lastName: {
        "ui:autocomplete": "given-name"
      },
      age: {
        'ui:widget': 'updown',
        'ui:title': 'Age of person',
        'ui:description': '(earthian year)',
      },
      birthDate: {
        'ui:widget': 'date',
      },
      bio: {
        'ui:widget': 'textarea',
      },
      password: {
        'ui:widget': 'password',
      },
      email: {
        'ui:widget': 'email',
      },
      website: {
        'ui:widget': 'url',
      },
      favoriteColor: {
        'ui:widget': 'color',
      },
    },
    formData: {
      "lastName": "Norris",
      "age": 75,
      "bio": "Roundhouse kicking asses since 1940",
      "password": "noneed"
    }
  },
  {
    title: 'Object field - Numbers',
    jsonSchema: {
      type: 'object',
      title: 'Number fields',
      required: ['requiredNumberEnum', 'requiredNumberEnumRadio'],
      properties: {
        number: {
          title: 'Number',
          type: 'number',
        },
        integer: {
          title: 'Integer',
          type: 'integer',
        },
        numberEnum: {
          type: 'number',
          title: 'Number enum',
          enum: [1, 2, 3],
        },
        requiredNumberEnum: {
          type: 'number',
          title: 'Required number enum',
          enum: [1, 2, 3],
        },
        numberEnumRadio: {
          type: 'number',
          title: 'Number enum radio',
          enum: [1, 2, 3],
        },
        requiredNumberEnumRadio: {
          type: 'number',
          title: 'Required number enum radio',
          enum: [1, 2, 3],
        },
        integerRange: {
          title: 'Integer range',
          type: 'integer',
          minimum: 42,
          maximum: 100,
        },
        integerRangeSteps: {
          title: 'Integer range (by 10)',
          type: 'integer',
          minimum: 50,
          maximum: 100,
          multipleOf: 10,
        },
      },
    },
    uiSchema: {
      integer: {
        'ui:widget': 'updown',
      },
      numberEnumRadio: {
        'ui:widget': 'radio',
      },
      requiredNumberEnumRadio: {
        'ui:widget': 'radio',
      },
      integerRange: {
        'ui:widget': 'range',
      },
      integerRangeSteps: {
        'ui:widget': 'range',
      },
    },
    formData: {
      number: 3.14,
      integer: 42,
      numberEnum: 2,
      numberEnumRadio: 2,
      integerRange: 42,
      integerRangeSteps: 80,
    },
  },
  {
    title: 'Widgets',
    jsonSchema: {
      "title": "Widgets",
      "type": "object",
      "properties": {
        "stringFormats": {
          "type": "object",
          "title": "String formats",
          "properties": {
            "email": {
              "type": "string",
              "format": "email"
            },
            "uri": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "boolean": {
          "type": "object",
          "title": "Boolean field",
          "properties": {
            "default": {
              "type": "boolean",
              "title": "checkbox (default)",
              "description": "This is the checkbox-description"
            },
            "radio": {
              "type": "boolean",
              "title": "radio buttons",
              "description": "This is the radio-description"
            },
            "select": {
              "type": "boolean",
              "title": "select box",
              "description": "This is the select-description"
            }
          }
        },
        "string": {
          "type": "object",
          "title": "String field",
          "properties": {
            "default": {
              "type": "string",
              "title": "text input (default)"
            },
            "textarea": {
              "type": "string",
              "title": "textarea"
            },
            "placeholder": {
              "type": "string"
            },
            "color": {
              "type": "string",
              "title": "color picker",
              "default": "#151ce6"
            }
          }
        },
        "secret": {
          "type": "string",
          "default": "I'm a hidden string."
        },
        "disabled": {
          "type": "string",
          "title": "A disabled field",
          "default": "I am disabled."
        },
        "readonly": {
          "type": "string",
          "title": "A readonly field",
          "default": "I am read-only."
        },
        "readonly2": {
          "type": "string",
          "title": "Another readonly field",
          "default": "I am also read-only.",
          "readOnly": true
        },
        "widgetOptions": {
          "title": "Custom widget with options",
          "type": "string",
          "default": "I am yellow"
        },
        "selectWidgetOptions": {
          "title": "Custom select widget with options",
          "type": "string",
          "enum": [
            "foo",
            "bar"
          ],
        }
      }
    },
    uiSchema: {
      "boolean": {
        "radio": {
          "ui:widget": "radio"
        },
        "select": {
          "ui:widget": "select"
        }
      },
      "string": {
        "textarea": {
          "ui:widget": "textarea",
          // "ui:options": {
          //   "rows": 5
          // }
        },
        "placeholder": {
          // "ui:placeholder": "This is a placeholder"
        },
        "color": {
          "ui:widget": "color"
        }
      },
      "secret": {
        // "ui:widget": "hidden"
      },
      "disabled": {
        // "ui:disabled": true
      },
      "readonly": {
        // "ui:readonly": true
      },
      "widgetOptions": {
        // "ui:options": {
        //   "backgroundColor": "yellow"
        // }
      },
      "selectWidgetOptions": {
        // "ui:options": {
        //   "backgroundColor": "pink"
        // }
      }
    },
    formData: {
      "stringFormats": {
        "email": "chuck@norris.net",
        "uri": "http://chucknorris.com/"
      },
      "boolean": {
        "default": true,
        "radio": true,
        "select": true
      },
      "string": {
        "color": "#151ce6",
        "default": "Hello...",
        "textarea": "... World"
      },
      "secret": "I'm a hidden string.",
      "disabled": "I am disabled.",
      "readonly": "I am read-only.",
      "readonly2": "I am also read-only.",
      "widgetOptions": "I am yellow"
    }
  }
];

export default EXAMPLES;
