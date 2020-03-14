import React from 'react';
import * as colors from '../design-tokens/colors';
import Box, { BoxProps } from './Box';

type Props = {
  full?: boolean;
} & BoxProps;

function Button({ full, ...props }: Props) {
  return (
    <Box
      component={'button'}
      background={colors.primary}
      color={'#fff'}
      py={5}
      px={10}
      width={(full && '100%') || ''}
      css={`
        cursor: pointer;
        user-select: none;
        border: none;
      `}
      {...props}
    />
  );
}

export default Button;
