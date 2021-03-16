import React, { useState } from 'react'

import IndexLayout from '../layouts'
import PricingBoxes from '../components/pricing/PricingBoxes'
import Plans from '../components/pricing/Plans'
import PricingFAQs from '../components/pricing/PricingFAQs'
import MoreInfo from '../components/MoreInfo'
import { MoreInfoContents } from '../contents/moreInfoContents'

function isSelfHostedRendered() {
  return typeof window !== `undefined` && window.location.hash === '#self-hosted'
}

const PricingPage = () => {
  const [isRendered, setIsRendered] = useState<boolean>(isSelfHostedRendered())

  const changeIsRendered = (bool: boolean) => {
    setIsRendered(bool)
  }

  const contents = isRendered ? MoreInfoContents : {}

  return (
    <IndexLayout
      canonical="/pricing/"
      title="Pricing"
      description="Gitpod is free for Open Source, and offers productive features for you, your team and your business at reasonable prices."
    >
      <PricingBoxes isRendered={isRendered} changeIsRendered={changeIsRendered} />

      {!isRendered ? (
        <div className="pattern-bg">
          <div className="row">
            <Plans />
          </div>
        </div>
      ) : null}

      <div className="pattern-bg" style={!isRendered ? { margin: '10rem 0' } : {}}>
        <div className="row">
          <PricingFAQs title={isRendered ? 'Self-Hosted' : 'SaaS'} />
        </div>
      </div>

      <MoreInfo backgroundShouldBeWhite={isRendered ? true : false} {...contents} />
    </IndexLayout>
  )
}

export default PricingPage
