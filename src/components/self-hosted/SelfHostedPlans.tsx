import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, borders, sizes } from '../../styles/variables'
import SelfHostedPlan, { SelfHostedPlanProps } from './SelfHostedPlan'
import Cloud from '../../resources/cloud.svg'

const StyledSelfHostedPlans = styled.section`
    background: ${colors.white};

    h3 {
        margin-bottom: 2rem;
    }

    .plans {
        position: relative;
        padding: 4rem 0;
        max-width: 800px;
        text-align: center;
        background: ${colors.offWhite};
        border: ${borders.light};
        z-index: 10000;

        &__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            max-width: 78rem;
            margin: 0 auto;
            padding: 4rem 8rem 2rem;
        }
    }

    object {
        position: absolute;
        top: -10rem;
        right: -35rem;
        z-index: -1;

        @media(max-width: ${sizes.breakpoints.lg}) {
            display: none;
        }
    }
`

const plans: SelfHostedPlanProps[] = [
    {
        title: 'Free',
        subtitle: 'For up to 5 users',
        features: ['Unlimited Hours', 'Private & Public Repos', 'Admin Dashboard'],
        btnText: 'Install Now',
        href: '/docs/self-hosted/latest/self-hosted/'
    },
    {
        title: <>$20 <span>/ month</span></>,
        subtitle: 'Per additional user',
        features: ['Unlimited Hours', 'Private & Public Repos', 'Admin Dashboard', '30-Day Free Trial'],
        btnText: 'Contact Sales',
        href: '/contact/'
    }
]

const SelfHostedPlans = () => (
    <StyledSelfHostedPlans>
        <div className="row">
            <div className="plans">
                <h3>Self-Host Gitpod</h3>
                <p>Host Gitpod on your own infrastructure. <Link to="/docs/self-hosted/latest/self-hosted/">Learn More</Link>.</p>
                <div className="plans__container">
                    {
                        plans.map((plan: SelfHostedPlanProps, i) => <SelfHostedPlan key={`${i}+${plan.title}`} {...plan} /> )
                    }
                </div>
                <object role="presentation" tabIndex={-1} data={Cloud} />
            </div>
        </div>
    </StyledSelfHostedPlans>
)

export default SelfHostedPlans
