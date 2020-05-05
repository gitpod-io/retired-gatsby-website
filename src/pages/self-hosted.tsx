import React from 'react'

import IndexLayout from '../layouts'
import Cloud from '../resources/cloud.svg'
import Details from '../components/Details'
import Banner from '../components/Banner'
import ActionCard from '../components/ActionCard'
import { FeatureProps } from '../components/self-hosted/Feature'
import Features from '../components/self-hosted/Features'
import Control from '../resources/control.svg'
import Support from '../resources/support.svg'
import GithubGitlab from '../resources/github-gitlab.svg'
import Adminstration from '../resources/administration.svg'
import Install from '../components/self-hosted/Install'

const features: FeatureProps[] = [
    {
        title: 'Full Data Control',
        text: 'All data remains on your infrastructure, as Gitpod will run on air-gapped networks, disconnected from the internet.',
        img: Control
    },
    {
        title: 'GitLab & GitHub Integration',
        text: 'Highly compatibility with Git Hosting solutions like GitHub Enterprise, GitLab Community Edition or Enterprise Edition. BitBucket integration is coming soon.',
        img: GithubGitlab
    },
    {
        title: 'Professional Support',
        text: 'Schedule a call with our dedicated engineers whenever you need help.',
        img: Support
    },
    {
        title: 'Easy Administration',
        text: 'No need for additional User Management. Simply use OAuth from Git Hosting and enjoy its the privileges.',
        img: Adminstration
    }
]

const SelfHostedPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/self-hosted/' title="Self-Hosted">
        <>
            <div className="grey-container">

                {/* ----- Banner ----- */}

                <Banner
                    subtitle="Self-hosted Gitpod"
                    title={<h1>
                        Keep Your Data on Your Network and
                            <br />
                        Host it on <strong>Your Own Infrastructure.</strong>
                    </h1>}
                    linkPath="/self-hosted/#install"
                    linkText="Install Now"
                    img={<object role="presentation" tabIndex={-1} data={Cloud} />}
                />
            </div>

            {/* ----- Section Features ----- */}

            <Features features={features} />

            {/* ----- Section Install ----- */}

            <Install />

            {/* ----- Section Customizations ----- */}

            <ActionCard
                title="Need Any Customizations?"
                text={
                    <React.Fragment>
                        <p>We’re happy to adjust Gitpod to your needs.<br />Please get in touch for details.</p>
                    </React.Fragment>}
                anchors={[{ href: '/contact/', subject: 'I have a question regarding Self-Hosted Gitpod', text: 'Contact' }]}
            />

            {/* ----- Section More About Self Hosting ----- */}

            <Details
                title="More About Self-Hosting"
                text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                anchors={[{ href: '/enterprise/#enterprise', text: 'Pricing' }, { href: '/docs/self-hosted/latest/self-hosted/', text: 'Documentation' }]}
            />
        </>
    </IndexLayout>
)

export default SelfHostedPage
