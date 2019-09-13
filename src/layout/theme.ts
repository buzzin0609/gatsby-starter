import { fontSizes } from '../mixins/typography';

export const breakpoints = ['768px', '1023px', '1200px'];

export const red = '#E80000';
export const primary = '#5A27DD';
export const primaryLight = '#9475DD';
export const secondary = '#00DB96';
export const secondaryLight = '#6EE1BD';
export const black = '#232225';
export const white = '#ffffff';

export const bgDark = black;
export const bgLight = white;

export const greyDark = '#525057';
export const greyLight = '#E2DEEC';

export const error = '#5A27DD';
export const success = secondary;
export const disabled = '#827F89';

export const space = [7, 14, 17, 34, 56, 80, 100, 150, 168];

// export const serif = `"Mono Space", monospace`;
export const serif = `"Open Sans", "Arial Narrow", Tahoma, sans-serif`;
export const sans = `"Open Sans", "Arial Narrow", Tahoma, sans-serif`;

const theme: any = {
  breakpoints,
  fontSizes: Object.values(fontSizes).reverse(),
  colors: {
    primary,
    secondary,
    black,
    white,
    bgDark,
    bgLight,
    greyDark,
    greyLight,
    error,
    success,
    disabled,
  },
  fonts: {
    serif,
    sans,
  },
  shadows: {
    base: `0 0 3px rgba(0,0,0,0.25)`,
    button: '0px 15px 35px rgba(90, 39, 221, 0.401005)',
  },
  space: space,

  buttons: {
    floating: {
      backgroundColor: primary,
      boxShadow: '0px 15px 35px rgba(90, 39, 221, 0.401005)',
      fontSize: fontSizes.eta,
      fontWeight: 'lighter',
      minWidth: 230,
      padding: 27,
      textTransform: 'uppercase',
    },
    floatingSecondary: {
      backgroundColor: secondary,
      boxShadow: '0px 15px 35px rgba(90, 39, 221, 0.401005)',
      fontSize: fontSizes.eta,
      fontWeight: 'lighter',
      minWidth: 230,
      padding: 27,
      textTransform: 'uppercase',
    },
    floatingBlack: {},
  },
};

export default theme;
