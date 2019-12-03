import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes, shadows } from '../styles/variables'

const StyledFeatureCard = styled.div<{caption: boolean}>`
    display: flex;
    background: ${colors.offWhite};
    border: 3px solid ${colors.offWhite};
    box-shadow: ${shadows.light};

    @media(max-width: ${sizes.breakpoints.md}) {
        flex-direction: column-reverse;
    }

    .text-box {
        min-width: 27rem;
        padding: 8rem 3rem;

        @media(min-width: ${sizes.breakpoints.md}) {
            width: 34%;
        }
    }

    .img-box {
        position: relative;
        display: flex;
        justify-content: center;
        min-height: ${(props) => props.caption ? '30rem' : null };
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

        .caption {
            position: absolute;
            bottom: 2rem;
            right: 2rem;
            opacity: .7;
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
    id?: string,
    caption?: string
}

const FeatureCard: React.SFC<FeatureCardProps> = ({ title, paragraphs, more, strong, img , id, caption }) => (
    <div className="row">
        <StyledFeatureCard id={id} caption={ caption ? true : false}>
            <div className="text-box">
                <h3>{title}</h3>
                { paragraphs.map((p, i) => <p key={i}>{p}</p>) }
                { strong ? <p><strong>{strong}</strong></p> : null }
                { more ? more : null }
            </div>
            <div className="img-box">
                { img }
                { caption ? <span className="caption">{caption}</span> : null }
            </div>
        </StyledFeatureCard>
    </div>
)

export default FeatureCard
