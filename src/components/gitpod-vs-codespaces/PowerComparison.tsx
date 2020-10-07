import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../../styles/variables'

const StyledPowerComparison = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 4rem;

    @media (max-width: 470px) {
      margin-bottom: 3rem;
    }

    @media (max-width: 360px) {
      margin-bottom: 2rem;
    }
  }

  .items {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 110%;
    color: ${colors.textDark};

    @media (max-width: 470px) {
      font-size: 95%;
    }

    @media (max-width: 360px) {
      font-size: 90%;
    }

    &:not(:last-child) {
      margin-right: 7rem;

      @media (max-width: 470px) {
        margin-right: 3.5rem;
      }

      @media (max-width: 360px) {
        margin-right: 2.5rem;
      }
    }

    &__title {
      font-weight: 600;
      margin-top: 2.5rem;
    }
  }

  .bars {
    display: flex;
    align-items: flex-end;
    color: ${colors.white};
  }

  .bar {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 9.4rem;
    padding-bottom: 1.5rem;
    border-radius: 3px;
    font-size: 90%;

    @media (max-width: 470px) {
      width: 8rem;
    }

    @media (max-width: 360px) {
      width: 6.6rem;
    }

    &:not(:last-child) {
      margin-right: 1rem;

      @media (max-width: 320px) {
        margin-right: 0.5rem;
      }
    }

    &--1 {
      height: 5rem;
      background: ${colors.orange};

      @media (max-width: 470px) {
        height: 4rem;
      }
    }

    &--2 {
      height: 10rem;
      background: ${colors.orangeLight};

      @media (max-width: 470px) {
        height: 8rem;
      }
    }

    &--3 {
      height: 15rem;
      background: ${colors.link};

      @media (max-width: 470px) {
        height: 12rem;
      }
    }

    &--4 {
      height: 30rem;
      background: ${colors.lightBlue};

      @media (max-width: 470px) {
        height: 16rem;
      }
    }
  }
`

const PowerComparison = () => (
  <StyledPowerComparison>
    <div className="items">
      <div className="item">
        <div className="bars">
          <div className="bar bar--1">2 vCPU</div>
          <div className="bar bar--2">4GB RAM</div>
        </div>
        <span className="item__title">Codespaces</span>
      </div>
      <div className="item">
        <div className="bars">
          <div className="bar bar--3">6 vCPU</div>
          <div className="bar bar--4">12GB RAM</div>
        </div>
        <div className="item__title">Gitpod</div>
      </div>
    </div>
  </StyledPowerComparison>
)

export default PowerComparison
