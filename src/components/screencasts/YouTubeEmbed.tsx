import React from 'react'
import styled from '@emotion/styled'

const StyledEmbed = styled.div`
    position: relative;
    padding-bottom: 62.5%; 
    height: 0;
    margin: 4rem auto 6rem;
    max-width: 1040px;
    box-shadow: 0 2rem 4rem rgba(0,0,0, .3);

    @media(min-width: 1340px) {
        padding-bottom: 40.5%;
    }

    @media(min-width: 1940px) {
        padding-bottom: 30.5%;
    }

    @media(min-width: 3800px) {
        padding-bottom: 15%;
    }
`

interface YouTubeEmbedProps {
    embedId: string
}

const YouTubeEmbed = ({embedId}: YouTubeEmbedProps) => (
    <StyledEmbed 
        className="row"
    >
        <iframe 
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // @ts-ignore
            webkitallowfullscreen 
            mozallowfullscreen 
            allowfullscreen 
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        >
        </iframe>
    </StyledEmbed>
)

export default YouTubeEmbed
