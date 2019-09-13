import React, { Fragment, ReactNode } from 'react';
import { Box } from 'rebass';
import { createGlobalStyle, css } from 'styled-components';
import { reset } from '../mixins/globals';
import Theme from './Theme';
import { sans, white } from './theme';

const Global = createGlobalStyle`
  ${reset};
  html {
    min-height: 100%;
  }
  body {
    font-family: ${sans};
    min-height: 100vh;
  }
  #portal {
    z-index: 10;
  }
`;

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Theme>
      <Fragment>
        <Box as={'main'}>
          <div id="top" />
          <Global />
          <Box
            css={css`
              max-width: 100%;
              overflow: hidden;
              position: relative;
            `}
          >
            {children}
          </Box>
        </Box>
        <div id="portal" />
      </Fragment>
    </Theme>
  );
}

export default Layout;
