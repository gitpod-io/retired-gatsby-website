import React from 'react'

import Screenshot from '../../resources/screenshot.png'
import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'

const Styled = styled.div`
    .banner {
        display: flex;
        padding: 2rem 0 14rem;
        position: relative;


        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
            padding-bottom: 5rem;
        }

        &__text-box {
            margin-top: 8rem;

            h1 {
                br {
                    display: block;
                    
                    @media(min-width: 360px) {
                        display: none;
                    }
                }
            }

            @media(max-width: ${sizes.breakpoints.lg}) {
                text-align: center;
                margin: 5rem 0 0;
            }

            @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
                width: 41%;
            }
        }

        .btn-wrapper {
            margin-bottom: 3rem;

            @media(max-width: ${sizes.breakpoints.lg}) {
                justify-content: center;
            }
        }

        &__screenshot {
            display: block;
            width: 100%;
            box-shadow: 0 2rem 6rem rgba(0,0,0, .2);

            @media(max-width: ${sizes.breakpoints.lg}) {
                width: 100%;
            }

            @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
                transform: translate(18.9rem,7rem) scale(1.21);

                &-container {
                    width: 40%;
                }
            }
        }

        h1 {
            font-weight: 600;

            span {
                display: block;
                font-weight: 400;
            }
        }

        p {
            margin: 2.5rem auto;
            
            @media(max-width: ${sizes.breakpoints.lg}) {
                max-width: 700px;
                padding: 0 5rem;
            }

            @media(max-width: 600px) {
                padding: 0;
            }
        }
    }

`

const Banner = () => (
  <Styled>
    <div className="row">
      <header role="banner" className="banner pattern">
        <div className="banner__text-box">
          <h1>
            Dev Environments as Code <span>for modern DevOps teams.</span>
          </h1>
          <p>
            Describe your dev environment as code and get fully prebuilt, ready-to-code development environments for any GitLab, GitHub, and
            Bitbucket project.
          </p>
          <div className="btn-wrapper">
            <a href="#get-started" className="btn btn--cta">
              Try Now
            </a>
          </div>
        </div>
        <div className="banner__screenshot-container">
          <img alt="Gitpod Screenshot" src={Screenshot} className="banner__screenshot" />
        </div>
      </header>
    </div>
  </Styled>
)

export default Banner
