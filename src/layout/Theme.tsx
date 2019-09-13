import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

interface Props {
  [index: string]: any;
  theme?: any;
}

function Theme({ theme: newTheme = {}, ...props }: Props) {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...newTheme,
      }}
      {...props}
    />
  );
}

export default Theme;
