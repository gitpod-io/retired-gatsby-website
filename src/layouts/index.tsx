import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

import Footer from '../components/Footer';

type StaticQueryProps = {
    site: {
        siteMetadata: {
            title: string
            description: string
            link: string
        }
    }
}

const IndexLayout: React.SFC<{ canonical?: string}> = ({ canonical, children }) => (
    <StaticQuery
        query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
        render={(data: StaticQueryProps) => (
            <LayoutRoot>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>
                    <meta name="description" content={data.site.siteMetadata.description}/>
                    <meta name="keywords" content="cloud ide, github, javascript, online ide, web ide, code review"/>
                    {
                        canonical ? <link rel="canonical" href={canonical} /> : null
                    }
                </Helmet>
                <Header title={data.site.siteMetadata.title} />
                <LayoutMain>
                    {children}
                </LayoutMain>
                <Footer />
            </LayoutRoot>
        )}
    />
)

export default IndexLayout
