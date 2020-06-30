import React from 'react'

import styled from '@emotion/styled'
import Github from '../../resources/octicons-mark-github.svg'
import GitLab from '../../resources/gitlab.svg'
import Bitbucket from '../../resources/bitbucket.svg'
import { colors, sizes } from '../../styles/variables'

const StyledStartWorkspace = styled.div`
    ul {
        display: flex;
        justify-content: center;
    }

    li {
        &:not(:last-child)  {
            margin-right: 1rem;
        }
    }

    .platform {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        color: ${colors.text};
        background: ${colors.offWhite2};
        height: 5rem;
        width: 5rem;
        border: 2px solid transparent;
        border-radius: 50%;
        transition: all .2s;

        @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
            transform: scale(.9);
        }

        &:hover,
        &:focus {
            border: 2px solid ${colors.lightBlue};
        }
    }

    img {
        display: block;
        width: 3rem;
    }
`

interface StartWorkspaceProps {
    repo: string
    shown: boolean
    setIsShown: (val: boolean) => void
}

interface Platform {
    url: string
    name: string
    img: string
}

const platforms: Platform[] = [{
    url: `https://github.com`,
    name: `GitHub`,
    img: Github
}, {
    url: `https://gitlab.com`,
    name: `GitLab`,
    img: GitLab
}, {
    url: `https://bitbucket.org`,
    name: `Bitbucket`,
    img: Bitbucket
}]

const StartWorkspace = ({ repo, shown, setIsShown }: StartWorkspaceProps) => (
        <StyledStartWorkspace>
            <a
                style={ !shown ? {} : {display: 'none'}}
                className="btn btn--small"
                onClick={() => setIsShown(true)}
            >
                Start Workspace
            </a>
            <ul style={ !shown ? { display: 'none' } : {}}>
                {platforms.map((p: Platform, i) => (
                    <li key={i + p.name}>
                        <a className="platform" href={`https://gitpod.io#${p.url}/${repo}`} target="_blank">
                            <img src={p.img} alt={p.name} />
                        </a>
                    </li>
                ))}
            </ul>
        </StyledStartWorkspace>
    )


export default StartWorkspace
