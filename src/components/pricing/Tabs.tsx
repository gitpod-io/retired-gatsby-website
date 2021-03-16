import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import { PricingBoxesProps } from './PricingBoxes'
import { Link } from 'gatsby'

const Tab = styled(Link)<{ isRendered: boolean }>`
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
    transition: all .05s;

    &:first-of-type {
       background-color: ${({ isRendered }) => isRendered ? colors.offWhite2 : colors.white};
       font-weight: ${({ isRendered }) => isRendered ? '400' : '600'};
       border-right: none;
       color: ${({ isRendered }) => isRendered ? colors.textLight : colors.textDark};
    }

    &:last-of-type {
        background-color: ${({ isRendered }) => isRendered ? colors.white : colors.offWhite2};
        font-weight: ${({ isRendered }) => isRendered ? '600' : '400'};
        border-left: none;
        color: ${({ isRendered }) => isRendered ? colors.textDark : colors.textLight};
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
            to="/pricing/#"
        >
            SaaS
        </Tab>
        <Tab
            isRendered={isRendered}
            onClick={() => changeIsRendered(true)}
            to="/pricing/#self-hosted"
        >
            Self-Hosted
        </Tab>
    </div>
)

export default Tabs
