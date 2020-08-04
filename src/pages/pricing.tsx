import React, { useState } from 'react'

import IndexLayout from '../layouts'
import PricingBoxes from '../components/pricing/PricingBoxes'
import Plans from '../components/pricing/Plans'
import SelfHostedFAQs from '../components/pricing/SelfHostedFAQs'
import MoreInfo from '../components/MoreInfo'
import { MoreInfoContents } from '../utils/moreInfoContents'

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

      <div className="pattern-bg">
        <div className="row">{isRendered ? <SelfHostedFAQs /> : <Plans />}</div>
      </div>

      <MoreInfo {...contents} />
    </IndexLayout>
  )
}

export default PricingPage
