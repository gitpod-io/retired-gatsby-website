import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import 'react-modal-video/css/modal-video.min.css'
import { graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import { colors } from '../styles/variables';

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
            image: string
            date: string
            author: string
        }
    }
}


export default class BlogPage extends React.Component<BlogPageProps, {}> {

    render() {

        const blogs = this.props.data.allMarkdownRemark.edges.sort((a,b) =>
            Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date));
        return <IndexLayout>
            <Page>
                <Container>
                    <Logos logos={[
                        [-40, 260, 25],
                        [280, 20, 70],
                        [1050, 350, 40],
                        [-90, 1260, 15],
                    ]} />
                    <div style={{ marginTop: 30 }}>
                        <h1>Blog</h1>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {blogs.map( e => {
                                return <div key={e.node.fields.slug}>
                                    <BlogPreview blog={e}/>
                                </div>
                            })}
                        </div>
                    </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}

interface BlogPreviewProps {
    blog: BlogData;
}

class BlogPreview extends React.Component<BlogPreviewProps, {}> {

    render() {
        const b = this.props.blog.node;
        const date = new Date(Date.parse(b.frontmatter.date));
        return <div style={{
                marginBottom: 40,
                height: 'auto',
                minHeight: 400,
                border: 'solid 1px',
                borderColor: colors.fontColor2,
                width: 280,
                display: 'flex',
                flexDirection: 'column'}}>
            <GatsbyLink to={b.fields.slug}>
                <div style={{
                            maxWidth: '100%',
                            height: 160,
                            backgroundImage: `url('${b.frontmatter.image}')`,
                            backgroundOrigin: 'border-box',
                            backgroundPositionX: '50%',
                            backgroundPositionY: '50%',
                            backgroundSize: 'cover'
                        }}
                    />
                <div style={{
                    color: colors.fontColor1,
                    fontWeight: 600,
                    fontSize: 16,
                    padding: 10}}>
                    {b.frontmatter.title}
                </div>
            </GatsbyLink>
                <a href={`https://github.com/${b.frontmatter.author}`}>
                <div style={{
                    color: colors.fontColor2,
                    padding: '0px 0px 0px 10px'}}>
                    {date.toLocaleDateString()} by {b.frontmatter.author}
                </div>
                </a>
                <div style={{ color: colors.fontColor1, padding: 10}}>
                    {b.excerpt}
                </div>
        </div>;
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
                    image
                    date
                    author
                }
            }
            }
        }
    }
`
