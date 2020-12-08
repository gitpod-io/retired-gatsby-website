import React from 'react'

import Screenshot from '../../resources/screenshot.png'
import styled from '@emotion/styled'
import GitLab from '../../resources/gitlab.svg'
import GitHub from '../../resources/octicons-mark-github.svg'
import Bitbucket from '../../resources/bitbucket.svg'
import { sizes, colors } from '../../styles/variables'
import GitHubButton from 'react-github-btn'

const Styled = styled.div`
  .pattern {
    &::after {
      height: 75%;

      @media (max-width: 800px) {
        height: 90%;
      }
    }
  }

  .banner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10rem 0 10rem;

    &__screenshot {
      display: block;
      margin-top: 3rem;
      width: 100%;
      max-width: 1000px;
      box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.2);
    }

    h1 {
      font-size: 4.5rem;
      font-weight: 400;

      @media (max-width: ${sizes.breakpoints.md}) {
        font-size: 3.8rem;
      }

      span {
        display: block;
        font-weight: 400;
      }
    }

    p {
      max-width: 450px;
      margin: 2.5rem auto;

      img {
        height: 2rem;
        margin-left: 1.5rem;
      }
    }
  }

  .works-with {
    color: ${colors.textLight};
  }
`

const Banner = () => (
  <Styled>
    <div className="pattern">
      <div className="row">
        <header role="banner" className="banner">
          <div className="banner__text-box">
            <h1>
              <strong>Dev Environments</strong> Built for the Cloud.
            </h1>
            <p>Describe your dev environments as code and automate the last missing piece in your DevOps pipeline.</p>
            <a href="#get-started" className="btn btn--cta">
              Try Now
            </a>
            <p className="works-with">
              Works with
              <img src={GitLab} alt="GitLab" />
              <img src={GitHub} alt="GitHub" />
              <img src={Bitbucket} alt="Bitbucket" />
            </p>
          </div>
          <div className="header__repository-details">
            <GitHubButton href="https://github.com/gitpod-io/gitpod" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star gitpod-io/gitpod on GitHub">Star</GitHubButton>&nbsp;
            <GitHubButton href="https://github.com/gitpod-io/gitpod/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork gitpod-io/gitpod on GitHub">Fork</GitHubButton>
          </div>
          <div className="banner__screenshot-container">
            <img alt="Gitpod Screenshot" src={Screenshot} className="banner__screenshot" />
          </div>
        </header>
      </div>
    </div>
  </Styled>
)

export default Banner
