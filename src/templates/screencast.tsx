import React from 'react'
import IndexLayout from '../layouts'
import { ScreencastProps } from '../components/screencasts/Screencast'
import styled from '@emotion/styled'
import YouTubeEmbed from '../components/screencasts/YouTubeEmbed'
import RelatedDocs from '../components/screencasts/RelatedDocs'
import NextUp from '../components/screencasts/NextUp'

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

const ScreencastTemplate = ({ pageContext }: { pageContext: { screencast: ScreencastProps, nextScreencast: ScreencastProps } }) => {
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
                    <YouTubeEmbed embedId={youtubeId} />
                </div>
                <RelatedDocs relatedDocs={relatedDocs} />
                <NextUp nextScreencast={pageContext.nextScreencast} />
            </StyledScreencastTemplate>
        </IndexLayout>
    )
}

export default ScreencastTemplate
