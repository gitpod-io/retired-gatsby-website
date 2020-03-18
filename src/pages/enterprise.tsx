import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Planet from '../resources/planet.svg'
import Features from '../components/Features'
import Feature from '../components/Feature'
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
import AppliToolsLogo from '../resources/aplitools.svg'
import Gatsby from '../resources/gatsby.svg'
import FreeCodeCamp from '../resources/freecodecamp.svg'
import CodeInstituteLogo from '../resources/code.png'
import FourGeeksAcademyLogo from '../resources/4-geeks-academy.png'
import TheiaIDELogo from '../resources/theia-grey.svg'

import { Link } from 'gatsby'

export const features = [
    {
        title: 'Better Teamwork',
        paragraphs: ['With Gitpod, reviewing code and finding bugs becomes more convenient than ever. ', 'Your team can collaborate asynchronously with Gitpod Snapshots, and synchronously with live-shared workspaces', 'Gitpod also makes it easy for non-developers to open a workspace.'],
        // more:<p>Read more about <Link to="/docs/sharing-and-collaboration/">Collaboration</Link></p>
    },
    {
        title: "Less Costs for More Machine Power",
        paragraphs: ['You can use elastic clouds to satisfy your demand as needed.', 'With Gitpod there is no need for many $3000 laptops, a few good servers are already enough.', 'Servers are also more cost-effective because they are shared resources.']
    },
    {
        title: "More Secure",
        paragraphs: ['Host Gitpod yourself and your source code will never leave your corporate infrastructure.', 'With Gitpod you can roll out new runtimes, libraries and frameworks faster, as they only need to be on the server and not on developer laptops and workstations.', 'Self-Hosted Gitpod runs on your corporate network, keeps your data in your infrastructure, and does not require an internet connection.'],
        // more: <p>Read more about <a href="#">Security</a></p>
    },
    {
        title: "Smooth Integration",
        paragraphs: ['All Gitpod needs is a Kubernetes cluster.', 'It enables user authentication and integration with your GitHub Enterprise, GitLab, or Bitbucket.', <>Please <Link to="/contact/"  state={{ subject: 'I have a question regarding Gitpod Enterprise' }}>contact us</Link> for further customizations.</>],
        logos: ['Layer', 'Github', 'Gitlab', 'Git']
    },
    // {
    //     title: "Full Compatibility",
    //     paragraphs: ['With Gitpod you can program in any language thanks to LSP. It is based on your runtime, your frameworks, and all the original binaries.', 'Also, it’s fully compatibly with your Docker containers, your VS Code extensions and your Theia extensions. Your workspaces are powerful enough to run a database easily.', 'Thanks to the similar UX to VS Code, Gitpod is a very familiar dev environment.'],
    //     // more: <p>Read more about <a href="#">Compatibility</a></p>,
    //     logos: ['VSC', 'Theia', 'Docker']
    // }
]

const EnterprisePage: React.SFC<{}> = () => (
    <IndexLayout 
        canonical='/enterprise/' 
        title="Enterprise" 
        description="Adding Gitpod to your development tools means less waiting, faster onboarding, faster development cycles, higher code quality, and a smooth consistent workflow."
    >
        <div className="grey-container">

            <Banner
                subtitle="Gitpod Enterprise"
                title={<h1>Unleash Developer Productivity</h1>}
                paragraph="Adding Gitpod to your development tools means less waiting, faster onboarding, faster development cycles, higher code quality, and a smooth consistent workflow."
                linkPath="/enterprise/#enterprise"
                linkText="Choose your Solution"
                img={<object role="presentation" tabIndex={-1} data={Planet} />}
            />

            <Features title="Stay in the Flow and Scale Up Your Productivity">
                {
                    features.map((f, i) => (
                        <Feature
                            key={i}
                            title={f.title}
                            paragraphs={f.paragraphs}
                            logos={f.logos}
                        />
                    ))
                }
            </Features>
        </div>

        <TrustedBy
            brands={[
                {
                    alt: 'freeCodeCamp.org',
                    url: 'https://www.freecodecamp.org/',
                    svg: FreeCodeCamp,
                    className: 'fcc'
                },
                {
                    alt: 'Gatsby Logo',
                    url: 'https://www.gatsbyjs.org/',
                    svg: Gatsby
                },
                {
                    alt: 'Theia Ide Logo',
                    url: 'https://theia-ide.org',
                    svg: TheiaIDELogo
                },
                {
                    alt: 'Code Institute',
                    url: 'https://codeinstitute.net/',
                    svg: CodeInstituteLogo
                },
                {
                    alt: 'Aplitools Logo',
                    url: 'https://applitools.com/',
                    svg: AppliToolsLogo
                },
                {
                    alt: '4 Geeks Academy Logo',
                    url: 'https://www.4geeksacademy.co/',
                    svg: FourGeeksAcademyLogo
                },
            ]}
        />

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
                    <td>$20 per user</td>
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
                    <th><img src={Layer} alt="Bitbucket Logo" /> Bitbucket</th>
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
