import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { colors } from '../styles/variables';
import Logos from '../components/Logos';

interface BlogTemplateProps {
    data: {
        site: {
            siteMetadata: {
                title: string
                description: string
                author: {
                    name: string
                    url: string
                }
            }
        }
        markdownRemark: {
            html: string
            frontmatter: {
                title: string
                subtitle: string
                image: string
                date: string
                author: string
            }
        }
    }
}

function currentHeight(): number {
    var body = document.body,
        html = document.documentElement;

    return Math.max( body.scrollHeight, body.offsetHeight,
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
}

const logos: [number, number, number][] = [
    [80, 160, 25],
    [90, 200, 60],
    [1080, 530, 40],
    [1150, 650, 70],
    [140, 1280, 35],
    [180, 1390, 50],
    [1180, 1690, 120],
    [80, 2060, 25],
    [90, 2100, 60],
    [1080, 2530, 40],
    [1150, 2650, 50],
    [140, 3280, 35],
    [180, 3390, 50],
    [1180, 3690, 120],
]

const BlogTemplate: React.SFC<BlogTemplateProps> = ({ data }) => (
    <IndexLayout>
        <Page>
            <Logos logos={logos.filter(p => p[1] < currentHeight() - 200)} />
            <Container>
                <div className="blog-post">
                    {data.markdownRemark.frontmatter.subtitle ?
                        <h2 style={{ color: colors.fontColor3, margin: '50px 0 10px 0'}}>{data.markdownRemark.frontmatter.subtitle}</h2>:
                        null}
                    <h1 style={{ margin: '0 0 0 0'}}>{data.markdownRemark.frontmatter.title}</h1>
                    <p style={{ margin: '15px 0 50px 0', color: colors.fontColor3}}>{new Date(Date.parse(data.markdownRemark.frontmatter.date)).toLocaleDateString()} by <a href={`https://github.com/${data.markdownRemark.frontmatter.author}`}>{data.markdownRemark.frontmatter.author}</a></p>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>
            </Container>
        </Page>
    </IndexLayout>
)

export default BlogTemplate

export const query = graphql`
  query BlogTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        subtitle
        image
        date
        author
      }
    }
  }
`
