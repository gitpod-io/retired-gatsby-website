import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../../styles/variables'

const StyledPostBanner = styled.header`
    position: relative;
    overflow-x: hidden;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;

    .bg {
        display: block;
        background-size: cover;
        background-position: center;
        height: 40rem;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
    }

    .contents {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h1 {
        margin-top: 2rem;
    }

    .h3 {
        margin: 0;
        color: ${colors.text};
        font-weight: 200;
    }

    .info {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .author {
        display: flex;
        flex-direction: column;
    }

    .share {
        display: flex;
    }

    span + span {
        margin-top: 1rem;
    }

    span:last-of-type {
        &::after {
            content: '';
            display: block;
            margin-top: 2rem;
            height: 5px;
            width: 12rem;
            background: ${colors.offWhite4};
            border-radius: 5px;
        }
    }
`

interface PostBannerProps {
    teaserImage?: string
    title: string
    subtitle: string
    date: JSX.Element
    author: JSX.Element
    shareButtons: JSX.Element
}

const PostBanner: React.SFC<PostBannerProps> = ({ title, subtitle, teaserImage, date, author, shareButtons }) => (
    <StyledPostBanner>
        <div className="bg" aria-hidden="true" style={{backgroundImage: `url(${teaserImage})`}} />
        <div className="contents">
            <header>
                {subtitle ? <p className="h3" style={{fontWeight: 400}}>{subtitle}</p> : null }
                <h1>{title}</h1>
            </header>
            <div className="info">
                <div className="author">{author} {date}</div>
                <div className="share">{shareButtons}</div>
            </div>
        </div>
    </StyledPostBanner>
)

export default PostBanner
