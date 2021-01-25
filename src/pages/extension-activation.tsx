import React from 'react'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import ExtensionScreenshot from '../resources/extension-screenshot.png'
import { colors, borders } from '../styles/variables'
import GitLab from '../resources/gitlab.svg'
import GitHub from '../resources/octicons-mark-github.svg'
import Bitbucket from '../resources/bitbucket.svg'
import CodeTogether from '../resources/code-together.svg'
import SkipTheWaiting from '../resources/control.svg'
import Phone from '../resources/icon-phone.svg'
import { Link } from 'gatsby'
import { getBrowser } from '../utils/helpers'

const StyledActivationPage = styled.div`
    .intro {
        text-align: center;
        padding: 5rem 0 24rem;

        &__title {
            max-width: 400px;
            margin: 0 auto 2rem;
        }
    }

    .screenshot {
        display: block;
        margin: -20rem auto 0;
        max-width: 1000px;
        width: 100%;
    }

    .get-started {
        text-align: center;

        &__steps {
            max-width: 410px;
            margin: 0 auto;
            font-size: 1.9rem;
            text-align: left;
        }

        &__step {
            display: flex;
            align-items: center;

            &:not(:last-child) {
                margin-bottom: 5rem;
            }
        }

        &__number {
            display: flex;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            height: 5rem;
            width: 5rem;
            color: ${colors.white};
            font-size: 2.5rem;
            font-weight: 600;
            border-radius: 50%;
            background: ${colors.lightGrey};
            margin-right: 2rem;
        }

        .btn-wrapper {
            margin-top: 10rem;
            justify-content: center;
        }

        .btn--big {
            display: inline-flex;
            align-items: center;
            padding-left: 1.5rem;

            img {
                width: 4rem;
                margin-right: 2.5rem;
            }
        }
    }

    .feature {
        min-width: 320px;
        margin: 4rem 2rem;

        &-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            text-align: center;

            & > * {
                flex: 0 0 26%;
            }
        }

        &__img {
            height: 7.5rem;
            width: 7.5rem;
        }

        &__title {
            margin: 2rem 0;
        }
    }

    .more {
        text-align: center;

        &__box {
            max-width: 500px;
            margin: 0 auto;
            padding: 5rem 0;
            border: ${borders.light3};
        }
    }
`

const ActivationPage = () => (
    <IndexLayout isAFlowPage={true}>
        <StyledActivationPage>
            <div className="row pattern">
                <div className="intro">
                    <h1 className="intro__title"><strong>Gitpod for {typeof window !== 'undefined' ? getBrowser(window.navigator.userAgent) : null} is Now Active</strong></h1>
                    <p>Now you can easily spin up dev environments with a single click.</p>
                </div>
            </div>
            
            <div className="row">
                <img className="screenshot" src={ExtensionScreenshot} alt="Gitpod Browser Extension" />
            </div>

            <section className="get-started">
                <div className="row">
                    <h2><strong>Get started</strong></h2>
                    <ul className="get-started__steps">
                        <li className="get-started__step">
                            <span className="get-started__number">1.</span>
                            Go to one of your projects at GitLab, GitHub or Bitbucket.</li>
                        <li className="get-started__step">
                            <span className="get-started__number">2.</span>
                            Click on the Gitpod button and start a dev environment for your project.</li>
                    </ul>
                    <div className="get-started__links btn-wrapper">
                        <a
                            className="btn btn--big"
                            href="https://gitlab.com"
                            target="_blank"
                        >
                            <img src={GitLab} alt="GitLab" />
                            Go to GitLab
                        </a>
                        <a
                            className="btn btn--big"
                            href="https://github.com"
                            target="_blank"
                        >
                            <img src={GitHub} alt="GitHub" />
                            Go to GitHub
                        </a>
                        <a
                            className="btn btn--big"
                            href="https://bitbucket.org/" target="_blank"
                        >
                            <img src={Bitbucket} alt="Bitbucket" />
                            Go to Bitbucket
                        </a>
                    </div>
                </div>
            </section>

            <section className="features pattern-bg">
                <div className="row">
                    <div className="feature-container">
                        <div className="feature">
                        <img className="feature__img" src={SkipTheWaiting} alt="Skip the Waiting" />
                        <h3 className="feature__title">Skip the Waiting</h3>
                        <p>Gitpod continuously builds your git branches like a CI server. This means no more waiting for dependencies to be downloaded and builds to finish.</p>
                    </div>
                    <div className="feature">
                        <img className="feature__img" src={CodeTogether} alt="Code Together" />
                        <h3 className="feature__title">Code Together</h3>
                        <p>Do code reviews within Gitpod, work together in one workspace in real-time and share reproducible workspaces with your team.</p>
                    </div>
                    <div className="feature">
                        <img className="feature__img" src={Phone} alt="Work Remotely" />
                        <h3 className="feature__title">Work Remotely</h3>
                        <p>You no longer need an over-powered laptop, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser.</p>
                    </div>
                    </div>
                </div>
            </section>

            <section className="more">
                <div className="row">
                    <div className="more__box">
                        <h3>Learn More About Gitpod</h3>
                        <Link className="btn btn--cta" to="/docs">See Docs</Link>
                    </div>
                </div>
            </section>
        </StyledActivationPage>
    </IndexLayout>
)

export default ActivationPage
