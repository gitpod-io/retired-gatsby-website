import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Cloud from '../resources/cloud.png'
import Features from '../components/Features'
import Feature from '../components/Feature'
import Quote from '../components/Quote'
import RecruitingBG from '../resources/recruiting-bg.png'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'
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
                linkPath="#"
                linkText="Choose your Solution"
                img={<img alt="Cloud" src={Cloud}/>}
            />

            {/* ----- Section Features ----- */}

            <Features title="Provide Coding Exercises Within Seconds">
                <Feature
                    title="Controlled Environment"
                    paragraphs={['With Gitpod you eliminate the risk of losing time for code exercises due to broken setup. And it also guarantees that all applicants have the same environment and thereby the same preconditions.', 'Gitpod can guide applicants through exercises without you being involved.']}
                />
                <Feature
                    title="Monitor Action of Applicants"
                    paragraphs={['TBD']}
                />
                <Feature
                    title="Easy to Integrate"
                    paragraphs={['Thanks to custom OAuth, Gitpod is easy to integrate.', 'Use API to create or delete workspaces, and to download workspaces.']}
                />
                <Feature
                    title="Cost Effective"
                    paragraphs={['The costs are based on running workspaces, so that you only need to pay if Gitpod is used.']}
                />
                <Feature
                    title="Interactions During Exercises"
                    paragraphs={['Via live shared workspaces you are able to interact with applicants during their coding exercise.']}
                />
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
        >
            <thead>
                <tr className="header">
                    <th style={{border: 'none', background: 'none'}}>&nbsp;</th>
                    <th>Gitpod.io
                        <span><span>FREE</span> Trail</span>
                    </th>
                    <th>Gitpod Cloud
                        <span><span>FREE</span> Trail</span>
                    </th>
                    <th>Gitpod Self Hosted
                        <span><span>FREE</span> Trail</span>
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
                    <th><img src={Github} alt="Github Logo"/> github.com</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Github} alt="Github Logo"/> Github Enterprise</th>
                    <td>public only</td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Gitlab} alt="Gitlab Logo"/> gitlab.com</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Gitlab} alt="Gitlab Logo"/> Gitlab self-hosted</th>
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
                    <th>Custom Authorization</th>
                    <td>OAuth2</td>
                    <td>OAuth2</td>
                    <td>OAuth2</td>
                </tr>
                <tr>
                    <th></th>
                    <td><Link to="#" className="btn btn--cta">Start for Free</Link></td>
                    <td><Link to="#" className="btn btn--cta">Contact Sales</Link></td>
                    <td><Link to="/self-hosted" className="btn">Host Yourself</Link></td>
                </tr>
            </tbody>
        </PricingTable>

        {/* ----- Didn't find ----- */}

        <ActionCard
            title='Didn’t find what you’re looking for?'
            text='Please, get in touch. We’re happy to answer your questions.'
            anchors={[{href: '/schedule-call',text: 'Schedule a Call'}, {href: '/contact', text: 'Contact'}]}
        />

        <Details
            title="Explore Gitpod"
            text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
            anchors={[{href: '/blog', text: 'See Blog'}, {href: '/features', text: 'See Features'}]}
        />


    </IndexLayout>
)

export default RecrutingPage
