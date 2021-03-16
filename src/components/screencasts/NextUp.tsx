import React from 'react'
import styled from '@emotion/styled'
import Screencast, { ScreencastProps } from './Screencast'

const StyledNextUp = styled.div`
    padding: 0 0 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface NextUpProps {
    nextScreencast: ScreencastProps | null
}

const NextUp = ({ nextScreencast }: NextUpProps) => (
    nextScreencast ? (
        <div className="row">
            <StyledNextUp>
                <h2>Next up…</h2>
                <Screencast headingType="h3" {...nextScreencast}/>
            </StyledNextUp>
        </div>
    ) : null
)

export default NextUp
