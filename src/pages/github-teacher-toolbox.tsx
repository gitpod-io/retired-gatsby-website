import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import TeacherBox from '../resources/teacher-box.png'
import PricingBox, { PricingBoxProps } from '../components/PricingBox'
import styled from '@emotion/styled'
import { isEurope } from './pricing'
import Quote from '../components/Quote'
import HeartLock from '../resources/icon-heart.svg'
import Owl from '../resources/owl-icon.svg'
import Saturn from '../resources/saturn-icon.svg'
import { Link } from 'gatsby'
import PopOver from '../components/PopOver'
import { sizes, colors } from '../styles/variables'
import OnBoarding from '../components/OnBoarding'
import InfoCard from '../components/InfoCard'

const StyledGithubTeacherToolBoxPage = styled.div`
    /* --------------------------------------- */
    /* ----- Offers ----- */
    /* --------------------------------------- */

    .offers {
        display: flex;
        justify-content: center;
        margin-top: 15rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
            align-items: center;
        }
    }

    .btn-container {
        margin: 5rem 0;
        text-align: center;
    }

    
`

const offers: PricingBoxProps[] = [
    {
        title: 'Open Source',
        img: <object tabIndex={-1} data={HeartLock}/>,
        price: 'Free',
        duration: '50 hours / month',
        hideButton: true,
        features: ['Private & Public Repos', <span className="span"> &lt; 4 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>],        
        text: 'Free for everyone'
    },
    {
        title: 'Teacher',
        img: <object tabIndex={-1} data={Owl}/>,
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
        banner: 'Exclusive Offer for the GitHub Teacher Toolbox',
        bannerColor: '#EAA42F'
    },
    {
        title: 'Gitpod Education',
        img: <object tabIndex={-1} data={Saturn}/>,
        price: <>From {(isEurope() ? '€0.8' : '$0.9')}</>,
        duration: 'Per user/month',
        feature: <Link to="/education/">Learn More</Link>,
        hideButton: true,
        text: 'Only available for educational institutions'
    }
]

const GithubTeacherToolBoxPage: React.SFC<{}> = () => (
    <IndexLayout canonical="/github-teacher-toolbox/" title="GitHub Teacher Toolbox">
        <StyledGithubTeacherToolBoxPage>
            <div className="grey-container">

                {/* ----- Banner ----- */}  

                <Banner 
                    subtitle="GitHub Teacher Toolbox"
                    title={<h1>Let’s Focus on Teaching Code, not Tedious Setups!</h1>}
                    paragraph={<span>With Gitpod you can create exams and exercises easily, help out your students via live tutoring and benefit from a simple onbaoarding from any device. <Link to="">Learn more</Link></span>}
                    linkPath="https://gitpod.io/subscription/"
                    linkText="Claim Offer"
                    img={<img src={TeacherBox} alt="GitHub Teacher Toolbox" />}
                />

                <section>
                    <div className="row">
                        <h2>GitHub Teacher Toolbox</h2>
                        <p>With the <a href="https://education.github.com/students" target="_blank">GitHub Teacher Toolbox</a>, you get the same free plan as your students with the <a href="https://education.github.com/teachers" target="blank">GitHub Student Developer Pack</a>. 
                        <br />
                        We’re happy to support educators teaching frictionless coding.</p>
                        <div className="offers">
                            {
                                offers.map(
                                    (offer, i) => (
                                        <PricingBox 
                                            key={i}
                                            title={offer.title}
                                            img={offer.img}
                                            price={offer.price}
                                            duration={offer.duration}
                                            feature={offer.feature}
                                            features={offer.features}
                                            transform={offer.transform}
                                            btnText={offer.btnText}
                                            link={offer.link}
                                            background={offer.background}
                                            hideButton={offer.hideButton}
                                            btn={offer.btn}
                                            text={offer.text}
                                            banner={offer.banner}
                                            bannerColor={offer.bannerColor}
                                        />
                                    )
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>

            <div className="row">

                {/* ----- Onboarding ---- */}

                <OnBoarding />

                {/* ----- Quote ----- */}                            

                <Quote 
                    title="Stop wasting time with tedious setups, learn amazing programming skills instead!"
                />

                {/* ----- Info ----- */}  

                <InfoCard />
                
            </div>
        </StyledGithubTeacherToolBoxPage>
    </IndexLayout>
)

export default GithubTeacherToolBoxPage
