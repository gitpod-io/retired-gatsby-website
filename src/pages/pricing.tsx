import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import { plans } from '../utils/plans'
import PricingBox from '../components/PricingBox'
import { sizes } from '../styles/variables'


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

                </div>
            </div>
        </StyledPricingPage>
    </IndexLayout>
)

export default PricingPage
