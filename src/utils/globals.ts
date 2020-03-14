export const windowDefined = typeof window !== 'undefined';

export function getDocument(): any {
  if (windowDefined) {
    return window.document;
  }

  return {
    getElementById: () => {},
  };
}

export function getWindow(): any {
  if (windowDefined) {
    return window;
  }

  return {
    alert: () => {},
    scroll: () => {},
    scrollY: 0,
    location: {
      pathname: '',
    },
    history: {
      back: () => {},
    },
  };
}
