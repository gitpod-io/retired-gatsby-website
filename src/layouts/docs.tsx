import React from 'react'

import IndexLayout from './index'
import styled from '@emotion/styled'
import DownArrow from '../resources/arrow-down.svg'
import { colors, shadows, sizes } from '../styles/variables'
import DocSideBar from '../components/DocSideBar'
import DocTopicChooser from '../components/DocTopicChooser'

const StyledDocsLayout = styled.div`

    .grey-container {
        padding-top: 5rem;

        @media(max-width: ${sizes.breakpoints.lg}) {
            padding-top: 5rem;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            padding-top: 2rem;
        }
    }

    .content {
        display: flex;
        box-shadow: ${shadows.light};

        @media (max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
        }

    }

    .article {
        position: relative;
        background: ${colors.white};
        min-height: 100%;
        padding: 3rem 1rem;
        position: relative;

        @media(min-width: ${sizes.breakpoints.lg}) {
            width: 70%;
        }

        @media(min-width: ${sizes.breakpoints.md}) {
            padding: 5rem;
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
            margin-left: 2em;

            @media(max-width: ${sizes.breakpoints.lg}) {
                list-style-position: inside;
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

    .sidebar {
        display: flex;
        flex-direction: column;
        padding: 3rem 1rem;
        background: ${colors.offWhite};

        @media(min-width: ${sizes.breakpoints.lg}) {
            width: 30%;
        }

        @media(max-width: ${sizes.breakpoints.lg}) {
            display: none;
        }
    }

    .active {
        color: ${colors.link};
    }

    .topic-chooser {
        display: block;
        margin: 0 auto;
        font: inherit;
        color: inherit;
        padding: 1rem 2.5rem;
        background: #fff;
        border: 1px solid #ddd;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-image: url(${DownArrow}),
        linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
        background-repeat: no-repeat, repeat;
        background-position: right 1.7em top 50%, 0 0;
        background-size: 1.65em auto, 100%;
        @media(min-width: ${sizes.breakpoints.lg}) {
            display: none;
        }
    }

    .pen-container {
        position: absolute;
        top: 2rem;
        right: 2rem;
    }

    .arrows {
        text-align: center;
        padding: 10rem 0;
    }

    .prev,
    .next  {
        display: inline-block;
        height: 2rem;
        opacity: .7;
    }

    .prev {
        transform: rotate(90deg);
        margin-right: 4rem;
    }

    .next {
        transform: rotate(-90deg);
    }

    svg {
        fill: #bcbcbc;
        transition: all .2s;

        &:hover,
        &:focus {
            fill: ${colors.lightBlue};
        }
    }

    .table-container {
        margin: 2rem 0;
    }

`

interface DocsLayoutProps {
    canonical: string
    title: string
    body: JSX.Element
    arrows: JSX.Element
}

const DocsLayout: React.SFC<DocsLayoutProps> = ({canonical, title, body , arrows}) => (
    <IndexLayout canonical={canonical} title={title}>
        <StyledDocsLayout>
            <div className="grey-container">
                    <div className="row">
                        <div className="content">
                                <DocSideBar />
                                <DocTopicChooser />
                                {body}
                        </div>
                    {arrows}
                </div>
            </div>
        </StyledDocsLayout>
    </IndexLayout>
)

export default DocsLayout
