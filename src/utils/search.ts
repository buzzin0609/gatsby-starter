export function searchArray(searchValue: string, arr: any[]) {

  if (!searchValue) {
    return [];
  }

  const regex = new RegExp(searchValue, 'ig');

  return arr.filter(item => regex.test(JSON.stringify(item)));
}