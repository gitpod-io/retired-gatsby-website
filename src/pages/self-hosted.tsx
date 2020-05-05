import React from 'react'

import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { colors, sizes, borders } from '../styles/variables'
import Cloud from '../resources/cloud.svg'
import { Link } from 'gatsby'
import Kubernetes from '../resources/kubernetes.svg'
import Details from '../components/Details'
import Banner from '../components/Banner'
import ActionCard from '../components/ActionCard'
import { FeatureProps } from '../components/self-hosted/Feature'
import Features from '../components/self-hosted/Features'
import Control from '../resources/control.svg'
import Support from '../resources/support.svg'
import GithubGitlab from '../resources/github-gitlab.svg'
import Adminstration from '../resources/administration.svg'

const StyledSelfHostedPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Install ----- */
    /* ------------------------------------------- */

    .install {
        display: flex;
        justify-content: space-between;

        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
            align-items: center;
        }

        &__steps {
            list-style: none;

            & + p {
                margin-top: 6rem;

                @media(max-width: ${sizes.breakpoints.md}) {
                    margin: 3rem 0 3rem;
                }
            }
        }

        &__step {
            position: relative;
            margin-bottom: 5rem;
            transform: translateX(5rem);

            @media(max-width: ${sizes.breakpoints.md}) {
                margin-bottom: 3rem;
                transform: translateX(4rem);
            }

            span {
                position: absolute;
                top: -2.5rem;
                left: -5rem;
                font-size: 4.5rem;
                font-weight: 600;
                color: ${colors.textDark};

                @media(max-width: ${sizes.breakpoints.md}) {
                    top: -1.5rem;
                    left: -4rem;
                    font-size: 3.5rem;
                }

                @media(max-width: 523px) {
                    font-size: 2.5rem;
                    top: -1rem;
                    left: -3rem;
                }
            }

            a {
                margin: 0 1rem;
            }
        }

        &__kubernetes {
            max-width: 32rem;
            padding: 3rem 2rem;
            border: ${borders.light1};

            @media(max-width: ${sizes.breakpoints.lg}) {
                margin: 5rem 0 0;
            }

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

`

const Terminal = styled.code`
    display: block;
    margin-top: 2rem;
    padding: 1rem;
    color: ${colors.white};
    font-family: monospace;
    font-size: 1.8rem;
    background-color: ${colors.text};
    border-radius: 5px;

    @media(max-width: ${sizes.breakpoints.md}) {
        font-size: 1.5rem;
        padding: .7rem;
    }

    @media(max-width: 530px) {
        transform: translateX(-4rem);
    }
`;
const StepP = styled.p`
    font-size: 1.8rem;

    @media(max-width: ${sizes.breakpoints.md}) {
        font-size: 1.6rem;
    }

    @media(min-width: ${sizes.breakpoints.sm}) {
        br {
            display: none;
        }
    }
`;

const features: FeatureProps[] = [
    {
        title: 'Full Data Control',
        text: 'All data remains on your infrastructure, as Gitpod will run on air-gapped networks, disconnected from the internet.',
        img: Control
    },
    {
        title: 'GitLab & GitHub Integration',
        text: 'Highly compatibility with Git Hosting solutions like GitHub Enterprise, GitLab Community Edition or Enterprise Edition. BitBucket integration is coming soon.',
        img: GithubGitlab
    },
    {
        title: 'Professional Support',
        text: 'Schedule a call with our dedicated engineers whenever you need help.',
        img: Support
    },
    {
        title: 'Easy Administration',
        text: 'No need for additional User Management. Simply use OAuth from Git Hosting and enjoy its the privileges.',
        img: Adminstration
    }
]

const SelfHostedPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/self-hosted/' title="Self-Hosted">
        <StyledSelfHostedPage>

            <div className="grey-container">

                {/* ----- Banner ----- */}

                <Banner
                    subtitle="Self-hosted Gitpod"
                    title={<h1>
                            Keep Your Data on Your Network and
                            <br />
                            Host it on <strong>Your Own Infrastructure.</strong>
                    </h1>}
                    linkPath="/self-hosted/#install"
                    linkText="Install Now"
                    img={<object role="presentation" tabIndex={-1} data={Cloud}/>}
                    children={<span style={{fontWeight: 600}}>And Start Your 30-day Free Trial.</span>}
                />
            </div>
            
            {/* ----- Section Features ----- */}

            <Features features={features} />

            {/* ----- Section Install ----- */}

            <div className="row" id="install">
                <section className="install">
                    <div className="install__steps-container">
                        <h2>Install Self-Hosted Gitpod</h2>
                        <ol className="install__steps">
                            <li className="install__step">
                                <span>1.</span>
                                <StepP>In your terminal run:</StepP>
                                <Terminal>
                                    git clone <a href="https://github.com/gitpod-io/self-hosted" target="_blank">https://github.com/gitpod-io/self-hosted</a>
                                </Terminal>
                            </li>
                            <li className="install__step">
                                <span>2.</span><StepP>Adjust the configuration from <br />the repository to your needs.</StepP>
                            </li>
                            <li className="install__step">
                                <span>3.</span><StepP>Run</StepP>
                                <Terminal>
                                    helm install -f ... gitpod
                                </Terminal>
                            </li>
                        </ol>
                        <StepP>Enjoy!</StepP>
                        <StepP>For more details see the <Link to="/docs/self-hosted/latest/self-hosted/">Installation Instructions.</Link></StepP>
                    </div>
                    <div className="install__kubernetes">
                        <h3>Runs on Kubernetes</h3>
                        <div><img alt="Kubernetes Logo" src={Kubernetes} /></div>
                        <p>Gitpod can run on vanilla Kubernetes and there is a setup opimized for Google Kubernetes Engine(GKE).</p>
                        <p>Optimized support for Amazon Elastic Kuberenetes Service(EKS), Azure Kubernetes Service(AKS), and Openshift is coming soon.</p>
                        <p className="install__more-details">See <a href="/docs/self-hosted/latest/install/install-on-gcp-script">Install on GKE</a></p>
                    </div>
                </section>

            </div>

            {/* ----- Section Customizations ----- */}

            <ActionCard
                title="Need Any Customizations?"
                text={
                    <React.Fragment>
                        <p>We’re happy to adjust Gitpod to your needs.<br/>Please get in touch for details.</p>
                    </React.Fragment>}
                anchors={[{href: '/contact/', subject: 'I have a question regarding Self-Hosted Gitpod', text: 'Contact'}]}
            />

            {/* ----- Section More About Self Hosting ----- */}

            <Details
                title="More About Self-Hosting"
                text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                anchors={[{href: '/enterprise/#enterprise', text: 'Pricing'}, {href: '/docs/self-hosted/latest/self-hosted/', text: 'Documentation'}]}
            />

        </StyledSelfHostedPage>
    </IndexLayout>
)

export default SelfHostedPage
