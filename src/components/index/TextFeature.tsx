import React from 'react'

import styled from '@emotion/styled'
import { colors, borders } from '../../styles/variables'

const StyledTextFeature = styled.div`
  max-width: 600px;
  padding: 4rem 6rem;
  background: ${colors.offWhite};
  border: ${borders.light};
  border-radius: 3px;
  max-width: 450px;

  @media (max-width: 500px) {
    padding: 5rem 2rem;

    h3 {
      text-align: center;
    }
  }

  h3 + p {
    margin: 0;
  }

  img {
    display: block;
    height: 8rem;
    margin-bottom: 4rem;
    margin: 0 auto 4rem;
  }

  .btn {
    display: block;
    max-width: 240px;
    margin: 4rem auto 0;
  }
`

interface TextFeatureProps {
  path: any
  alt: string
  title: string
  text: string | JSX.Element
  btnText?: string
  href?: string
}

const TextFeature = ({ path, alt, title, text, btnText, href }: TextFeatureProps) => (
  <StyledTextFeature>
    <img src={path} alt={alt} />
    <h3>
      <strong>{title}</strong>
    </h3>
    <p>{text}</p>
    {btnText ? (
      <a href={href} target="_blank" className="btn">
        {btnText}
      </a>
    ) : null}
  </StyledTextFeature>
)

export default TextFeature
