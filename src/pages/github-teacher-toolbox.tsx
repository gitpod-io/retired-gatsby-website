import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import TeacherBox from '../resources/teacher-box.png'
import { isEurope } from '../utils/helpers'
import Quote from '../components/Quote'
import { PricingBoxProps } from '../components/PricingBox'
import IconOpenSource from '../resources/icon-open-source.svg'
import Owl from '../resources/owl-icon.svg'
import Saturn from '../resources/saturn-icon.svg'
import { Link } from 'gatsby'
import PopOver from '../components/PopOver'
import { colors } from '../styles/variables'
import OnBoarding from '../components/OnBoarding'
import InfoCard from '../components/InfoCard'
import Offers from '../components/Offers'

const offers: PricingBoxProps[] = [
  {
    title: 'Open-Source',
    img: <object role="presentation" tabIndex={-1} data={IconOpenSource} />,
    price: 'Free',
    duration: '50 hours / month',
    hideButton: true,
    features: ['Public Repos'],
    text: 'Free for everyone'
  },
  {
    title: 'Teacher',
    img: <object role="presentation" tabIndex={-1} data={Owl} />,
    price: (
      <>
        <span style={{ textDecoration: 'line-through', opacity: 0.8 }}>{isEurope() ? '€8' : '$9'}</span> Free
      </>
    ),
    duration: '100 hours / month',
    hideButton: true,
    features: [
      'Private & Public Repos',
      <span key="202" className="span">
        4 Parallel Workspaces <PopOver key={'g-1'} description="The number of workspaces running at the same time." />
      </span>,
      <span key="203" className="span">
        30min Timeout <PopOver key={'g-2'} description="Workspaces without user activity are stopped after 30 minutes." />
      </span>,
      'Limited to 6 months'
    ],
    transform: 'scale(1.05)',
    btn: (
      <a href="https://gitpod.io/subscription/" target="_blank" className="btn btn--cta" style={{ color: colors.white }}>
        Claim Offer
      </a>
    ),
    banner: 'Exclusive Offer for the GitHub Teacher Toolbox',
    bannerColor: '#EAA42F'
  },
  {
    title: 'Gitpod Education',
    img: <object role="presentation" tabIndex={-1} data={Saturn} />,
    price: <>From {isEurope() ? '€0.8' : '$0.9'}</>,
    duration: 'Per user/month',
    feature: <Link to="/education/">Learn More</Link>,
    hideButton: true,
    text: 'Only available for educational institutions'
  }
]

const GithubTeacherToolBoxPage: React.SFC<{}> = () => (
  <IndexLayout
    canonical="/github-teacher-toolbox/"
    title="GitHub Teacher Toolbox"
    description="With Gitpod you can create coding exams and exercises easily, help out your students via live tutoring, and benefit from a simple onboarding with any device."
  >
    <Banner
      subtitle="GitHub Teacher Toolbox"
      title={<h1>Let’s Focus on Teaching Code, not Tedious Setups!</h1>}
      paragraph={
        <span>
          With Gitpod you can create coding exams and exercises easily, help out your students via live tutoring, and benefit from a simple
          onboarding with any device. <Link to="/education">Learn more</Link>
        </span>
      }
      linkPath="https://gitpod.io/subscription/"
      linkText="Claim Offer"
      img={<img src={TeacherBox} alt="GitHub Teacher Toolbox" />}
    />

    <div className="grey-container">
      <Offers
        title="GitHub Teacher Toolbox"
        para={
          <p>
            With the{' '}
            <a href="https://education.github.com/toolbox/?utm_source=github+gitpod" target="_blank">
              GitHub Teacher Toolbox
            </a>
            , you get the same free plan as your students with the{' '}
            <a href="https://education.github.com/pack/?utm_source=github+gitpod" target="blank">
              GitHub Student Developer Pack
            </a>
            .
            <br />
            We’re happy to support educators teaching frictionless coding.
          </p>
        }
        offers={offers}
      />
    </div>

    <div className="row">
      <OnBoarding link="https://calendly.com/gitpod/onboarding?back=1&month=2020-02" />

      <Quote title="Stop wasting time with tedious setups, teach amazing programming skills instead!" />

      <InfoCard />
    </div>
  </IndexLayout>
)

export default GithubTeacherToolBoxPage
