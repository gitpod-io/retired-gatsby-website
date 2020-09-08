import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Planet from '../resources/planet.svg'
import TextCards from '../components/TextCards'
import TextCard from '../components/TextCard'
import Quote from '../components/Quote'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import EnterpriseBg from '../resources/enterprise-bg.png'
import PricingTable from '../components/PricingTable'
import Circle from '../components/Circle'
import Bitbucket from '../resources/bitbucket.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import { Link } from 'gatsby'
import { textCardsData } from '../contents/enterprise'

const EnterprisePage: React.SFC<{}> = () => (
    <IndexLayout
        canonical='/enterprise/'
        title="Enterprise"
        description="Adding Gitpod to your development tools means less waiting, faster onboarding, faster development cycles, higher code quality, and a smooth consistent workflow."
    >

        <Banner
            subtitle="Gitpod Enterprise"
            title={<h1>Unleash Developer Productivity</h1>}
            paragraph="Adding Gitpod to your development tools means less waiting, faster onboarding, faster development cycles, higher code quality, and a smooth consistent workflow."
            linkPath="/enterprise/#enterprise"
            linkText="Choose your Solution"
            img={<object role="presentation" tabIndex={-1} data={Planet} />}
        />

        <div className="grey-container">
            <TextCards title="Stay in the Flow and Scale Up Your Productivity">
                {
                    textCardsData.map((f, i) => (
                        <TextCard
                            key={i}
                            title={f.title}
                            paragraphs={f.paragraphs}
                            logos={f.logos}
                        />
                    ))
                }
            </TextCards>
        </div>

        {/* ----- Quote ----- */}

        <Quote
            title="It’s our aim to make developers’ life easier!"
        />

        {/* ----- BG ----- */}

        <Bg url={EnterpriseBg} />

        <PricingTable
            title="Gitpod Enterprise Pricing"
            paragraph="You have the choice to either host Gitpod yourself or to use our cloud infrastructure."
            id="enterprise"
            rows={3}
        >
            <thead>
                <tr className="header">
                    <th style={{ border: 'none', background: 'none' }}>&nbsp;</th>
                    <th>Gitpod Managed
                        <span>&nbsp;</span>
                    </th>
                    <th>Gitpod Self-Hosted
                        <span><span>FREE</span> Trial</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Pricing</th>
                    <td>Starting at $3000 per month</td>
                    <td>$20 per user per month</td>
                </tr>
                <tr>
                    <th>Domain</th>
                    <td>Custom</td>
                    <td>Custom</td>
                </tr>
                <tr>
                    <th>Managed By</th>
                    <td>Gitpod</td>
                    <td>You</td>
                </tr>
                <tr>
                    <th>Infrastructure</th>
                    <td>> 1 geographical regions</td>
                    <td>On-prem or private cloud</td>
                </tr>
                <tr>
                    <th>SLA</th>
                    <td><Circle /></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Support</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Github} alt="GitHub Logo" /> github.com</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Github} alt="GitHub Logo" /> GitHub Enterprise</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Gitlab} alt="GitLab Logo" /> gitlab.com</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Gitlab} alt="GitLab Logo" /> GitLab Self-Managed</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Bitbucket} alt="Bitbucket Logo" /> Bitbucket</th>
                    <td>Soon</td>
                    <td>Soon</td>
                </tr>
                <tr>
                    <th>Custom Authentication</th>
                    <td>OAuth2</td>
                    <td>OAuth2</td>
                </tr>
                <tr>
                    <th>Custom Branding</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr className="buttons">
                    <th></th>
                    <td><Link to="/contact/" state={{ subject: "I have a question regarding Gitpod Enterprise" }} className="btn btn--cta">Contact Sales</Link></td>
                    <td><Link to="/self-hosted/" className="btn">Host Yourself</Link></td>
                </tr>
            </tbody>
        </PricingTable>

        <ActionCard
            title='Didn’t find what you’re looking for?'
            text='Please get in touch. We’re happy to answer your questions.'
            anchors={[{ href: 'https://calendly.com/gitpod/sales', text: 'Schedule a Call' }, { href: '/contact/', subject: "I have a question regarding Gitpod Enterprise", text: 'Contact' }]}
        />

    </IndexLayout>
)

export default EnterprisePage
