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
      frontmatter: {
        title: string
      }
    }
  }
}

const DocTemplate: React.SFC<DocTemplateProps> = ({ data }) => { 
  const menuCtx = getMenuContext(data.markdownRemark.fields.slug);
  return (
  <IndexLayout>
    <Page>
      <Container>
        <Logos logos={[
                    [-30, 60, 25],
                    [1040, 130, 120],
                    [-120, 630, 70],
                    [40, 830, 120]
                ]} />
        <DocContent>
            
            <DocSidebar>
                <div className='hidden-md-down'>
                    <DocMenu current={menuCtx.thisEntry!}/>
                </div>
                <div className='hidden-md-up'>
                    <DocTopicChooser/>
                </div>
            </DocSidebar>
            <div className="article">
                <h4 style={{color: colors.fontColor2, marginBottom: 0, marginTop: 30}}>Docs</h4>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  {menuCtx.prev ? <GatsbyLink to={menuCtx.prev.path} title={menuCtx.prev.title}>&lt; prev</GatsbyLink>: <div/>}
                  {menuCtx.next ? <GatsbyLink to={menuCtx.next.path} title={menuCtx.next.title}>next ></GatsbyLink>: <div/>}
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

    return <div style={{ display: 'flex', flexDirection: 'column'}}>
        {MENU.map( m => {
            return <>
                <Link key={m.path} to={m.path} style={{
                  textDecoration: m.path === p.current.path ? 'underline' : 'none', 
                  color: colors.fontColor1, marginTop: 0}}>{m.title}</Link>
                {
                    (m.subMenu || []).map(m =>
                        <Link key={m.path} to={m.path} style={{
                          textDecoration: m.path === p.current.path ? 'underline' : 'none', 
                          color: m.path === p.current.path ? colors.fontColor1: colors.fontColor2, marginLeft: 20}}>{m.title}</Link>
                    )
                }
                {
                    m.subMenu ? <div style={{height:5}}/> : null
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
    return <select className='secondary' onChange={onSelectTopic}>
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
}

