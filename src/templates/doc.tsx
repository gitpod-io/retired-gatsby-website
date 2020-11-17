import * as React from 'react'

import { graphql } from 'gatsby'
import { getMenuContext } from '../docs/menu'
import { colors } from '../styles/variables'
import DocsLayout from '../layouts/docs'
import ReachOut from '../components/docs/ReachOut'
import EditInGitpod from '../components/docs/EditInGitpod'
import NavigationArrows from '../components/docs/NavigationArrows'

interface DocTemplateProps {
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
            excerpt: string
            fields: {
                slug: string;
            }
            fileAbsolutePath: string,
            frontmatter: {
                title: string
                url: string
            }
        }
    }
}

const DocTemplate: React.SFC<DocTemplateProps> = ({ data }) => {
    const menuCtx = getMenuContext(data.markdownRemark.fields.slug)
    const editUrl = data.markdownRemark.fileAbsolutePath.replace(/^.*\/src\/docs\//, 'https://gitpod.io/#https://github.com/gitpod-io/website/blob/master/src/docs/')
    return (
        <>
            <DocsLayout
                canonical={data.markdownRemark.frontmatter.url || `${data.markdownRemark.fields.slug.toLowerCase()}`} title={`${menuCtx.thisEntry != undefined ? menuCtx.thisEntry!.title || 'Docs' : 'Docs'}`}
                body={
                    <div className="article">
                        <h4 style={{ color: colors.textLight, marginBottom: 0, marginTop: 30 }}>Docs</h4>
                        <EditInGitpod editUrl={editUrl}/>
                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                        <NavigationArrows menuCtx={menuCtx} />
                        <ReachOut />
                    </div>
                }
            >
            </DocsLayout>
        </>
    )
}

export default DocTemplate

export const query = graphql`
  query DocTemplateQuery($slug: String!) {
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
      fields {
        slug
      }
      fileAbsolutePath
      frontmatter {
        title
        url
      }
    }
  }
`
