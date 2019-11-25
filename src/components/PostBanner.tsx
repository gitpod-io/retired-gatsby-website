import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows } from '../styles/variables'

const StyledPostBanner = styled.header`
    position: relative;
    height: 50rem;
    background-size: cover;
    background-position: center;
    overflow-x: hidden;

    .contents {
        position: absolute;
        bottom: 0rem;
        left: 2rem;
    }

    h1 {
        display: inline;
        background: ${colors.white};
        box-shadow: ${shadows.light1};
    }

    .c1 {
        display: inline-block;
        padding: 1rem 2rem;
        margin-top: 2rem;
        background: ${colors.white};
        box-shadow: ${shadows.light1};

        &:not(:last-of-type) {
            margin-right: 2rem;
        }
    }
`

interface PostBannerProps {
    teaserImage?: string
    title: string
    date: JSX.Element
    author: JSX.Element
}

const PostBanner: React.SFC<PostBannerProps> = ({ title, teaserImage, date, author }) => (
    <StyledPostBanner style={{backgroundImage: `url(${teaserImage})`}}>
        <div className="contents">
            <h1>{title}</h1>
            <br />
            <div className="c1">{date}</div>
            <div className="c1">{author}</div>
        </div>
    </StyledPostBanner>
)

export default PostBanner
