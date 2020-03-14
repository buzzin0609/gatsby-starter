import { RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import Box from '../elements/Box';
import Layout from '../layout/Layout';
import NotFoundPage from '../page-templates/404';
import Home from '../page-templates/home';

interface Props extends RouteComponentProps {}

function Index({}: Props) {
  return (
    <Layout>
      <Box>
        <Router>
          <NotFoundPage default />
          <Home path={'/'} />
        </Router>
      </Box>
    </Layout>
  );
}

export default Index;
