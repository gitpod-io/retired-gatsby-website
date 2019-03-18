import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { MENU } from '../docs/menu';
import { Link } from 'gatsby'
import { colors } from '../styles/variables';
import Logos from '../components/Logos';

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
      frontmatter: {
        title: string
      }
    }
  }
}

const DocTemplate: React.SFC<DocTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <Logos logos={[
                    [-30, 60, 25],
                    [1040, 130, 120],
                    [-120, 630, 70],
                    [40, 830, 120]
                ]} />
        <div style={{ display: 'flex'}}>
            <div style={{ width: 200, minWidth: 200, maxHeight: 550, paddingTop: 120, borderRadius: 3, borderColor: colors.fontColor2, marginRight: 10}}>
                <DocMenu/>
            </div>
            <div className="article">
                <h4 style={{color: colors.fontColor2, marginBottom: 0, marginTop: 30}}>Docs</h4>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </div>
        </div>
      </Container>
    </Page>
  </IndexLayout>
)

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
      frontmatter {
        title
      }
    }
  }
`


interface DocMenuProps {

}

const DocMenu: React.SFC<DocMenuProps> = () => {

    return <div style={{ display: 'flex', flexDirection: 'column'}}>
        {MENU.map( m => {
            return <>
                <Link key={m.path} to={`/docs/${m.path}`} style={{color: colors.fontColor1, marginTop: 0}}>{m.title}</Link>
                {
                    (m.subMenu || []).map(m =>
                        <Link key={m.path} to={`/docs/${m.path}`} style={{color: colors.fontColor2, marginLeft: 20}}>{m.title}</Link>
                    )
                }
                {
                    m.subMenu ? <div style={{height:5}}/> : null
                }
            </>
        })}
    </div>
}
