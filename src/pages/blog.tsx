import React from 'react'

import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { colors, sizes, borders } from '../styles/variables'
import { graphql } from 'gatsby'
import PostPreview from '../components/PostPreview'

const StyledBlogPage = styled.div`

    /* ------------------------------------------- */
    /* ----- Section Posts ----- */
    /* ------------------------------------------- */

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

    /* ------------------------------------------- */
    /* ----- Section Newsletter ----- */
    /* ------------------------------------------- */

    .newsletter {
        padding: 12rem 0;

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 8rem 0;
        }

        &__input {
            margin: 0 1.5rem 3rem 0;
            padding: 1.2rem 2.5rem;
            border: ${borders.light1};
            border-radius: 100px;

            @media(max-width: ${sizes.breakpoints.sm}) {
                width: 100%;
            }
        }

        &__text {
            margin: -3rem 0 3rem;
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
        <IndexLayout canonical="/blog/">
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

                <div className="row">
                    <section className="newsletter">
                        <h2>Never Miss a Blog Post</h2>
                        <p className="newsletter__text">Sign up for the newsletter and stay informs about the latest news from Gitpod and its community.</p>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                        }}>
                            <input
                                placeholder="Enter your Email"
                                className="newsletter__input"
                            />
                            <button className="btn btn--normal btn--cta">Sign Up</button>
                        </form>
                    </section>
                </div>
            </StyledBlogPage>
        </IndexLayout>
    )
}

export default BlogPage
