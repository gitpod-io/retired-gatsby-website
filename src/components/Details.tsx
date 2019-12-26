




import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'

const StyledMore = styled.section`
    margin-bottom: 8rem;

    @media(max-width: 360px) {
        text-align: center;
    }

    p {
        margin: -2rem 0 2rem;
    }


`

interface Anchor {
    text: string
    href: string
}

interface MoreProps {
    title: string
    text: string
    anchors: Anchor[]
}

const More: React.SFC<MoreProps> = ({title, text, anchors}) => (
    <div className="row">
        <StyledMore>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="btn-wrapper">
                <Link to={anchors[0].href} className="btn btn--cta">{anchors[0].text}</Link>
                <br aria-hidden={true}/>
                <Link to={anchors[1].href} className="btn">{anchors[1].text}</Link>
            </div>
        </StyledMore>
    </div>
)

export default More
