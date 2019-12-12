import React from 'react'

import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import IndexLayout from '../layouts'
import IceStick from '../resources/ice-stick.png'
import { features, featuresCardsData } from '../utils/features'
import FeatureBox from '../components/FeatureBox'
import FeatureCard from '../components/FeatureCard'
import { sizes, colors, shadows } from '../styles/variables'
import { Link } from 'gatsby'
import CodeReview from '../resources/code-review.png'
import Circle from '../components/Circle'
import Details from '../components/Details'
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

            .table-container {
                margin: 6rem 0;
            }
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
            <Global
                styles={
                    css`
                        html {
                            scroll-behavior: smooth;
                        }
                    `
                }
            />
            <div className="grey-container">
                <div className="row">

                    <ScrollToTopButton />

                    {/* ----- Intro ----- */}

                    <section className="intro" id="top">
                        <img alt="Ice Stick" src={IceStick} className="ice-stick"/>
                        <h1>Features</h1>
                        <div className="features">
                            {
                                features.map((f, i) =>
                                    <FeatureBox
                                        key={i}
                                        alt={f.alt}
                                        img={f.img}
                                        text={f.text}
                                        path={f.path}
                                    />
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>

                <section className="features-list">
                    {
                        featuresCardsData.map((f, i) =>
                            <FeatureCard
                                key={i}
                                title={f.title}
                                paragraphs={f.paragraphs}
                                more={f.more}
                                strong={f.strong}
                                img={f.img}
                                id={f.id}
                                caption={f.caption}
                            />
                        )
                    }

                    <div className="grey-container">
                        <div className="row">
                            <div className="feature" id="code">
                                <h3>Code Reviews</h3>
                                <p>Open pull requests in Gitpod to run, navigate, and review the code from within the IDE. Reply to comments and publish code reviews without switching back to GitHub.</p>
                                <p>Thanks to <a href="#parallel">Parallel</a> and <Link to="/docs/46_prebuilds/">Prebuilt</Link> Workspaces, you can review code within seconds and without stopping your own workspace.</p>
                                <img alt="Code Review" src={CodeReview} />
                                <p>Read more about <Link to="/blog/when-code-reviews-lgtm/">Code Reviews.</Link></p>
                            </div>
                            <div className="feature" id="web">
                                <h3>Web and Desktop Support</h3>
                                <p>Read more about <Link to="#">Web and Desktop Support.</Link></p>
                            </div>
                            <div className="feature" id="lang">
                                <h3>Supported Programming Languages</h3>
                                <p>Gitpod comes with the following language support. If your favorite programming language is missing, just download the related <Link to="/docs/vscode-extensions/">VS Code Extension</Link> and enjoy all its features.</p>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr className="header">
                                                <th style={{border: 'none', background: 'none'}}>&nbsp;</th>
                                                <th>Syntax Coloring</th>
                                                <th>Code Completion</th>
                                                <th>Diagnostics</th>
                                                <th>Hovers</th>
                                                <th>Navigation</th>
                                                <th>Refactorings</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>JavaScript/TypeScript</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                            </tr>
                                            <tr>
                                                <th>Java</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                            </tr>
                                            <tr>
                                                <th>Python</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                            </tr>
                                            <tr>
                                                <th>Go</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                            </tr>
                                            <tr>
                                                <th>Ruby</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>Rust</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>C/C++</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>JSON</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>Dockefile</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>CSS</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>HTML</th>
                                                <td><Circle /></td>
                                                <td><Circle /></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>Clojure, Swift, C#, etc.</th>
                                                <td><Circle /></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ----- Start for free ----- */}

                <div className="row">
                    <section className="start">
                        <Link to="/#get-started" className="btn btn--cta btn--big">Start for Free</Link>
                        <h3>Prefix any GitHub or GitLab URL with <span>gitpod.io/#</span></h3>
                    </section>
                </div>

                {/* ----- Explore Gitpods ----- */}

                <Details
                    title="Explore Gitpod"
                    text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                    anchors={[{href: '/pricing', text: 'See Pricing'}, {href: '/blog', text: 'See Blog'}]}
                />

        </StyledFeaturesPage>
    </IndexLayout>
)


export default FeaturesPage
