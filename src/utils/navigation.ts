import { getWindow } from './globals';

export function isHome() {
  return getWindow().location.pathname === '/';
}

export function isPage(page: string) {
  const pathname = getWindow().location.pathname;
  return pathname === page;
}

export function back() {
  if (!isHome()) {
    getWindow().history.back();
  }
}
