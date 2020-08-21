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
import { Link } from 'gatsby'

const Styled = styled.div`
  h1 {
    margin-bottom: 6rem;
  }

  .pricing {
    padding: 0;

    &__boxes {
      display: flex;
      justify-content: center;

      @media (max-width: ${sizes.breakpoints.lg}) {
        flex-wrap: wrap;
      }

      @media (max-width: 1096px) {
        flex-wrap: wrap;
        justify-content: center;
      }

      @media (max-width: 650px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .container--1 {
    padding: 5rem 0 0;
  }
`

const selfHostedPlans: PricingBoxProps[] = [
  {
    title: 'Small Teams',
    duration: 'For unlimited users',
    img: <object role="presentation" tabIndex={-1} data={Cloud} />,
    features: ['Unlimited Use', 'Private & Public Repos'],
    price: '$0',
    btnText: 'Install Now',
    btnBackground: true,
    link: '/self-hosted/#install',
    info: 'Limited Prebuilt Times'
  },
  {
    title: 'Professional Teams',
    img: <img alt="Rocket" src={Rocket} />,
    features: ['Unlimited Prebuilds', 'Shared Workspaces', 'Snapshots', 'Admin Dashboard', 'Unlimited Use', 'Private & Public Repos'],
    price: (
      <>
        {isEurope() ? '€18' : '$20'} <span>/ month</span>
      </>
    ),
    duration: 'Per user',
    btnText: 'Contact Sales',
    link: '/contact/',
    areFeaturesBold: true,
    boldFeaturesCount: 4
  }
]

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
    price: (
      <>
        {isEurope() ? '€8' : '$9'}
        <span> / month</span>
      </>
    ),
    duration: '100 hours / month',
    features: [
      'Private & Public Repos',
      <span className="span">
        4 Parallel Workspaces <PopOver description="The maximum number of workspaces a user can run at the same time" />
      </span>,
      <span className="span">
        30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes." />
      </span>
    ],
    btnText: 'Buy Now',
    link: 'https://gitpod.io/subscription/'
  },
  {
    title: 'Professional',
    img: <img alt="Rocket" src={Rocket} />,
    price: (
      <>
        {isEurope() ? '€23' : '$25'}
        <span> / month</span>
      </>
    ),
    duration: 'Unlimited hours',
    features: [
      'Private & Public Repos',
      <span className="span">
        8 Parallel Workspaces <PopOver description="The maximum number of workspaces a user can run at the same time" />
      </span>,
      <span className="span">
        30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes" />
      </span>
    ],
    btnText: 'Buy Now',
    btnBackground: true,
    link: 'https://gitpod.io/subscription/',
    subAction: (
      <a href="https://gitpod.io/teams/" target="_blank" className="sub-action">
        Create Team <PopOver textPosition="bottom" description="Get your entire team onto Gitpod with a single invoice" />
      </a>
    )
  },
  {
    title: 'Unlimited',
    img: <object role="presentation" tabIndex={-1} data={MagicCap} />,
    price: (
      <>
        {isEurope() ? '€35' : '$39'}
        <span> / month</span>
      </>
    ),
    duration: 'Unlimited hours',
    features: [
      'Private & Public Repos',
      <span className="span">
        16 Parallel Workspaces <PopOver description="The maximum number of workspaces a user can run at the same time" />
      </span>,
      <span className="span">
        1h Timeout <PopOver description="Workspaces without user activity are stopped after 1 hour" />
      </span>,
      <span className="span">
        3h Timeout Boost <PopOver description="You can manually boost the timeout to 3 hours within a running workspace" />
      </span>
    ],
    btnText: 'Buy Now',
    link: 'https://gitpod.io/subscription/',
    subAction: (
      <a href="https://gitpod.io/teams/" target="_blank" className="sub-action">
        Create Team <PopOver textPosition="bottom" description="Get your entire team onto Gitpod with a single invoice" />
      </a>
    )
  }
]

const PricingContainer = styled.div`
  background-color: ${colors.white};
  border-top: 1px solid ${colors.offWhite2};
  padding: 3rem 0 6rem;
  min-height: 660px;

  .cards {
    position: relative;
    padding: 0rem 0 3rem;

    .hide {
      display: none;
    }

    .show {
      display: flex;
      flex-wrap: wrap;
    }
  }

  p {
    margin-top: 2rem;
    text-align: center;
    font-size: 120%;
  }

  .cloud-img {
    position: absolute;
    height: 20rem;

    @media (max-width: 840px) {
      display: none;
    }

    &--1 {
      top: 31px;
      left: 21%;

      @media (max-width: 1100px) {
        left: 19.5%;
      }

      @media (max-width: 960px) {
        left: 16%;
      }

      @media (max-width: 900px) {
        left: 14%;
      }
    }

    &--2 {
      bottom: -30px;
      right: 14.5%;

      @media (max-width: ${sizes.breakpoints.lg}) {
        bottom: -1px;
      }

      @media (max-width: 1100px) {
        right: 11.5%;
      }

      @media (max-width: 960px) {
        right: 8.5%;
      }

      @media (max-width: 960px) {
        right: 5%;
      }
    }
  }
`

export interface PricingBoxesProps {
  isRendered: boolean
  changeIsRendered: (bool: boolean) => void
}

const PricingBoxes = ({ isRendered, changeIsRendered }: PricingBoxesProps) => {
  return (
    <Styled>
      <section className="pricing pattern">
        <div className="container--1">
          <div className="row">
            <h1 className="sub">
              Plans &amp; <strong>Pricing</strong>
            </h1>
            <Tabs isRendered={isRendered} changeIsRendered={changeIsRendered} />
          </div>
        </div>
        <PricingContainer>
          <div className="cards row">
            <div className={`pricing__boxes ${isRendered ? 'hide' : 'show'}`}>
              {plans.map((plan, i) => (
                <PricingBox key={i} {...plan} />
              ))}
            </div>
            <div className={`pricing__boxes ${isRendered ? 'show' : 'hide'}`}>
              <object role="presentation" tabIndex={-1} data={Cloud} className="cloud-img cloud-img--1" />
              {selfHostedPlans.map((plan, i) => (
                <PricingBox key={i} {...plan} isTitleOutside={true} />
              ))}
              <object role="presentation" tabIndex={-1} data={Cloud} className="cloud-img cloud-img--2" />
            </div>
          </div>
          <p>
            Do you have any questions? Please, <Link to="/contact/">Get in Touch.</Link>
          </p>
        </PricingContainer>
      </section>
    </Styled>
  )
}

export default PricingBoxes
