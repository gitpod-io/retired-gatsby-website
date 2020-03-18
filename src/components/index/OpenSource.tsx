import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../../styles/variables'
import OpenSourceImg from '../../resources/open-source.jpg'

const Styled = styled.div`
    .open-source {
        padding-top: 0;

        @media(max-width: ${sizes.breakpoints.sm}) {
            text-align: center;
        }

        &__content {
            position: relative;
            display: flex;
            align-items: center;

            &::before {
                content: '';
                position: absolute;
                height: 100%;
                width: 100%;
                border-radius: 250px;
                background: url(${OpenSourceImg}) #fafafadd;
                background-blend-mode: color;
                -webkit-filter: grayscale(100%);
                filter: gray;
                background-position: center; /* Center the image */
                background-repeat: no-repeat; /* Do not repeat the image */
                background-size: cover;

                @media(max-width: ${sizes.breakpoints.md}) {
                    display: none;
                }
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;
            }

            img {
                max-width: 85rem;

                @media(max-width: ${sizes.breakpoints.md}) {
                    transform: scale(1.08) translateY(-1rem);
                }
            }
        }

        &__text {
            padding: 10rem 0;
            transform: translate(40%, 0rem);
            color: ${colors.textDark};
            width: 58%;
            font-size: 110%;

            p {
                margin-bottom: 3rem;
            }

            @media(max-width: ${sizes.breakpoints.lg}) {
                br {
                    display: none;
                }
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 5rem 0;
                flex-direction: column;
                border-radius: unset;
                width: 100%;
                transform: none;
                img {
                    width: 100%;
                }
            }

        }

        h2 {
            color: ${colors.textDark};
            margin-bottom: 6rem;
            font-weight: 600;

            @media(min-width: ${sizes.breakpoints.md}) {
                font-size: 200%;
            }
        }
    }
`

const OpenSource = () => (
    <Styled>
        <div className="grey-container">
            <div className="row">
                <section>
                    <div className="open-source">
                        <div className="open-source__content">
                            <div className="open-source__text">
                                <h2>Free for Open Source!</h2>
                                <p>
                                    We develop huge parts of Gitpod in <a href="https://theia-ide.org" target="_blank" rel="noopener">open source</a>, well aware of how important a frictionless onboarding for contributors is.
                                    </p>
                                <p>
                                    Therefore, Gitpod is <strong>free for open source</strong> and we have created <a href="https://contribute.dev" target="_blank" rel="noopener">contribute.dev</a>, which lists ready-to-code open source projects.
                                    </p>
                                <p>
                                    Start contributing now!
                                    </p>
                                <a href="https://contribute.dev" className="btn" target="_blank" rel="noopener">contribute.dev</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </Styled>
)

export default OpenSource
