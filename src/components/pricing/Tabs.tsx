import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import { PricingBoxesProps } from './PricingBoxes'

const Tab = styled.button<{ isRendered: boolean }>`
    display: block;
    padding: 1.3rem 2rem;
    font-size: 18px;
    color: ${colors.textLight};
    min-width: 15rem;
    text-align: center;
    border: 1px solid ${colors.offWhite2};
    border-radius: 6px 6px 0 0;
    border-bottom-color: transparent;
    margin-bottom: -1px;
    cursor: pointer;
    transition: all .1s;

    &:first-of-type {
        background-color: ${ ({ isRendered }) => isRendered ? colors.offWhite2 : colors.white };
       border-right: none;
    }

    &:last-of-type {
        background-color: ${ ({ isRendered }) => isRendered ? colors.white : colors.offWhite2 };
        border-left: none;
    }

    body.user-is-tabbing &:focus {
        outline: none;
        border: 1px solid #1AA6E4;;
    }

    &:hover {
        color: ${colors.link};
    }
`

const Tabs = ({ isRendered, changeIsRendered }: PricingBoxesProps) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center'
    }}>
        <Tab 
            isRendered={isRendered}
            onClick={() => changeIsRendered(false)}
        >
            Cloud
        </Tab>
        <Tab 
            isRendered={isRendered}
            onClick={() => changeIsRendered(true)}
        >
            Self-Hosted
        </Tab>
    </div>
)

export default Tabs
