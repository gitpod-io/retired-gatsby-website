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

const BlogTemplate: React.SFC<BlogTemplateProps> = ({ data }) => (
    <IndexLayout>
        <Page>
            <Logos logos={[
                    [80, 60, 25],
                    [680, 90, 70],
                    [880, 30, 120],
                    [950, 150, 160],
                ]} />
            <Container>
                <div className="blog-post">
                    <h1 style={{ margin: '50px 0 0 0'}}>{data.markdownRemark.frontmatter.title}</h1>
                    {data.markdownRemark.frontmatter.subtitle ?
                        <h2 style={{ color: colors.fontColor3, margin: '10px 0 0 0'}}>{data.markdownRemark.frontmatter.subtitle}</h2>:
                        null}
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
