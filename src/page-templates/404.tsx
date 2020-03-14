import { RouteComponentProps } from '@reach/router';
import React from 'react';

interface Props extends RouteComponentProps {
  default: boolean;
}

function NotFoundPage({}: Props) {
  return <div>Page not found</div>;
}

export default NotFoundPage;
