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
        text: 'All data remains on your infrastructure, as Gitpod can run behind corporate firewalls and on air-gapped networks.',
        img: Control
    },
    {
        title: 'GitLab & GitHub Integration',
        text: 'Integrates seamlessly with your Git hosting solution like GitHub Enterprise, GitLab Community Edition, or Enterprise Edition. Bitbucket support is coming soon.',
        img: GithubGitlab
    },
    {
        title: 'Professional Support',
        text: 'Schedule a call with our engineers whenever you need help.',
        img: Support
    },
    {
        title: 'Easy Administration',
        text: 'No need for complicated user management. Simply use OAuth from your Git hosting and enjoy simplicity while retaining full control.',
        img: Adminstration
    }
]

const SelfHostedPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/self-hosted/' title="Self-Hosted">
        <>
            <div className="grey-container">

                {/* ----- Banner ----- */}

                <Banner
                    subtitle="Take Control of Your Source Code"
                    title={<h1>
                        Self-Host Gitpod <br/> on Your Own Infrastructure.
                    </h1>}
                    linkPath="/self-hosted/#install"
                    linkText="Install Now"
                    paragraph="Free for up to 5 Users."
                    img={<object role="presentation" tabIndex={-1} data={Cloud} />}
                />
            </div>

            {/* ----- Section Features ----- */}

            <Features features={features} />

            {/* ----- Section Install ----- */}

            <Install />

            {/* ----- Section Customizations ----- */}

            <ActionCard
                title="Need Help Or Have Questions?"
                text={
                    <React.Fragment>
                        <p>Please reach out. We’re happy to help get <br />your team the perfect Gitpod setup.</p>
                    </React.Fragment>}
                anchors={[{ href: '/contact/', subject: 'I have a question regarding Gitpod Self-Hosted', text: 'Contact' }]}
            />

            {/* ----- Section More About Self Hosting ----- */}

            <Details
                title="More About Gitpod Self-Hosted"
                text="Learn about its requirements, installation steps, and pricing model."
                anchors={[{ href: '/docs/self-hosted/latest/self-hosted/', text: 'Documentation' }, { href: '/pricing/#self-hosted', text: 'Pricing' }]}
            />
        </>
    </IndexLayout>
)

export default SelfHostedPage
