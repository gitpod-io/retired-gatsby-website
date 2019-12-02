import * as React from 'react'
import { graphql } from 'gatsby'

import { getMenuContext} from '../docs/menu';
import { colors } from '../styles/variables';
import DownArrow from '../resources/arrow-down.svg'
import { Link } from 'gatsby'
import DocsLayout from '../layouts/docs';

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
    const menuCtx = getMenuContext(data.markdownRemark.fields.slug);
    const editUrl = data.markdownRemark.fileAbsolutePath.replace(/^.*\/src\/docs\//, 'https://gitpod.io/#https://github.com/gitpod-io/website/blob/master/src/docs/');
    return (
        <>
            <DocsLayout canonical={data.markdownRemark.frontmatter.url || `${data.markdownRemark.fields.slug.toLowerCase()}`} title={`${menuCtx.thisEntry!.title || 'Docs'}`}>
                <div className="article" style={{ position: "relative", flexGrow: 1 }}>
                    <div className="article__container">
                        <h4 style={{ color: colors.textDark, marginBottom: 0, marginTop: 30 }}>Docs</h4>
                        <div style={{ position: 'absolute', top: 20, right: 20 }} title="Edit this page in Gitpod">
                            <a href={editUrl} aria-label="Edit Button" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.12 57.65" style={{
                                    height: 25,
                                    fill: 'transparent',
                                    stroke: colors.textDark,
                                    filter: `drop-shadow(0 0 2px ${colors.textDark})`,
                                    }}><polyline className="st0" points="3.49,43.76 1.78,54.07 12.39,52.66 52.53,12.48 43.67,3.58 43.67,3.58 3.49,43.76" /><line className="st0" x1="46.05" y1="18.68" x2="37.32" y2="9.95" /></svg>
                            </a>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    </div>
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
                </div>
            </DocsLayout>
        </>
    );
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



