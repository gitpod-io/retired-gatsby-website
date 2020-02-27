import React from 'react'

import styled from '@emotion/styled'

const StyledOnBoarding = styled.section`
    text-align: center;
`

const OnBoarding: React.SFC<{}> = () => (
    <StyledOnBoarding>
        <h2>Would You Like to Have an Onboarding Session?</h2>
        <a href="" className="btn btn--cta" target="_blank">Schedule a Call</a>
    </StyledOnBoarding>
)

export default OnBoarding


