import * as React from 'react'
import styled from '@emotion/styled'
import {colors} from '../styles/variables'

const Headline = styled.h2`
    line-height: 42px;
    text-align: center;
    background-color: ${colors.background2};
    padding: 50px;
    box-shadow: 0 10px 20px rgba(0,0,0, .3);
`
interface Props {
    children: any
}

const Highlight = ({children}: Props) => (
    <Headline>
        {children}
    </Headline>
)

export default Highlight
