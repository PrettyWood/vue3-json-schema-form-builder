import { computed, ComputedRef } from 'vue';

import { FieldProps } from '/@/types';

export function useTitle(props: FieldProps): ComputedRef<string> {
  return computed(() => {
    return props.uiSchema?.['ui:title'] as string ?? props.jsonSchema.title ?? '';
  })
}
