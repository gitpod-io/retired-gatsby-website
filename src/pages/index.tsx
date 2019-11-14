import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'

import IndexLayout from '../layouts/index'
import ReflectionScreenshot from '../resources/reflection-screenshot.png'

const StyledIndexPage = styled.div`

    .banner {
        display: flex;
        padding-top: 5rem;

        &__text-box {
            width: 50%;
            margin-top: 15rem;
        }

        &__screenshot {
            height: 70rem;
            transform: scale(1.3) translate(8rem, 5rem);

            &-container {
                width: 50%;
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
            margin: 2.5rem 0;
        }
    }

`

const IndexPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/blog/'>
        <StyledIndexPage>

            {/* ----- Banner ----- */}

            <header role="banner" className="banner row">
                <div className="banner__text-box">
                    <h1>
                        Continuous Dev Environments.
                        <span>Instantly. Anywhere.</span>
                    </h1>
                    <p>Gitpod launches ready-to-code dev environments with a single click.</p>
                    <a href="#getting-started" className="btn btn--normal btn--cta">Start for Free</a>
                    <Link to="/hosting" className="btn btn--normal">Host Yourself</Link>
                </div>
                <div className="banner__screenshot-container">
                    <img alt="Gitpod Screenshot" src={ReflectionScreenshot} className="banner__screenshot"/>
                </div>
            </header>

        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage
