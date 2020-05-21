import React from 'react'

import styled from '@emotion/styled'
import Feature, { FeatureProps } from './Feature'

const StyledFeatures = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: 900px) {
        flex-direction: column;

        & > div {
            max-width: 400px;
        }
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
