import React from 'react'

import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Styled = styled.div`
    .start {
        text-align: center;

        h3 {
            font-weight: 400;
            margin: 3rem 0;

            span {
                font-weight: 600;
                color: var(--link);
            }
        }
    }
`

const StartFree = () => (
    <Styled>
        <div className="row">
            <section className="start">
                <Link to="/#get-started" className="btn btn--cta btn--big">Start for Free</Link>
                <h3>Prefix any GitHub or GitLab URL with <span>gitpod.io/#</span></h3>
            </section>
        </div>
    </Styled>
)

export default StartFree
