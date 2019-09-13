import { css } from 'styled-components';

export const MENU_COLLAPSE = '767px';
export const IPAD_START = '768px';
export const IPAD_END = '1024px';

export function query(width: string, maxOrMin = 'min') {
  return (styles: any) => css`
      @media (${maxOrMin}-width: ${width}) {
        ${styles};
      }
  `;
}
