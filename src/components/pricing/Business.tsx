import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Styled = styled.div`
    .business {
        text-align: center;

        h2 {
            &::before {
                content: '';
                display: block;
                height: 1rem;
                width: 12rem;
                margin: 0 auto 3rem;
                background: url("https://www.gitpod.io/galaxy.jpg");
                background-size: cover;
                background-position: bottom right;
                border-radius: 10px;
            }

            &::after {
                display: none;
            }
        }

        p {
            max-width: 70rem;
            margin: -1rem auto 3rem;
        }
    }
`

const Business = () => (
    <Styled>
        <section className="business">
            <h2>Gitpod Self-Hosted</h2>
            <p>Unleash Developer Productivity. Use Gitpod as your dev environment and enjoy automated setups, better collaboration, higher code quality and a greater workflow.</p>
            <Link to="/self-hosted/" className="btn">Enterprise Solutions</Link>
        </section>
    </Styled>
)

export default Business
