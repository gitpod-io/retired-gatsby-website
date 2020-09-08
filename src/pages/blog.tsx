import React from 'react'

import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import { graphql } from 'gatsby'
import PostPreview from '../components/blog/PostPreview'
import BackToTopButton from '../components/BackToTopButton'
// import NewsletterForm from '../components/NewsletterForm'

const StyledBlogPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Posts ----- */
    /* ------------------------------------------- */

    h1 {
        margin-bottom: 3rem;
    }

    .pattern {
        padding: 10rem 0 5rem;
        text-align: center;
    }

    .post {
        padding: 7rem 0;

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 5rem 0;
        }
    }

    .posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media (max-width: 1140px) {
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

    const posts = props.data.allMarkdownRemark.edges.sort((a, b) =>
        Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date));

    return (
        <IndexLayout canonical="/blog/" title="Blog" description="Discover articles and tutorials about Gitpod.">
            <StyledBlogPage>

                {/* ----- Section Posts ----- */}

                <div className="pattern" aria-hidden="true">
                    <div className="row">
                        <h1>Discover Articles and Tutorials about Gitpod</h1>
                    </div>
                </div>

                <section className="post">
                    <div className="row">
                        <h1 className="visually-hidden">Discover Articles and Tutorials about Gitpod</h1>
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
                {/* <NewsletterForm /> */}

                <BackToTopButton />
            </StyledBlogPage>
        </IndexLayout>
    )
}

export default BlogPage
