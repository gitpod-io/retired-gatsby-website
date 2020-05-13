import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'

const StyledSelfHostedFAQs = styled.section`

    h2 {
        text-align: center;
    }

    .faqs {
        display: flex;
        justify-content: space-between;
        max-width: 900px;
        margin: 0 auto;
        padding: 5rem 0;

        @media(max-width: 1040px) {
            flex-direction: column;
        }

        &__container {
            flex: 0 0 45%;

            @media(max-width: 1040px) {
                max-width: 600px;
                margin: 0 auto;

                &:not(:last-child) {
                    margin-bottom: 10rem;
                }
            }

            & > div {
                &:not(:last-child) {
                    margin-bottom: 8rem;
                }
            }
        }
    }
`

const SelfHostedFAQs = () => (
    <StyledSelfHostedFAQs>
        <h2>Self-Hosted <strong>FAQ</strong></h2>
        <div className="faqs">
            <div className="faqs__container">
                <div>
                    <h3>Can I try Gitpod for free?</h3>
                    <p>
                        Of course! You can try the full version on your own infrastructure for 30 days for free. Gitpod Self-Hosted is always free for up to five users. Get started now and <Link to="/docs/self-hosted/latest/self-hosted/">Install Self-Hosted</Link>.
                </p>
                    <p>
                        If you like the experience, you can continue using Gitpod by simply updating your existing instance with a purchased license key. Self-hosted Gitpod licenses can currently only be purchased by request. Please <Link to="/contact/">Contact Sales</Link> to receive an offer.
                </p>
                </div>
                <div>
                    <h3>Do you offer discounts for educational institutions?</h3>
                    <p>
                        Yes, qualified educational institutions may receive a special discount. Please visit <Link to="/education">Gitpod Education</Link> for more information or <Link to="/contact">Contact Sales</Link>.
                    </p>
                </div>
                <div>
                    <h3>What’s the difference between Cloud and Self-Hosted?</h3>
                    <p>
                        If you choose <strong>Gitpod Cloud</strong>, we will manage and host Gitpod in the cloud for you. This means minimal setup efforts for you and secure data storage in the cloud. Gitpod Cloud is be the best solution for teams who want to get started immediately and don’t want to spend time on setup efforts.
                    </p>
                    <p>    
                        If you choose <strong>Gitpod Self-Hosted</strong>, you will manage and host Gitpod on your own instances. This means all data remains your infrastructure, as Gitpod can run behind corporate firewalls and on air-gapped networks. <strong>Gitpod Self-Hosted</strong> is the best solution for teams who want to keep full data control and don’t mind the additional setup efforts.
                    </p>
                </div>
            </div>
            <div className="faqs__container">
                <div>
                    <h3>Can I add more users to my plan at any time?</h3>
                    <p>
                        Yes, you can add as many users as you like to your plan at any time. As soon as you exceed the free plan of five users, your plan upgrades to the paid plan for $20/month per user.   
                    </p>
                </div>
                <div>
                    <h3>How can I install Self-Hosted?</h3>
                    <p>
                        You can either install <strong>Gitpod Self-Hosted</strong> on <strong>Google Cloud Platform</strong> or on <strong>Vanilla Kubernetes</strong>. Enhanced support for <strong>AWS</strong>, <strong>Azure</strong> and <strong>OpenShift</strong> is coming soon. See <Link to="/docs/self-hosted/latest/self-hosted/">Self-Hosted Installation</Link> for more information.
                    </p>
                </div>
                <div>
                    <h3>How can I pay?</h3>
                    <p>
                        Currently, <strong>Gitpod Self-Hosted</strong> can only be purchased on request. Please <Link to="/contact">Contact Sales</Link> to receive an offer. 
                    </p>
                    <p>
                        All our plans can be paid via Credit Card.
                    </p>
                </div>
                <div>
                    <h3>Still have more questions?</h3>
                    <p>We are happy to answer them, please <Link to="/contact">Get in Touch</Link>.</p>
                </div>
            </div>
        </div>
    </StyledSelfHostedFAQs>
)

export default SelfHostedFAQs

