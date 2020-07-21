import React from 'react'

import styled from '@emotion/styled'
import FeatureBox from './FeatureBox'
import { featuresCardsData } from '../../contents/features'
import { sizes } from '../../styles/variables'
import IceStick from '../../resources/ice-stick.svg'

const Styled = styled.div`
    .intro {
        padding: 8rem 0 12rem;

        .ice-stick {
            display: block;
            width: 10rem;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
        }

        .features {
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: repeat(5, 1fr);
            justify-items: center;
            align-items: center;
            margin-top: 4rem;
            position: relative;
            max-width: 900px;
            margin: 6rem auto 0; 

            @media(max-width: ${sizes.breakpoints.lg}) {
                grid-template-columns: repeat(5, 1fr);
            }

            @media(max-width: 1000px) {
                grid-template-columns: repeat(4, 1fr);
            }

            @media(max-width: 620px) {
                grid-template-columns: repeat(3, 1fr);
            }


            @media(max-width: 500px) {
                display: none;
            }

            & > div {
                min-width: 14rem;

                @media(min-width: 1001px) {
                    min-width: 17rem;

                    &:nth-child(n + 6) {
                       transform: translateX(50%);
                    }
                }
            }
        }
    }
`

const Intro = () => (
    <div className="row">
        <Styled>
            <section className="intro pattern">
                <object role="presentation" tabIndex={-1} data={IceStick} className="ice-stick" />
                <h1>Features</h1>
                <div className="features">
                    {
                        featuresCardsData.map((f, i) =>
                            <FeatureBox
                                key={i}
                                alt={f.title}
                                img={f.icon}
                                text={f.iconText || f.iconTitle}
                                path={f.id}
                            />
                        )
                    }
                </div>
            </section>
        </Styled>
    </div>
)

export default Intro
