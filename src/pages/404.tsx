import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import NotFoundImage from '../resources/icon-404.png'
import { sizes } from '../styles/variables'

const StyledNotFoundPage = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;

  h1 {
    text-align: center;
    margin: 0 auto;
  }

  img {
    height: 10rem;
    margin-right: 5rem;

    @media (max-width: ${sizes.breakpoints.lg}) {
      display: block;
      margin: 0 auto 5rem;
    }

    @media (max-width: ${sizes.breakpoints.sm}) {
      height: 7rem;
    }
  }
`

const NotFoundPage: React.SFC<{}> = () => (
  <IndexLayout>
    <div className="grey-container">
      <StyledNotFoundPage className="row">
        <h1>
          <img src={NotFoundImage} alt="404" />
          Sorry, this page couldn’t be found.
        </h1>
      </StyledNotFoundPage>
    </div>
  </IndexLayout>
)

export default NotFoundPage
