import React from 'react'

import styled from '@emotion/styled'

const StyledBg = styled.img`
    display: block;
    width: 100%;
    max-height: 40rem;
    max-width: 100rem;
    margin: 10rem auto;
`

interface BgProps {
    url: any
}

const Bg: React.SFC<BgProps> = ({url}) => (
    <div className="row">
        <StyledBg src={url} aria-hidden="true" />
    </div>
)


export default Bg
