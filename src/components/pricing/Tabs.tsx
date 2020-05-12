import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import { PricingBoxesProps } from './PricingBoxes'

const Tab = styled.button`
    display: block;
    padding: 1.3rem 2rem;
    font-size: 18px;
    color: ${colors.textLight};
    min-width: 15rem;
    text-align: center;
    background-color: ${colors.white};
    border: 1px solid ${colors.offWhite2};
    border-bottom-color: transparent;
    margin-bottom: -1px;
    cursor: pointer;

    &:first-of-type {
       border-right: none;
    }

    &:last-of-type {
        border-left: none;
    }

    body.user-is-tabbing &:focus {
        outline: none;
        border: 1px solid #1AA6E4;;
    }
`



const Tabs = ({ isRendered, changeIsRendered }: PricingBoxesProps) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center'
    }}>
        <Tab style={{
            backgroundColor: isRendered ? colors.offWhite2 : colors.white,
        }}
            onClick={() => changeIsRendered(false)}
        >Cloud</Tab>
        <Tab style={{
            backgroundColor: isRendered ? colors.white : colors.offWhite2,
        }}
            onClick={() => changeIsRendered(true)}
        >Self-Hosted</Tab>
    </div>
)

export default Tabs
