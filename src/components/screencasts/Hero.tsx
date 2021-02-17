import React from 'react'

import styled from '@emotion/styled'

const StyledHero = styled.div`
    text-align: center;
    padding: 5rem;

    p {
        margin-top: 2rem;
    }
`

const Hero = () => (
    <div className="pattern">
        <StyledHero>
            <h1>
                <strong>Screencasts</strong>
            </h1>
            <p>Learn how to use Gitpod with this series of short videos.</p>
        </StyledHero>
    </div>
)

export default Hero
