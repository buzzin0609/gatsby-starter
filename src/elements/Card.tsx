import React from 'react';
import * as colors from '../design-tokens/colors';
import { raisedShadow } from '../design-tokens/details';
import Box, { BoxProps } from './Box';

type Props = BoxProps;

function Card(props: Props) {
  return (
    <Box
      background={colors.grey}
      p={10}
      css={`
        box-shadow: ${raisedShadow};
      `}
      {...props}
    />
  );
}

export default Card;
