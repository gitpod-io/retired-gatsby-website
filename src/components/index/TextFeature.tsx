import React from 'react'

import styled from '@emotion/styled'
import { colors, borders } from '../../styles/variables'

const StyledTextFeature = styled.div`
  max-width: 600px;
  padding: 4rem 6rem;
  background: ${colors.white};
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

  .img-container {
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
  img: JSX.Element
  title: string
  text: string | JSX.Element
  btnText?: string
  href?: string
}

const TextFeature = ({ img, title, text, btnText, href }: TextFeatureProps) => (
  <StyledTextFeature>
    <div className="img-container">
        {img}
    </div>
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
