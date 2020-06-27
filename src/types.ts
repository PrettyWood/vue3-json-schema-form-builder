import { JSONSchema7 } from 'json-schema';

export type JsonSchema = JSONSchema7;
export type UISchema = Record<string, any>;

export interface StringFieldProps {
  formData: string;
  jsonSchema: JsonSchema;
  uiSchema: UISchema;
}