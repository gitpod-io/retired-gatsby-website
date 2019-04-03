import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { colors } from '../styles/variables';
import Logos from '../components/Logos';
import { Helmet } from 'react-helmet';

interface BlogTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
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
        slug: string
      }
      frontmatter: {
        url: string
        title: string
        subtitle: string
        image: string
        teaserImage?: string
        date: string
        author: string
      }
    }
  }
}

function currentHeight(): number {
  if (typeof window !== "undefined") {
    var body = window.document.body,
      html = window.document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
  return 500;
}

const logos: [number, number, number][] = [3700, 8000].reduce((a, b) => {
  return [
    ...a,
    ...a.map(p => [p[0], p[1] + b, p[2]] as [number, number, number])
  ]
}, [
  [20, 160, 25],
  [40, 80, 60],
  [980, 830, 40],
  [940, 880, 70],
  [40, 1280, 35],
  [0, 1390, 50],
  [960, 1690, 120],
  [80, 2060, 25],
  [30, 2100, 60],
  [1010, 2530, 40],
  [950, 2650, 50],
  [40, 3280, 35],
  [80, 3390, 50],
  [980, 3690, 120],
] as [number, number, number][]);

const BlogTemplate: React.SFC<BlogTemplateProps> = ({ data }) => {

  return (<IndexLayout canonical={data.markdownRemark.frontmatter.url}>
    <Page>
      <Helmet>
        <title>{data.markdownRemark.frontmatter.title}</title>
        <meta name="description" content={data.markdownRemark.frontmatter.subtitle} />
        <meta name="keywords" content="cloud ide, github, javascript, online ide, web ide, code review" />

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@gitpodio"></meta>
        <meta name="twitter:creator" content={'@' + data.markdownRemark.frontmatter.author}></meta>

        <meta property="og:url" content={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug} />
        <meta property="og:title" content={data.markdownRemark.frontmatter.title} />
        <meta property="og:description" content={data.markdownRemark.excerpt} />
        <meta property="og:image" content={data.markdownRemark.frontmatter.image} />
        {
          data.markdownRemark.frontmatter.url ? <link rel="canonical" href={data.markdownRemark.frontmatter.url} /> : null
        }

      </Helmet>
      <Container>
        <Logos logos={logos.filter(p => p[1] < currentHeight() - 200)} />
        <div className="article">
          {data.markdownRemark.frontmatter.subtitle ?
            <h2 style={{ color: colors.fontColor3, margin: '50px 0 10px 0' }}>{data.markdownRemark.frontmatter.subtitle}</h2> :
            null}
          <h1 style={{ margin: '0 0 0 0' }}>{data.markdownRemark.frontmatter.title}</h1>
          <p style={{ margin: '15px 0 0px 0', color: colors.fontColor3 }}>{new Date(Date.parse(data.markdownRemark.frontmatter.date)).toLocaleDateString()} by <a href={`https://github.com/${data.markdownRemark.frontmatter.author}`}>{data.markdownRemark.frontmatter.author}</a></p>
        </div>
      </Container>
      {
        data.markdownRemark.frontmatter.teaserImage ?
          (<div style={{
            height: 400,
            backgroundImage: 'url(' + data.markdownRemark.frontmatter.teaserImage + ')',
            backgroundPosition: 'center',
            backgroundSize: '100%'
          }}>
          </div>) : null
      }
      <Container>
        <div className="article">
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      </Container>
    </Page>
  </IndexLayout>);
}

export default BlogTemplate

export const query = graphql`
  query BlogTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
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
        subtitle
        image
        teaserImage
        date
        author
        url
      }
    }
  }
`
