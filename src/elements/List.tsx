import { lighten } from 'polished';
import React, { ReactNode } from 'react';
import * as colors from '../design-tokens/colors';
import Box, { BoxProps } from './Box';

type ListItem = {
  key: any;
  content: ReactNode;
} & BoxProps;

interface Props extends BoxProps {
  items: ListItem[];
}

function List({ items, ...props }: Props) {
  return (
    <Box {...props}>
      {items.map(({ content, key, ...itemProps }) => (
        <Box
          background={colors.primary}
          color={'#fff'}
          p={10}
          css={`
            cursor: pointer;
            &:hover {
              background: ${lighten(0.1, colors.primary)};
            }
          `}
          key={key}
          {...itemProps}
        >
          {content}
        </Box>
      ))}
    </Box>
  );
}

export default List;
