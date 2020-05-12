import React from 'react'

import styled from '@emotion/styled'
import { sizes, colors } from '../../styles/variables'
import LightBulb from '../../resources/light-bulb.svg'
import Rocket from '../../resources/rocket.png'
import MagicCap from '../../resources/magic-cap.svg'
import IconOpenSource from '../../resources/icon-open-source.svg'
import { PricingBoxProps } from '../PricingBox'
import PopOver from '../PopOver'
import PricingBox from '../PricingBox'
import { isEurope } from '../../utils/helpers'
import Cloud from '../../resources/cloud.svg'
import Tabs from './Tabs'

const Styled = styled.div`

    h1 {
        margin-bottom: 6rem;
    }

    .pricing {
        padding: 0;

        &__boxes {
            display: flex;
            justify-content: center;

            @media(max-width: ${sizes.breakpoints.lg}) {
                flex-wrap: wrap;
            }

            @media(max-width: 1096px) {
                flex-wrap: wrap;
                justify-content: center;
            }

            @media(max-width: 650px) {
                flex-direction: column;
                align-items: center;
            }
        }
    }

    .container--1 {
        padding: 10rem 0 0;

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 5rem 0 0;
        }
    }
`

const selfHostedPlans: PricingBoxProps[] = [
    {
        title: 'Small Teams',
        duration: 'For up to 5 users',
        img: <object role="presentation" tabIndex={-1} data={Cloud} />,
        features: ['Unlimited Use', 'Private & Public Repos', 'Admin Dashboard'],
        price: 'Free',
        btnText: 'Install Now',
        btnBackground: true,
        link: '/self-hosted/#install'
    },
    {
        title: 'Professional Teams',
        img: <img alt='Rocket' src={Rocket} />,
        features: ['Unlimited Use', 'Private & Public Repos', 'Admin Dashboard', '30-Day Free Trial'],
        price: <>{isEurope() ? '€18' : '$20'} <span>/ month</span></>,
        duration: 'Per user',
        btnText: 'Contact Sales',
        link: '/contact/'
    }
];

const plans: PricingBoxProps[] = [
    {
        title: 'Free',
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
        features: ['Private & Public Repos', <span className="span">4 Parallel Workspaces <PopOver description="The maximum number of workspaces a user can run at the same time" /></span>, <span className="span">30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes." /></span>],
        btnText: 'Buy Now',
        link: 'https://gitpod.io/subscription/'
    },
    {
        title: 'Professional',
        img: <img alt='Rocket' src={Rocket} />,
        price: <>{isEurope() ? '€23' : '$25'}<span> / month</span></>,
        duration: 'Unlimited hours',
        features: ['Private & Public Repos', <span className="span">8 Parallel Workspaces <PopOver description="The maximum number of workspaces a user can run at the same time" /></span>, <span className="span">30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes" /></span>],
        btnText: 'Buy Now',
        btnBackground: true,
        link: 'https://gitpod.io/subscription/',
        subAction: <a href="https://gitpod.io/teams/" target="_blank" className="sub-action">Create Team<PopOver textPosition="bottom" description="Get your entire team onto Gitpod with a single invoice" /></a>
    },
    {
        title: 'Unlimited',
        img: <object role="presentation" tabIndex={-1} data={MagicCap} />,
        price: <>{isEurope() ? '€35' : '$39'}<span> / month</span></>,
        duration: 'Unlimited hours',
        features: ['Private & Public Repos', <span className="span">16 Parallel Workspaces <PopOver description="The maximum number of workspaces a user can run at the same time" /></span>, <span className="span">1h Timeout <PopOver description="Workspaces without user activity are stopped after 1 hour" /></span>, <span className="span">3h Timeout Boost <PopOver description="You can manually boost the timeout to 3 hours within a running workspace" /></span>],
        btnText: 'Buy Now',
        link: 'https://gitpod.io/subscription/',
        subAction: <a href="https://gitpod.io/teams/" target="_blank" className="sub-action">Create Team<PopOver textPosition="bottom" description="Get your entire team onto Gitpod with a single invoice" /></a>
    }
]

const PricingContainer = styled.div`
    background-color: ${colors.white};
    padding: 3rem 0;
    justify-content: flex-start;
    border: 1px solid ${colors.offWhite2};
    border-left: none;
    border-right: none;

    .hide {
        display: none;
    }

    .show {
        display: flex;
        flex-wrap: wrap;
    }
`;


export interface PricingBoxesProps {
    isRendered: boolean
    changeIsRendered: (bool: boolean) => void
}

const PricingBoxes = ({ isRendered, changeIsRendered }: PricingBoxesProps) => {
    return <Styled>
        <section className="pricing">
            <div className="grey-container container--1">
                <div className="row">
                    <h1 className="sub">Plans &amp; Pricing</h1>
                    <Tabs 
                        isRendered={isRendered}
                        changeIsRendered={changeIsRendered}
                    />
                </div>
            </div>
            <PricingContainer>
                <div
                    className={`pricing__boxes ${isRendered ? 'hide' : 'show'}`}
                >
                    {plans.map(
                        (plan, i) => <PricingBox
                            key={i}
                            {...plan}
                        />
                    )}
                </div>
                <div
                    className={`pricing__boxes ${isRendered ? 'show' : 'hide'}`}
                >
                    {selfHostedPlans.map(
                        (plan, i) => <PricingBox
                            key={i}
                            {...plan}
                        />
                    )}
                </div>
            </PricingContainer>
        </section>
    </Styled>;
}

export default PricingBoxes
