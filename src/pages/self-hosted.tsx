import React from 'react'

import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { colors, sizes, shadows, borders } from '../styles/variables'
import Cloud from '../resources/cloud.png'
import { Link } from 'gatsby'
import Kubernetes from '../resources/kubernetes.svg'
import Details from '../components/Details'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Feature from '../components/Feature'

const StyledSelfHostedPage = styled.div`
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

                <Banner
                    subtitle="Self-hosted Gitpod"
                    title={<h1>
                            Make Gitpod Available In-House,
                            <br />
                            Hosted on <strong>Your Own Infrastructure.</strong>
                    </h1>}
                    linkPath="#"
                    linkText="View Install Instructions"
                    img={<img alt="Cloud" src={Cloud}/>}
                    children={<p>1 Month for <span>Free.</span></p>}
                />

                {/* ----- Section Features ----- */}

                <div className="row">
                    <Features>
                        <Feature
                            title="Keep Data on your Network"
                            paragraphs={['All data remains on your infrastructure, as Gitpod will run on air-gapped networks, disconnected from the internet.']}
                            more={<p className="read-more">Read more about <Link to="#">Data Control.</Link></p>}
                        />
                        <Feature
                            title="Full Integration"
                            paragraphs={['Gitpod integrates smoothly with with self-hosted services like npm registry, docker registry or maven registry.', 'It also highly compatible with Git Hosting solution like GitHub Enterprise, GitLab Community Edition or Enterprise Edition. BitBucket will be available soon.']}
                            more={<p className="read-more">Read more about <Link to="#">Full Integration.</Link></p>}
                        />
                        <Feature
                            title="Easy Administration"
                            paragraphs={['With Gitpod no additional User Management is needed. You can just use OAuth from Git Hosting and enjoy its the privileges.', 'No need to waste time on administrations.']}
                        />
                    </Features>
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
