import React from 'react'

import styled from '@emotion/styled'
import FeatureItem, { FeatureItemProps } from './FeatureItem'
import { sizes } from '../styles/variables'

const StyledFeatures = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: ${sizes.breakpoints.lg}) {
        margin-top: -5rem;
    }

    @media(max-width: 900px) {
        flex-direction: column;

        & > div {
            max-width: 400px;
        }
    }
`

const FeaturesSection = ({ features }: { features: FeatureItemProps[] }) => (
    <section>
        <StyledFeatures className="row">
            {
                features.map(
                    (feature: FeatureItemProps, i) => <FeatureItem
                        key={`${i}feature.title`}
                        {...feature}
                    />
                )
            }
        </StyledFeatures>
    </section>
)

export default FeaturesSection
