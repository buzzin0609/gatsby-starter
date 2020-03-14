import React from 'react';
import Box, { BoxProps } from './Box';

interface Props extends BoxProps {}

function Typography(props: Props) {
  return <Box component={'p'} fontSize={14} {...props} />;
}

export default Typography;
