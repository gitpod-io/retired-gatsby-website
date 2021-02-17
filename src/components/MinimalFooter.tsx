import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors } from '../styles/variables'

const StyledMinimalFooter = styled.footer`
    padding: 5rem 0 6rem;
    text-align: center;
    color: ${colors.lightGrey};
    background: ${colors.offWhite};

    p {
        margin-bottom: 2rem;
    }

    a,
    .link {
        color: inherit;
        font-weight: 400;
    }

    .link {
        padding: 0 1rem;

        &:not(:last-child) {
            border-right: 1px solid;
        }
    }
`

const MinimalFooter = () => (
    <StyledMinimalFooter role="footer">
        <div className="row">
            <p>Copyright &copy; <a href="https://www.gitpod.io/" target="_blank" rel="noopener" title="Gitpod">Gitpod</a></p>
            <div>
                <Link className="link" to="/imprint">Imprint</Link>
                <Link className="link" to="/terms">Terms of Service</Link>
                <Link className="link" to="/privacy">Privacy Policy</Link>
            </div>
        </div>
    </StyledMinimalFooter>
)

export default MinimalFooter
