import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
    return <IndexLayout>
    <Page>
      <Container>
        <Helmet>
            <title>Gitpod - 404</title>
        </Helmet>
        <Logos logos={[
                [80, 20, 25],
                [280, -10, 30],
                [330, 250, 60],
                [480, -30, 120],
                [760, 100, 290],
                [-120, 460, 30],
            ]} />
        <h1 style={{marginTop: 60}}>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
};

export default NotFoundPage
