export function getDocument(): any {
  if (typeof window !== 'undefined') return window.document;

  return {
    getElementById: () => {},
  };
}
