import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import GitpodLogoDark from '../resources/gitpod-logo-dark.svg'
import GitpodLogoWhiteFont from '../resources/gitpod-logo-white-font.svg'
import GitpodLogoWhite from '../resources/gitpod-logo-white.svg'
import GitpodCube from '../resources/gitpod-cube.svg'
import { colors, sizes, borders } from '../styles/variables'

const StyledMediaKitPage = styled.div`

    h1 {
        margin-bottom: 2rem;
        font-weight: 600;
    }

    .pattern {
        text-align: center;
        padding: 14rem 0 4rem;
    }

    .resource {
        flex-basis: 23%;
        min-width: 26rem;
        max-width: 30rem;
        margin-bottom: 3rem;
        border: ${borders.light2};
        border-radius: 3px;

        @media(max-width: ${sizes.breakpoints.sm}) {
            min-width: 24rem;
        }

        &s {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 6rem 0 12rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;
                align-items: center;
            }
        }

        &__img {
            height: 5.5rem;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;

            &-container {
                display: flex;
                justify-content: center;
                padding: 5rem 0;
            }
        }

        &__text {
            display: flex;
            justify-content: space-between;
            padding: 3rem 1.5rem;
            background: ${colors.white};
            border-top: ${borders.light2};
        }
    }

    svg {
        transition: all .2s;
    }

    a:hover {
        svg {
            stroke: ${colors.link};
        }
    }
`

const resources: {
    img: JSX.Element
    text: string
    path: string
    dark?: boolean
}[] = [
        {
            img: <img alt="Gitpod Logo Dark" src={GitpodLogoDark} className="resource__img" />,
            text: 'Logo - black',
            path: GitpodLogoDark
        },
        {
            img: <img alt="Gitpod Logo White Font" src={GitpodLogoWhiteFont} className="resource__img" />,
            text: 'Logo - white',
            path: GitpodLogoWhiteFont,
            dark: true
        },
        {
            img: <img alt="Gitpod Logo White" src={GitpodLogoWhite} className="resource__img" />,
            text: 'Logo - one color white',
            path: GitpodLogoWhite,
            dark: true
        },
        {
            img: <img alt="Gitpod Cube Icon" src={GitpodCube} className="resource__img" style={{ transform: 'scale(1.5)' }} />,
            text: 'Icon',
            path: GitpodCube
        }
    ]

const MediaKitPage: React.SFC<{}> = () => (
    <IndexLayout canonical="/media-kit/" title="Media Kit">
        <StyledMediaKitPage>
            <div className="row">
                <div className="pattern">
                    <h1>Media Kit</h1>
                    <p>We put together some logos for you in case you’d like to link back to us.</p>
                </div>
            </div>
            <div className="row">
                 <div className="resources">
                    {
                        resources.map((r, i) => (
                            <div
                                className="resource"
                                key={i}
                                style={r.dark ? { background: colors.text } : { background: colors.offWhite }}
                            >
                                <div className="resource__img-container">
                                    {r.img}
                                </div>
                                <div className="resource__text">
                                    <p>{r.text}</p>
                                    <a
                                        href={r.path}
                                        download={`${r.text}.svg`}
                                        title={`${r.text}.svg`}
                                    >
                                        <svg stroke="#9f9f9f" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"><g data-name="Gruppe 625"><g data-name="Gruppe 624" transform="translate(1 1) translate(20) rotate(90)" fill="none" stroke-linecap="round" stroke-width="2"><line data-name="Linie 99" x2="15" transform="translate(0 10)" /><path data-name="Pfad 996" d="M6.472,6.014,0,0" transform="translate(8.528 3.986)" /><path data-name="Pfad 997" d="M6.137,6.139,0,0" transform="translate(8.861 16.271) rotate(-90)" /><line data-name="Linie 118" y2="20" transform="translate(21)" /></g></g></svg>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </StyledMediaKitPage>
    </IndexLayout>
)

export default MediaKitPage
