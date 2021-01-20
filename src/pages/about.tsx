import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import { colors, sizes, shadows } from '../styles/variables'
import ImageProvider from '../components/ImageProvider'
// import gitpodWallpaper2 from '../resources/gitpod_wallpaper2.jpeg'
import MoreInfo from '../components/MoreInfo'
import { Link } from 'gatsby'

const StyledAboutPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Banner ----- */
    /* ------------------------------------------- */

    .banner {
        display: flex;
        padding: 16rem 0;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
            align-items: center;

            & > div {
                width: 100%;
            }
        }

        .h3 {
            font-weight: 400;
            color: ${colors.textLight};
        }

        h1 {
            font-size: 5rem;
            margin: -2rem 0 2rem;
            letter-spacing: 2px;
        }

        .text {
            font-size: ${sizes.font.btnNormal};
        }


        &__img {
            &-container {
                display: flex;
                justify-content: flex-end;
                width: 40%;
                height: 23rem;

                @media(max-width: ${sizes.breakpoints.md}) {
                    height: 19rem;
                }

                @media(max-width: ${sizes.breakpoints.md}) {
                    width: 100%;
                    justify-content: center;
                }
            }
        }

        &__text-box {
            width: 60%;
            padding-left: 8rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                text-align: center;
                width: 100%;
                padding: 5rem 0;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                br {
                    display: none;
                }
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Section By Developers ----- */
    /* ------------------------------------------- */

    .developers {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 80rem;
        margin: 0 auto;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;

            & > div {
                &:not(:last-of-type) {
                    margin-bottom: 5rem;
                }
            }
        }

        &__text-box {
            @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
                width: 60%;
            }
        }

        &__img {
            &-container {
                @media(min-width: 801px) {
                    width: 30%;
                }
            }
        }

        p {
            font-size: ${sizes.font.btnNormal};
        }

    }

    /* ------------------------------------------- */
    /* ----- Section That's Us ----- */
    /* ------------------------------------------- */

    .about {

        h2 {
            @media(max-width: 910px) {
                text-align: center;
            }
        }

        &__container {
            display: flex;

            @media(max-width: 910px) {
                flex-direction: column;
                align-items: center;
            }
        }

        &__box {
            padding: 3rem 4rem 4rem;
            width: 50%;
            min-width: 40rem;
            box-shadow: ${shadows.light};
            border-radius: 3px;

            @media(max-width: 910px) {
                &:not(:last-child) {
                    margin-bottom: 3rem;
                }
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                min-width: 30rem;
            }

            img {
                display: block;
                width: 100%;
                border-radius: 3px;
            }

            &:last-of-type {
                background: ${colors.white};
            }
        }

    }

    .statement {
        text-align: center;
        padding: 10rem 0;
        font-weight: 300;

        &__fox {
            height: 7rem;
            margin-left: 3rem;
            margin-bottom: -2rem;
        }
        &__logo {
            height: 1.5rem;
            margin-left: -4rem;
            margin-bottom: -2rem;
        }
    }
`

const AboutPage: React.SFC<{}> = ({data}) => (
    <IndexLayout canonical='/about/' title="About">
        <StyledAboutPage>
            {/* ----- Banner ----- */}

            <div className="row pattern">
                <header role="banner" className="banner">
                    <div className="banner__img-container">
                        <ImageProvider 
                            fluidData={data.doubleArrows.childImageSharp.fluid}
                            alt="2 Right Arrows"
                            className="banner__img"
                            providerStyles={{width: '53%', minWidth: '22rem'}}
                        />
                    </div>
                    <div className="banner__text-box">
                        <header>
                            <p className="h3">About</p>
                            <h1>Gitpod</h1>
                        </header>
                        <p className="text">We are a fully distributed and engineering-led <br /> team of developer tool specialists and long <br /> time open-source contributors. We believe that <br /> in a few years working with automated, ready-to-code <br /> dev environments is going to be as common as <br /> using version control or having CI/CD.</p>
                    </div>
                </header>
            </div>

            {/* ----- By Developers for Developers ----- */}

            <div className="row">
                <section className="developers">
                    <div className="developers__text-box">
                        <h2>Democratizing Software Development</h2>
                        <p>With Gitpod, we set out to streamline how software is written today. We make software development more accessible with instant, automated, and ready-to-code development environments.</p>
                    </div>
                    <div className="developers__img-container">
                        <ImageProvider 
                            fluidData={data.doubleArrows.childImageSharp.fluid}
                            alt="2 Right Arrows"
                            className="banner__img"
                            providerStyles={{transform: 'rotate(180deg)', minWidth: '22rem'}}
                        />
                    </div>
                </section>
            </div>

            <div className="grey-container">

                {/* ----- Section That's Us ----- */}

                <div className="row">
                    <section className="about">
                        <h2>That’s Us</h2>
                        <div className="about__container">
                            <div className="about__box">
                                <ImageProvider
                                    fluidData={data.team.childImageSharp.fluid} alt="Gitpod Team"
                                    providerStyles={{height: 'auto', marginBottom: '3rem'}}
                                />
                                <h3>⚓️ About Gitpod</h3>
                                <p>We have built developer tools, created programming languages and successfully grew open source communities over the last 10 years. We are developers ourselves - with Gitpod we want to capitalize on our learnings and build a company that simplifies the lives of all developers. Experienced international investors <Link to="https://www.crunchbase.com/organization/gitpod">support us</Link> on our journey. <br /> <br /> We are a fully distributed team with humans from all over the world 🇦🇺 🇧🇷 🇨🇦 🇫🇷 🇩🇪 🇬🇷 🇵🇰 🇷🇺 🇺🇸 </p>
                            </div>
                            <div className="about__box">
                                <ImageProvider
                                    fluidData={data.wallpaper.childImageSharp.fluid} alt="Gitpod Wallpaper"
                                    providerStyles={{height: 'auto', marginBottom: '3rem'}}
                                />
                                <h3>✊ Values</h3>
                                <p> Values are important to us. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We believe in the benefits of an open culture. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don't dictate. <br /><br /> We are also not as diverse as we would like to be.<br /><br /> <Link to="/careers"> Help us change that and join us! </Link></p>
                            </div>
                        </div>
                    </section>

                    <h2 className="statement">
                        It's our mission to make developers' life easier!
                    </h2>

                </div>
            </div>

            <MoreInfo />

        </StyledAboutPage>
    </IndexLayout>
)

export default AboutPage

export const query = graphql` 
    query {
        team: file(relativePath: { eq: "team_2020.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        wallpaper: file(relativePath: { eq: "gitpod_wallpaper1.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        doubleArrows: file(relativePath: { eq: "double-arrows.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`