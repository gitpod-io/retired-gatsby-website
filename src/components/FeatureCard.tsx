import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes, shadows } from '../styles/variables'

const StyledFeatureCard = styled.div`
    display: flex;
    background: ${colors.offWhite};
    border: 3px solid ${colors.offWhite};
    box-shadow: ${shadows.light};

    @media(max-width: ${sizes.breakpoints.md}) {
        flex-direction: column;
    }

    .text-box {
        padding: 8rem 3rem;
        @media(min-width: ${sizes.breakpoints.md}) {
            width: 34%;
        }
    }

    .img-box {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${colors.white};

        @media(min-width: ${sizes.breakpoints.md}) {
            width: 66%;
        }

        img {
            width: 90%;
            height: 95%;

            @media(max-width: ${sizes.breakpoints.sm}) {
                width: 100%;
            }
         }
    }

    p:last-of-type {
        margin-top: 5rem;
    }
`

interface FeatureCardProps {
    title: string
    paragraphs: (string | JSX.Element)[]
    more?: JSX.Element
    strong?: string
    img: JSX.Element,
    id?: string
}

const FeatureCard: React.SFC<FeatureCardProps> = ({ title, paragraphs, more, strong, img , id }) => (
    <div className="row">
        <StyledFeatureCard id={id}>
            <div className="text-box">
                <h3>{title}</h3>
                { paragraphs.map((p, i) => <p key={i}>{p}</p>) }
                { strong ? <p><strong>{strong}</strong></p> : null }
                { more ? more : null }
            </div>
            <div className="img-box">
                {img}
            </div>
        </StyledFeatureCard>
    </div>
)

export default FeatureCard
