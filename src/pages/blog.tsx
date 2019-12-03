import React from 'react'

import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { colors, sizes } from '../styles/variables'
import { graphql } from 'gatsby'
import PostPreview from '../components/PostPreview'
import NewsletterForm from '../components/NewsletterForm'

const StyledBlogPage = styled.div`

    /* ------------------------------------------- */
    /* ----- Section Posts ----- */
    /* ------------------------------------------- */

    .post {
        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 3rem 0;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            padding: 1rem 0;
        }
    }

    .page-subtitle {
        margin-top: 5rem;
        color: ${colors.textLight};
        font-weight: 400;
        margin-bottom: 0;
    }

    .posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media (max-width: ${sizes.breakpoints.md}) {
            justify-content: space-around;
        }
    }

`

export const query = graphql`
  query {
    allMarkdownRemark(filter: {
        fileAbsolutePath: {
        glob: "**/blog/*"
        }
    }) {
        edges {
            node {
                fields {
                    slug
                }
                timeToRead
                fileAbsolutePath
                excerpt
                headings {
                    value
                }
                frontmatter {
                    title
                    image
                    date
                    author
                }
            }
            }
        }
    }
`

interface BlogPageProps {
    data: {
        allMarkdownRemark: {
            edges: BlogData[];
        }
    }
}


interface BlogData {
    node: {
        fields: {
            slug: string
        },
        timeToRead: string,
        fileAbsolutePath: string,
        excerpt: string,
        headings: {
            value: string
        },
        frontmatter: {
            title: string
            image: string
            date: string
            author: string
        }
    }
}

const BlogPage: React.SFC<BlogPageProps> = (props) => {

    const posts = props.data.allMarkdownRemark.edges.sort((a,b) =>
            Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date));

    return (
        <IndexLayout canonical="/blog/" title="Blog">
            <StyledBlogPage>

                {/* ----- Section Posts ----- */}

                <section className="post grey-container">
                    <div className="row">
                        <h3 className="page-subtitle">Blog Posts</h3>
                        <h2>Discover Articles and Tutorials about Gitpod</h2>
                        <div className="posts">
                            {posts.map(
                                post => <PostPreview
                                        key={post.node.fields.slug}
                                        post={post}
                                    />
                            )}
                        </div>
                    </div>
                </section>

                {/* ----- Section Newsletter ----- */}

                <NewsletterForm />
            </StyledBlogPage>
        </IndexLayout>
    )
}

export default BlogPage
