import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import StarGraph from '../components/StarGraph';

const NotFoundPage = () => {
    const yOffset = 400;
    return <IndexLayout>
    <Page>
      <Container>
        <Logos logos={[
                [80, 60, 25],
                [280, -10, 30],
                [330, 50, 60],
                [480, -30, 120],
                [760, 100, 290],
                [350, -80 + yOffset, 90],
                [480, -80 + yOffset, 90],
                [-120, 460, 30],
            ]} />
        <StarGraph graphs={[
            [
                {x:400, y:150 + yOffset},
                {x:450, y:100 + yOffset},
                {x:500, y:80 + yOffset},
                {x:550, y:100 + yOffset},
                {x:600, y:150 + yOffset},
            ],
            ]}/>
        <h1 style={{marginTop: 60}}>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
};

export default NotFoundPage
