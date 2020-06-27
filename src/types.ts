import { JSONSchema7, JSONSchema7TypeName } from 'json-schema';

export type JsonSchema = JSONSchema7;
export type JsonSchemaType = JSONSchema7TypeName;
export type UISchema = Record<string, any>;

export interface FieldProps<T = any> {
  formData: T;
  jsonSchema: JsonSchema;
  uiSchema: UISchema;
}
