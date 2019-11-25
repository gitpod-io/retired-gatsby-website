import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, sizes, shadows, borders } from '../styles/variables'

import IndexLayout from '../layouts/index'
import ReflectionScreenshot from '../resources/reflection-screenshot.png'
import HourGlass from '../resources/hourglass.png'
import ArrowOnTarget from '../resources/arrow-on-target.png'
import AutomatedSetup from '../resources/automatedsetup.png'
import PrefixImage from '../resources/prefix-image.png'
import { projects } from '../utils/projects'
import Project from '../components/Project'
import AntDesignWorkspace from '../resources/ant-design-workspace.png'
import AppliToolsLogo from '../resources/aplitools.svg'
import FourGeeksAcademyLogo from '../resources/4-geeks-academy.png'
import CodeInstituteLogo from '../resources/code.png'
import Details from '../components/Details'

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
            font-size: 2.2rem;
            font-weight: 400;

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
            border: ${borders.light};
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

    /* ------------------------------------------- */
    /* ----- Section Testimonials ----- */
    /* ------------------------------------------- */

    .testimonials {
        background: ${colors.offWhite};
    }

    /* ------------------------------------------- */
    /* ----- Section Get Started ----- */
    /* ------------------------------------------- */

    .get-started {

        h3 {
            font-weight: 400;
        }

        &__prefix {
            display: flex;
            margin-bottom: 12rem;
            box-shadow: ${shadows.light};
            border: ${borders.light};


            &-image {
                height: 20rem;

                &-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem 0;
                    width: 65%;
                    background: ${colors.offWhite};
                }

            }

            &-text {
                margin: 0;
                font-size: 2.1rem;

                &-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 35%;
                }

                span {
                    color: ${colors.link};
                    font-weight: 600;
                }
            }
        }

        &__projects {
            display: flex;
            justify-content: space-between;


            & > .project {
                width: 18%;
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Open Source ----- */
    /* ------------------------------------------- */

    .open-source {
        background: ${colors.offWhite};

        &__content {
            display: flex;
            align-items: center;
        }

        &__text {
            padding: 8rem 2rem;
            background: ${colors.white};
            box-shadow: ${shadows.light};
            transform: translateY(-1rem);
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Trusted By ----- */
    /* ------------------------------------------- */

    .trusted {

        &__logos {
            display: flex;
            justify-content: space-between;
        }

        &__logo {
            height: 8rem;
            width: 16rem;
        }
    }

`

const IndexPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/'>
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
                        <a href="#get-started" className="btn btn--normal btn--cta">Start for Free</a>
                        <Link to="/self-hosted/" className="btn btn--normal">Host Yourself</Link>
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
                        <p className="intro__text">Every day <span>developers waste millions of hours</span> waiting for builds to finish.</p>
                    </div>
                    <div className="intro__box">
                        <img className="intro__icon" alt="Arrow on Wooden Target" src={ArrowOnTarget} />
                        <p className="intro__text"><span>Gitpod eliminates this friction</span> by providing prebuilt, ready-to-code dev environments with just one click.</p>
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
                            <p>Read more about <a href="#">Continuous Dev Environments.</a></p>
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
                            <p>It includes comprehensive <strong>Linux terminals</strong>, you can install any <strong>VS Code extensions</strong> and it's all based on <strong>Theia</strong>, the vendor neutral and highly extensible VS Code alternative.</p>
                            <p>Read more about <a href="#">Full Dev Environments.</a></p>
                        </div>
                    </div>

                    <div className="why-gitpod__box">
                        <div className="why-gitpod__text">
                            <h3>Integration with Your Tool Chain</h3>
                            <p>Gitpod let’s you stay in the flow by blending seamlessly into your existing tools chain.</p>
                            <p>For instance, it integrates with git based environments like GitHub and GitLab, with external clusters like Kubernetes and continue integration tools like Jenkins, Circle CI and Travis.</p>
                            <p>Read more about <a href="#">Integration.</a></p>
                        </div>
                        <div className="why-gitpod__img-container">
                            <img alt="Automated Setup" src={AutomatedSetup} className="why-gitpod__img"/>
                        </div>
                    </div>

                </div>
            </section>

            {/* ----- Section Testimonials ----- */}

            <section className="testimonials">
                <div className="row">
                    <h2>Don’t just Take Our Word for It</h2>
                </div>
            </section>

            {/* ----- Section Getting Started ----- */}

            <section className="get-started row" id="get-started">
                <h2>Get Started</h2>

                <div className="get-started__prefix">
                    <div className="get-started__prefix-text-container">
                        <h3 className="get-started__prefix-text">Prefix any GitHub or GitLab<br aria-hidden={true} />URL with <span>gitpod.io/#</span></h3>
                    </div>
                    <div className="get-started__prefix-image-container">
                        <img
                            alt="Prefix any GitHub or GitLab URL with gitpod.io/#"
                            src={PrefixImage}
                            className="get-started__prefix-image"
                        />
                    </div>
                </div>

                <h3>Or Select a Project</h3>

                <div className="get-started__projects">
                    {
                        projects.map(
                            (project, i) =>
                                <Project
                                    key={i}
                                    image={<img alt={project.alt} src={project.image}/>}
                                    title={project.title}
                                    href={project.href}
                                />
                        )
                    }
                </div>

            </section>

            {/* ----- Section Open Source ----- */}

            <section className="open-source">
                <div className="row">
                    <h2>Free for Open-Source</h2>
                    <div className="open-source__content">
                            <img alt="Ant Design Workspace" src={AntDesignWorkspace} />
                            <div className="open-source__text">
                                <h3>Giving Back to<br/>Open-Source!</h3>
                                <p>Gitpod is built on open-source and wouldn’t exist without it.</p>
                                <p>Did you know that you can see all contributor-friendly open-source projects at one glance?</p>
                                <p>Find your next project on <a href="https://contribute.dev" target="_blank">contribute.dev!</a></p>
                            </div>
                    </div>
                </div>
            </section>

            {/* ----- Section Trusted By ----- */}

            <section className="trusted row">
                <h2>Trusted by</h2>
                <div className="trusted__logos">
                    <img alt="Aplitools Image" src={AppliToolsLogo} className="trusted__logo" />
                    <img alt="4 Geeks Academy" src={FourGeeksAcademyLogo} className="trusted__logo" />
                    <img alt="Aplitools Image" src={AppliToolsLogo} className="trusted__logo" />
                    <img alt="Code Institute" src={CodeInstituteLogo} className="trusted__logo" />
                    <img alt="4 Geeks Academy" src={FourGeeksAcademyLogo} className="trusted__logo" />
                    <img alt="Code Institute" src={CodeInstituteLogo} className="trusted__logo" />
                </div>
            </section>

            {/* ----- Section Explore Gitpod ----- */}

            <Details
                title="Explore Gitpod"
                text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                anchors={[{href: '/blog', text: 'See Blog'}, {href: '/features', text: 'See Features'}]}
            />

        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage
