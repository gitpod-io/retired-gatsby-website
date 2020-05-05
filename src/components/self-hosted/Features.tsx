import React from 'react'

import styled from '@emotion/styled'
import Feature, { FeatureProps } from './Feature'
import { sizes } from '../../styles/variables'

const StyledFeatures = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: ${sizes.breakpoints.lg}) {
        flex-direction: column;
    }
`

const Features = ({ features }: { features: FeatureProps[] }) => (
    <section>
        <StyledFeatures className="row">
            {
                features.map(
                    (feature: FeatureProps, i) => <Feature
                        key={`${i}feature.title`}
                        {...feature}
                    />
                )
            }
        </StyledFeatures>
    </section>
)

export default Features
