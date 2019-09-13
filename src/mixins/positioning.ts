import { css } from 'styled-components';

export function pin(amount = 0, ...places: string[]) {
  return places.map(p => `${p}: ${amount}px;`).join('');
}

export const centerX = css`
  left: 50%;
  transform: translateX(-50%);
`;

export const centerY = css`
  top: 50%;
  transform: translateY(-50%);
`;

export const centerXY = css`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const displayCenter = css`
  margin-left: auto;
  margin-right: auto;
`;
