import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows, sizes } from '../styles/variables'

const StyledProject = styled.div`
    padding: 2rem;
    text-align: center;
    font-size: 90%;
    background: ${colors.offWhite};
    box-shadow: ${shadows.light};
    font-weight: 600;

    @media(max-width: ${sizes.breakpoints.lg}) {
        max-width: 24rem;
    }

    @media(max-width: ${sizes.breakpoints.sm}) {

        &:not(:last-child) {
            margin-bottom: 3rem;
        }
    }

    object {
        height: 8.5rem;
        width: 14rem;
    }

    & > * {
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }
`

interface ProjectProps {
    image: JSX.Element
    title: string | JSX.Element
    href?: string
}

const Project: React.SFC<ProjectProps> = ({ image, title, href }) => (
    <StyledProject className="project">
        {image}
        <p>{title}</p>
        <a href={`https://gitpod.io#${href}`} target="_blank" className="btn">Start Workspace</a>
    </StyledProject>
)

export default Project
