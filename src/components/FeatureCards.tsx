import React from 'react'

import styled from '@emotion/styled'
import { FeatureCardProps } from './FeatureCard'
import FeatureCard from './FeatureCard'

const Styled = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  position: relative;
`

const FeatureCards = ({ features, opposite }: { features: FeatureCardProps[]; opposite?: boolean }) => {
  return (
    <Styled>
      <div className="container">
        {features.map((feature: FeatureCardProps, i) => {
          let direction
          if (opposite) {
            direction = !(i % 2 == 0) ? 'right' : ''
          } else {
            direction = i % 2 == 0 ? 'right' : ''
          }
          return <FeatureCard key={`${feature.alt}+${i}`} {...feature} direction={direction} opposite={opposite} />
        })}
      </div>
    </Styled>
  )
}

export default FeatureCards
