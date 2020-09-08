import React, { CSSProperties } from 'react'

import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { colors } from '../styles/variables'

const StyledArrow = styled.svg`
    display: inline-block;
    fill: ${colors.offWhite1};
    transition: all .2s;
    height: 4rem;
`

interface ArrrowProps {
    styles?: CSSProperties
}

const Arrow = ({ styles }: ArrrowProps) => (
    <StyledArrow
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33.635 33.635"
        className="arrow"
        style={{...styles}}
    >
        <Global
            styles={css`
                a {
                    &:hover,
                    &:focus {
                        .arrow {
                            fill: ${colors.text};
                        }
                    }
                }
            `}
        />
        <path
            d="M-1075.548-827.365a16.708 16.708 0 01-11.892-4.926 16.708 16.708 0 01-4.926-11.892 16.708 16.708 0 014.926-11.892 16.708 16.708 0 0111.892-4.925 16.708 16.708 0 0111.892 4.926 16.708 16.708 0 014.926 11.892 16.708 16.708 0 01-4.926 11.892 16.708 16.708 0 01-11.892 4.925zM-1079.73-853a1 1 0 00-.7.282.992.992 0 00-.3.7.994.994 0 00.282.712l6.881 7.1-6.881 7.084a.993.993 0 00-.283.711 1 1 0 00.3.7 1 1 0 00.7.284 1.007 1.007 0 00.717-.3l8.233-8.476-8.232-8.5a.992.992 0 00-.717-.297z"
            data-name="Ausschluss 26"
            transform="translate(1092.365 861)"
        ></path>
    </StyledArrow>
)

export default Arrow
