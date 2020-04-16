import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../../styles/variables'
import ToolIntegration from '../../resources/tool-integration.svg'
import FullDevEnvironments from '../../resources/full-dev-environments.svg'
import ReadyToCode from '../ReadyToCode'

const Styled = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Why Gitpod? ----- */
    /* ------------------------------------------- */

    h2 {
        margin-bottom: 0;
    }

    .why-gitpod {

        padding-bottom: 5rem;

        @media(max-width: ${sizes.breakpoints.sm}) {
            text-align: center;
        }

        &__box {
            display: flex;

            @media(max-width: 880px) {
                flex-direction: column;
            }

            &:not(:last-child) {
                margin-bottom: 8rem;
            }

            &-container {
                display: flex;
                flex-direction: column;
                transform: translateY(-5rem);

                & > div {
                    padding: 12rem 0;

                    @media(max-width: ${sizes.breakpoints.md}) {
                        padding: 6rem 0;
                    }

                    &:nth-child(2) {
                        background: ${colors.offWhite};
                    }
                }
            }

            &--1 {
                @media(min-width: 880px) {
                    height: 400px;

                    object {
                        transform: translateY(-5.8rem);
                    }
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

                p:last-of-type {
                    margin-bottom: 3rem;
                }
            }

        }

        &__text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 0rem 0 6rem;
            min-width: 28rem;

            @media(min-width:  881px) {
                width: 45%;
                border-left: 4px solid ${colors.offWhite3};
            }

            @media(max-width: 1150px) {
                padding: 0 4rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 0 2rem;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                padding: 0 1rem;
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

                @media(max-width: 880px) {
                    transform: translateY(-5rem);
                }

                @media(min-width: 880px) {
                    height: auto;
                }

                @media(max-width: 800px) {
                    transform: none;
                }
                
                @media(min-width: 800px) {
                    height: 440px;
                }

                @media(max-width: 700px) {
                    height: 500px;
                }

                @media(max-width: 560px) {
                    height: 33rem;
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

                @media(min-width: 881px) {
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
                background: url("https://www.gitpod.io/galaxy.jpg");
                background-size: cover;
                background-position: top;
            }
        }
    }
`

const WhyGitpod = () => (
    <Styled>
        <section className="why-gitpod">
            <div className="row">
                <h2>Why Gitpod?</h2>
            </div>

            <div className="why-gitpod__box-container">

                <div>
                    <ReadyToCode />
                </div>

                <div>
                    <div className="why-gitpod__box why-gitpod__box--3 row">
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
                </div>

                <div>
                    <div className="why-gitpod__box why-gitpod__box--2 row">
                        <div className="why-gitpod__img-container">
                            <object tabIndex={-1}
                                aria-label="Theia - VS Code based online IDE"
                                data={FullDevEnvironments}
                                className="why-gitpod__img why-gitpod__img--full-dev-env" />
                        </div>
                        <div className="why-gitpod__text">
                            <h3>Based on the Online IDE Theia </h3>
                            <p>Gitpod is not just another online playground, but a full-featured dev environment, just like your local IDE.</p>
                            <p>It includes fully-functional <strong>Linux terminals</strong>, you can install any <strong>VS Code extensions</strong> and provides all the other good features provided by <strong>Theia</strong>, the vendor neutral and highly extensible VS Code alternative, we have developed.</p>
                            <p>Read more about <a href="/docs/ide/">Theia</a>.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </Styled>
)

export default WhyGitpod
