import { JSONSchema7, JSONSchema7TypeName } from 'json-schema';

export type JsonSchema = JSONSchema7;
export type JsonSchemaType = JSONSchema7TypeName;
export type UISchema<T = any> = T extends Record<string, any> ? { [fieldName: string]: UISchema<T> } : UISchemaBase;

export interface FieldProps<T = any> {
  formData: T;
  jsonSchema: JsonSchema;
  uiSchema: UISchema<T>;
  fieldName: string;
  required: boolean;
}

export interface WidgetProps<T = any> {
  modelValue: T;
  jsonSchema: JsonSchema;
  uiSchema: UISchema<T>;
  required: boolean;
}

export type Widget =
  | 'color'
  | 'date'
  | 'email'
  | 'password'
  | 'radio'
  | 'range'
  | 'select'
  | 'text'
  | 'textarea'
  | 'updown'
  | 'url';

export interface UISchemaBase {
  'ui:widget'?: Widget;
  'ui:title'?: string;
  'ui:description'?: string;
  'ui:autofocus'?: boolean;
  'ui:autocomplete'?: HTMLAutocomplete;
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
// Note: This type could probably be imported or just replaced by string
type HTMLAutocomplete =
  | 'off'
  | 'on'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'email'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'tel'
  | 'url';
