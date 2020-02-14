import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import BackPack from '../resources/backpack.svg'
import PricingBox, { PricingBoxProps } from '../components/PricingBox'
import styled from '@emotion/styled'
import { isEurope } from './pricing'
import Quote from '../components/Quote'
import HeartLock from '../resources/icon-heart.svg'
import Bag from '../resources/icon-backpack.svg'
import Rocket from '../resources/icon-rocket.svg'
import { Link } from 'gatsby'
import Twitter from '../resources/twitter.svg'
import Mail from '../resources/mail.svg'
import Discourse from '../resources/discourse.svg'
import PopOver from '../components/PopOver'
import { sizes, colors } from '../styles/variables'

const StyledGithubStudentPackPage = styled.div`
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
        price: <span>Free</span>,
        duration: '50 hours / month',
        hideButton: true,
        features: ['Private & Public Repos', <span className="span"> &lt; 4 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>],        
        text: 'Free for everyone'
    },
    {
        title: 'Student',
        img: <object tabIndex={-1} data={Bag}/>,
        price: <span><span style={{textDecoration: 'line-through', opacity: .8}}>{(isEurope() ? '€8' : '$9')}</span> Free</span>,
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
        img: <object tabIndex={-1} data={Rocket}/>,
        price: <span><span style={{textDecoration: 'line-through', opacity: .8}}>{(isEurope() ? '€35' : '$39')}</span> {(isEurope() ? '€8' : '$9')}</span>,
        duration: 'Unlimited hours / month',
        hideButton: true,
        features: ['Private & Public Repos', <span className="span">16 Parallel Workspaces <PopOver description="The number of workspaces running at the same time."/></span>, <span className="span">Team Manageable&nbsp;<PopOver description="Setup Gitpod for an entire team with a single invoice and credit card."/></span>, <span className="span">1h Timeout <PopOver description="Workspaces without user activity are stopped after 30 minutes."/></span>],
    }
]

const GithubStudentPackPage: React.SFC<{}> = () => (
    <IndexLayout canonical="/github-student-developer-pack/" title="GitHub Student Developer Pack">
        <StyledGithubStudentPackPage>
            <div className="grey-container">

                {/* ----- Banner ----- */}  

                <Banner 
                    subtitle="GitHub Student Developer Pack"
                    title={<h1>Make Your Life Easier with Gitpod</h1>}
                    paragraph={<span>With Gitpod you have no more tedious setups, you save hours of compiling<br />code, and you can start coding from any device, immediately.</span>}
                    linkPath="https://gitpod.io/subscription/"
                    linkText="Claim Offer"
                    img={<img src={BackPack} alt="GitHub Backpack" />}
                />

                <section>
                    <div className="row">
                        <h2>GitHub Student Offer</h2>
                        <p>With the <a href="https://education.github.com/pack" target="_blank" rel="noopener">GitHub Student Developer Pack</a>, you get the same features as with our usual plans but at a much better price. 
                        <br />
                        We’re happy to be able to empower student developers participating in it.</p>
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
                        <div className="btn-container">
                            
                        </div>
                    </div>
                </section>
            </div>

            <div className="row">

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
        </StyledGithubStudentPackPage>
    </IndexLayout>
)

export default GithubStudentPackPage
