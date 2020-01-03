import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import BackPack from '../resources/backpack.svg'
import PricingBox, { PricingBoxProps } from '../components/PricingBox'
import styled from '@emotion/styled'
import StudyTable from '../resources/study-table.svg'
import BriefCase from '../resources/briefcase.svg'
import HandShake from '../resources/handshake.svg'
import { isEurope } from './pricing'

const StyledGithubStudentPackPage = styled.div`
    /* --------------------------------------- */
    /* ----- Offers ----- */
    /* --------------------------------------- */

    .offers {
        display: flex;
        justify-content: space-between;
    }

    .btn-container {
        margin: 5rem 0;
        text-align: center;
    }
`

const offers: PricingBoxProps[] = [
    {
        title: 'Open-source',
        img: <object data={HandShake} />,
        price: <span>Free</span>,
        duration: '100 hours / month',
        hideButton: true,
        features: ['Unlimited workspaces', 'Public repositories'],
    },
    {
        title: 'Students',
        img: <object data={StudyTable} />,
        price: <span><span style={{textDecoration: 'line-through', opacity: .8}}>{(isEurope() ? '€8' : '$9')}</span> Free</span>,
        duration: '100 hours / month',
        hideButton: true,
        features: ['Unlimited workspaces', 'Public & Private', 'Non-commercial use only']
    },
    {
        title: 'Students Unlimited',
        img: <object data={BriefCase} />,
        price: <span><span style={{textDecoration: 'line-through', opacity: .8}}>{(isEurope() ? '€35' : '$39')}</span> $9</span>,
        duration: 'Unlimited hours / month',
        hideButton: true,
        features: ['Unlimited workspaces', 'Public & Private', 'Non-commercial use only']
    }
]

const GithubStudentPackPage: React.SFC<{}> = () => (
    <IndexLayout canonical="/github-student-developer-pack/" title="GitHub Student Developer Pack">
        <StyledGithubStudentPackPage>
            <div className="grey-container">
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
                        <p>With the <a href="https://education.github.com/pack" target="_blank" rel="noopener">GitHub Student Developer Pack</a>, you get the same features as with our usual subscription but at a much better price. We’re happy to be able to empower student developers participating in it.</p>
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
                                    />
                                    )
                                )
                            }
                        </div>
                        <div className="btn-container">
                            <a href="https://gitpod.io/subscription/" target="_blank" className="btn btn--cta btn--big">Claim Offer</a>
                        </div>
                    </div>
                </section>
            </div>
        </StyledGithubStudentPackPage>
    </IndexLayout>
)

export default GithubStudentPackPage
