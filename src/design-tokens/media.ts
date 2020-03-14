import { css } from 'styled-components';
import { pin } from './positioning';
import { fill } from './spacing';

export const coverBg = css`
  background-size: cover;
  background-position: center center;
`;

export const imageCover = css`
  object-fit: cover;
  position: absolute;
  ${fill}
  ${pin(0, 'top', 'left')}
`;

export const transparentImageBg = css`
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  background-image: linear-gradient(
      45deg,
      #eee 25%,
      transparent 25%,
      transparent 75%,
      #eee 75%,
      #eee 100%
    ),
    linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
`;

export const responsiveHeight = (paddingBottomPercent: number) => css`
  height: 0;
  padding-bottom: ${paddingBottomPercent}%;
  position: relative;
`;

export const sizes: { [index: string]: number } = {
  alpha: 992,
  beta: 768,
  gamma: 576,
  delta: 330,
  // epsilon
  // zeta
};
