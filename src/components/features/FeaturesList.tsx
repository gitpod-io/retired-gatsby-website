import React from 'react'

import styled from '@emotion/styled'
import { featuresCardsData } from '../../utils/features'
import FeatureCard from './FeatureCard'
import { colors, sizes, shadows } from '../../styles/variables'


const Styled = styled.div`

    .features-list {

        & > div {
            &:not(:last-child) {
                margin-bottom: 10rem;
            }
        }

        .grey-container {
            padding: 10rem 0;
        }

        .feature {
            padding: 5rem 7rem;
            background: ${colors.white};
            box-shadow: ${shadows.light};

            &:not(:last-child) {
                margin-bottom: 8rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 2rem 1rem;
            }

            img {
                display: block;
                max-width: 90rem;
                width: 100%;
                margin: 4rem 0;
            }

            p {
                max-width: 80rem;
            }

            h3 {
                font-weight: 400;

                font-size: 2.6rem;

                @media(max-width: ${sizes.breakpoints.md}) {
                    font-size: 2rem;
                }

                @media(max-width: ${sizes.breakpoints.sm}) {
                    font-size: 1.8rem;
                }
            }

            .table-container {
                margin: 6rem 0;
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
                featuresCardsData.map((f, i) => {
                    const isGreyish = (i + 1) % 3 === 0;
                    const featureCard = <FeatureCard
                        title={f.title}
                        paragraphs={f.paragraphs}
                        more={f.more}
                        strong={f.strong}
                        img={f.img}
                        id={f.id}
                        caption={f.caption}
                        isIllustration={f.isIllustration}
                        colorTextBox={colors.offWhite}
                        colorImgBox={colors.white}
                    />
                    return isGreyish ?
                        <div key={f.id} className="grey-container">
                            <div className="other-features">
                                {featureCard}
                            </div>
                        </div>
                        :
                        <div key={f.id}>
                            {featureCard};
                            </div>

                })
            }
        </section>
    </Styled>
)

export default FeaturesList
