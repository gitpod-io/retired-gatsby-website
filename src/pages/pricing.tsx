import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import PricingBox from '../components/PricingBox'
import Bg from '../components/Bg'
import PricingBg from '../resources/pricing-bg.png'
import { plans } from '../utils/plans'
import { Link } from 'gatsby'
import { sizes, colors, shadows } from '../styles/variables'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'
import PricingTable from '../components/PricingTable'
import Circle from '../components/Circle'
import Layer from '../resources/layer.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'

const StyledPricingPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Pricing ----- */
    /* ------------------------------------------- */

    .pricing {
        padding-bottom: 5rem;

        &__boxes {
            display: flex;

            @media(max-width: ${sizes.breakpoints.lg}) {
                justify-content: space-between;
                flex-wrap: wrap;
            }

            @media(max-width: 650px) {
                flex-direction: column;
                align-items: center;
            }
        }

        &__tagline {
            transform: translateY(-3rem);

            @media(max-width: 1096px) {
                display: none;
            }

            h4 {
                padding: 4rem 0 3rem;
                width: 72%;
                font-weight: 600;
                text-align: center;
                box-shadow: ${shadows.light};
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Links ----- */
    /* ------------------------------------------- */

    .links {
        display: flex;
        justify-content: space-between;
        padding-bottom: 1rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
        }

        & > div {

            &:not(:last-of-type) {
                margin-bottom: 4rem;
            }

            h2 {
                margin-bottom: 3rem;
            }

            h2 + p {
                margin: 0;
            }

            p:last-of-type {
                margin-bottom: 3rem;
            }

            .btn {
                margin-bottom: 2rem;
                margin-right: 2rem;
            }

            @media(min-width: ${sizes.breakpoints.md}) {
                &:first-of-type {
                    width: 45%;
                }

                &:last-of-type {
                    width: 40%;
                }
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Business ----- */
    /* ------------------------------------------- */

    .business {
        text-align: center;

        h2 {
            &::before {
                content: '';
                display: block;
                height: 1rem;
                width: 12rem;
                margin: 0 auto 3rem;
                background: ${colors.link};
                border-radius: 10px;
            }
        }

        .btn {
            margin: 1rem;
            transform: translateY(-4rem);
        }
    }

`

const PricingPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/pricing/' title="Pricing">
        <StyledPricingPage>
            <div className="grey-container">
                <div className="row">

                    {/* ----- Section Pricing ----- */}

                    <section className="pricing">
                        <h3 className="sub">Pricing</h3>
                        <h2>Choose Your Plan</h2>
                        <div className="pricing__boxes">
                            { plans.map(
                                (plan, i) => <PricingBox
                                    key={i}
                                    title={plan.title}
                                    img={<img alt={plan.alt} src={plan.img}/>}
                                    price={plan.price}
                                    duration={plan.duration}
                                    feature={plan.feature}
                                    features={plan.features}
                                    transform={plan.transform}
                                />
                            )}
                        </div>
                        <div className="pricing__tagline">
                            <h4>Gitpod Is Always Free for Open Source.</h4>
                        </div>
                    </section>

                    {/* ----- Section Links ----- */}

                    <section className="links">
                        <div>
                            <h2>Open Source</h2>
                            <p>Gitpod is free for up to 50 hours/month on any public repository.</p>
                            <p>If you are a professional open-source developer and think you need more, let us know, by applying for unlimited hours. Your GitHub / GitLab track record should clearly show your regular open-source contributions.</p>
                            <a href="#" className="btn">Apply Now</a>
                        </div>
                        <div>
                            <h2>For Students</h2>
                            <p>Students get the unlimited subscription for $9.</p>
                            <p>Make sure your student email is set as your primary email on GitHub. And please let us know if your educational institution is not correctly recognized.</p>
                            <a href="#" className="btn">I'm a Student</a>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row">

                <section className="business">
                    <h2>Business Solutions</h2>
                    <p>Here you can find further information for your business solution including its pricing.</p>
                    <Link to="/education" className="btn">Education</Link>
                    <Link to="/recruiting" className="btn">Recruiting</Link>
                    <Link to="/vendor" className="btn">Vendor</Link>
                </section>

                {/* ----- BG ----- */}

                <Bg url={PricingBg}/>


                <PricingTable
                    title="Gitpod Enterprise Pricing"
                    paragraph={<p>For pricing information for business solutions, see <Link to="/education">Education</Link>, <Link to="/vendor">Vendor</Link> or <Link to="/recruiting">Recruiting</Link>.</p>}
                >
                    <thead>
                        <tr className="header">
                            <th style={{border: 'none', background: 'none'}}>&nbsp;</th>
                            <th>Gitpod.io
                                <span><span>FREE</span> Trial</span>
                            </th>
                            <th>Gitpod Managed
                                <span><span>FREE</span> Trial</span>
                            </th>
                            <th>Gitpod Self-Hosted
                                <span><span>FREE</span> Trial</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Pricing</th>
                            <td>x</td>
                            <td>3000$ per month</td>
                            <td>$20 per user</td>
                        </tr>
                        <tr>
                            <th>Domain</th>
                            <td>Gitpod.io</td>
                            <td>Custom</td>
                            <td>Custom</td>
                        </tr>
                        <tr>
                            <th>Managed By</th>
                            <td>Typefox</td>
                            <td>Typefox</td>
                            <td>You</td>
                        </tr>
                        <tr>
                            <th>Infrastructure</th>
                            <td>Globally distributed</td>
                            <td>> 1 geographical regions</td>
                            <td>On-prem or private cloud</td>
                        </tr>
                        <tr>
                            <th>Support</th>
                            <td><Circle /></td>
                            <td><Circle /></td>
                            <td><Circle /></td>
                        </tr>
                        <tr>
                            <th><strong>Features</strong></th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>&emsp;&emsp;VS Code Extensions</th>
                            <td><Circle /></td>
                            <td><Circle /></td>
                            <td><Circle /></td>
                        </tr>
                        <tr>
                            <th>&emsp;&emsp;Shared Workspaces</th>
                            <td><Circle /></td>
                            <td><Circle /></td>
                            <td><Circle /></td>
                        </tr>
                        <tr>
                            <th>&emsp;&emsp;Code Reviews</th>
                            <td><Circle /></td>
                            <td><Circle /></td>
                            <td><Circle /></td>
                        </tr>
                        <tr>
                            <th>&emsp;&emsp;Terminals</th>
                            <td><Circle /></td>
                            <td><Circle /></td>
                            <td><Circle /></td>
                        </tr>
                        <tr>
                            <th><strong>Git Integeration</strong></th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th><img src={Github} alt="GitHub Logo"/> github.com</th>
                            <td><Circle /></td>
                            <td><Circle /></td>
                            <td><Circle /></td>
                        </tr>
                        <tr>
                            <th><img src={Github} alt="GitHub Logo"/> GitHub Enterprise</th>
                            <td></td>
                            <td><Circle /></td>
                            <td><Circle /></td>
                        </tr>
                        <tr>
                            <th><img src={Gitlab} alt="GitLab Logo"/> gitlab.com</th>
                            <td><Circle /></td>
                            <td><Circle /></td>
                            <td><Circle /></td>
                        </tr>
                        <tr>
                            <th><img src={Gitlab} alt="GitLab Logo"/> GitLab self-hosted</th>
                            <td></td>
                            <td><Circle /></td>
                            <td><Circle /></td>
                        </tr>
                        <tr>
                            <th><img src={Layer} alt="Layer Logo"/> Bitbucket</th>
                            <td>Soon</td>
                            <td>Soon</td>
                            <td>Soon</td>
                        </tr>
                        <tr>
                            <th>Custom Authorization</th>
                            <td>OAuth2</td>
                            <td>OAuth2</td>
                            <td>OAuth2</td>
                        </tr>
                        <tr className="buttons">
                            <th></th>
                            <td><Link to="/#get-started" className="btn btn--cta">Start for Free</Link></td>
                            <td><Link to="#" className="btn btn--cta">Contact Sales</Link></td>
                            <td><Link to="/self-hosted" className="btn">Host Yourself</Link></td>
                        </tr>
                    </tbody>
                </PricingTable>

                <ActionCard
                    title='Any Questions?'
                    text='We’re happy to answer them. Please, get in touch.'
                    anchors={[{href: '/contact', text: 'Contact'}]}
                />

                <Details
                    title="Explore Gitpod"
                    text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                    anchors={[{href: '/features', text: 'See Features'}, {href: '/blog', text: 'See Blog'}]}
                />

            </div>
        </StyledPricingPage>
    </IndexLayout>
)

export default PricingPage
