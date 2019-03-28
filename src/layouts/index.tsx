import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'
import { colors } from '../styles/variables';
import GitpodIcon from '../resources/gitpod.svg';
import GitpodIcon196 from '../resources/gitpod-196x196.png';
import GitpodIconApple from '../resources/apple-touch-icon.png';

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
                    <html lang="en" />
                    <title>{data.site.siteMetadata.title}</title>
                    <meta name="description" content={data.site.siteMetadata.description}/>
                    <meta name="keywords" content="cloud ide, github, javascript, online ide, web ide, code review"/>
                    {
                        canonical ? <link rel="canonical" href={canonical} /> : null
                    }
                    <meta name="theme-color" content={colors.background1}/>
                    <link rel="icon" type="image/png" href={GitpodIcon196} sizes="196x196"/>
                    <link rel="icon" type="image/svg+xml" href={GitpodIcon} sizes="any"/>
                    <link rel="apple-touch-icon" type="image/png" href={GitpodIconApple} sizes="180x180"/>
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
