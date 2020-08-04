import React from 'react'

import styled from '@emotion/styled'
import FeatureCard, { FeatureCardProps } from './FeatureCard'

const Styled = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  position: relative;
`

const FeatureCards = ({ features }: { features: FeatureCardProps[] }) => {
  return (
    <Styled>
      <div className="container">
        {features.map((feature: FeatureCardProps, i) => (
          <FeatureCard key={`${feature.alt}+${i}`} {...feature} direction={i % 2 === 0 ? 'right' : ''} />
        ))}
      </div>
    </Styled>
  )
}

export default FeatureCards
