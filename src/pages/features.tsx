import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import IceStick from '../resources/ice-stick.png'
import { features } from '../utils/features'
import FeatureBox from '../components/FeatureBox'

const StyledFeaturesPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Intro ----- */
    /* ------------------------------------------- */

    .intro {
        padding-top: 5rem;

        .ice-stick {
            display: block;
            width: 12rem;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
        }

        .features {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 6rem;

            & > div {
                width: 18%;
                margin-bottom: 3rem;
            }
        }
    }


`

const FeaturesPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/features/'>
        <StyledFeaturesPage>
            <div className="grey-container">
                <div className="row">
                    <section className="intro">
                        <img alt="Ice Stick" src={IceStick} className="ice-stick"/>
                        <h1>Features</h1>
                        <div className="features">
                            {
                                features.map((f, i) =>
                                    <FeatureBox
                                        alt={f.alt}
                                        img={f.img}
                                        text={f.text}
                                    />
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>
        </StyledFeaturesPage>
    </IndexLayout>
)

export default FeaturesPage
