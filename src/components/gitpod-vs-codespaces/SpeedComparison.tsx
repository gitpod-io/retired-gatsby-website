import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../../styles/variables'

const StyledSpeedComparison = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 5rem 0 7rem;

  @media (max-width: ${sizes.breakpoints.lg}) {
    margin: 0rem 0 3rem;
  }

  @media (max-width: 560px) {
    margin-bottom: 5rem;
  }

  .mark {
    position: relative;
    display: flex;
    flex-direction: column;
    border-left: 3px solid ${colors.offWhite5};

    &__title {
      position: absolute;
      bottom: -5rem;
      transform: translateX(-50%);
    }

    &--2 {
      flex-direction: column-reverse;
      flex: 1;
    }

    .footnote {
      bottom: -3rem;
    }
  }

  h4 {
    margin-bottom: 1rem;
    margin-left: 1.5rem;

    @media (max-width: ${sizes.breakpoints.sm}) {
      text-align: left;
    }
  }

  p {
    color: ${colors.textLight};
  }

  .bar {
    position: relative;
    display: flex;

    @media (max-width: 605px) {
      flex-wrap: wrap;
    }

    @media (max-width: 490px) {
      flex-wrap: initial;
    }

    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      height: 11rem;

      @media (max-width: 490px) {
        height: 8rem;
      }
    }

    &-container {
      margin-bottom: 5rem;
    }

    &--gitpod {
      &-1 {
        background: ${colors.link};
        flex: 0 0 4%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &-2 {
        flex: 0 0 15%;
        min-width: 8rem;
      }
    }

    &--codespaces {
      color: ${colors.white};

      & > * {
        position: relative;
      }

      &-1 {
        flex: 0 0 25%;
        min-width: 10rem;
        background: ${colors.orange};
        border-radius: 0;

        @media (max-width: 360px) {
          min-width: 7rem;
        }
      }

      &-2 {
        flex: 0 0 50%;
        min-width: 12rem;
        background: ${colors.orangeLight};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &-3 {
        color: ${colors.textDark};
        min-width: 8rem;

        height: initial;
      }
    }

    &--time {
      font-weight: 600;
    }
  }
`

const SpeedComparison = () => (
  <StyledSpeedComparison>
    <div className="mark mark--2">
      <div className="mark__title footnote">Click</div>
      <div className="item item--1">
        <h4>Gitpod</h4>
        <div className="bar-container">
          <div className="bar bar--gitpod">
            <div className="bar--gitpod-1" title="Boot Environment & Load UI (< 1 min)"></div>
            <div className="bar--gitpod-2 bar--time">&lt; 1 min</div>
          </div>
        </div>
      </div>
      <div className="item item--2">
        <h4>Codespaces</h4>
        <div className="bar-container">
          <div className="bar bar--codespaces">
            <div className="bar--codespaces-1" title="Boot Environment & Load UI (> 5 min)">
              Load
            </div>
            <div className="bar--codespaces-2" title="Build Project (> 10 min)">
              Build Project
            </div>
            <div className="bar--codespaces-3 bar--time">&gt; 15 min</div>
          </div>
        </div>
      </div>
    </div>
  </StyledSpeedComparison>
)

export default SpeedComparison
