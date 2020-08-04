import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledOnBoarding = styled.section`
  text-align: center;

  @media (max-width: ${sizes.breakpoints.md}) {
    padding: 7rem 0;
  }
`

const OnBoarding: React.SFC<{ link: string }> = ({ link }) => (
  <StyledOnBoarding>
    <h2>Would You Like to Have an Onboarding Session?</h2>
    <a href={link} className="btn btn--cta" target="_blank">
      Schedule a Call
    </a>
  </StyledOnBoarding>
)

export default OnBoarding
