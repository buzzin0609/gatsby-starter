import React from 'react';
import { createPortal } from 'react-dom';
import { getDocument } from '../utils/globals';

interface Props {
  children: any;
  target?: string;
}

function Portal({ children, target = '#portal' }: Props) {
  const portalTarget = getDocument().querySelector(target as string);
  console.log(portalTarget);
  if (!portalTarget) {
    return null;
  }

  return createPortal(children, portalTarget);
}

export default Portal;
