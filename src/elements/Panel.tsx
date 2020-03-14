import React from 'react';
import Box, { BoxProps } from './Box';

interface Props extends BoxProps {}

function Panel(props: Props) {
  return <Box background={'#fff'} border={'5px solid'} p={10} {...props} />;
}

export default Panel;
