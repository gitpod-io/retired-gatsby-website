import * as React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import PostBanner from '../components/blog/PostBanner'
import reddit from '../resources/reddit.svg'
import twitter from '../resources/twitter.svg'
import { Helmet } from 'react-helmet'
import { parseAuthors } from '../contents/authors'
import { colors, shadows, sizes, borders } from '../styles/variables'
// import NewsletterForm from '../components/NewsletterForm'
import BackToTopButton from '../components/BackToTopButton'

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
    overflow: hidden;
    border-radius: 3px;
    background-color: ${colors.white};
    border: ${borders.light2};

    .contents {
        padding: 3rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 5rem 2rem;
        }
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

    h3, h4 {
        margin: 3.5rem 0 1.5rem;
    }

    h2 + p {
        margin: 2rem 0;
    }

    li {
        list-style: disc;
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

    blockquote {
        border-left: solid 2px rgba(0,0,0, .1);
        padding-left: 2rem;
        font-style: italic;
        margin: 2.5rem 0;
        font-size: 110%;
    }

    ol, ul {
        margin: 3rem 0 3rem 5rem;
    }

    .scale {
        transform: scale(1.3);
        margin-top: 14rem;

        @media(max-width: 680px) {
            transform: scale(1.2);
            margin-top: 9rem;
        }

        @media(max-width: 610px) {
            transform: scale(1.1);
            margin: 8rem 0;
        }

        @media(max-width: 610px) {
            transform: scale(1);
            margin: 4rem 0;
        }
    }
`


const BlogTemplate: React.SFC<BlogTemplateProps> = ({ data }) => {
  const authors = parseAuthors(data.markdownRemark.frontmatter.author);
  const metaPreview = `https://www.gitpod.io${data.markdownRemark.frontmatter.teaserImage ? data.markdownRemark.frontmatter.teaserImage : data.markdownRemark.frontmatter.image}`
  return (
  <IndexLayout canonical={data.markdownRemark.frontmatter.url || `${data.markdownRemark.fields.slug.toLowerCase()}`}>
      <Helmet>
        <title>{data.markdownRemark.frontmatter.title}</title>
        <meta name="description" content={data.markdownRemark.frontmatter.subtitle} />
        <meta name="keywords" content="cloud ide, github, javascript, online ide, web ide, code review" />

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@gitpod"></meta>
        {authors.map(author => <meta name="twitter:creator" content={'@' + author.socialProfiles.twitter}></meta>)}

        <meta property="og:url" content={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug} />
        <meta property="og:title" content={data.markdownRemark.frontmatter.title} />
        <meta property="og:description" content={data.markdownRemark.excerpt} />
        <meta property="og:image" content={metaPreview} />
        {
          data.markdownRemark.frontmatter.url ? <link rel="canonical" href={data.markdownRemark.frontmatter.url} /> : null
        }
        <meta name="twitter:image" content={metaPreview} />


            </Helmet>
            <div className="pattern pattern--full-vp-height" style={{marginBottom: '10rem'}}>
                <StyledBlogTemplate>
                    <PostBanner
                        teaserImage={data.markdownRemark.frontmatter.teaserImage ? data.markdownRemark.frontmatter.teaserImage : data.markdownRemark.frontmatter.image}
                        title={data.markdownRemark.frontmatter.title}
                        subtitle={data.markdownRemark.frontmatter.subtitle}
                        date={<span>{new Date(Date.parse(data.markdownRemark.frontmatter.date)).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>}
                        author={
                            <span>By {
                                authors.map((author, idx) => <React.Fragment>
                                    <a href={`https://github.com/${author.socialProfiles.github}`} target="_blank">{author.name}</a>{idx < authors.length - 1 ? ', ' : ''}
                                </React.Fragment>)
                            }</span>
                        }
                        shareButtons={<>
                            <a title="Share on Twitter" href={'https://twitter.com/intent/tweet?text=' + encodeURIComponent(`${data.markdownRemark.frontmatter.title} by ${authors.map(author => '@' + author.socialProfiles.twitter).join(', ')} ${data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}`)} target="_blank">
                                <img alt="Share on Twitter" src={twitter} style={{ margin: 8, height: 30, padding: 6 }} />
                            </a>
                            <a title="Share on Reddit" href={`http://www.reddit.com/submit?url=${encodeURIComponent(data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug)}&title=${encodeURIComponent(data.markdownRemark.frontmatter.title)}`} target="_blank">
                                <img alt="Share on Reddit" src={reddit} style={{ margin: 8, height: 30, padding: 2 }} />
                            </a>
                        </>}
                    />
                    <div className="contents">
                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    </div>
                </StyledBlogTemplate>
            </div>
            {/* <NewsletterForm /> */}

            <BackToTopButton />
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
