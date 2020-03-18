import React from 'react'

import styled from '@emotion/styled'
import FeatureBox from './FeatureBox'
import { featuresCardsData } from '../../utils/features'
import IceStick from '../../resources/ice-stick.svg'
import { sizes } from '../../styles/variables'

const Styled = styled.div`
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
            display: grid;
            grid-gap: 3rem;
            grid-template-columns: repeat(5, 1fr);
            justify-items: center;
            align-items: center;
            margin-top: 6rem;
            position: relative;

            @media(max-width: ${sizes.breakpoints.lg}) {
                grid-template-columns: repeat(4, 1fr);
            }

            @media(max-width: 960px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                grid-template-columns: repeat(2, 1fr);               
            }

            @media(max-width: 500px) {
                display: none;
            }

            & > div {
                @media(min-width: ${sizes.breakpoints.md}) {
                    width: 18%;
                }

                @media(max-width: ${sizes.breakpoints.md}) {
                    min-width: 22rem;
                    max-width: 22rem;
                }
 
                @media(min-width: ${sizes.breakpoints.lg}) {
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
