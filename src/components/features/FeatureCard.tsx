import React from 'react'

import styled from '@emotion/styled'
import { sizes, shadows } from '../../styles/variables'

const StyledFeatureCard = styled.div<{caption: boolean, isIllustration?: boolean}>`
    display: flex;
    background: var(--offWhite);
    border: 3px solid var(--offWhite);
    box-shadow: ${shadows.light};

    @media(max-width: ${sizes.breakpoints.md}) {
        flex-direction: column-reverse;
    }

    .text-box {
        padding: 8rem 3rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 5rem 3rem;
        }

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
        background: var(--white);

        @media(min-width: ${sizes.breakpoints.md}) {
            width: 66%;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            min-height: 38rem;
        }

        @media(max-width: 600px) {
            min-height: 26rem;
        }

        img, object {
            display: inline-block;
            width: 85%;
            height: 95%;
            transform: ${({isIllustration}) => isIllustration ? 'scale(.9)' : null };

            @media(max-width: 600px) {
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
    paragraphs: JSX.Element
    more?: JSX.Element
    strong?: string
    img: JSX.Element,
    id?: string,
    caption?: string,
    colorTextBox?: string
    colorImgBox?: string
    isIllustration?: boolean
}

const FeatureCard: React.SFC<FeatureCardProps> = ({ title, paragraphs, more, strong, img , id, caption, colorTextBox, colorImgBox, isIllustration }) => (
    <div className="row">
        <StyledFeatureCard id={id} caption={ caption ? true : false} isIllustration={isIllustration} style={ colorTextBox ? { borderColor: colorTextBox } : {} }>
            <div className="text-box" style={ colorTextBox ? { background: colorTextBox } : {} }>
                <h3>{title}</h3>
                { paragraphs }
                { strong ? <p><strong>{strong}</strong></p> : null }
                { more ? more : null }
            </div>
            <div className="img-box" style={ colorImgBox ? { background: colorImgBox } : {} }>
                { img }
                { caption ? <span className="caption">{caption}</span> : null }
            </div>
        </StyledFeatureCard>
    </div>
)

export default FeatureCard
