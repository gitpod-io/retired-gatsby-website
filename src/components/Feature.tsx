import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows, sizes } from '../styles/variables'

import Layer from '../resources/layer.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import Git from '../resources/git.png'
import VSC from '../resources/vsc.svg'
import Theia from '../resources/theia-ide.svg'
import Docker from '../resources/docker.svg'

const Logos: any = {
    Layer: Layer,
    Github: Github,
    Gitlab: Gitlab,
    Git: Git,
    VSC: VSC,
    Theia: Theia,
    Docker: Docker
}

const StyledFeature = styled.div`
    width: 24%;
    padding: 3rem;
    margin-bottom: 3rem;
    background: ${colors.white};
    box-shadow: ${shadows.light};

    @media(min-width: ${sizes.breakpoints.md}) {
        width: 24%;
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        width: 49%;
        max-width: 44rem;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        min-width: 32rem;
    }

    @media(max-width: ${sizes.breakpoints.sm}) {
        min-width: 28rem;
    }

    .title {
        text-align: center;
        min-height: 5rem;
    }

    .read-more {
        margin-top: 6rem;
    }

    .logos {
        margin-top: 3rem;
    }

    img {
        height: 3rem;

        &:not(:last-child) {
            margin-right: 2rem;
        }
    }
`

interface FeatureProps {
    title: string
    paragraphs: string[]
    more?: JSX.Element
    logos?: string[]
}

const Feature: React.SFC<FeatureProps> = ({title, paragraphs, more, logos}) => (
    <StyledFeature className="feature">
        <h3 className="title">{title}</h3>
        { paragraphs.map((p, i) => <p key={i}>{p}</p>) }
        { more ? more : null }
        {logos && logos.length ? <div className="logos">
            {logos.map((logo, i) => <img key={i} src={Logos[logo]} alt={`${logo} Logo.`}/>)}
        </div> : null}
    </StyledFeature>
)

export default Feature
