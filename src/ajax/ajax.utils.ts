import { API_BASE_URL } from './ajax.constants';

export function getApiUrl(path: string) {
  return [API_BASE_URL, path.replace(/^\//, '')].join('/');
}
