import React, { ReactNode } from 'react';
import Box, { BoxProps } from './Box';

interface Props extends BoxProps {}

function Title(props: Props) {
  return <Box component={'h2'} {...props} />;
}

export default Title;
