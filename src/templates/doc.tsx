import * as React from 'react'
import { graphql } from 'gatsby'

import { getMenuContext} from '../docs/menu'
import { colors } from '../styles/variables'
import DownArrow from '../resources/arrow-down.svg'
import { Link } from 'gatsby'
import DocsLayout from '../layouts/docs'
import Pen from '../resources/pen.svg'

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
                canonical={data.markdownRemark.frontmatter.url || `${data.markdownRemark.fields.slug.toLowerCase()}`} title={`${menuCtx.thisEntry!.title || 'Docs'}`}
                body={
                    <div className="article">
                        <h4 style={{ color: colors.textLight, marginBottom: 0, marginTop: 30 }}>Docs</h4>
                        <div title="Edit this page in Gitpod" className="pen-container">
                            <a href={editUrl} aria-label="Edit Button" target="_blank">
                                <img alt="Edit Pen" src={Pen}/>
                            </a>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    </div>
                }
                arrows={
                    <div className="arrows">
                        {menuCtx.prev ?
                            <Link
                                to={menuCtx.prev.path}
                                title={`Prev: ${menuCtx.prev.title}`}
                            >
                                <img
                                    src={DownArrow}
                                    className="prev"
                                />
                            </Link> : <div />}
                        {menuCtx.next ?
                            <Link
                                to={menuCtx.next.path}
                                title={`Next: ${menuCtx.next.title}`}
                            >
                                <img
                                    src={DownArrow}
                                    className="next"
                                />
                            </Link> : <div />}
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
      }
    }
  }
`



