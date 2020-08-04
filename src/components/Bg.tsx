import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledBg = styled.img`
  display: block;
  width: 100%;
  max-height: 40rem;
  max-width: 100rem;
  margin: 7rem auto;

  @media (max-width: ${sizes.breakpoints.md}) {
    margin: 6rem auto;
  }
`

interface BgProps {
  url: any
}

const Bg: React.SFC<BgProps> = ({ url }) => (
  <div className="row">
    <StyledBg src={url} aria-hidden="true" />
  </div>
)

export default Bg
