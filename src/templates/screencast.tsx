import React from 'react'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'

const StyledScreencastTemplate = styled.div`
    padding-top: 5rem;
    text-align: center;

    .pattern {
        &::after {
            height: 90%;
            top: -20rem;
        }
    }

    .text {
        max-width: 700px;
        margin: auto;
    }

    h1 + p {
        margin: 2rem 0;
    }

    .duration {
        font-weight: 600;
    }
`

const ScreencastTemplate = ({ pageContext }: { pageContext: { screencast: any, nextScreencast: any } }) => {
    const { title, description, duration, youtubeId, relatedDocs } = pageContext.screencast
    return (
        <IndexLayout>
            <StyledScreencastTemplate>
                <div className="pattern">
                    <div className="row">
                        <div className="text">
                            <h1><strong>{title}</strong></h1>
                            <p>{description}</p>
                            <div className="duration">Duration: {duration}s</div>
                        </div>
                    </div>
                </div>
            </StyledScreencastTemplate>
        </IndexLayout>
    )
}

export default ScreencastTemplate
