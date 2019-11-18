import React from 'react'

import styled from '@emotion/styled'
import { colors, borders, shadows } from '../styles/variables'

const StyledProject = styled.div`
    padding: 2rem 0rem 1rem;
    text-align: center;
    font-size: 90%;
    background: ${colors.offWhite};
    border: ${borders.light};
    box-shadow: ${shadows.light1};
    font-weight: 600;

    img {
        height: 8.5rem;
    }

    & > * {
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }
`

interface ProjectProps {
    image: JSX.Element
    title: string
    href: string
}

const Project: React.SFC<ProjectProps> = ({ image, title, href }) => (
    <StyledProject className="project">
        {image}
        <p>{title}</p>
        <a href={`https://gitpod.io#${href}`} className="btn">Start Workspace</a>
    </StyledProject>
)

export default Project
