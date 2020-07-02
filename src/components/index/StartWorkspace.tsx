import React from 'react'

import styled from '@emotion/styled'
import GitHub from '../../resources/octicons-mark-github.svg'
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
    githubUrl?: string
    gitlabUrl?: string
    bitbucketUrl?: string
    shown: boolean
    setIsShown: (val: boolean) => void
}

function prefix(url: string) {
    return 'https://gitpod.io/#' + url;
}

const StartWorkspace = ({ shown, setIsShown, githubUrl, gitlabUrl, bitbucketUrl }: StartWorkspaceProps) => (
    <StyledStartWorkspace>
        {
            !gitlabUrl && !bitbucketUrl ?
                <a
                    style={!shown ? {} : { display: 'none' }}
                    className="btn btn--small"
                    title="Choose your Platform"
                    target="_blank"
                    href={prefix(githubUrl!)}
                >
                    Start Workspace
            </a>
                :
                <><a
                    style={!shown ? {} : { display: 'none' }}
                    className="btn btn--small"
                    onClick={() => setIsShown(true)}
                    title="Choose your Platform"
                >
                    Start Workspace
            </a>
                    <ul style={!shown ? { display: 'none' } : {}}>
                        {
                            githubUrl ? <li>
                                <a className="platform" href={prefix(githubUrl)} title={"GitHub"} target="_blank">
                                    <img src={GitHub} alt="GitHub" />
                                </a>
                            </li> : null
                        }
                        {
                            gitlabUrl ? <li>
                                <a className="platform" href={prefix(gitlabUrl)} target="_blank">
                                    <img src={GitLab} alt="Gitlab" title={"GitLab"} />
                                </a>
                            </li> : null
                        }
                        {
                            bitbucketUrl ? <li>
                                <a className="platform" href={prefix(bitbucketUrl)} target="_blank">
                                    <img src={Bitbucket} alt="Bitbucket" title={"Bitbucket"} />
                                </a>
                            </li> : null
                        }
                    </ul></>
        }

    </StyledStartWorkspace>
)


export default StartWorkspace
