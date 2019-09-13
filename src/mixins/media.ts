import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';
import { fill } from './spacing';
import { pin } from './positioning';

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
  //epsilon
  //zeta
};

interface MediaQueries {
  alpha: ThemedCssFunction<DefaultTheme>;
  beta: ThemedCssFunction<DefaultTheme>;
  gamma: ThemedCssFunction<DefaultTheme>;
  delta: ThemedCssFunction<DefaultTheme>;
}

// Iterate through the sizes and create a media template
const media: MediaQueries = Object.keys(sizes).reduce(
  (acc: any, label: string) => {
    acc[label] = (...args: any) => {
      return css`
        @media (max-width: ${sizes[label]}px) {
          // @ts-ignore
          ${css(...args)}
        }
      `;
    };

    return acc;
  },
  {}
);

export default media;
