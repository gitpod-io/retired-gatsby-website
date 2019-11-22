import React from 'react'

import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { colors, sizes, shadows, borders } from '../styles/variables'
import Cloud from '../resources/cloud.png'
import { Link } from 'gatsby'
import Kubernetes from '../resources/kubernetes.svg'
import Details from '../components/Details'

const StyledSelfHostedPage = styled.div`

    .grey-container {
        background: ${colors.offWhite};
    }

    /* ------------------------------------------- */
    /* ----- Banner ----- */
    /* ------------------------------------------- */

    .banner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14rem 0 10rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column-reverse;
            padding: 5rem 0;
        }

        h3 {
            font-weight: 400;
            color: ${colors.textLight};
        }

        p {
            display: inline-block;

            span {
                color: ${colors.link};
                font-weight: 600;
            }
        }

        .btn {
            margin: 6rem 2rem 0 0;

            @media(max-width: ${sizes.breakpoints.sm}) {
                margin: 3rem 0 2rem;
            }
        }

        &__img {
            display: block;
            height: 35rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                height: 20rem;
                margin-bottom: 5rem;
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Features ----- */
    /* ------------------------------------------- */

    .feature {
        padding: 3rem;
        background: ${colors.white};
        box-shadow: ${shadows.light};
        max-width: 38rem;

        @media(min-width: ${sizes.breakpoints.md}) {
            width: 32%;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            &:not(:last-child) {
                margin-bottom: 5rem;
            }
        }

        &-container {
            display: flex;

            @media(min-width: ${sizes.breakpoints.md}) {
                justify-content: space-between;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;
                align-items: center;
            }
        }

        &__title {
            text-align: center;
        }

        &__read-more {
            margin-top: 6rem;
        }

    }

    /* ------------------------------------------- */
    /* ----- Section Install ----- */
    /* ------------------------------------------- */

    .install {
        display: flex;
        justify-content: space-between;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
            align-items: center;
        }

        &__steps {
            list-style: none;

            & + p {
                margin-top: 6rem;

                @media(max-width: ${sizes.breakpoints.md}) {
                    margin-bottom: 6rem;
                }
            }
        }

        &__step {
            position: relative;
            margin-bottom: 5rem;
            transform: translateX(5rem);

            span {
                position: absolute;
                top: -2.5rem;
                left: -5rem;
                font-size: 4.5rem;
                font-weight: 600;
                color: ${colors.textDark};
            }

            a {
                margin: 0 1rem;
            }
        }

        &__kubernetes {
            max-width: 32rem;
            padding: 3rem 2rem;
            border: ${borders.light1};

            h3, div {
                text-align: center;
            }

            div {
                margin: 4rem 0 2rem;
            }

            img {
                height: 6rem;
            }
        }

        &__more-details {
                margin-top: 5rem;
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Install ----- */
    /* ------------------------------------------- */

    .customizations {
        display: block;
        max-width: 60rem;
        margin: 10rem auto;
        padding: 5rem;
        text-align: center;
        background: ${colors.offWhite};
        box-shadow: ${shadows.light};

        p {
            margin: -3rem 0 4rem;
        }
    }
`

const SelfHostedPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/self-hosted/'>
        <StyledSelfHostedPage>

            <div className="grey-container">

                {/* ----- Banner ----- */}

                <div className="row">
                    <header role="banner" className="banner">
                        <div className="banner__text">
                            <h3>Self-hosted Gitpod</h3>
                            <h1>
                                Make Gitpod Available In-House,
                                <br />
                                Hosted on <strong>Your Own Infrastructure.</strong>
                            </h1>
                            <Link to="#" className="btn btn--cta">View Install Instructions</Link>
                            <p>1 Month for <span>Free.</span></p>
                        </div>
                        <img alt="Cloud" src={Cloud} className="banner__img"/>
                    </header>
                </div>

                {/* ----- Section Features ----- */}

                <div className="row">
                    <section className="feature-container">
                        <div className="feature">
                            <h3 className="feature__title">Keep Data on your Network</h3>
                            <p>All data remains on your infrastructure, as Gitpod will run on air-gapped networks, disconnected from the internet.</p>
                            <p className="feature__read-more">Read more about <Link to="#">Data Control.</Link></p>
                        </div>
                        <div className="feature">
                            <h3 className="feature__title">Full Integration</h3>
                            <p>Gitpod integrates smoothly with with self-hosted services like npm registry, docker registry or maven registry.</p>
                            <p>It also highly compatible with Git Hosting solution like GitHub Enterprise, GitLab Community Edition or Enterprise Edition. BitBucket will be available soon.</p>
                            <p className="feature__read-more">Read more about <Link to="#">Full Integration.</Link></p>
                        </div>
                        <div className="feature">
                            <h3 className="feature__title">Easy Administration</h3>
                            <p>With Gitpod no additional User Management is needed. You can just use OAuth from Git Hosting and enjoy its the privileges.</p>
                            <p>No need to waste time on administrations.</p>
                        </div>
                    </section>
                </div>
            </div>

            {/* ----- Section Install ----- */}

            <div className="row">
                <section className="install">
                    <div className="install__steps-container">
                        <h2>Install Self-Hosted Gitpod</h2>
                        <ol className="install__steps">
                            <li className="install__step"><span>1. </span>Git clone
                                <a href="https://github.com/gitpod-io/self-hosted" target="_blank">https://github.com/gitpod-io/self-hosted</a>
                            <br />in your terminal.</li>
                            <li className="install__step"><span>2.</span>Follow readme.</li>
                            <li className="install__step"><span>3.</span>Enjoy!</li>
                        </ol>
                        <p>For more details see <Link to="/">Installing Instructions.</Link></p>
                    </div>
                    <div className="install__kubernetes">
                        <h3>Runs on Kubernetes</h3>
                        <div><img alt="Kubernetes Logo" src={Kubernetes} /></div>
                        <p>Gitpod is integeratable with Google Kubernetes Engine(GKE), Amazon Elastic Kuberenetes Service(EKS)*, Azure Kubernetes Service(AKS)*, Openshift *, Vanilla Kuberenetes *.</p>
                        <p>And is easy to install via Helm Chart from Helm Hub</p>
                        <p className="install__more-details">For more details see <a href="">Kubernetes Cluster.</a></p>
                    </div>
                </section>

            </div>

            {/* ----- Section Customizations ----- */}

            <section className="customizations">
                <h2>Do You Need Customizations?</h2>
                <p>We’re happy to adjust Gitpod to your needs. Please, get in touch for details.</p>
                <Link to="/contact" className="btn btn--cta btn--normal">Contact</Link>
            </section>

            {/* ----- Section More About Self Hosting ----- */}

            <Details
                title="More About Self-Hosting"
                text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                anchors={[{href: '/pricing', text: 'Pricing'}, {href: '/docs', text: 'Documentation'}]}
            />

        </StyledSelfHostedPage>
    </IndexLayout>
)

export default SelfHostedPage
