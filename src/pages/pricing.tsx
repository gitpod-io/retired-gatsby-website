import React from 'react'

import IndexLayout from '../layouts'
import Bg from '../components/Bg'
import PricingBg from '../resources/pricing-bg.png'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'
import PricingBoxes from '../components/pricing/PricingBoxes'
import Plans from '../components/pricing/Plans'
import Business from '../components/pricing/Business'


const PricingPage: React.SFC<{}> = () => (
    <IndexLayout
        canonical='/pricing/'
        title="Pricing"
        description="Gitpod is free for Open Source, and offers productive features for you, your team and your business at reasonable prices."
    >
        <PricingBoxes />
        <div className="grey-container">
            <div className="row">
                <Plans />
            </div>
        </div>

        <div className="row">

            <Business />

            <Bg url={PricingBg} />

            <ActionCard
                title='Any Questions?'
                text='We’re happy to answer them. Please get in touch.'
                anchors={[{ href: '/contact/', subject: "I have a question regarding pricing", text: 'Contact' }]}
            />

            <Details
                title="Explore Gitpod"
                text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                anchors={[{ href: '/features/', text: 'See Features' }, { href: '/blog/', text: 'See Blog' }]}
            />

        </div>
    </IndexLayout>
)

export default PricingPage
