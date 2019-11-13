import * as React from 'react'
import styled from '@emotion/styled';
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import { colors , sizes} from '../styles/variables';
import reddit from '../resources/reddit.svg';
import twitter from '../resources/twitter.svg';
import { Helmet } from 'react-helmet';
import { authors } from '../utils/authors';

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

const TeaserImage = styled.div`
  height: 400px;
  background-position: center;
  background-size: 100%;

  @media (max-width: ${sizes.breakpoints.md}}em) {
    height: 250px;
  }
`

const BlogTemplate: React.SFC<BlogTemplateProps> = ({ data }) => {
  const authorName = data.markdownRemark.frontmatter.author;
  let author = authors[authorName];
  if (!author) {
      author = {
          description: "",
          name: authorName,
          socialProfiles: {
            github: authorName,
            twitter: authorName
          }
      }
  }

  return (<IndexLayout canonical={data.markdownRemark.frontmatter.url || `https://www.gitpod.io${data.markdownRemark.fields.slug}`}>
      <Helmet>
        <title>{data.markdownRemark.frontmatter.title}</title>
        <meta name="description" content={data.markdownRemark.frontmatter.subtitle} />
        <meta name="keywords" content="cloud ide, github, javascript, online ide, web ide, code review" />

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@gitpod"></meta>
        <meta name="twitter:creator" content={'@' + author.socialProfiles.twitter}></meta>

        <meta property="og:url" content={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug} />
        <meta property="og:title" content={data.markdownRemark.frontmatter.title} />
        <meta property="og:description" content={data.markdownRemark.excerpt} />
        <meta property="og:image" content={data.markdownRemark.frontmatter.image} />
        {
          data.markdownRemark.frontmatter.url ? <link rel="canonical" href={data.markdownRemark.frontmatter.url} /> : null
        }

      </Helmet>
      <div>
        <div className="article blog">
          {data.markdownRemark.frontmatter.subtitle ?
            <h2 style={{ color: colors.textLight, margin: '50px 0 10px 0' }}>{data.markdownRemark.frontmatter.subtitle}</h2> :
            null}
          <h1 style={{ margin: '0 0 0 0' }}>{data.markdownRemark.frontmatter.title}</h1>
          <p style={{ margin: '15px 0 0px 0', color: colors.text }}>{new Date(Date.parse(data.markdownRemark.frontmatter.date)).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} by <a href={`https://github.com/${author.socialProfiles.github}`} target="_blank">{author.name}</a></p>
        </div>
      </div>
      {
        data.markdownRemark.frontmatter.teaserImage ?
          (<TeaserImage style={{
            backgroundImage: 'url(' + data.markdownRemark.frontmatter.teaserImage + ')',
          }}>
          </TeaserImage>) : null
      }
      <div className="row">
        <div className="article blog">
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 60 }}>
          <a title="Share on Twitter" href={'https://twitter.com/intent/tweet?text=' + encodeURIComponent(`${data.markdownRemark.frontmatter.title} by @${author.socialProfiles} ${data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}`)} target="_blank">
            <img alt="Share on Twitter" src={twitter} style={{ margin: 8, height: 36, padding: 6 }}/>
          </a>
          <a title="Share on Reddit" href={`http://www.reddit.com/submit?url=${encodeURIComponent(data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug)}&title=${encodeURIComponent(data.markdownRemark.frontmatter.title)}`} target="_blank">
            <img alt="Share on Reddit" src={reddit} style={{ margin: 8, height: 36, padding: 2 }}/>
          </a>
        </div>
      </div>
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
