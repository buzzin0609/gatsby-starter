import { equals } from 'ramda';
import { useEffect, useState } from 'react';

export function useEffectState<T = any>(initialState: T) {
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    if (!equals(value, initialState)) {
      setValue(initialState);
    }
  }, [JSON.stringify(initialState)]);

  return [value, setValue] as [T, (arg: T) => void];
}
