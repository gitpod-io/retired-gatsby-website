import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import BackPack from '../resources/backpack.svg'
import { PricingBoxProps } from '../components/PricingBox'
import { isEurope } from '../utils/helpers'
import IconOpenSource from '../resources/icon-open-source.svg'
import Quote from '../components/Quote'
import Bag from '../resources/icon-backpack.svg'
import Rocket from '../resources/icon-rocket.svg'
import PopOver from '../components/PopOver'
import { colors } from '../styles/variables'
import InfoCard from '../components/InfoCard'
import Offers from '../components/Offers'


const offers: PricingBoxProps[] = [
    {
        title: 'Open-Source',
        img: <object role="presentation" tabIndex={-1} data={IconOpenSource}/>,
        price: 'Free',
        duration: '50 hours / month',
        hideButton: true,
        features: ['Public Repos'],        
        text: 'Free for everyone'
    },
    {
        title: 'Student',
        img: <object role="presentation" tabIndex={-1} data={Bag}/>,
        price: <><span style={{textDecoration: 'line-through', opacity: .8}}>{(isEurope() ? '€8' : '$9')}</span> Free</>,
        duration: '100 hours / month',
        hideButton: true,
        features: ['Private & Public Repos', <span className="span">4 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>, <span className="span">30min Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes."/></span>, 'Limited to 6 months'],
        transform: 'scale(1.05)',
        btn: <a 
                href="https://gitpod.io/subscription/" 
                target="_blank" 
                className="btn btn--cta"
                style={{color: colors.white}}
             >
                Claim Offer
             </a>,
        banner: 'Exclusive Offer for the GitHub Student Pack',
        bannerColor: '#EAA42F'
    },
    {
        title: 'Student Unlimited',
        img: <object role="presentation" tabIndex={-1} data={Rocket}/>,
        price: <><span style={{textDecoration: 'line-through', opacity: .8}}>{(isEurope() ? '€35' : '$39')}</span> {(isEurope() ? '€8' : '$9')}</>,
        duration: 'Unlimited hours / month',
        hideButton: true,
        features: ['Private & Public Repos', <span className="span">16 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>, <span className="span">Team Manageable&nbsp;<PopOver description="Setup Gitpod for an entire team with a single invoice and credit card."/></span>, <span className="span">1h Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes."/></span>],
    }
]

const GithubStudentPackPage: React.SFC<{}> = () => (
    <IndexLayout canonical="/github-student-developer-pack/" title="GitHub Student Developer Pack">
            <div className="grey-container">

                {/* ----- Banner ----- */}  

                <Banner 
                    subtitle="GitHub Student Developer Pack"
                    title={<h1>Make Your Life Easier with Gitpod</h1>}
                    paragraph={<span>With Gitpod you have no more tedious setups, you save hours of compiling code, and you can start coding from any device, immediately.</span>}
                    linkPath="https://gitpod.io/subscription/"
                    linkText="Claim Offer"
                    img={<img src={BackPack} alt="GitHub Backpack" />}
                />

                {/* ***** Offers ***** */}

                <Offers
                    title="GitHub Student Offer"
                    para={<p>With the <a href="https://education.github.com/pack" target="_blank" rel="noopener">GitHub Student Developer Pack</a>, you get the same features as with our usual plans but at a much better price. 
                    <br />
                    We’re happy to be able to empower student developers participating in it.</p>}
                    offers={offers}
                />
            </div>

            <div className="row">

                {/* ----- Quote ----- */}                            

                <Quote 
                    title="Stop wasting time with tedious setups, learn amazing programming skills instead!"
                />

                {/* ----- InfoCard ----- */}

                <InfoCard />

            </div>
    </IndexLayout>
)

export default GithubStudentPackPage
