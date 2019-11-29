import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows, borders } from '../styles/variables'

const StyledTextBox = styled.div`
    font-size: 90%;

    .box {
        max-width: 75rem;
        margin: 10rem auto;
        padding: 8rem 5rem;
        background: ${colors.white};
        box-shadow: ${shadows.light};
    }

    h1 {
        margin-bottom: 6rem;

        &::after {
            content: '';
            display: block;
            height: 2px;
            width: 10rem;
            margin: 2rem 0;
            background: ${colors.text};
        }
    }

    h2 {
        margin: 6rem 0 4rem;
    }

    h3 {
        margin-top: 4rem;
    }

    li + li {
        margin-top: 2rem;
    }

    .model {
        padding: 2rem 3rem;
        border: ${borders.light};
        font-size: 95%;
    }

`

const TextBox: React.SFC<{}> = ({ children }) => (
    <StyledTextBox>
        <div className="box">
                { children }
        </div>
    </StyledTextBox>
)

export default TextBox
