import * as React from 'react'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import 'react-modal-video/css/modal-video.min.css'
import { graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import { colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins'


const BlogFeed = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        justify-content: space-around;
    }
`

const BlogPost = styled.article`
    margin-bottom: 40px;
    height: auto;
    min-height: 400px;
    border: solid 1px ${colors.fontColor2};
    box-shadow: 0 0 1px ${colors.fontColor2};
    width: 280px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${getEmSize(breakpoints.sm - 1)}em) {
        width: auto;
        min-width: 280px;
    }
`

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
        return <IndexLayout title="Gitpod - Blog" canonical="https://www.gitpod.io/blog">
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
                        <BlogFeed>
                            {blogs.map( e => {
                                return <div key={e.node.fields.slug}>
                                    <BlogPreview blog={e}/>
                                </div>
                            })}
                        </BlogFeed>
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
        return <BlogPost>
            <GatsbyLink to={b.fields.slug} style={{ color: colors.fontColor1, textDecoration: 'none' }}>
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
                    fontWeight: 600,
                    fontSize: 16,
                    padding: 10}}>
                    {b.frontmatter.title}
                </div>
            </GatsbyLink>
                <div style={{ color: colors.fontColor2, padding: '0px 0px 0px 10px' }}>
                    {date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })} by&nbsp;
                    <a href={`https://github.com/${b.frontmatter.author}`} target="_blank" style={{ color: colors.fontColor2 }}>{b.frontmatter.author}</a>
                </div>
                <div style={{ color: colors.fontColor1, padding: 10}}>
                    {b.excerpt}
                </div>
        </BlogPost>;
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
