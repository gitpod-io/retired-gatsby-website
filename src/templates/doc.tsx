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
                    [80, 60, 25],
                    [280, -10, 30],
                    [880, 130, 120],
                    [-120, 460, 30],
                    [20, 630, 70],
                    [1020, 830, 120]
                ]} />
        <div style={{ display: 'flex'}}>
            <div style={{ width: 200, minWidth: 200, maxHeight: 550, paddingTop: 15, borderRadius: 3, borderColor: colors.fontColor2, marginRight: 10}}>
                <DocMenu/>
            </div>
            <div>
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
            </>
        })}
    </div>
}
