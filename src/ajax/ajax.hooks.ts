import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { AjaxLoadingState } from './ajax.constants';
import { request } from './ajax.service';
import { getApiUrl } from './ajax.utils';

type AjaxOptions<T> = {
  initialValue?: T;
  waitFor?: boolean[];
} & AxiosRequestConfig;

export function useAjax<T = any>(
  url: string,
  options: AjaxOptions<T> = {},
  optionDeps?: any
): [AjaxLoadingState, T, () => void] {
  const [state, setState] = useState(AjaxLoadingState.Idle);
  const [value, setValue] = useState<T>(options.initialValue as T);
  const [rerunCounter, setRerunCounter] = useState(0);
  const waitForResolved = options.waitFor || [];

  useEffect(() => {
    async function doAjax() {
      if (waitForResolved.some(bool => !bool)) {
        return;
      }
      setState(AjaxLoadingState.Loading);
      const [err, res] = await request<T>(url, options);

      if (err) {
        return setState(AjaxLoadingState.Error);
      }

      setValue(res as T);
      setState(AjaxLoadingState.Loaded);
    }
    doAjax();
  }, [
    url,
    JSON.stringify(optionDeps || options),
    rerunCounter,
    JSON.stringify(waitForResolved),
  ]);

  return [
    state,
    value,
    () => {
      setRerunCounter(rerunCounter + 1);
    },
  ];
}

export function useApi<T = any>(
  endpoint: string,
  options: AjaxOptions<T> = {},
  optionDeps?: any
) {
  return useAjax(getApiUrl(endpoint), options, optionDeps);
}
