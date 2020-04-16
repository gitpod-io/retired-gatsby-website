import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../../styles/variables'
import OpenSourceImg from '../../resources/open-source.png'

const Styled = styled.div`
    .open-source {
        display: flex;
        padding-top: 0;

        @media(max-width: 1040px) {
            flex-direction: column;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            text-align: center;
        }

        &__img {
            width: 100%;
            max-height: 342px;
            max-width: 596px;

            @media(max-width: 1040px) {
                margin-bottom: 4rem;
                margin-left: -1.5rem;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                margin-left: 0;
            }

            &-container {
                display: flex;
                align-items: center;
                flex: 0 0 55%;
            }
        }

        &__text {
            
            &-container {
                display: flex;
                align-items: center;
                flex: 1;
                max-width: 60rem;

                @media(min-width: 1040px) {
                    padding: 0 0 0 6rem; 
                }
            }

            p {
                margin-bottom: 2rem;
            }

            @media(max-width: ${sizes.breakpoints.lg}) {
                br {
                    display: none;
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
            <section>
                <div className="row">
                    <div className="open-source">
                        <div className="open-source__img-container">
                            <img className="open-source__img" src={OpenSourceImg} />
                        </div>
                        <div className="open-source__text-container">
                            <div className="open-source__text">
                                <h3>Giving Back to Open-Source!</h3>
                                <p>Gitpod is built on open-source and wouldn’t exist without it.</p> 
                                <p>Therefore, Gitpod is free for open source, and we have created contribute.dev, which lists ready-to-code open source projects. Start contributing now!</p> 
                                <p>Find your next project!</p>
                            <a href="https://contribute.dev" className="btn btn--cta" target="_blank" rel="noopener">Contribute.dev</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Styled>
)

export default OpenSource
