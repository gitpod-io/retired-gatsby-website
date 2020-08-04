import React from 'react'

import styled from '@emotion/styled'
import { colors, borders } from '../styles/variables'
import link from '../utils/link'

const StyledActionCard = styled.section`
  display: block;
  max-width: 60rem;
  margin: 8rem auto;
  padding: 5rem 3rem;
  text-align: center;
  background: ${colors.offWhite};
  border: ${borders.light2};
  border-radius: 3px;

  h2 {
    font-size: 2.8rem;
  }

  p {
    margin: -3rem 0 4rem;
  }

  .btn-wrapper {
    justify-content: center;
  }
`

interface Anchor {
  text: string
  href: string
  subject?: string
}

interface ActionCardProps {
  title: string
  text: string | JSX.Element
  anchors: Anchor[]
}

const ActionCard: React.SFC<ActionCardProps> = ({ title, text, anchors }) => (
  <StyledActionCard>
    <h2 className="centered-underline">{title}</h2>
    {typeof text === 'string' ? <p>{text}</p> : text}
    <div className="btn-wrapper">
      {link(anchors[0].href, anchors[0].text, anchors[0].subject)}
      {anchors[1] ? link(anchors[1].href, anchors[1].text, anchors[1].subject) : null}
    </div>
  </StyledActionCard>
)

export default ActionCard
