import React from 'react'

import IndexLayout from './index'
import styled from '@emotion/styled'
import DownArrow from '../resources/arrow-down.svg'
import { colors, shadows, sizes } from '../styles/variables'
import DocSideBar from '../components/DocSideBar'
import DocTopicChooser from '../components/DocTopicChooser'

const StyledDocsLayout = styled.div`

    .content {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10rem;

        @media (max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
        }
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        width: 100%;
        width: 32rem;
        margin-top: 10rem;
        padding: 3rem 1rem;
        background: ${colors.offWhite};
        box-shadow: ${shadows.light};

        @media(max-width: ${sizes.breakpoints.md}) {
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
        @media(min-width: ${sizes.breakpoints.md}) {
            display: none;
        }
    }

    .article {
        max-width: 80rem;


        &__container {
            background: ${colors.white};
            box-shadow: ${shadows.light};
            padding: 3rem 1rem;
            position: relative;
            margin-top: 10rem;

            @media(min-width: ${sizes.breakpoints.md}) {
                padding: 5rem;
            }
        }

        h1 {
            margin-bottom: 3rem;
        }

        h2 {
            margin: 6rem 0 3rem;
        }

        ul, ol {
            margin: 3rem 0;
        }

        li {
            font-weight: 300;

            @media(max-width: ${sizes.breakpoints.md}) {
                list-style-position: inside;
            }
        }

        li + li {
            margin-top: 2rem;
        }

        pre {
            margin: 1.5rem 0;
        }

    }

    .arrows {
        text-align: center;
        margin: 10rem 0;
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

`

interface DocsLayoutProps {
    canonical: string
    title: string
}

const DocsLayout: React.SFC<DocsLayoutProps> = ({ children, canonical, title}) => (
    <IndexLayout canonical={canonical} title={title}>
        <StyledDocsLayout>
            <div className="grey-container">
                <div className="content row">
                    <div>
                        <DocSideBar />
                        <DocTopicChooser />
                    </div>
                    {children}
                </div>
            </div>
        </StyledDocsLayout>
    </IndexLayout>
)

export default DocsLayout
