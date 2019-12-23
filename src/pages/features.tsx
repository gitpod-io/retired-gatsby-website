import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import IceStick from '../resources/ice-stick.svg'
import { featuresCardsData } from '../utils/features'
import FeatureBox from '../components/FeatureBox'
import FeatureCard from '../components/FeatureCard'
import { sizes, colors, shadows } from '../styles/variables'
import { Link } from 'gatsby'
import ScrollToTopButton from '../components/ScrollToTopButton'


const StyledFeaturesPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Intro ----- */
    /* ------------------------------------------- */

    .intro {
        padding-top: 5rem;

        .ice-stick {
            display: block;
            width: 12rem;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
        }

        .features {
            display: grid;
            grid-gap: 3rem;
            grid-template-columns: repeat(5, 1fr);
            justify-items: center;
            align-items: center;
            margin-top: 6rem;

            @media(max-width: ${sizes.breakpoints.lg}) {
                grid-template-columns: repeat(4, 1fr);
            }

            @media(max-width: 960px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media(max-width: 490px) {
                grid-template-columns: repeat(1, 1fr);
            }

            & > div {
                @media(min-width: ${sizes.breakpoints.md}) {
                    width: 18%;
                }

                @media(max-width: ${sizes.breakpoints.md}) {
                    min-width: 22rem;
                    max-width: 22rem;
                }
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Features ----- */
    /* ------------------------------------------- */

    .features-list {

        & > div {
            &:not(:last-child) {
                margin-bottom: 10rem;
            }
        }

        .grey-container {
            padding: 10rem 0;
        }

        .feature {
            padding: 5rem 7rem;
            background: ${colors.white};
            box-shadow: ${shadows.light};

            &:not(:last-child) {
                margin-bottom: 8rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 2rem 1rem;
            }

            img {
                display: block;
                max-width: 90rem;
                width: 100%;
                margin: 4rem 0;
            }

            p {
                max-width: 80rem;
            }

            h3 {
                font-weight: 400;

                font-size: 2.6rem;

                @media(max-width: ${sizes.breakpoints.md}) {
                    font-size: 2rem;
                }

                @media(max-width: ${sizes.breakpoints.sm}) {
                    font-size: 1.8rem;
                }
            }

            .table-container {
                margin: 6rem 0;
            }
        }
    }

    .other-features {
        & > div {
            margin-bottom: 10rem;
        }
    }

    /* ------------------------------------------- */
    /* ----- Get Started ----- */
    /* ------------------------------------------- */

    .start {
        text-align: center;
        padding-top: 0;

        h3 {
            font-weight: 400;
            margin: 3rem 0;

            span {
                font-weight: 600;
                color: ${colors.link};
            }
        }
    }

`

const FeaturesPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/features/' title="Features">
        <StyledFeaturesPage>
            <div className="grey-container">
                <div className="row">

                    <ScrollToTopButton />

                    {/* ----- Intro ----- */}

                    <section className="intro" id="top">
                        <object tabIndex={-1} data={IceStick} className="ice-stick" />
                        <h1>Features</h1>
                        <div className="features">
                            {
                                featuresCardsData.map((f, i) =>
                                    <FeatureBox
                                        key={i}
                                        alt={f.title}
                                        img={f.icon}
                                        hover={f.hover}
                                        text={f.iconText || f.iconTitle}
                                        path={f.id}
                                    />
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>

            <section className="features-list">
                {
                    featuresCardsData.map((f, i) => {
                        const isGreyish = (i+1) % 3 === 0;
                        const featureCard = <FeatureCard
                            title={f.title}
                            paragraphs={f.paragraphs}
                            more={f.more}
                            strong={f.strong}
                            img={f.img}
                            id={f.id}
                            caption={f.caption}
                            isIllustration={f.isIllustration}
                            colorTextBox={isGreyish ? colors.offWhite2 : colors.offWhite}
                            colorImgBox={isGreyish ? colors.offWhite : colors.white}
                        />
                        return isGreyish ?
                            <div key={f.id} className="grey-container">
                                <div className="other-features">
                                    {featureCard}
                                </div>
                            </div>
                            :
                            <div key={f.id}>
                                { featureCard };
                            </div>

                    })
                }
            </section>

            {/* ----- Start for free ----- */}

            <div className="row">
                <section className="start">
                    <Link to="/#get-started" className="btn btn--cta btn--big">Start for Free</Link>
                    <h3>Prefix any GitHub or GitLab URL with <span>gitpod.io/#</span></h3>
                </section>
            </div>

        </StyledFeaturesPage>
    </IndexLayout>
)


export default FeaturesPage
