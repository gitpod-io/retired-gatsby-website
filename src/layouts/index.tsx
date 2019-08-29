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
      siteUrl: string
    }
  }
}

const IndexLayout: React.SFC<{ title?: string, canonical?: string }> = ({ title, canonical, children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet>
          <html lang="en" />
          <title>{title || data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta name="keywords" content="cloud ide, github, javascript, online ide, web ide, code review" />
          {
            canonical ? <link rel="canonical" href={canonical} /> : null
          }
          <meta name="theme-color" content={colors.background1} />
          <link rel="apple-touch-icon" type="image/png" href={GitpodIconApple} sizes="180x180" />
          <link rel="icon" type="image/png" href={GitpodIcon196} sizes="196x196" />
          <link rel="icon" type="image/svg+xml" href={GitpodIcon} sizes="any" />

          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:site" content="@gitpod"></meta>
          <meta name="twitter:creator" content="@gitpod"></meta>

          <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
          <meta property="og:title" content={title || data.site.siteMetadata.title} />
          <meta property="og:description" content={data.site.siteMetadata.description} />
          <meta property="og:image" content="https://www.gitpod.io/media-image.jpg" />

          <meta name="google-site-verification" content="NBio3hCkfn2FKJpqZritJpXuyKo54noPGZzWsjDIp-M" />
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
