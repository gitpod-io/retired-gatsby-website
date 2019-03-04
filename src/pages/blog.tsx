import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import StarGraph from '../components/StarGraph';
import 'react-modal-video/css/modal-video.min.css'
import { graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';

interface BlogPageProps {
    data: {
        allMarkdownRemark: {
            edges: BlogData[];
        }
    }
}

interface BlogData {
    node: {
        fields: {
            slug: string
        },
        timeToRead: string,
        fileAbsolutePath: string,
        excerpt: string,
        headings: {
            value: string
        },
        frontmatter: {
            title: string
        }
    }
}


export default class BlogPage extends React.Component<BlogPageProps, {}> {

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
                            {this.props.data.allMarkdownRemark.edges.map( e => {
                                return <div key={e.node.fields.slug}>
                                    <GatsbyLink to={e.node.fields.slug}>{e.node.frontmatter.title}</GatsbyLink>
                                </div>
                            })}
                        </div>
                    </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {
        fileAbsolutePath: {
        glob: "**/blog/*"
        }
    }) {
        edges {
            node {
                fields {
                    slug
                }
                timeToRead
                fileAbsolutePath
                excerpt
                headings {
                value
                }
                frontmatter {
                title
                }
            }
            }
        }
    }
`
