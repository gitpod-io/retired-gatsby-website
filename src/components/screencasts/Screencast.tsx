import React from 'react'

import styled from '@emotion/styled'
import ImageProvider from '../ImageProvider'
import { Link } from 'gatsby'
// @ts-ignore
import hyphenate from '../../utils/hyphenate'
import { RelatedDoc } from './RelatedDocs'
import { colors, borders } from '../../styles/variables'

const StyledScreencast = styled(Link)`
    display: block;
    padding: 2rem;
    text-align: center;
    border-radius: 3px;
    max-width: 500px;
    min-width: 400px;
    border: 1px solid #eee;
    color: ${colors.text};
    transition: all .2s;

    &:hover {
        h3,
        .h3 {
            color: inherit;
        }
    }

    @media(max-width: 440px) {
        min-width: 330px;
    }

    @media(max-width: 350px) {
        min-width: 100%;
    }

    h3,
    .h3 {
        font-size: 1.9rem;
        margin: 2rem 0 .8rem;
        transition: all .2s;
    }

    .duration {
        font-size: 1.5rem;
    }
`

export interface ScreencastProps {
    title: string;
    description: string;
    youtubeId: string;
    duration: number;
    tile: string;
    relatedDocs: RelatedDoc[]
    headingType?: 'h3'
}

const Screencast = ({tile, title, duration, headingType}: ScreencastProps) => (
    <StyledScreencast
        className="pattern-bg"
        to={`/screencasts/${hyphenate(title)}/`}
    >
        <ImageProvider
            fileName={tile}
            alt={`Gitpod Screencast: ${title}`}
            isBlurred={true}
            providerStyles={{height: 'auto', boxShadow: '0 2rem 4rem rgba(0,0,0, .2)'}}
            placeholderStyles={{border: borders.light}}
        />
        { headingType === 'h3' ? <h3>{title}</h3> : <h2 className="h3">{title}</h2> }
        <div className="duration">Duration: {duration}s</div>
    </StyledScreencast>
)

export default Screencast
