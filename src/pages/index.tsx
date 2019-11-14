import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, sizes, shadows } from '../styles/variables'

import IndexLayout from '../layouts/index'
import ReflectionScreenshot from '../resources/reflection-screenshot.png'
import HourGlass from '../resources/hourglass.png'
import ArrowOnTarget from '../resources/arrow-on-target.png'
import AutomatedSetup from '../resources/automatedsetup.png'

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

    /* ------------------------------------------- */
    /* ----- Section Why Gitpod? ----- */
    /* ------------------------------------------- */

    .why-gitpod {

        &__box {
            display: flex;
            border-radius: 3px;
            border: 4px solid ${colors.offWhite};
            box-shadow: ${shadows.light};

            &:not(:last-child) {
                margin-bottom: 8rem;
            }

            &-container {
                display: flex;
                flex-direction: column;
            }
        }

        &__text {
            padding: 6rem 4rem;
            background: ${colors.offWhite};

            p:last-of-type {
                margin-bottom: 5rem;
            }

            @media(min-width: ${sizes.breakpoints.md}) {
                width: 40%;
            }
        }

        &__img {
            height: 100%;
            width: 100%;
            transform: scale(1.5) translate(2rem, 3rem);

            &-container {
                @media(min-width: ${sizes.breakpoints.md}) {
                    width: 60%;
                }
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

            {/* ----- Section Why Gitpod? ----- */}

            <section className="why-gitpod row">
                <h2>Why Gitpod?</h2>

                <div className="why-gitpod__box-container">

                    <div className="why-gitpod__box">
                        <div className="why-gitpod__text">
                            <h3>Ready-to-Code Dev Environments</h3>
                            <p>Gitpod prepares ephemeral dev environments for teams, that come entirely prebuilt with your projects, dependencies and tools.</p>
                            <p>Read more about <a href="#">Continuous Dev Environments</a>.</p>
                            <button className="toggle toggle--active">With Gitpod</button>
                            <button className="toggle">Ordinary Way</button>
                        </div>
                        <div className="why-gitpod__img-container">
                            <img alt="Automated Setup" src={AutomatedSetup} className="why-gitpod__img"/>
                        </div>
                    </div>

                     <div className="why-gitpod__box">
                        <div className="why-gitpod__img-container">
                            <img alt="Automated Setup" src={AutomatedSetup} className="why-gitpod__img"/>
                        </div>
                        <div className="why-gitpod__text">
                            <h3>Full Dev Environments</h3>
                            <p>Gitpod is not just another online playground IDE, but a full featured dev environment, just like your local IDE.</p>
                            <p>It includes comprehensive Linux terminals, you can install any VS Code extensions and it's all based on Theia, the vendor neutral and highly extensible VS Code alternative.</p>
                            <p>Read more about <a href="#">Full Dev Environments</a>.</p>
                        </div>
                    </div>

                </div>
            </section>

        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage
