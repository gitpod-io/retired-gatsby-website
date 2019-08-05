import * as React from 'react'
import styled from '@emotion/styled'
import { graphql, navigate } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { MENU, getMenuContext, MenuEntry } from '../docs/menu';
import { Link } from 'gatsby'
import { colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins'
import Logos from '../components/Logos';
import GatsbyLink from 'gatsby-link';
import { Helmet } from 'react-helmet';

const DocContent = styled.div`
    display: flex;

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        flex-direction: column;
    }
`

const DocSidebar = styled.div`
    width: 200px;
    min-width: 200px;
    padding-top: 120px;
    border-radius: 3px;
    border-color: ${colors.fontColor2};
    margin-right: 10px;

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
      padding-top: 60px;
      width: auto;
    }

    @media (min-width: ${getEmSize(breakpoints.sm)}em) and (max-width: ${getEmSize(breakpoints.md - 1)}em) {
      max-width: 80%;
      margin-left: 10%;
    }
`

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
        <IndexLayout canonical={data.markdownRemark.frontmatter.url || `https://www.gitpod.io${data.markdownRemark.fields.slug.toLowerCase()}`}>
            <Page>
                <Helmet>
                    <title>{`Gitpod - ${menuCtx.thisEntry!.title || 'Docs'}`}</title>
                </Helmet>
                <Container>
                    <Logos logos={[
                        [-30, 60, 12],
                        [1040, 130, 60],
                        [-120, 630, 35],
                        [40, 830, 60]
                    ]} />
                    <DocContent>
                        <DocSidebar>
                            <div className='hidden-md-down'>
                                <DocMenu current={menuCtx.thisEntry!} />
                            </div>
                            <div className='hidden-md-up'>
                                <DocTopicChooser />
                            </div>
                        </DocSidebar>
                        <div className="article" style={{ position: "relative", flexGrow: 1 }}>
                            <h4 style={{ color: colors.fontColor2, marginBottom: 0, marginTop: 30 }}>Docs</h4>
                            <div style={{ position: 'absolute', top: 40, right: 0 }} title="Edit this page in Gitpod">
                                <a href={editUrl} aria-label="Edit Button" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.12 57.65" style={{
                                        height: 25,
                                        fill: 'transparent',
                                        stroke: colors.fontColor1,
                                        filter: `drop-shadow(0 0 1px ${colors.fontColor1})`,
                                        }}><polyline className="st0" points="3.49,43.76 1.78,54.07 12.39,52.66 52.53,12.48 43.67,3.58 43.67,3.58 3.49,43.76" /><line className="st0" x1="46.05" y1="18.68" x2="37.32" y2="9.95" /></svg>
                                </a>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                {menuCtx.prev ? <GatsbyLink to={menuCtx.prev.path} title={menuCtx.prev.title}>&lt; prev</GatsbyLink> : <div />}
                                {menuCtx.next ? <GatsbyLink to={menuCtx.next.path} title={menuCtx.next.title}>next ></GatsbyLink> : <div />}
                            </div>
                        </div>
                    </DocContent>
                </Container>
            </Page>
        </IndexLayout>
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


interface DocMenuProps {
    current: MenuEntry
}

const DocMenu: React.SFC<DocMenuProps> = (p) => {

    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        {MENU.map(m => {
            return <>
                <Link key={m.path} to={m.path} style={{
                    textDecoration: m.path === p.current.path ? 'underline' : 'none',
                    color: colors.fontColor1, marginTop: 0
                }}>{m.title}</Link>
                {
                    (m.subMenu || []).map(m =>
                        <Link key={m.path} to={m.path} style={{
                            textDecoration: m.path === p.current.path ? 'underline' : 'none',
                            color: m.path === p.current.path ? colors.fontColor1 : colors.fontColor2, marginLeft: 20
                        }}>{m.title}</Link>
                    )
                }
                {
                    m.subMenu ? <div style={{ height: 5 }} /> : null
                }
            </>
        })}
    </div>
}

interface DocTopicChooserProps {
}

function onSelectTopic(event: React.FormEvent<HTMLSelectElement>) {
    navigate(event.currentTarget.value);
}

export const DocTopicChooser: React.SFC<DocTopicChooserProps> = () => {
    return (
        <div>
            <select className='secondary' onChange={onSelectTopic}>
                <option value='#' selected={true}>Select A Topic</option>
                {MENU.map(m => {
                    return <>
                        <option key={m.path} value={m.path}>{m.title}</option>
                        {
                            (m.subMenu || []).map(m =>
                                <option key={m.path} value={m.path}>&nbsp;&nbsp;&nbsp;&nbsp;{m.title}</option>
                            )
                        }
                    </>
                })}
            </select>
        </div>
    )
}

