import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import DoubleArrows from '../resources/double-arrows.png'
import { colors, sizes, shadows } from '../styles/variables'
import Kiel from '../resources/kiel.png'
import Team from '../resources/team.png'
import Fox from '../resources/fox.png'
import TypeFox from '../resources/typefox.png'
import Details from '../components/Details'

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

        h3 {
            font-weight: 400;
            color: ${colors.textLight};
        }

        h1 {
            font-size: 5rem;
            margin: -2rem 0 2rem;
            letter-spacing: 2px;
        }

        p {
            font-size: ${sizes.font.btnNormal};
        }


        &__img {
            height: 23rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                height: 19rem;
            }

            &-container {
                display: flex;
                justify-content: flex-end;
                width: 40%;

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
            @media(min-width: ${sizes.breakpoints.md}) {
                width: 60%;
            }
        }

        &__img {
            &-container {
                width: 30%;
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

        &__container {
            display: flex;

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;
                align-items: center;
            }
        }

        &__box {
            padding: 3rem 4rem 4rem;
            width: 50%;
            min-width: 40rem;
            box-shadow: ${shadows.light};

            @media(max-width: ${sizes.breakpoints.md}) {
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
                margin-bottom: 3rem;
            }

            &:last-of-type {
                background: ${colors.white};
            }
        }

    }

    .statement {
        text-align: center;
        padding: 10rem 0;


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

const AboutPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/about/' title="About">
        <StyledAboutPage>
            <div className="grey-container">

                {/* ----- Banner ----- */}

                <div className="row">
                    <header role="banner" className="banner">
                        <div className="banner__img-container">
                            <img alt="2 Right Arrows" src={DoubleArrows} className="banner__img"/>
                        </div>
                        <div className="banner__text-box">
                            <h3>About</h3>
                            <h1>Type<strong>Fox</strong></h1>
                            <p>Gitpod is developed by TypeFox, a team<br />of developer tool specialists and longtime<br />open-source contributors.</p>
                        </div>
                    </header>
                </div>

            </div>

            {/* ----- By Developers for Developers ----- */}

            <div className="row">
                <section className="developers">
                    <div className="developers__text-box">
                        <h2>By Developers For Developers</h2>
                        <p>With Gitpod, we set out to streamline how software is written today. We democratize software development by minimizing onboarding effort and context switches through instant, automated and ready-to-code development environments.</p>
                    </div>
                    <div className="developer__img-container">
                        <img alt="2 Right Arrows" src={DoubleArrows} className="banner__img" style={{transform: 'rotate(180deg)'}}/>
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
                                <img alt="Kiel Harbour" src={Kiel} />
                                <h3>About TypeFox</h3>
                                <p>TypeFox was founded in 2016 by Sven Efftinge, Moritz Eysholdt and Dr. Jan Koehnlein, with the mission to build smart tools for smart people. The headquarters are located in Kiel, Germany.</p>
                                <p>We are a driving force behind the language server protocol and the initiators of Eclipse Theia, the next generation IDE that powers Gitpod.</p>
                            </div>
                            <div className="about__box">
                                <img alt="TypeFox Team" src={Team} />
                                <h3>About the Team</h3>
                                <p>We're a small tech-driven team with collectively over 50 years of experience in language design, IDEs and tool development and with strong values around openness, honesty, and effective pragmatism. If you're interested in joining us, please have a look at our <a href="https://www.typefox.io/careers/" target="_blank" rel="noopener">Job Openings</a>.</p>
                            </div>
                        </div>
                    </section>

                    <h2 className="statement">
                        It's our mission to make developers' life easier!
                        <img alt="TypeFox Logo" src={Fox} className="statement__fox" />
                        <img alt="TypeFox Logo" src={TypeFox} className="statement__logo"/>
                    </h2>

                </div>
            </div>

            {/* ----- Section Details ----- */}

            <Details
                title="Explore Gitpod"
                text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                anchors={[{href: '/features/', text: 'See Features'}, {href: '/blog/', text: 'See Blog'}]}
            />

        </StyledAboutPage>
    </IndexLayout>
)

export default AboutPage
