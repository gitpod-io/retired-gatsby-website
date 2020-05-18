import React from 'react'

import styled from '@emotion/styled'
import { PricingBoxesProps } from './PricingBoxes'
import { Link } from 'gatsby'

const Tab = styled(Link)<{ isRendered: boolean }>`
    display: block;
    padding: 1.3rem 2rem;
    font-size: 18px;
    color: var(--textLight);
    min-width: 15rem;
    text-align: center;
    border: 1px solid var(--offWhite2);
    border-radius: 6px 6px 0 0;
    border-bottom-color: transparent;
    margin-bottom: -1px;
    cursor: pointer;
    transition: all .05s;

    &:first-of-type {
       background-color: ${({ isRendered }) => isRendered ? `var(--offWhite2)` : `var(--white)`};
       font-weight: ${({ isRendered }) => isRendered ? '400' : '600'};
       border-right: none;
       color: ${({ isRendered }) => isRendered ? `var(--textLight)` : `var(--textDark)`};
    }

    &:last-of-type {
        background-color: ${({ isRendered }) => isRendered ? `var(--white)` : `var(--offWhite2)`};
        font-weight: ${({ isRendered }) => isRendered ? '600' : '400'};
        border-left: none;
        color: ${({ isRendered }) => isRendered ? `var(--textDark)` : `var(--textLight)`};
    }

    body.user-is-tabbing &:focus {
        outline: none;
        border: 1px solid #1AA6E4;;
    }

    &:hover {
        color: var(--link);
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
            Cloud
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
