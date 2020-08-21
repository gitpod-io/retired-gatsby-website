import React from 'react'

import Screenshot from '../../resources/screenshot.png'
import styled from '@emotion/styled'
import GitLab from '../../resources/gitlab.svg'
import GitHub from '../../resources/octicons-mark-github.svg'
import Bitbucket from '../../resources/bitbucket.svg'
import { sizes } from '../../styles/variables'

const Styled = styled.div`
  height: 700px;
  margin-bottom: 47rem;

  @media (max-width: 1140px) {
    margin-bottom: 35%;
  }

  @media (max-width: 1020px) {
    margin-bottom: 30%;
  }

  @media (max-width: 800px) {
    height: 400px;
    margin-bottom: 50rem;
  }

  @media (max-width: 740px) {
    margin-bottom: 45rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 40rem;
  }

  @media (max-width: 560px) {
    margin-bottom: 30rem;
  }

  @media (max-width: 360px) {
    margin-bottom: 25rem;
  }

  @media (max-width: 320px) {
    margin-bottom: 22rem;
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
`

const Banner = () => (
  <Styled className="pattern">
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
          <p>
            Works with
            <img src={GitLab} alt="GitLab" />
            <img src={GitHub} alt="GitHub" />
            <img src={Bitbucket} alt="Bitbucket" />
          </p>
        </div>
        <div className="banner__screenshot-container">
          <img alt="Gitpod Screenshot" src={Screenshot} className="banner__screenshot" />
        </div>
      </header>
    </div>
  </Styled>
)

export default Banner
