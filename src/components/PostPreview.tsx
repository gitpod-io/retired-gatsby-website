import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, shadows } from '../styles/variables'
import { authors } from '../utils/authors'

const StyledPostPreview = styled.div`
    background: ${colors.white};
    box-shadow: ${shadows.light};
    max-width: 35rem;
    min-height: 60rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
        flex-grow: 2;
    }

    .info {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        color: ${colors.text};
        font-weight: 400;
        flex-wrap: wrap;
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
    let author = authors[props.post.node.frontmatter.author];
    if (!author) {
        author = {
            description: "",
            name: props.post.node.frontmatter.author,
            socialProfiles: {
                github: props.post.node.frontmatter.author,
                twitter: props.post.node.frontmatter.author
            }
        }
    }
    return (
        <Link to={b.fields.slug}>
            <StyledPostPreview>
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
                        by&nbsp;
                        <a href={`https://github.com/${author.socialProfiles.github}`} target="_blank">{author.name}</a>
                    </span>
                </div>
            </StyledPostPreview>
        </Link>
    )
}

export default PostPreview
