import * as React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import PostBanner from '../components/PostBanner'
import reddit from '../resources/reddit.svg'
import twitter from '../resources/twitter.svg'
import { Helmet } from 'react-helmet'
import { authors } from '../utils/authors'
import { colors, shadows } from '../styles/variables'
import NewsletterForm from '../components/NewsletterForm'

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

const StyledBlogTemplate = styled.div`
    max-width: 80rem;
    margin: 8rem auto;
    box-shadow: ${shadows.light};

    .contents {
        padding: 5rem 3rem;
    }

    img {
        display: block;
        max-width: 100%;
        max-height: 50rem;
        margin-bottom: 2rem;
    }

    h2, h1 {
        margin: 6rem 0 2.5rem;
    }

    h2 + p {
        margin: 2rem 0;
    }

    li + li,
    p + p {
        margin-top: 2rem;
    }

    table {
        font-size: 90%;
        background-color: ${colors.offWhite};
        border: 1px solid rgba(0,0,0, .1);
        border-collapse: collapse;
        overflow-x: scroll;
        box-shadow: ${shadows.light};
        border-radius: 3px;
    }

    th {
        padding: 1rem;
    }

    td {
        text-align: center;
        border: 1px solid rgba(0,0,0, .1);
        &:last-child {
        text-align: left;
        padding: 3rem;
        }
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

  return (
  <IndexLayout canonical={data.markdownRemark.frontmatter.url || `https://www.gitpod.io${data.markdownRemark.fields.slug}`}>
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
      <div className="grey-container">
          <StyledBlogTemplate>
            <PostBanner
                teaserImage={data.markdownRemark.frontmatter.teaserImage ? data.markdownRemark.frontmatter.teaserImage : data.markdownRemark.frontmatter.image}
                title={data.markdownRemark.frontmatter.title}
                date={<span>{new Date(Date.parse(data.markdownRemark.frontmatter.date)).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>}
                author={<span>By <a href={`https://github.com/${author.socialProfiles.github}`} target="_blank">{author.name}</a></span>}
            />
            <div className="contents">
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    <div style={{ display: 'flex', marginTop: 60 }}>
                    <a title="Share on Twitter" href={'https://twitter.com/intent/tweet?text=' + encodeURIComponent(`${data.markdownRemark.frontmatter.title} by @${author.socialProfiles} ${data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}`)} target="_blank">
                        <img alt="Share on Twitter" src={twitter} style={{ margin: 8, height: 56, padding: 6 }}/>
                    </a>
                    <a title="Share on Reddit" href={`http://www.reddit.com/submit?url=${encodeURIComponent(data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug)}&title=${encodeURIComponent(data.markdownRemark.frontmatter.title)}`} target="_blank">
                        <img alt="Share on Reddit" src={reddit} style={{ margin: 8, height: 56, padding: 2 }}/>
                    </a>
                </div>
            </div>
      </StyledBlogTemplate>
      </div>
      <NewsletterForm />
  </IndexLayout>
    );
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
