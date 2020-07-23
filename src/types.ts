import { JSONSchema7, JSONSchema7TypeName } from 'json-schema';

export type JsonSchema = JSONSchema7;
export type JsonSchemaType = JSONSchema7TypeName;
export type UISchema<T = any> = T extends object ? Record<string, UISchemaBase> : UISchemaBase;

export interface FieldProps<T = any> {
  formData: T;
  jsonSchema: JsonSchema;
  uiSchema: UISchema<T>;
}

export type Widget = 'password' | 'text' | 'textarea' | 'updown';

export interface UISchemaBase {
  'ui:widget'?: Widget;
  'ui:title'?: string;
  'ui:description'?: string;
}
