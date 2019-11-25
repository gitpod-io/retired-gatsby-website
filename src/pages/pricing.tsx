import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import PricingBox from '../components/PricingBox'
import Bg from '../components/Bg'
import PricingBg from '../resources/pricing-bg.png'
import { plans } from '../utils/plans'
import { Link } from 'gatsby'
import { sizes } from '../styles/variables'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'


const StyledPricingPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Pricing ----- */
    /* ------------------------------------------- */

    .pricing {
        &__boxes {
            display: flex;

            @media(max-width: ${sizes.breakpoints.lg}) {
                justify-content: space-between;
                flex-wrap: wrap;
            }

            @media(max-width: 500px) {
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

            p:last-of-type {
                margin-bottom: 3rem;
            }

            .btn {
                margin-bottom: 2rem;
            }

            @media(min-width: ${sizes.breakpoints.md}) {
                width: 40%;
            }
        }
    }
`

const PricingPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/pricing/'>
        <StyledPricingPage>
            <div className="grey-container">
                <div className="row">

                    {/* ----- Section Pricing ----- */}

                    <section className="pricing">
                        <h3 className="sub">Pricing</h3>
                        <h2>Choose Your Plan</h2>
                        <div className="pricing__boxes">
                            { plans.map(
                                (plan, i) => <PricingBox
                                    key={i}
                                    title={plan.title}
                                    img={<img alt={plan.alt} src={plan.img}/>}
                                    price={plan.price}
                                    duration={plan.duration}
                                    feature={plan.feature}
                                    features={plan.features}
                                />
                            )}
                        </div>
                    </section>

                    {/* ----- Section Links ----- */}

                    <section className="links">
                        <div>
                            <h2>For Students</h2>
                            <p>Students get the unlimited subscription for $9.</p>
                            <p>Make sure your student email is set as your primary email on GitHub. And please let us know if your educational institution is not correctly recognized.</p>
                            <a href="#" className="btn">I’m a Student</a>
                        </div>
                        <div>
                            <h2>Business Solutions</h2>
                            <p>Here you can find further information for your business solution including its pricing.</p>
                            <Link to="/education" className="btn">Education</Link>
                            <Link to="/recruiting" className="btn">Recruiting</Link>
                            <Link to="/vendor" className="btn">Vendor</Link>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row">

                {/* ----- BG ----- */}

                <Bg url={PricingBg}/>

                <ActionCard
                    title='Any Questions?'
                    text='We’re happy to answer them. Please, get in touch.'
                    anchors={[{href: '/contact', text: 'Contact'}]}
                />

                <Details
                    title="Explore Gitpod"
                    text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                    anchors={[{href: '/blog', text: 'See Blog'}, {href: '/features', text: 'See Features'}]}
                />

            </div>
        </StyledPricingPage>
    </IndexLayout>
)

export default PricingPage
