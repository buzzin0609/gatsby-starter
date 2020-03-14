export const API_BASE_URL = 'http://localhost:8080';

export enum AjaxLoadingState {
  Idle,
  Loading,
  Loaded,
  Error
}

export enum AjaxResponseStatus {
  Success = 'Success',
  Failure = 'Failure',
}

export type AjaxResponse<T = any> = {
  status: AjaxResponseStatus,
  message: string,
  payload: T
};