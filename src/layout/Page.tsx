import React, { ReactChildren, ReactNode, useEffect, useState } from 'react';
import Box from '../elements/Box';
import Portal from '../elements/Portal';
import Title from '../elements/Title';

interface Props {
  title: string;
  children: ReactChildren | ReactNode;
}

function Page({ title, children }: Props) {
  const [target, setTarget] = useState('.noop');

  useEffect(() => {
    setTarget('.portal--header');
  }, []);

  return (
    <Box p={10}>
      <Portal target={target}>
        <Title py={10} textAlign={'center'}>
          {title}
        </Title>
      </Portal>
      {children}
    </Box>
  );
}

export default Page;
