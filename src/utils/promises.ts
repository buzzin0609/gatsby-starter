export function catchify<T = any>(p: Promise<T>): Promise<[any, T | null]> {
  return Promise.resolve(p).then(value => [null, value as T], err => [err, null]);
}