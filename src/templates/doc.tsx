import * as React from 'react'
import { graphql } from 'gatsby'

import { getMenuContext} from '../docs/menu'
import { colors } from '../styles/variables'
import DownArrow from '../resources/arrow-down.svg'
import { Link } from 'gatsby'
import DocsLayout from '../layouts/docs'

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
                        <div title="Edit this page in Gitpod" className="pen-container">
                            <a href={editUrl} aria-label="Edit Button" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22.454" height="25.307" viewBox="0 0 22.454 25.307"><title>Edit Button</title><path d="M25.088,13.816,12.516,27.982h0L8.063,22.964,20.635,8.8l4.453,5.018Zm.787-.887L27.8,10.763a2.744,2.744,0,0,0,.011-3.55l-1.313-1.48a2.048,2.048,0,0,0-3.151.012L21.422,7.911l4.453,5.018ZM11.729,28.869l-.163.184L6,30.307l1.113-6.272.163-.184,4.453,5.018Z" transform="translate(-6 -5) translate(6 5) translate(-6 -5)"/></svg>
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



