import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Page from '../layout/Page';

interface Props extends RouteComponentProps {}

function Home({}: Props) {
  return (
    <Page title={'Gatsby Typescript App'}>
      Cool new app
    </Page>
  );
}

export default Home;
