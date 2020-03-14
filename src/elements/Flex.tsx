import React, { forwardRef } from 'react';
import Box, { BoxProps } from './Box';

export type FlexProps = {
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
} & BoxProps;

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      alignItems = 'center',
      flexDirection,
      justifyContent = 'flex-start',
      ...props
    }: FlexProps,
    ref
  ) => (
    <Box
      ref={ref}
      {...props}
      css={`
        align-items: ${alignItems};
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
      `}
    />
  )
);

export default Flex;
