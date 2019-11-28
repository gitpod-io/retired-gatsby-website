import React from 'react'

import styled from '@emotion/styled'
import { colors, borders, shadows, sizes } from '../styles/variables'

const StyledProject = styled.div`
    padding: 2rem .5rem;
    text-align: center;
    font-size: 90%;
    background: ${colors.offWhite};
    border: ${borders.light};
    box-shadow: ${shadows.light};
    font-weight: 600;

    @media(max-width: ${sizes.breakpoints.sm}) {
        min-width: 28rem;

        &:not(:last-child) {
            margin-bottom: 3rem;
        }
    }

    img {
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
    title: string
    href: string
}

const Project: React.SFC<ProjectProps> = ({ image, title, href }) => (
    <StyledProject className="project">
        {image}
        <p>{title}</p>
        <a href={`https://gitpod.io#${href}`} target="_blank" className="btn">Start Workspace</a>
    </StyledProject>
)

export default Project
