import React from 'react'

import styled from '@emotion/styled'
import RocketLaunch from '../../resources/rocket-launch.png'
import { sizes } from '../../styles/variables'

const StyledSaveHours = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 750px;
    margin: 0 auto;

    @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
        padding-bottom: 2rem;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        max-width: 600px;
    }
    
    @media(max-width: 640px) {
        flex-direction: column;
        max-width: 400px;
        text-align: center;
    }

    h2 {
        margin-bottom: 5rem;
    }

    .img-container {
        flex: 1;
    }

    img {
        display: inline-block;
        width: 20rem;

        @media(max-width: 640px) {
            width: 16rem;
            margin-bottom: 4rem;
        }
    }

    .text {
        flex: 0 0 60%;
    }
`

const SaveHours = () => (
    <div className="row">
        <StyledSaveHours>
            <div className="img-container">
                <img src={RocketLaunch} alt="Rocket Launch" />
            </div>
            <div className="text">
                <h2>
                    <strong>
                        Save millions of hours of watching your code build.
                </strong>
                </h2>
                <p>With Gitpod you can automate and prebuild your dev enviroments so that you and your team can start coding with a single click.</p>
            </div>
        </StyledSaveHours>
    </div>
)

export default SaveHours
