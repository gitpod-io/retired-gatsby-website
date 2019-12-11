import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Planet from '../resources/planet.png'
import Features from '../components/Features'
import Feature from '../components/Feature'
import { features } from '../utils/enterprise'
import Quote from '../components/Quote'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import TrustedBy from '../components/TrustedBy'
import EnterpriseBg from '../resources/enterprise-bg.png'
import PricingTable from '../components/PricingTable'
import Circle from '../components/Circle'
import Layer from '../resources/layer.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import { Link } from 'gatsby'
import DWave from '../resources/dwave.svg'
import AppliToolsLogo from '../resources/aplitools.svg'
import Gatsby from '../resources/gatsby.svg'
import FreeCodeCamp from '../resources/freecodecamp.svg'
import CodeInstituteLogo from '../resources/code.png'
import FourGeeksAcademyLogo from '../resources/4-geeks-academy.png'

const EnterprisePage: React.SFC<{}> = () => (
    <IndexLayout canonical='/enterprise/' title="Enterprise">
        <div className="grey-container">

            {/* ----- Banner ----- */}

            <Banner
                subtitle="Gitpod Enterprise"
                title={<h1>Unleash Developer Productivity</h1>}
                paragraph="Implementing Gitpod to your development environment means no more tedious setups, easy onboarding, higher code quality and a greater workflow."
                linkPath="/enterprise/#enterprise"
                linkText="Choose your Solution"
                img={<img alt="Planet Earth" src={Planet}/>}
            />

            {/* ----- Section Features ----- */}

            <Features title="Stay in the Flow and Upscale Your Productivity">
                {
                    features.map((f, i) => (
                        <Feature
                            key={i}
                            title={f.title}
                            paragraphs={f.paragraphs}
                            more={f.more}
                            logos={f.logos}
                        />
                    ))
                }
            </Features>
        </div>

        {/* ----- Section Trusted By ----- */}

        <TrustedBy
            brands={[
                    {
                        alt: 'DWave Logo',
                        url: 'https://www.dwavesys.com/',
                        svg: DWave
                    },
                    {
                        alt: 'Aplitools Logo',
                        url: 'https://applitools.com/',
                        svg: AppliToolsLogo
                    },
                    {
                        alt: 'Gatsby Logo',
                        url: 'https://www.gatsbyjs.org/',
                        svg: Gatsby
                    },
                    {
                        alt: '4 Geeks Academy Logo',
                        url: 'https://www.4geeksacademy.co/',
                        svg: FourGeeksAcademyLogo
                    },
                    {
                        alt: 'freeCodeCamp.org',
                        url: 'https://www.freecodecamp.org/',
                        svg: FreeCodeCamp
                    },
                    {
                        alt: 'Code Institute',
                        url: 'https://codeinstitute.net/',
                        svg: CodeInstituteLogo
                    }
                ]}
        />

        {/* ----- Quote ----- */}

        <Quote
            title="It’s our aim to make developers’ life easier!"
        />

        {/* ----- BG ----- */}

        <Bg url={EnterpriseBg} />

        <PricingTable
            title="Pricing Gitpod Enterprise"
            paragraph="You have the choice to either host Gitpod yourself or to use our cloud infrastructure."
            id="enterprise"
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
                    <th>Features</th>
                    <td></td>
                    <td></td>
                    <td></td>
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
                    <th><img src={Gitlab} alt="GitLab Logo"/> GitLab self-hosted</th>
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
                    <td><Link to="/#get-started" className="btn btn--cta">Start for Free</Link></td>
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

    </IndexLayout>
)

export default EnterprisePage
