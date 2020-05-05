import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'
import LightBulb from '../../resources/light-bulb.svg'
import Rocket from '../../resources/rocket.png'
import MagicCap from '../../resources/magic-cap.svg'
import IconOpenSource from '../../resources/icon-open-source.svg'
import { PricingBoxProps } from '../PricingBox'
import PopOver from '../PopOver'
import PricingBox from '../PricingBox'
import { isEurope } from '../../utils/helpers'

const Styled = styled.div`

    h1 {
        margin-bottom: 6rem;
    }

    .pricing {
        padding-bottom: 5rem;

        &__boxes {
            display: flex;
            justify-content: space-between;

            @media(max-width: ${sizes.breakpoints.lg}) {
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
`

const plans: PricingBoxProps[] = [
    {
        title: 'Open-Source',
        img: <object role="presentation" tabIndex={-1} data={IconOpenSource} />,
        price: 'Free',
        duration: '50 hours / month',
        features: ['Public Repos', 'Private Repos (30-Day Trial)']
    },
    {
        title: 'Personal',
        img: <object role="presentation" tabIndex={-1} data={LightBulb} />,
        price: <>{isEurope() ? '€8' : '$9'}<span> / month</span></>,
        duration: '100 hours / month',
        features: ['Private & Public Repos', <span className="span">4 Parallel Workspaces <PopOver description="The number of workspaces running at the same time." /></span>, <span className="span">30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes." /></span>],
        btnText: 'Buy Now',
        link: 'https://gitpod.io/subscription/'
    },
    {
        title: 'Professional',
        img: <img alt='Rocket' src={Rocket} />,
        price: <>{isEurope() ? '€23' : '$25'}<span> / month</span></>,
        duration: 'Unlimited hours',
        features: ['Private & Public Repos', <span className="span">8 Parallel Workspaces <PopOver description="The number of workspaces running at the same time." /></span>, <span className="span">30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes." /></span>],
        transform: 'scale(1.05)',
        banner: 'Recommended',
        btnText: 'Buy Now',
        btnBackground: true,
        link: 'https://gitpod.io/subscription/',
        renderCreateTeamLink: true
    },
    {
        title: 'Unlimited',
        img: <object role="presentation" tabIndex={-1} data={MagicCap} />,
        price: <>{isEurope() ? '€35' : '$39'}<span> / month</span></>,
        duration: 'Unlimited hours',
        features: ['Private & Public Repos', <span className="span">16 Parallel Workspaces <PopOver description="The number of workspaces running at the same time." /></span>, <span className="span">1h Timeout <PopOver description="Workspaces without user activity are stopped after 1 hour." /></span>, <span className="span">3h Timeout Boost <PopOver description="You can manually boost the timeout to 3 hours within a running workspace." /></span>],
        btnText: 'Buy Now',
        link: 'https://gitpod.io/subscription/',
        renderCreateTeamLink: true
    }
]



const PricingBoxes = () => (
    <Styled>
        <section className="pricing">
            <h3 className="sub">Pricing</h3>
            <h1>Choose Your Plan</h1>
            <div className="pricing__boxes">
                {plans.map(
                    (plan, i) => <PricingBox
                        key={i}
                        {...plan}
                    />
                )}
            </div>
        </section>
    </Styled>
)

export default PricingBoxes
