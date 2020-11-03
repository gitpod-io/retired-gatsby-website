import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, borders } from '../../styles/variables'
import { parseAuthors } from '../../contents/authors'

const StyledPostPreview = styled.div`
    background: ${colors.white};
    border: ${borders.light2};
    border-radius: 3px;
    max-width: 35rem;
    min-height: 60rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .background {
        height: 26rem;
        background-origin: border-box;
        background-position-x: 50%;
        background-position-y: 50%;
        background-size: cover;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
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
    const authors = parseAuthors(props.post.node.frontmatter.author);
    return (
        <Link to={b.fields.slug} style={{display: "block", marginBottom: '5rem'}}>
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
                        by {
                            authors.map((author, idx) => <React.Fragment>
                                <a href={`https://github.com/${author.socialProfiles.github}`} target="_blank">{author.name}</a>{idx < authors.length - 1 ? ', ' : ''}
                            </React.Fragment>)
                        }
                    </span>
                </div>
            </StyledPostPreview>
        </Link>
    )
}

export default PostPreview
