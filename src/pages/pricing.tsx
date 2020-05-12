import React, { useState } from 'react'

import IndexLayout from '../layouts'
import PricingBoxes from '../components/pricing/PricingBoxes'
import Plans from '../components/pricing/Plans'
import SelfHostedFAQs from '../components/pricing/SelfHostedFAQs'
import PricingLinks from '../components/pricing/PricingLinks'
import MapGrey from '../resources/map-grey.svg'
import CloudGrey from '../resources/cloud-grey.svg'
import { Link } from 'gatsby'

const pricingLinksContents = {
    selfHosted: {
        img: <img src={CloudGrey} alt="Self Hosted" />,
        title: <>Gitpod <strong>Self-Hosted</strong></>,
        text: <>
                <h3>Unleash Developer Productivity.</h3>
                Run your own Gitpod and enjoy automated setups, better collaboration, higher code quality and a more streamlined workflow.
              </>,
        links: <>
            <Link to="/docs/" className="btn btn--cta">See Docs</Link>
                <Link to="/enterprise/" className="btn">See Enterprise Solution</Link>
        </>
    },
    cloud: {
        img: <img src={MapGrey} alt="Explore Gitpod" />,
        title: <><strong>Explore</strong> Gitpod</>,
        text: <>
                Learn about collaboration, shared workspace and snapshots, supported programming languages, and much more.
              </>,
        links: <>
            <Link to="/features/" className="btn btn--cta">See Features</Link>
            <Link to="/docs/" className="btn">See Docs</Link>
        </>
    }
}

function isSelfHostedRendered() {
    return typeof window !== `undefined` && window.location.hash === '#self-hosted';
}

const PricingPage = () => {

    const [isRendered, setIsRendered] = useState<boolean>(isSelfHostedRendered())

    const changeIsRendered = (bool: boolean) => {
        setIsRendered(bool)
    }

    const pricingLinksData = isRendered ? pricingLinksContents.selfHosted : pricingLinksContents.cloud

    return (
        <IndexLayout
            canonical='/pricing/'
            title="Pricing"
            description="Gitpod is free for Open Source, and offers productive features for you, your team and your business at reasonable prices."
        >
            <PricingBoxes
                isRendered={isRendered}
                changeIsRendered={changeIsRendered}
            />
            <div className="grey-container">
                <div className="row">
                    { isRendered ? <SelfHostedFAQs /> : <Plans /> }
                </div>
            </div>

           <PricingLinks {...pricingLinksData} />

        </IndexLayout>
    )
}

export default PricingPage
