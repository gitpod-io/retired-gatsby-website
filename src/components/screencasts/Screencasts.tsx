import React from 'react'

import styled from '@emotion/styled'
import Screencast, { ScreencastProps } from './Screencast'

const StyledScreencasts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1000px;
    margin: auto;
    padding: 5rem 0;

    & > * {
        flex: 0 0 48%;
        margin: 0 auto 5rem;
    }
`

const Screencasts = ({ screencasts }: { screencasts: ScreencastProps[] }) => (
    <div className="row">
        <StyledScreencasts>
        {
            screencasts.map(
                (screencast: ScreencastProps, i) => <Screencast
                    key={i+screencast.title}
                    {...screencast}
                />
            )
        }
        </StyledScreencasts>
    </div>
)

export default Screencasts
