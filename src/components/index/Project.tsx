import React, { useState } from 'react'

import styled from '@emotion/styled'
import { colors, sizes, borders } from '../../styles/variables'
import StartWorkspace from './StartWorkspace'

const StyledProject = styled.div`
  padding: 2rem 0rem;
  text-align: center;
  font-weight: 600;
  border: ${borders.light2};
  background: ${colors.offWhite};
  border-radius: 3px;
  min-width: 22rem;

  @media (max-width: ${sizes.breakpoints.lg}) {
    max-width: 24rem;
    min-width: 20rem;
  }

  @media (max-width: ${sizes.breakpoints.sm}) {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  .img-container {
    display: inline-block;
    height: 8rem;
    width: 8rem;
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
  githubUrl?: string
  gitlabUrl?: string
  bitbucketUrl?: string
  git?: string
}

const Project: React.SFC<ProjectProps> = ({ image, title, githubUrl, gitlabUrl, bitbucketUrl }) => {
  const [shown, setIsShown] = useState<boolean>(false)

  return (
    <StyledProject className="project">
      <div className="img-container">{image}</div>
      <p>{!shown ? title : 'Choose your platform'}</p>
      <StartWorkspace shown={shown} setIsShown={setIsShown} githubUrl={githubUrl} gitlabUrl={gitlabUrl} bitbucketUrl={bitbucketUrl} />
    </StyledProject>
  )
}

export default Project
