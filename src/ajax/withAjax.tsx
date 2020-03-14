import { AxiosRequestConfig } from 'axios';
import { is, map } from 'ramda';
import React from 'react';
import { useAjax } from './ajax.hooks';

type AjaxOptionItem = (props: any) => Partial<AxiosRequestConfig>;

interface AjaxOptions {
  [index: string]: AjaxOptionItem;
}

export interface WithAjaxComponentProps<T> {
  payload: T;
  rerun: () => void;
}

export default function withAjax<Props>(options: AjaxOptions) {
  return function withAjaxRender(Component: any) {
    return function WithAjax(props: Props) {
      const requests = map((args: any) => {
        const { url, ...rest } = is(Function, args) ? args(props) : args;
        return useAjax(url, rest);
      })(options as any);
      return <Component {...props} {...requests} />;
    };
  };
}
