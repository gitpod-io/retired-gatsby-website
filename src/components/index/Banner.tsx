import React from 'react'

import { Link } from 'gatsby'
import ReflectionScreenshot from '../../resources/reflection-screenshot.png'
import ReflectionScreenshotPrespectiveLess from '../../resources/reflection-screenshot--1.png'
import styled from '@emotion/styled'
import { colors, sizes } from '../../styles/variables'

const Styled = styled.div`

    .banner {
        display: flex;
        padding-bottom: 20rem;

        @media(min-width: ${sizes.breakpoints.lg}) {
            padding-top: 5rem;
        }

        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
            padding-bottom: 5rem;
        }

        &-container {
            background: ${colors.offWhite};
        }

        &__text-box {
            margin-top: 12rem;

            h1 {
                br {
                    display: block;
                    
                    @media(min-width: 360px) {
                        display: none;
                    }
                }
            }

            @media(max-width: ${sizes.breakpoints.lg}) {
                text-align: center;
                margin: 5rem 0 0;

                br {
                    display: none;
                }
            }

            @media(min-width: ${sizes.breakpoints.lg}) {
                width: 40%;
            }
        }

        .btn-wrapper {
            margin-bottom: 3rem;
        }

        &__screenshot {
            display: block;
            width: 100%;

            @media(max-width: ${sizes.breakpoints.lg}) {
                width: 100%;
            }

            @media(min-width: ${sizes.breakpoints.lg}) {

                &-container {
                    width: 50%;
                }
            }

            &--1 {
                transform: scale(1.3) translate(6rem, 6rem);

                @media(max-width: ${sizes.breakpoints.lg}) {
                    display: none;
                }
            }

            &--2 {
                margin-top: 10rem;
                transform: scale(1.3) translateX(1.5rem);

                @media(max-width: 740px) {
                    transform: scale(1.3) translateX(1.2rem);                    
                }

                @media(max-width: 580px) {
                    transform: scale(1.3) translateX(1rem);                    
                }

                @media(max-width: 480px) {
                    transform: scale(1.3) translateX(.9rem);                    
                }

                @media(max-width: 440px) {
                    transform: scale(1.3) translateX(.8rem);                    
                }

                @media(min-width: ${sizes.breakpoints.lg}) {
                    display: none;
                }
            }
        }

        h1 {
            font-weight: 600;

            span {
                display: block;
                font-weight: 400;
            }
        }

        p {
            margin: 2.5rem auto;

            @media(max-width: ${sizes.breakpoints.lg}) {
                padding: 0 5rem;
            }

            @media(max-width: 600px) {
                padding: 0;
            }
        }
    }

`


const Banner = () => (
    <Styled>
        <div className="banner-container">
            <div className="row">
                <header role="banner" className="banner">
                    <div className="banner__text-box">
                        <h1>
                            Are You <br />Ready-To-Code?
                                <span>Start Instantly. Anywhere.</span>
                        </h1>
                        <p>Gitpod launches ready-to-code dev environments<br /> for your GitHub or GitLab project with a single click.</p>
                        <div className="btn-wrapper">
                            <a href="https://gitpod.io/#https://github.com/gitpod-io/spring-petclinic" className="btn btn--cta">Let's Try It!</a>
                            <br aria-hidden={true} />
                            <Link to="/self-hosted/" className="btn">Host Yourself</Link>
                        </div>
                    </div>
                    <div className="banner__screenshot-container">
                        <img alt="Gitpod Screenshot" src={ReflectionScreenshot} className="banner__screenshot banner__screenshot--1" />
                        <img alt="Gitpod Screenshot" src={ReflectionScreenshotPrespectiveLess} className="banner__screenshot banner__screenshot--2" />
                    </div>
                </header>
            </div>
        </div>
    </Styled>
)

export default Banner
