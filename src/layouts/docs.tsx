import React from 'react'

import IndexLayout from './index'
import styled from '@emotion/styled'
import { colors, sizes } from '../styles/variables'
import DocSideBar from '../components/docs/DocSideBar'
import DocTopicChooser from '../components/docs/DocTopicChooser'
import BackToTopButton from '../components/BackToTopButton'

const StyledDocsLayout = styled.div`
    .content {
        display: flex;
        padding-top: 5rem;

        @media (max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            padding-top: 2rem;
        }
    }

    .article {
        position: relative;
        min-height: 100%;
        padding: 3rem 1rem;
        position: relative;

        &__header {
            display: flex;
            justify-content: space-between;
        }

        @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
            width: 70%;
        }

        @media(min-width: calc(${sizes.breakpoints.md}) + 1px) {
            padding: 5rem;
            background: ${colors.white};
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 5rem 3rem;
        }

        h1 {
            margin-bottom: 3rem;
        }

        h2 {
            margin: 6rem 0 5rem;
        }

        h3 {
            margin: 5rem 0 1rem;
        }

        h4 {
            margin: 3rem 0 1rem;
        }

        h2 + p {
            margin-block-end: 0em;
        }
        h2 + ul {
            margin-block-end: 0em;
        }

        ul, ol {
            margin: 2rem 0;
            list-style: inherit;
        }

        li {
            font-weight: 300;
            margin-left: 3rem;

            @media(max-width: ${sizes.breakpoints.lg}) {
                list-style-position: inside;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                margin-left: 1.2rem;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                margin-left: .7rem;
            }

        }

        li + li {
            margin-top: 0.5rem;
        }

        pre {
            margin: 1.5rem 0;
        }

        img {
            max-width: 100%;
        }

        blockquote {
            padding: 1em;
            margin: 0.5em 0;
            background-color: #fdf6e3;
        }
    }

    .active {
        color: ${colors.link};
    }

    .table-container {
        margin: 2rem 0;
    }

    p > img {
        margin: 1rem 0;
    }
`

interface DocsLayoutProps {
    canonical: string
    title: string
    body: JSX.Element
}

const DocsLayout: React.SFC<DocsLayoutProps> = ({ canonical, title, body}) => (
    <IndexLayout canonical={canonical} title={title} description="Explore the documentation to learn more about Gitpod.io and Gitpod Self-Hosted.">
        <StyledDocsLayout>
                <div className="row">
                    <div className="content">
                        <DocSideBar />
                        <DocTopicChooser />
                        {body}
                    </div>
                </div>
            <BackToTopButton />

        </StyledDocsLayout>
    </IndexLayout>
)

export default DocsLayout
