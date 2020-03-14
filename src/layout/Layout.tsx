import { Link } from '@reach/router';
import React, { Fragment, ReactNode } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { createGlobalStyle, css } from 'styled-components';
import * as colors from '../design-tokens/colors';
import { reset } from '../design-tokens/globals';
import { sans } from '../design-tokens/typography';
import Box from '../elements/Box';
import Flex from '../elements/Flex';
import Grid from '../elements/Grid';
import { back, isHome } from '../utils/navigation';
import MainMenu from './MainMenu';

const Global = createGlobalStyle`
  ${reset};
  html {
    min-height: 100%;
    
    & *, *:after, *:before {
      box-sizing: border-box;
    }
  }
  body {
    background: ${colors.grey};
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
    <Fragment>
      <Box background={colors.gradient} color={'white'} component={'header'}>
        <Grid cols={'1fr 1fr 1fr'} p={10}>
          {(!isHome() && (
            <Flex alignItems={'center'} onClick={back}>
              <Box component={MdArrowBack} mr={5} />
              <Box>Back</Box>
            </Flex>
          )) || (
            <Box
              css={`
                opacity: 0;
              `}
            >
              Home
            </Box>
          )}
          <Link to={'/'}>
            <Box textAlign={'center'}>Logo</Box>
          </Link>
        </Grid>
        <div className="portal--header" />
      </Box>
      <main>
        <div id="top" />
        <Global />
        <Box
          width={600}
          mx={'auto'}
          css={css`
            max-width: 100%;
            overflow: hidden;
            position: relative;
          `}
        >
          {children}
        </Box>
      </main>
      <MainMenu />
      <div id="portal" />
    </Fragment>
  );
}

export default Layout;
