import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Planet from '../resources/planet.png'
import Features from '../components/Features'
import Feature from '../components/Feature'
import Quote from '../components/Quote'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'
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
    <IndexLayout canonical='/enterprise/'>
        <div className="grey-container">

            {/* ----- Banner ----- */}

            <Banner
                subtitle="Gitpod Enterprise"
                title={<h1>Unleash Developer Productivity</h1>}
                paragraph="Implementing Gitpod to your development environment means no more tedious setups, easy onboarding, higher code quality and a greater workflow."
                linkPath="#"
                linkText="Choose your Solution"
                img={<img alt="Planet Earth" src={Planet}/>}
            />

            {/* ----- Section Features ----- */}

            <Features title="Stay in the Flow and Upscale Your Productivity">
                <Feature
                    title="Great Teamwork"
                    paragraphs={['With Gitpod code reviews and spotting bugs becomes more convenient than ever. ', 'Your team can collaborate asynchronously with Gitpod Snapshots, as well as synchronously with life shared workspaces', 'Gitpod also enables cross-team people by not having project setup costs.']}
                     more={<p>Read more about <a href="#">Collaboration</a></p>}
                />
                <Feature
                    title="Less Costs for more Machine Power"
                    paragraphs={['You can use elastic clouds to satisfy your demand as needed.', 'With Gitpod there is no need for many $3000 laptops, a few good servers are already suffice.', 'Also, server resources are more cost-efficient because they are shared resources.']}
                />
                <Feature
                    title="Better and Faster Security"
                    paragraphs={['Host Gitpod yourself and your source code will never be on the developers laptop or workstations.', 'With Gitpod you can roll out new runtimes, libs and frameworks faster, as they only need to be on the server and not on the developers machines.', 'Self-Hosted Gitpod can run in your corporate network, keep your data on your infrastructure, and does not require and internet connection.']}
                    more={<p>Read more about <a href="#">Security</a></p>}
                />
                <Feature
                    title="Smooth Integration"
                    paragraphs={['All Gitpod needs is a Kubernetes cluster.', 'It enables user authorization and integration via your GitHub Enterprise, Gitlab, or Bitbucket.', 'Please contact TypeFox for further customizations.']}
                    logos={['Layer', 'Github', 'Gitlab', 'Git']}
                />
                <Feature
                    title="Full Compatibility"
                    paragraphs={['With Gitpod you can program in any language thanks to LSP. It is based on your runtime, your frameworks, and all the original binaries.', 'Also, it’s fully compatibly with your Docker containers, your VS Code extensions and your Theia extensions. Your workspaces are powerful enough to run a database easily.', 'Thanks to the similar UX to VS Code, Gitpod is a very familiar dev environment.']}
                    more={<p>Read more about <a href="#">Compatibility</a></p>}
                    logos={['VSC', 'Theia', 'Docker']}
                />
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
        >
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
                <td><Link to="/#get-started" className="btn btn--cta">Start for Free</Link></td>
                <td><Link to="#" className="btn btn--cta">Contact Sales</Link></td>
                <td><Link to="#" className="btn">Host Yourself</Link></td>
            </tr>
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

export default EnterprisePage
