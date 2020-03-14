import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { catchify } from '../utils/promises';
import { AjaxResponse, AjaxResponseStatus } from './ajax.constants';
import { getApiUrl } from './ajax.utils';

export async function request<T = any>(
  url: string,
  options: AxiosRequestConfig = {}
): Promise<[any, T | null]> {
  // @ts-ignore
  const [err, response]: [any, AxiosResponse<AjaxResponse<T>>] = await catchify<
    AxiosResponse<AjaxResponse<T>>
  >(
    axios.request({
      url,
      ...options,
    })
  );

  if (err || response.data.status !== AjaxResponseStatus.Success) {
    console.error(err || response.data.message);
    return [err || response.data.message, null];
  }

  return [null, response.data.payload as T];
}

export async function requestApi<T>(
  endpoint: string,
  options: AxiosRequestConfig = {}
) {
  return request<T>(getApiUrl(endpoint), options);
}
