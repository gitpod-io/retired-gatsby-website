import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows } from '../styles/variables'
import { Link } from 'gatsby'

const StyledActionCard = styled.section`
    display: block;
    max-width: 60rem;
    margin: 10rem auto;
    padding: 5rem 3rem;
    text-align: center;
    background: ${colors.offWhite};
    box-shadow: ${shadows.light};

    h2 {
        font-size: 2.8rem;
    }

    p {
        margin: -3rem 0 4rem;
    }

    .btn {
        margin-right: 2rem;
    }
`

interface Anchor {
    text: string
    href: string
}

interface ActionCardProps {
    title: string
    text: string
    anchors: Anchor[]
}

const ActionCard: React.SFC<ActionCardProps> = ({title, text, anchors }) => (
    <StyledActionCard>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={anchors[0].href} className="btn btn--cta btn--normal">{anchors[0].text}</Link>
        { anchors[1] ? <Link to={anchors[1].href} className="btn btn--normal">{anchors[1].text}</Link> : null }
    </StyledActionCard>
)

export default ActionCard
