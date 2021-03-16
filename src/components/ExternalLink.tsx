import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../styles/variables'

const StyledExternalLink = styled.a`
    .external {
        height: 1.5rem;
        transform: translate(.6rem, .3rem);
        transition: all .2s;
        opacity: 0;
        fill: ${colors.text};

        @media(max-width: ${sizes.breakpoints.md}) {
            opacity: 1;
        }
    }

    &:hover,
    &:active {
        .external {
            opacity: 1;
            fill: ${colors.link};
        }
    }
`

interface ExternalLinkProps {
    text: string
    href: string
    tabIndex?: number
    className?: string,
    onBlur?: any
}

const ExternalLink: React.SFC<ExternalLinkProps> = ({href, text, tabIndex, className, onBlur}) => (
    <StyledExternalLink href={href} target="_blank" tabIndex={tabIndex} className={className} rel="noopener" onBlur={onBlur}>
        {text} <svg className="external" xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1850 1850"><path d="M 1408,608 V 288 Q 1408,169 1323.5,84.5 1239,0 1120,0 H 288 Q 169,0 84.5,84.5 0,169 0,288 v 832 Q 0,1239 84.5,1323.5 169,1408 288,1408 h 704 q 14,0 23,-9 9,-9 9,-23 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -66,0 -113,-47 -47,-47 -47,-113 V 288 q 0,-66 47,-113 47,-47 113,-47 h 832 q 66,0 113,47 47,47 47,113 v 320 q 0,14 9,23 9,9 23,9 h 64 q 14,0 23,-9 9,-9 9,-23 z m 384,864 V 960 q 0,-26 -19,-45 -19,-19 -45,-19 -26,0 -45,19 L 1507,1091 855,439 q -10,-10 -23,-10 -13,0 -23,10 L 695,553 q -10,10 -10,23 0,13 10,23 l 652,652 -176,176 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 512 q 26,0 45,-19 19,-19 19,-45 z" transform="matrix(1,0,0,-1,30.372881,1426.9492)"/></svg>
    </StyledExternalLink>
)

export default ExternalLink
