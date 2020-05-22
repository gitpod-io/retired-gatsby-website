import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'
import HourGlass from '../../resources/hourglass.svg'
import ArrowOnTarget from '../../resources/arrow-on-target.svg'

const Styled = styled.div`
    .intro {
        background: var(--offWhite);

        &__box {
            display: flex;
            align-items: center;

            @media(min-width: 1080px) {
                width: 50%;
            }

            @media(max-width: 1080px) {
                max-width: 53rem;

                &:not(:last-child) {
                    margin-bottom: 5rem;
                }
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                flex-direction: column;
                text-align: center;
            }

            &-container {
                display: flex;

                @media(max-width: 1080px) {
                    flex-direction: column;
                    align-items: center;
                }
            }
        }

        &__icon {
            display: flex;
            height: 12rem;
            
            @media(max-width: 1080px) {
                width: 8rem;
            }
            
            @media(min-width: ${sizes.breakpoints.sm}) {
                margin-right: 3rem;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                display: inline-block;
                margin: 0 auto;
            }
        }

        &__text {
            font-size: 2.2rem;
            font-weight: 400;

            @media(min-width: 1080px) {
                width: 26ch;

                &--2 {
                    width: 28.5ch;
                }
            }

            span {
                font-weight: 600;
            }
        }
    }
`

const Intro = () => (
    <Styled>
        <section className="intro">
                <div className="intro__box-container row">
                    <div className="intro__box">
                        <object role="presentation" tabIndex={-1} className="intro__icon" data={HourGlass} />
                        <p className="intro__text">Every day <span>developers waste millions of hours</span> waiting for builds to finish.</p>
                    </div>
                    <div className="intro__box">
                        <object role="presentation" tabIndex={-1} className="intro__icon" data={ArrowOnTarget} />
                        <p className="intro__text intro__text--2">Gitpod eliminates this friction by providing <span>prebuilt, ready-to-code dev environments</span> with a single click.</p>
                    </div>
                </div>
            </section>
    </Styled>
)

export default Intro
