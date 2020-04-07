import React from 'react'

import styled from '@emotion/styled'
import FeatureBox from './FeatureBox'
import { featuresCardsData } from '../../utils/features'
import IceStick from '../../resources/ice-stick.svg'
import { sizes } from '../../styles/variables'

const Styled = styled.div`
    .intro {
        padding-top: 3rem;

        .ice-stick {
            display: block;
            width: 12rem;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
        }

        .features {
            display: grid;
            grid-row-gap: 3rem;
            grid-column-gap: 2rem;
            grid-template-columns: repeat(5, 1fr);
            justify-items: center;
            align-items: center;
            margin-top: 4rem;
            position: relative;

            @media(max-width: ${sizes.breakpoints.lg}) {
                grid-template-columns: repeat(5, 1fr);
            }

            @media(max-width: 960px) {
                grid-template-columns: repeat(4, 1fr);
            }

            @media(max-width: 600px) {
                grid-template-columns: repeat(3, 1fr);
            }


            @media(max-width: 500px) {
                display: none;
            }

            & > div {

                @media(min-width: 961px) {
                    min-width: 17rem;
                }

                @media(max-width: 960px) {
                    min-width: 13rem;
                    max-width: 18rem;
                }

                @media(min-width: ${sizes.breakpoints.lg}) {
                    min-width: 19rem;
                }
 
                @media(min-width: 961px) {
                    &:nth-child(n + 6) {
                       transform: translateX(50%);
                    }
                }
            }
        }
    }
`

const Intro = () => (
   <Styled>
        <section className="intro" id="top">
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
)

export default Intro
