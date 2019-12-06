import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import PricingBox from '../components/PricingBox'
import Bg from '../components/Bg'
import PricingBg from '../resources/pricing-bg.png'
import { plans } from '../utils/plans'
import { Link } from 'gatsby'
import { sizes, colors, shadows } from '../styles/variables'
import HeartLock from '../resources/heart-lock.png'
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
        &__boxes {
            display: flex;

            @media(max-width: ${sizes.breakpoints.lg}) {
                justify-content: space-between;
                flex-wrap: wrap;
            }

            @media(max-width: 500px) {
                flex-direction: column;
                align-items: center;
            }
        }

        &__open-source {
            max-width: 60rem;
            margin: 10rem auto 0;
            padding: 4rem 1rem;
            text-align: center;
            background: ${colors.white};
            box-shadow: ${shadows.light};
            border-radius: 3px;

            @media(max-width: ${sizes.breakpoints.md}) {
                br {
                    display: none;
                }
            }

            img {
                height: 8rem;
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Links ----- */
    /* ------------------------------------------- */

    .links {
        display: flex;
        justify-content: space-between;

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

            p:last-of-type {
                margin-bottom: 3rem;
            }

            .btn {
                margin-bottom: 2rem;
                margin-right: 2rem;
            }

            @media(min-width: ${sizes.breakpoints.md}) {
                width: 40%;
            }
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
                                />
                            )}
                        </div>
                        <div className="pricing__open-source">
                            <img alt="Heart Lock" src={HeartLock} />
                            <h3>Gitpod Is Always Free for Open Source.</h3>
                            <p>Use Gitpod for free up to 50 hours/month for public<br />repositories. If this shouldn’t be enough, please apply here<br/>for an <a href="#">Unlimited-Open-Source-Plan.</a></p>
                        </div>
                    </section>

                    {/* ----- Section Links ----- */}

                    <section className="links">
                        <div>
                            <h2>For Students</h2>
                            <p>Students get the unlimited subscription for $9.</p>
                            <p>Make sure your student email is set as your primary email on GitHub. And please let us know if your educational institution is not correctly recognized.</p>
                            <a href="#" className="btn">I’m a Student</a>
                        </div>
                        <div>
                            <h2>Business Solutions</h2>
                            <p>Here you can find further information for your business solution including its pricing.</p>
                            <Link to="/education" className="btn">Education</Link>
                            <Link to="/recruiting" className="btn">Recruiting</Link>
                            <Link to="/vendor" className="btn">Vendor</Link>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row">

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
                            <th>Gitpod Cloud
                                <span><span>FREE</span> Trial</span>
                            </th>
                            <th>Gitpod Self Hosted
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
                        <tr>
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
