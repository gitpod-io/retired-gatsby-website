import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import PricingBox from '../components/PricingBox'
import Bg from '../components/Bg'
import PricingBg from '../resources/pricing-bg.png'
import { Link } from 'gatsby'
import { sizes } from '../styles/variables'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'

export function isEurope() {
    const offset = new Date().getTimezoneOffset();
    return  offset <= 0 && offset >= -180;
}

import LightBulb from '../resources/light-bulb.svg'
import Rocket from '../resources/rocket.png'
import MagicCap from '../resources/magic-cap.svg'
import Earth from '../resources/earth.svg'
import IconOpenSource from '../resources/icon-open-source.svg'
import { PricingBoxProps } from '../components/PricingBox'
import PopOver from '../components/PopOver'

const plans: PricingBoxProps[] = [
    {
        title: 'Open-Source',
        img: <object role="presentation" tabIndex={-1} data={IconOpenSource}/>,
        price: 'Free',
        duration: '50 hours / month',
        features: ['Public Repos']
    },
    {
        title: 'Personal',
        img: <object role="presentation" tabIndex={-1} data={LightBulb}/>,
        price: <>{isEurope() ? '€8' : '$9'}<span> / month</span></>,
        duration: '100 hours / month',
        features: ['Private & Public Repos', <span className="span">4 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>, <span className="span">30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes."/></span>],
        btnText: 'Free 30-Day Trial'
    },
    {
        title: 'Professional',
        img: <img alt='Rocket' src={Rocket}/>,
        price: <>{isEurope() ? '€23' : '$25'}<span> / month</span></>,
        duration: 'unlimited hours',
        features: ['Private & Public Repos', <span className="span">8 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>, <span className="span">Team Manageable&nbsp;<PopOver description="Setup Gitpod for an entire team with a single invoice and credit card."/></span>, <span className="span">30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes."/></span>],
        transform: 'scale(1.05)',
        banner: 'Recommended',
        btnText: 'Free 30-Day Trial',
        btnBackground: true
    },
    {
        title: 'Unlimited',
        img: <object role="presentation" tabIndex={-1}  data={MagicCap}/>,
        price: <>{isEurope() ? '€35' : '$39'}<span> / month</span></>,
        duration: 'unlimited hours',
        features: ['Private & Public Repos', <span className="span">16 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>, <span className="span">Team Manageable&nbsp;<PopOver description="Setup Gitpod for an entire team with a single invoice and credit card."/></span>,  <span className="span">1h Timeout <PopOver description="Workspaces without user activity are stopped after 1 hour."/></span>, <span className="span">3h Timeout Boost <PopOver description="You can manually boost the timeout to 3 hours within a running workspace."/></span>],
        btnText: 'Free 30-Day Trial'
    },
    {
        title: 'Enterprise',
        img: <img alt='Earth' src={Earth}/>,
        feature: <span style={{fontWeight: 600}}>Unleash Developer Productivity</span>,
        background: true,
        btnText: 'Learn More',
        link: '/enterprise/#enterprise'
    }
]


const StyledPricingPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Pricing ----- */
    /* ------------------------------------------- */

    h1 {
        margin-bottom: 6rem;
    }

    .pricing {
        padding-bottom: 5rem;

        &__boxes {
            display: flex;

            @media(max-width: ${sizes.breakpoints.lg}) {
                justify-content: space-between;
                flex-wrap: wrap;
            }

            @media(max-width: 1096px) {
                justify-content: space-evenly;
            }

            @media(max-width: 650px) {
                flex-direction: column;
                align-items: center;
            }

        }
    }

    /* ------------------------------------------- */
    /* ----- Section Links ----- */
    /* ------------------------------------------- */

    .links {
        display: flex;
        justify-content: space-between;
        padding-bottom: 1rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
        }

        & > div {

            &:not(:last-of-type) {
                margin-bottom: 4rem;
            }

            h2 {
                margin-bottom: 3rem;
            }

            h2 + p {
                margin: 0;
            }

            p:last-of-type {
                margin-bottom: 3rem;
            }

            .btn {
                margin-bottom: 2rem;
                margin-right: 2rem;
            }

            @media(min-width: ${sizes.breakpoints.md}) {
                &:first-of-type {
                    width: 45%;
                }

                &:last-of-type {
                    width: 40%;
                }
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Business ----- */
    /* ------------------------------------------- */

    .business {
        text-align: center;

        h2 {
            &::before {
                content: '';
                display: block;
                height: 1rem;
                width: 12rem;
                margin: 0 auto 3rem;
                background: url("https://www.gitpod.io/galaxy.jpg");
                background-size: cover;
                background-position: bottom right;
                border-radius: 10px;
            }
        }

        .btn {
            margin: 1rem;
            transform: translateY(-4rem);
        }
    }

`

const PricingPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/pricing/' title="Pricing" description="Gitpod is free for Open Source, and offers productive features for you, your team and your business at reasonable prices.">
        <StyledPricingPage>
            <div className="grey-container">
                <div className="row">

                    {/* ----- Section Pricing ----- */}

                    <section className="pricing">
                        <h3 className="sub">Pricing</h3>
                        <h1>Choose Your Plan</h1>
                        <div className="pricing__boxes">
                            { plans.map(
                                (plan, i) => <PricingBox
                                    key={i}
                                    title={plan.title}
                                    img={plan.img}
                                    price={plan.price}
                                    duration={plan.duration}
                                    feature={plan.feature}
                                    features={plan.features}
                                    transform={plan.transform}
                                    btnText={plan.btnText}
                                    btnBackground={plan.btnBackground}
                                    link={plan.link}
                                    background={plan.background}
                                    banner={plan.banner}
                                    backgroundColor={plan.backgroundColor}
                                />
                            )}
                        </div>
                    </section>

                    {/* ----- Section Links ----- */}

                    <section className="links">
                        <div>
                            <h2>Professional Open Source</h2>
                            <p>
                                Gitpod is free for up to 50 hours/month on any public repository. 
                            </p>
                            <p>
                                If you're a professional open-source developer and need more hours, you can apply to our free <a href="/docs/professional-open-source/" target="_blank"><strong>Professional Open Source</strong></a> plan.
                            </p>
                            <Link to="/contact/" state={{ subject: "Applying for Professional Open Source" }} className="btn">Apply Now</Link>
                        </div>
                        <div>
                            <h2>For Students</h2>
                            <p>
                                Get the <strong><a href="https://gitpod.io/subscription/" target="_blank">Student Unlimited</a> plan for {isEurope() ? '€8' : '$9'}</strong> per month.
                            </p>
                            <p>
                                Make sure your student email is set as your primary email on GitHub/GitLab. Please let us know if your educational institution is not correctly recognized.
                            </p> 
                            <p>
                                <Link to="/contact/" state={{ subject: "Student Unlimited: Get Verified as a Student"}} className="btn">Get Verified as Student</Link>
                             </p>
                            
                        </div>
                    </section>
                </div>
            </div>

            <div className="row">

                <section className="business">
                    <h2>Business Solutions</h2>
                    <p>Here you can find further information for your business solution including its pricing.</p>
                    <Link to="/education/" className="btn">Education</Link>
                    <Link to="/recruiting/" className="btn">Recruiting</Link>
                    <Link to="/vendor/" className="btn">Vendor</Link>
                </section>

                {/* ----- BG ----- */}

                <Bg url={PricingBg}/>

                <ActionCard
                    title='Any Questions?'
                    text='We’re happy to answer them. Please get in touch.'
                    anchors={[{href: '/contact/', subject: "I have a question regarding pricing", text: 'Contact'}]}
                />

                <Details
                    title="Explore Gitpod"
                    text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                    anchors={[{href: '/features/', text: 'See Features'}, {href: '/blog/', text: 'See Blog'}]}
                />

            </div>
        </StyledPricingPage>
    </IndexLayout>
)

export default PricingPage
