import React from 'react'

import styled from '@emotion/styled'
import QuoteIcon from '../resources/quote.svg'
import { colors, sizes } from '../styles/variables'

const StyledQuote = styled.section`
    padding: 12rem 0;
    margin: 0 auto;

    @media(max-width: ${sizes.breakpoints.md}) {
        padding: 8rem 0;
    }

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

        object {
            height: 7rem;

            &:first-of-type {
                transform: rotate(-180deg);
                margin-right: 3rem;
            }

            &:last-of-type {
                margin-left: 3rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                height: 5rem;
                margin: 0 2rem;
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
                <object data={QuoteIcon}/>
                <span>{title}</span>
                <object data={QuoteIcon}/>
            </h4>
        </StyledQuote>
)

export default Quote
