import React from 'react'
import tick from '../resources/tick.svg'
import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const Styled = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${sizes.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    min-height: 70vh;
  }

  h1 {
    line-height: 1.8;
  }

  span {
    font-weight: 600;
  }

  img {
    display: inline-block;
    height: 15rem;
    margin-right: 3rem;

    @media (max-width: ${sizes.breakpoints.md}) {
      margin-right: 0;
      margin-bottom: 3rem;
    }
  }
`

const SubmissionSucess = () => (
  <Styled>
    <img src={tick} alt="Tick" />
    <h1>
      <span>Thanks for Your Mail,</span>
      <br /> We'll Get Back to you soon!
    </h1>
  </Styled>
)

export default SubmissionSucess
