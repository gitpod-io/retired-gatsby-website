import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, sizes } from '../styles/variables'

import IndexLayout from '../layouts/index'
import ReflectionScreenshot from '../resources/reflection-screenshot.png'
import HourGlass from '../resources/hourglass.png'
import ArrowOnTarget from '../resources/arrow-on-target.png'

const StyledIndexPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Banner ----- */
    /* ------------------------------------------- */


    .banner {
        display: flex;
        padding-top: 5rem;

        &-container {
            background: ${colors.offWhite};
        }

        &__text-box {
            width: 50%;
            margin-top: 15rem;
        }

        &__screenshot {
            height: 70rem;
            transform: scale(1.3) translate(8rem, 5rem);

            &-container {
                width: 50%;
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
            margin: 2.5rem 0;
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Intro ----- */
    /* ------------------------------------------- */

    .intro {
        &__box {
            display: flex;
            @media(min-width: ${sizes.breakpoints.md}) {
                width: 50%;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                max-width: 50rem;

                &:not(:last-child) {
                    margin-bottom: 5rem;
                }
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                flex-direction: column;
            }

            &-container {
                display: flex;

                @media(max-width: ${sizes.breakpoints.md}) {
                    flex-direction: column;
                    align-items: center;
                }
            }
        }

        &__icon {
            display: flex;
            margin-right: 3rem;
            height: 9rem;
        }

        &__text {
            font-size: 2.4rem;

            @media(min-width: ${sizes.breakpoints.md}) {
                width: 25ch;
            }

            span {
                font-weight: 600;
            }
        }
    }

`

const IndexPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/blog/'>
        <StyledIndexPage>

            {/* ----- Banner ----- */}

            <div className="banner-container">
                <header role="banner" className="banner row">
                    <div className="banner__text-box">
                        <h1>
                            Continuous Dev Environments.
                            <span>Instantly. Anywhere.</span>
                        </h1>
                        <p>Gitpod launches ready-to-code dev environments with a single click.</p>
                        <a href="#getting-started" className="btn btn--normal btn--cta">Start for Free</a>
                        <Link to="/hosting" className="btn btn--normal">Host Yourself</Link>
                    </div>
                    <div className="banner__screenshot-container">
                        <img alt="Gitpod Screenshot" src={ReflectionScreenshot} className="banner__screenshot"/>
                    </div>
                </header>
            </div>

            {/* ----- Section Intro ----- */}

            <section className="intro">
                <div className="intro__box-container row">
                    <div className="intro__box">
                        <img className="intro__icon" alt="Hour Glass" src={HourGlass} />
                        <h3 className="intro__text">Every day <span>developers waste millions of hours</span> waiting for builds to finish.</h3>
                    </div>
                    <div className="intro__box">
                        <img className="intro__icon" alt="Arrow on Wooden Target" src={ArrowOnTarget} />
                        <h3 className="intro__text"><span>Gitpod eliminates this friction</span> by providing prebuilt, ready-to-code dev environments with just one click.</h3>
                    </div>
                </div>
            </section>

        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage
