import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows, sizes } from '../styles/variables'

import Bitbucket from '../resources/bitbucket.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import Git from '../resources/git.png'
import VSC from '../resources/vsc.svg'
import Theia from '../resources/theia-ide.svg'
import Docker from '../resources/docker.svg'

const Logos: any = {
  Bitbucket,
  Github,
  Gitlab,
  Git,
  VSC,
  Theia,
  Docker
}

const StyledTextCard = styled.div`
    width: 24%;
    padding: 3rem;
    margin-bottom: 3rem;
    background: ${colors.white};
    box-shadow: ${shadows.light};
    border-radius: 3px;

    @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
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

    .brands {
        margin-top: 3rem;
    }

    img {
        height: 3rem;

        &:not(:last-child) {
            margin-right: 2rem;
        }
    }
`

interface TextCardProps {
  title: string
  paragraphs: (string | JSX.Element)[]
  more?: JSX.Element
  logos?: string[]
}

const TextCard: React.SFC<TextCardProps> = ({ title, paragraphs, more, logos }) => (
  <StyledTextCard className="text-card">
    <h3 className="title">{title}</h3>
    {paragraphs.map((p, i) => (
      <p key={i + title}>{p}</p>
    ))}
    {more ? more : null}
    {logos && logos.length ? (
      <div className="brands">
        {logos.map((logo, i) => (
          <img key={i + title} src={Logos[logo]} alt={`${logo} Logo.`} />
        ))}
      </div>
    ) : null}
  </StyledTextCard>
)

export default TextCard
