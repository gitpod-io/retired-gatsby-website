import React from 'react'

import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { colors, sizes, borders } from '../styles/variables'
import Cloud from '../resources/cloud.png'
import { Link } from 'gatsby'
import Kubernetes from '../resources/kubernetes.svg'
import Details from '../components/Details'
import Banner from '../components/Banner'
import ActionCard from '../components/ActionCard'

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
                margin 5rem 0 0;
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

const SelfHostedPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/self-hosted/' title="Self-Hosted">
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
                    linkPath="/self-hosted/#install"
                    linkText="View Install Instructions"
                    img={<img alt="Cloud" src={Cloud}/>}
                    children={<p>1 Month for <span>Free.</span></p>}
                />
            </div>

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
                        <p className="install__more-details">See <a href="/docs/self-hosted/latest/install/11_install_on_gcp_script">Install on GKE</a></p>
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
                anchors={[{href: '/contact/', text: 'Contact'}]}
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
