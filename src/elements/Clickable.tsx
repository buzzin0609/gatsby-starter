import React from 'react';
import Box, { BoxProps } from './Box';

type Props = BoxProps & {};

function Clickable(props: Props) {
  return (
    <Box
      css={`
        cursor: pointer;
      `}
      {...props}
    />
  );
}

export default Clickable;
