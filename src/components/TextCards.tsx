import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledTextCards = styled.section`
    .text-cards {
        display: flex;
        flex-wrap: wrap;

        @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
            justify-content: space-between;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
            align-items: center;
        }
    }
`

interface TextCardsProps {
  title?: string
}

const TextCards: React.SFC<TextCardsProps> = ({ title, children }) => (
  <div className="row">
    <StyledTextCards>
      {title ? <h2>{title}</h2> : null}
      <div className="text-cards">{children}</div>
    </StyledTextCards>
  </div>
)

export default TextCards
