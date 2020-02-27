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
import Twitter from '../resources/twitter.svg'
import Mail from '../resources/mail.svg'
import Discourse from '../resources/discourse.svg'
import PopOver from '../components/PopOver'
import { sizes, colors } from '../styles/variables'
import OnBoarding from '../components/OnBoarding'

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

    /* --------------------------------------- */
    /* ----- Info ----- */
    /* --------------------------------------- */

    .info {
        @media(min-width: 830px) {
            flex: 0 0 44%;

            &:last-of-type {
                margin-left: auto;
            }
        }

        @media(max-width: 830px) {
            &:not(:last-of-type) {
                margin-bottom: 5rem;
            }
        }

        &-container {
            display: flex;

            @media(max-width: 830px) {
                flex-direction: column;
            }
        }

        p:last-of-type {
            margin-bottom: 2rem;
        }

        a {
            &:not(:last-of-type) {
                margin-right: 2rem;
            }
        }
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

                <section className="info-container">
                    <div className="info">
                        <h3>Getting Started with Gitpod</h3>
                        <p>You can simply start coding in Gitpod by prefixing any GitHub URL with <code>gitpod.io/#</code></p>
                        <p>For a more detailed description of Gitpod and its IDE, Theia, please have a look at our documentation.</p>
                        <Link to="/docs/" className="btn">Gitpod Docs</Link>
                    </div>
                    <div className="info">
                        <h3>Do You Need Help?</h3>
                        <p>If you have any question, issue or feedback, please get in touch. We love to hear your feedback and help you out.</p>
                        <Link to="/contact/"  title="Contact">
                            <img alt="Mail Logo" src={Mail} />
                        </Link>
                        <a href="https://community.gitpod.io/" target="_blank" rel="noopener" title="Community">
                            <img alt="Discourse Logo" src={Discourse} style={{width: 25}}/>
                        </a>
                        <a href="https://twitter.com/gitpod" target="_blank" rel="noopener" title="Twitter">
                            <img alt="Twitter Logo" src={Twitter} />
                        </a>
                    </div>
                </section>

            </div>
        </StyledGithubTeacherToolBoxPage>
    </IndexLayout>
)

export default GithubTeacherToolBoxPage
