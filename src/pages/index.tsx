import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, sizes, shadows } from '../styles/variables'

import IndexLayout from '../layouts/index'
import ReflectionScreenshot from '../resources/reflection-screenshot.png'
import ReflectionScreenshotPrespectiveLess from '../resources/reflection-screenshot--1.png'

import IconLine from '../resources/zick-zack-line.svg'
import HourGlass from '../resources/hourglass.svg'
import ArrowOnTarget from '../resources/arrow-on-target.svg'
import ToolIntegration from '../resources/tool-integration.svg'
import FullDevEnvironments from '../resources/full-dev-environments.svg'
import ReadyToCode from '../components/ReadyToCode'
import Details from '../components/Details'
import TrustedBy from '../components/TrustedBy'
import AppliToolsLogo from '../resources/aplitools.svg'
import Gatsby from '../resources/gatsby.svg'
import FreeCodeCamp from '../resources/freecodecamp.svg'
import CodeInstituteLogo from '../resources/code.png'
import FourGeeksAcademyLogo from '../resources/4-geeks-academy.png'
import TheiaIDELogo from '../resources/theia-grey.svg'
import Testimonials from '../components/Testimonials'
import GetStarted from '../components/GetStarted'
import OpenSource from '../resources/open-source.jpg';

const StyledIndexPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Banner ----- */
    /* ------------------------------------------- */

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

    /* ------------------------------------------- */
    /* ----- Section Intro ----- */
    /* ------------------------------------------- */

    .intro {
        padding-bottom: 0rem;

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
                text-align: center;
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
            height: 9rem;
            
            @media(max-width: ${sizes.breakpoints.md}) {
                width: 7rem;
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

            @media(min-width: ${sizes.breakpoints.md}) {
                width: 26ch;
            }

            span {
                font-weight: 600;
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Line ----- */
    /* ------------------------------------------- */

    .line {
        width: 100vw;

        &-container {
            padding-bottom: 10rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                display: none;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                padding-bottom: 0;
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Why Gitpod? ----- */
    /* ------------------------------------------- */

    .why-gitpod {

        @media(max-width: ${sizes.breakpoints.sm}) {
            text-align: center;
        }

        &__box {
            display: flex;
            border-radius: 3px;
            border: 3px solid ${colors.offWhite};
            box-shadow: ${shadows.light};

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;
            }

            &:not(:last-child) {
                margin-bottom: 8rem;
            }

            &-container {
                display: flex;
                flex-direction: column;
            }

            &--1 {
                @media(min-width: ${sizes.breakpoints.md}) {
                    height: 475px;
                }

                @media(max-width: ${sizes.breakpoints.md}) {
                    flex-direction: column-reverse;
                }

                @media(max-width: ${sizes.breakpoints.sm}) {
                    .buttons {
                        text-align: center;
                    }
                }

                .why-gitpod__img-container {
                    position: relative;
                    min-height: 250px;

                    @media(max-width: ${sizes.breakpoints.sm}) {
                        min-height: 200px;
                    }

                    img {
                        position: absolute;
                        bottom: 0;
                    }
                }
            }

            &--2 {
                @media(max-width: ${sizes.breakpoints.md}) {
                    flex-direction: column-reverse;
                }
            }

            &--3 {
                @media(max-width: ${sizes.breakpoints.md}) {
                    flex-direction: column;
                }
            }


        }

        &__text {
            padding: 6rem 4rem;
            background: ${colors.offWhite};
            min-width: 28rem;

            @media(max-width: 960px) {
                padding: 4rem 2rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 3rem 1rem;
            }

            p:last-of-type {
                margin-bottom: 5rem;

                @media(max-width: ${sizes.breakpoints.lg}) {
                    margin-bottom: 2rem;
                }
            }

            @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
                width: 40%;
            }
        }

        &__img {
            height: 100%;
            width: 100%;

            @media(max-width: ${sizes.breakpoints.md}) {
                max-height: 42rem;

                &--1 {
                    max-height: initial;
                }
            }

            &--1 {
                @media(max-width: 560px) {
                    height: 32rem;
                }

                @media(max-height: 500px) {
                    height: 29rem;
                }

                @media(max-width: ${sizes.breakpoints.sm}) {
                    height: 25rem;
                }
            }


            &-container {
                min-height: 24rem;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;

                @media(max-width: ${sizes.breakpoints.md}) {
                    max-height: 40rem;

                    &--1 {
                        max-height: initial;
                        height: 50rem;
                        transform: translateY(-4rem)
                    }
                }

                &--1 {
                    @media(max-width: 560px) {
                        height: 34rem;
                        transform: translateY(-3rem)
                    }

                    @media(max-width: 560px) {
                        height: 32rem;
                        transform: translateY(-1.5rem)
                    }

                    @media(max-width: ${sizes.breakpoints.sm}) {
                        height: 30rem;
                        transform: none;
                    }
                }

                @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
                    width: 60%;
                }
            }

            &--full-dev-env {
                transform: translate(-2rem);

                @media(max-width: 530px) {
                    transform: translate(-1.3rem);
                }
            }

            &--3 {
                @media(min-width: ${sizes.breakpoints.lg}) {
                    transform: translateY(13.5rem) scale(.93) translateX(-2rem);
                }

                @media(min-width: ${sizes.breakpoints.md}) {
                    transform: translateY(13.5rem) scale(0.93) translateX(-2rem);
                }

                @media(max-width: ${sizes.breakpoints.md}) {
                    transform: translateY(10rem);
                }

                @media(max-width: ${sizes.breakpoints.sm}) {
                    transform: translateY(6rem);
                }
            }
        }

        img {
            transition: transform 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        }

        .toggle {
            display: inline-block;
            padding: 1rem 3rem;
            font-weight: 600;
            color: ${colors.textLight};
            background: ${colors.offWhite2};
            border: none;

            @media(max-width: 1240px) {
                font-size: 1.4rem;
                padding: .8rem 1rem;
            }

            &--active {
                color: ${colors.white};
                background: url("https://www.gitpod.io/galaxy.jpg") no-repeat 50% 50%;
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Open Source ----- */
    /* ------------------------------------------- */

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
                background: url(${OpenSource}) #fafafadd;
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

const IndexPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/'>
        <StyledIndexPage>

            {/* ----- Banner ----- */}

            <div className="banner-container">
                <div className="row">
                    <header role="banner" className="banner">
                        <div className="banner__text-box">
                            <h1>
                                Are You <br/>Ready-To-Code?
                                <span>Start Instantly. Anywhere.</span>
                            </h1>
                            <p>Gitpod launches ready-to-code dev environments<br /> for your GitHub or GitLab project with a single click.</p>
                            <div className="btn-wrapper">
                                <a href="https://gitpod.io/#https://github.com/gitpod-io/spring-petclinic" className="btn btn--cta">Let's Try It!</a>
                                <br aria-hidden={true}/>
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

            {/* ----- Section Intro ----- */}

            <section className="intro">
                <div className="intro__box-container row">
                    <div className="intro__box">
                        <object tabIndex={-1} className="intro__icon" data={HourGlass} />
                        <p className="intro__text">Every day <span>developers waste millions of hours</span> waiting for builds to finish.</p>
                    </div>
                    <div className="intro__box">
                        <object tabIndex={-1} className="intro__icon" data={ArrowOnTarget} />
                        <p className="intro__text">Gitpod eliminates this friction by providing <span>prebuilt, ready-to-code dev environments</span> with a single click.</p>
                    </div>
                </div>
            </section>

            {/* ----- Line ----- */}

            <div className="line-container">
                <object tabIndex={-1} className="line" data={IconLine} />
            </div>

            {/* ----- Section Testimonials ----- */}

            <Testimonials />

            {/* ----- Section Why Gitpod? ----- */}

            <div className="row">
                <section className="why-gitpod">
                    <h2>Why Gitpod?</h2>

                    <div className="why-gitpod__box-container">

                        <ReadyToCode />

                        <div className="why-gitpod__box why-gitpod__box--3">
                            <div className="why-gitpod__img-container">
                                <img
                                    alt="Tools Integration"
                                    src={ToolIntegration}
                                    className="why-gitpod__img"
                                    style={{ transform: 'scale(.8)' }}
                                />
                            </div>
                            <div className="why-gitpod__text">
                                <h3>Seamless GitHub & GitLab Integration</h3>
                                <p>Gitpod let’s you stay in the flow by blending perfectly into GitHub and GitLab. Start your workflow from there and let Gitpod beam you in a ready-to-code dev environment.</p>
                                <p>No matter you want to fix a bug, add a feature or do a code review, Gitpod get's you started immediately.</p>
                                <p>Read more about <a href="/docs/context-urls/">Integration.</a></p>
                            </div>
                        </div>

                        <div className="why-gitpod__box why-gitpod__box--2">
                            <div className="why-gitpod__text">
                                <h3>Based on the Online IDE Theia </h3>
                                <p>Gitpod is not just another online playground, but a full featured dev environment, just like your local IDE.</p>
                                <p>It includes fully functional <strong>Linux terminals</strong>, you can install any <strong>VS Code extensions</strong> and provides all the other good features provided by <strong>Theia</strong>, the vendor neutral and highly extensible VS Code alternative, we have developed.</p>
                                <p>Read more about <a href="/docs/ide/">Theia</a>.</p>
                            </div>
                            <div className="why-gitpod__img-container">
                                <object tabIndex={-1} 
                                    data={FullDevEnvironments}
                                    className="why-gitpod__img why-gitpod__img--full-dev-env" />
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            {/* ----- Section Trusted By ----- */}

            <TrustedBy
                brands={[
                    {
                        alt: 'freeCodeCamp.org',
                        url: 'https://www.freecodecamp.org/',
                        svg: FreeCodeCamp,
                        className: 'fcc'
                    },
                    {
                        alt: 'Gatsby Logo',
                        url: 'https://www.gatsbyjs.org/',
                        svg: Gatsby
                    },
                    {
                        alt: 'Theia Ide Logo',
                        url: 'https://theia-ide.org',
                        svg: TheiaIDELogo
                    },
                    {
                        alt: 'Code Institute',
                        url: 'https://codeinstitute.net/',
                        svg: CodeInstituteLogo
                    },
                    {
                        alt: 'Aplitools Logo',
                        url: 'https://applitools.com/',
                        svg: AppliToolsLogo
                    },
                    {
                        alt: '4 Geeks Academy Logo',
                        url: 'https://www.4geeksacademy.co/',
                        svg: FourGeeksAcademyLogo
                    },
                ]}
            />

            {/* ----- Section Open Source ----- */}

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

            {/* ----- Section Getting Started ----- */}

            <GetStarted />


            {/* ----- Section Explore Gitpod ----- */}

            <Details
                title="Explore Gitpod"
                text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                anchors={[{ href: '/features/', text: 'See Features' }, { href: '/blog/', text: 'See Blog' }]}
            />

        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage
