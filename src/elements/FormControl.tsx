import React, { ReactNode } from 'react';
import Box, { BoxProps } from './Box';
import Flex from './Flex';

type Props = BoxProps & {
  label: string;
  inputProps?: BoxProps;
  InputComponent?: ReactNode;
  AfterInputComponent?: ReactNode;
};

function FormControl({
  inputProps = {},
  type,
  id,
  name,
  value,
  disabled,
  label,
  InputComponent,
  AfterInputComponent,
  ...props
}: Props) {
  return (
    <Box
      component={'label'}
      htmlFor={id || name}
      css={`
        display: block;

        input,
        select,
        textarea {
          display: block;
          width: 100%;
        }
      `}
      {...props}
    >
      <Box
        component={'span'}
        fontSize={12}
        css={`
          display: block;
        `}
        mb={3}
      >
        {label}
      </Box>
      <Flex alignItems={'center'}>
        {InputComponent || (
          <Box
            component={'input'}
            id={id || name}
            name={name}
            type={type}
            disabled={disabled}
            value={value}
            width={`100%`}
            p={5}
            {...inputProps}
          />
        )}
        {AfterInputComponent && AfterInputComponent}
      </Flex>
    </Box>
  );
}

export default FormControl;
