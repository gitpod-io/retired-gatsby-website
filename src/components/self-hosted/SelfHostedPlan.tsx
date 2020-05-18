import React from 'react'

import styled from '@emotion/styled'
import IconTick from '../../resources/icon-tick.svg'
import { colors, borders } from '../../styles/variables'

const StyledSelfHostedPlan = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 4rem;
    background: var(--white);
    border: ${borders.light};
    margin-bottom: 3rem;

    div:first-of-type {
        margin-bottom: 4rem;
    }

    h3 {
        margin-bottom: 1rem;

        span {
            font-weight: 400;
            font-size: 80%;
        }
    }

    h4 {
        margin-bottom: 3rem;
    }
    
    ul {
        list-style-image: url(${IconTick});
        list-style-position: inside;
        text-align: left;
        font-size: 85%;
    }
`

export interface SelfHostedPlanProps {
    title: string | JSX.Element
    subtitle: string
    features: string[]
    btnText: string
    href: string
}

const SelfHostedPlan = ({ title, subtitle, features, btnText, href }: SelfHostedPlanProps) => (
    <StyledSelfHostedPlan>
        <div>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <ul>
                {
                    features.map((feature, i) => <li key={i}>{feature}</li>)
                }
            </ul>
        </div>
        <div>
            <a href={href} className="btn">{btnText}</a>
        </div>
    </StyledSelfHostedPlan>
)

export default SelfHostedPlan
