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
        }

        .btn {
            margin: 1rem;
            transform: translateY(-4rem);
        }
    }
`

const Business = () => (
    <Styled>
        <section className="business">
            <h2>Business Solutions</h2>
            <p>Here you can find further information for your business solution including its pricing.</p>
            <Link to="/education/" className="btn">Education</Link>
            <Link to="/recruiting/" className="btn">Recruiting</Link>
            <Link to="/vendor/" className="btn">Vendor</Link>
        </section>
    </Styled>
)

export default Business
