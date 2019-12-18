import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Cloud from '../resources/cloud.png'
import Features from '../components/Features'
import Feature from '../components/Feature'
import { features } from '../utils/recruiting'
import Quote from '../components/Quote'
import RecruitingBG from '../resources/recruiting-bg.png'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import PricingTable from '../components/PricingTable'
import Circle from '../components/Circle'
import Layer from '../resources/layer.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import { Link } from 'gatsby'

const RecrutingPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/recruting/' title="Recruiting">
        <div className="grey-container">

            {/* ----- Banner ----- */}

            <Banner
                subtitle="Gitpod Recruiting"
                title={<h1>Make Sure You’re <strong>Discovering Your<br />Best Applicants</strong></h1>}
                linkPath="/recruiting/#recruiting"
                linkText="Choose your Solution"
                img={<img alt="Cloud" src={Cloud}/>}
            />

            {/* ----- Section Features ----- */}

            <Features title="Provide Coding Exercises Within Seconds">
                {
                    features.map((f, i) => (
                        <Feature
                            key={i}
                            title={f.title}
                            paragraphs={f.paragraphs}
                        />
                    ))
                }
            </Features>
        </div>

        {/* ----- Quote ----- */}

        <Quote
            title="We create the most convenient dev environments."
        />

        {/* ----- BG ----- */}

        <Bg url={RecruitingBG} />

        {/* ----- Pricing Table ----- */}

        <PricingTable
            title="Pricing Gitpod Recruiting"
            paragraph="You have the choice to either host Gitpod yourself or to use our cloud infrastructure."
            id="recruiting"
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
                    <td>x</td>
                    <td>x</td>
                </tr>
                <tr>
                    <th>Domain</th>
                    <td>Gitpod.io</td>
                    <td>Custom</td>
                    <td>Custom</td>
                </tr>
                <tr>
                    <th>Managed By</th>
                    <td>TypeFox</td>
                    <td>TypeFox</td>
                    <td>You</td>
                </tr>
                <tr>
                    <th>Infrastructure</th>
                    <td>Globally distributed</td>
                    <td>> 1 geographical regions</td>
                    <td>On-prem or private cloud</td>
                </tr>
                <tr>
                    <th>SLA</th>
                    <td>optional</td>
                    <td>optional</td>
                    <td></td>
                </tr>
                <tr>
                    <th><strong>Support</strong></th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><strong>White Labeling</strong></th>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>&emsp;&emsp;Theia</th>
                    <td></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th>&emsp;&emsp;Gitpod</th>
                    <td></td>
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
                    <th>&emsp;&emsp;Analytics</th>
                    <td></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th>Git Integeration</th>
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
                    <td>public only</td>
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
                    <th><img src={Gitlab} alt="GitLab Logo"/> Gitlab self-hosted</th>
                    <td>public only</td>
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
                    <th>Custom Authentication</th>
                    <td>OAuth2</td>
                    <td>OAuth2</td>
                    <td>OAuth2</td>
                </tr>
                <tr className="buttons">
                    <th></th>
                    <td><Link to="#" className="btn btn--cta">Start for Free</Link></td>
                    <td><Link to="/contact" className="btn btn--cta">Contact Sales</Link></td>
                    <td><Link to="/self-hosted" className="btn">Host Yourself</Link></td>
                </tr>
            </tbody>
        </PricingTable>

        {/* ----- Didn't find ----- */}

        <ActionCard
            title='Didn’t find what you’re looking for?'
            text='Please get in touch. We’re happy to answer your questions.'
            anchors={[{href: 'https://calendly.com/gitpod/sales',text: 'Schedule a Call'}, {href: '/contact', text: 'Contact'}]}
        />

    </IndexLayout>
)

export default RecrutingPage
