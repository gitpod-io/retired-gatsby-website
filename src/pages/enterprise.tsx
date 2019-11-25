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

const EnterprisePage: React.SFC<{}> = () => (
    <IndexLayout canonical='/enterprise/'>
        <div className="grey-container">

            {/* ----- Banner ----- */}

            <Banner
                subtitle="Gitpod Enterprise"
                title={<h1>Unleash Developer Productivity</h1>}
                paragraph="Implementing Gitpod to your development environment means no more tedious setups, easy onboardiing, higher code quality and a greater workflow."
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

        <TrustedBy />

        {/* ----- Quote ----- */}

        <Quote
            title="It’s our aim to make developers’ life easier!"
        />

        {/* ----- BG ----- */}

        <Bg url={EnterpriseBg} />

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
