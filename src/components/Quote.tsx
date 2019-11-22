import React from 'react'

import styled from '@emotion/styled'
import QuoteIcon from '../resources/quote.png'
import { colors, sizes } from '../styles/variables'

const StyledQuote = styled.section`
    padding: 16rem 0;
    margin: 0 auto;

    h4 {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: ${colors.text};
        font-size: 2.5rem;
        font-weight: 400;

        @media(max-width: ${sizes.breakpoints.sm}) {
            font-size: 2.3rem;
        }

        span {
            @media(max-width: ${sizes.breakpoints.sm}) {
                width: 100%;
            }
        }

        img {
            height: 7rem;

            &:first-of-type {
                margin-right: 3rem;
            }

            &:last-of-type {
                transform: rotate(-180deg);
                margin-left: 3rem;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                display: none;
            }
        }
    }
`

interface QuoteProps {
    title: string
}

const Quote: React.SFC<QuoteProps> = ({title}) => (
        <StyledQuote className="quote row">
            <h4 className="quote__text">
                <img src={QuoteIcon} alt="Left Quotation"/>
                <span>{title}</span>
                <img src={QuoteIcon} alt="Right Quotation"/>
            </h4>
        </StyledQuote>
)

export default Quote
