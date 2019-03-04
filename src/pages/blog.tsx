import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import StarGraph from '../components/StarGraph';
import 'react-modal-video/css/modal-video.min.css'
import { graphql } from 'gatsby';


export default class BlogPage extends React.Component<{ data: any }, { }> {

    render() {
        return <IndexLayout>
            <Page>
                <Logos logos={[
                    [80, 60, 25],
                    [280, 90, 70],
                    [480, -30, 120],
                    [950, 150, 160],
                ]} />
                <StarGraph graphs={[
                ]} />
                <Container>
                    <div style={{ height: 380, marginTop: 60 }}>
                        <h1>Blog</h1>
                        <div>
                            { JSON.stringify(this.props.data) }
                        </div>
                    </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
