import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import PricingBox from '../components/PricingBox'
import Bg from '../components/Bg'
import PricingBg from '../resources/pricing-bg.png'
import { Link } from 'gatsby'
import { sizes, shadows, colors } from '../styles/variables'
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
import { PricingBoxProps } from '../components/PricingBox'
import PopOver from '../components/PopOver'

const plans: PricingBoxProps[] = [
    {
        title: 'Personal',
        img: <object tabIndex={-1} data={LightBulb}/>,
        price: <>{isEurope() ? '€8' : '$9'}<span> / month</span></>,
        duration: '100 hours / month',
        features: ['Private & Public Repos', <span className="span">4 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>, <span className="span">30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes."/></span>],
    },
    {
        title: 'Professional',
        img: <img alt='Rocket' src={Rocket}/>,
        price: <>{isEurope() ? '€23' : '$25'}<span> / month</span></>,
        duration: 'unlimited hours',
        features: ['Private & Public Repos', <span className="span">8 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>, <span className="span">Team Manageable&nbsp;<PopOver description="Setup Gitpod for an entire team with a single invoice and credit card."/></span>, <span className="span">30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes."/></span>],
        transform: 'scale(1.05)',
    },
    {
        title: 'Unlimited',
        img: <object tabIndex={-1}  data={MagicCap}/>,
        price: <>{isEurope() ? '€35' : '$39'}<span> / month</span></>,
        duration: 'unlimited hours',
        features: ['Private & Public Repos', <span className="span">16 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>, <span className="span">Team Manageable&nbsp;<PopOver description="Setup Gitpod for an entire team with a single invoice and credit card."/></span>,  <span className="span">60min Timeout <PopOver description="Workspaces without user activity are stopped after 60 minutes."/></span>, <span className="span">3h Timeout Boost <PopOver description="You can manually boost the timeout to 3h within a running workspace."/></span>],
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
        margin-bottom: 3rem;
    }

    .pricing {
        padding-bottom: 5rem;

        &__boxes {
            display: flex;

            @media(max-width: ${sizes.breakpoints.lg}) {
                justify-content: space-between;
                flex-wrap: wrap;
            }

            @media(max-width: 650px) {
                flex-direction: column;
                align-items: center;
            }

            & > * {
                @media(min-width: 650px) {
                    &:last-of-type {
                        margin-left: auto;
                    }
                }
            }
        }

        &__tagline {
            transform: translateY(-3rem);
            box-shadow: ${shadows.light};
            text-align: center;
            color: ${colors.text};
            padding: 4rem 0 3rem;
            width: 72%;
            
            @media(max-width: ${sizes.breakpoints.lg}) {
                display: none;
            }

            h4 {
                font-weight: 600;
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
    <IndexLayout canonical='/pricing/' title="Pricing">
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
                                    link={plan.link}
                                    background={plan.background}
                                />
                            )}
                        </div>
                        <div className="pricing__tagline">
                            <h4>Gitpod Is Free for Open Source.</h4>
                            <p>Just prefix any public GitHub or GitLab URL with <span className="text-with-galaxy-bg">gitpod.io/#</span></p>
                        </div>
                    </section>

                    {/* ----- Section Links ----- */}

                    <section className="links">
                        <div>
                            <h2>Open Source</h2>
                            <p>
                                Gitpod is free for up to 50 hours/month on any public repository. Just prefix any public GitHub or GitLab URL with <span className="text-with-galaxy-bg">gitpod.io/#</span> and start coding.
                            </p>
                            <p>
                                If you're a professional open-source developer and think you need more, let us know, by applying for unlimited hours. Your GitHub / GitLab track record should clearly show your regular open-source contributions.
                            </p>
                            <a href="/contact/" className="btn">Apply Now</a>
                        </div>
                        <div>
                            <h2>For Students</h2>
                            <p>Students get the <strong>Unlimited plan for {isEurope() ? '€8' : '$9'}</strong> per month. Make sure your student email is set as your primary email on GitHub.</p>
                            <a href="/contact/" className="btn">Doesn't Work?</a>
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
                    anchors={[{href: '/contact', text: 'Contact'}]}
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
