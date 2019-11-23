import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, shadows } from '../styles/variables'

const StyledPostPreview = styled.div`
    background: ${colors.white};
    box-shadow: ${shadows.light};
    max-width: 35rem;
    margin-bottom: 5rem;

    .background {
        height: 26rem;
        background-origin: border-box;
        background-position-x: 50%;
        background-position-y: 50%;
        background-size: cover;
    }

    p {
        color: ${colors.text};
        font-weight: 400;
    }

    .content {
        padding: 2rem;
    }

    .info {
        display: flex;
        justify-content: space-between;
        padding: 2rem 1rem 2.5rem;
        color: ${colors.text};
        font-weight: 400;

        a {

        }
    }
`

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

interface PostPreviewProps {
    post: BlogData
}

const PostPreview: React.SFC<PostPreviewProps> = (props) => {
     const b = props.post.node;
        const date = new Date(Date.parse(b.frontmatter.date));
    return (
        <StyledPostPreview>
            <Link to={b.fields.slug}>
                <div
                    aria-hidden={true}
                    style={{
                        backgroundImage: `url('${b.frontmatter.image}')`
                    }}
                    className="background"
                />
                <div className="content">
                    <h3>{b.frontmatter.title}</h3>
                    <p>{b.excerpt}</p>
                </div>
                <div className="info">
                    <span>
                        {date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span>
                        By&nbsp;
                        <a href={`https://github.com/${b.frontmatter.author}`} target="_blank">{b.frontmatter.author}</a>
                    </span>
                </div>
            </Link>
        </StyledPostPreview>
    )
}

export default PostPreview
