import React, { forwardRef } from 'react';
import Box, { BoxProps } from './Box';

// @ts-ignore
interface Props extends BoxProps {
  alignItems?: string;
  cols: string;
  rows?: string;
  gap?: number;
}

const Grid = forwardRef(
  ({ cols, rows, gap, alignItems, ...props }: Props, ref?: any) => (
    <Box
      ref={ref}
      css={`
        align-items: ${alignItems};
        display: grid;
        grid-gap: ${gap}px;
        grid-template-columns: ${cols};
        grid-template-rows: ${rows};
      `}
      {...props}
    />
  )
);

export default Grid;
