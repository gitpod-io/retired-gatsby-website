import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes, shadows } from '../../styles/variables'
import ToolIntegration from '../../resources/tool-integration.svg'
import FullDevEnvironments from '../../resources/full-dev-environments.svg'
import ReadyToCode from '../ReadyToCode'

const Styled = styled.div`
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
                background: url("https://www.gitpod.io/galaxy.jpg");
                background-size: cover;
                background-position: top;
            }
        }
    }
`

const WhyGitpod = () => (
    <Styled>
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
                            <p>Gitpod is not just another online playground, but a full-featured dev environment, just like your local IDE.</p>
                            <p>It includes fully-functional <strong>Linux terminals</strong>, you can install any <strong>VS Code extensions</strong> and provides all the other good features provided by <strong>Theia</strong>, the vendor neutral and highly extensible VS Code alternative, we have developed.</p>
                            <p>Read more about <a href="/docs/ide/">Theia</a>.</p>
                        </div>
                        <div className="why-gitpod__img-container">
                            <object tabIndex={-1}
                                aria-label="Theia - VS Code based online IDE"
                                data={FullDevEnvironments}
                                className="why-gitpod__img why-gitpod__img--full-dev-env" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </Styled>
)

export default WhyGitpod
