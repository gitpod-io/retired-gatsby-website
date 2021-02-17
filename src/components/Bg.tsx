import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledBg = styled.img`
    display: block;
    width: 100%;
    max-height: 40rem;
    max-width: 100rem;
    margin: 7rem auto;

    @media(max-width: ${sizes.breakpoints.md}) {
        margin: 6rem auto;
    }
`

interface BgProps {
    url: any
    alt: string
}

const Bg = ({url, alt}: BgProps) => (
    <div className="row">
        <StyledBg src={url} alt={alt}/>
    </div>
)


export default Bg
