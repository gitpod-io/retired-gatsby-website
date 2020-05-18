import React from 'react'

import styled from '@emotion/styled'
import { featuresCardsData } from '../../utils/features'
import FeatureCard from './FeatureCard'

const Styled = styled.div`

    .features-list {

        & > div {
            &:not(:last-child) {
                margin-bottom: 10rem;
            }
        }
    }

    .other-features {
        & > div {
            margin-bottom: 10rem;
        }
    }
`

const FeaturesList = () => (
    <Styled>
        <section className="features-list">
            {
                featuresCardsData.map(f => <FeatureCard
                        key={f.id}
                        title={f.title}
                        paragraphs={f.paragraphs}
                        more={f.more}
                        strong={f.strong}
                        img={f.img}
                        id={f.id}
                        caption={f.caption}
                        isIllustration={f.isIllustration}
                        colorTextBox={`var(--offWhite)`}
                        colorImgBox={`var(--white)`}
                    />
                )
            }
        </section>
    </Styled>
)

export default FeaturesList
