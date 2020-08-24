import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { isEurope } from '../../utils/helpers'
import MasterCard from '../../resources/mastercard.svg'
import Visa from '../../resources/visa.svg'

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

    @media (max-width: 1040px) {
      flex-direction: column;
    }

    &__container {
      flex: 0 0 45%;

      @media (max-width: 1040px) {
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

    img {
      height: 3.5rem;
      max-width: 8rem;
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
`

const SelfHostedFAQs = ({ title }: { title: string }) => (
  <StyledSelfHostedFAQs>
    <h2>
      {title} <strong>FAQ</strong>
    </h2>
    <div className="faqs">
      {title === 'Self-Hosted' ? (
        <>
          <div className="faqs__container">
            <div>
              <h3>Can I try Gitpod for free?</h3>
              <p>Of course! You can use Gitpod Self-Hosted on your own infrastructure for free for unlimited users.</p>
              <p>
                If you'd like to access additional features like unlimited prebuilds, shared workspaces, snapshots and an admin dashboard,
                you can upgrade to the Professional Plan at any time. Simply update your existing instance with a purchased license key.
                Self-hosted Gitpod licenses can currently only be purchased by request. Please <Link to="/contact/">Contact Sales</Link> to
                receive an offer.
              </p>
            </div>
            <div>
              <h3>Do you offer discounts for educational institutions?</h3>
              <p>
                Yes, qualified educational institutions may receive a special discount. Please visit{' '}
                <Link to="/education">Gitpod Education</Link> for more information or <Link to="/contact">Contact Sales</Link>.
              </p>
            </div>
            <div>
              <h3>What is the difference between SaaS and Self-Hosted?</h3>
              <p>
                If you choose <strong>Gitpod SaaS</strong>, we will manage and host Gitpod in the cloud for you. This means minimal setup
                efforts for you and secure data storage in the cloud. Gitpod SaaS is be the best solution for teams who want to get started
                immediately and don’t want to spend time on setup and operations.
              </p>
              <p>
                If you choose <strong>Gitpod Self-Hosted</strong>, you will manage and host Gitpod on your own instances. This means all
                data remains your infrastructure, as Gitpod can run behind corporate firewalls and on air-gapped networks.{' '}
                <strong>Gitpod Self-Hosted</strong> is the best solution for teams who want to keep full data control or use Gitpod in
                private networks.
              </p>
            </div>
          </div>
          <div className="faqs__container">
            <div>
              <h3>Can I add more users to my plan at any time?</h3>
              <p>Yes, you can add as many users as you like to your plan at any time.</p>
            </div>
            <div>
              <h3>How can I install Self-Hosted?</h3>
              <p>
                You can either install <strong>Gitpod Self-Hosted</strong> on <strong>Google Cloud Platform</strong>, <strong>AWS</strong>,
                or on <strong>Vanilla Kubernetes</strong>. Enhanced support for <strong>Azure</strong> and <strong>OpenShift</strong> is
                coming soon. See <Link to="/docs/self-hosted/latest/self-hosted/">Self-Hosted Installation</Link> for more information.
              </p>
            </div>
            <div>
              <h3>How can I pay?</h3>
              <p>
                Currently, <strong>Gitpod Self-Hosted</strong> can only be purchased on request. Please{' '}
                <Link to="/contact">Contact Sales</Link> to receive an offer.
              </p>
              <p>All our plans can be paid via invoice.</p>
            </div>
            <div>
              <h3>Still have more questions?</h3>
              <p>
                We are happy to answer them, please <Link to="/contact">Get in Touch</Link>.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="faqs__container">
            <div>
              <h3>Can I always use Gitpod for free?</h3>
              <p>
                Yes! Gitpod is always for free for public repositories for up to 50h per month. If you need more hours or would like to
                unlock more features, you can upgrade your subscription at any time. If you’re a professional open-source developer and need
                more hours, you can apply to our free <Link to="/docs/professional-open-source/">Professional Open Source plan</Link>.
              </p>
            </div>
            <div>
              <h3>Do you offer discounts for students and educational institutions?</h3>
              <p>
                Yes, qualified educational institutions may receive a special discount. Please visit{' '}
                <Link to="/education">Gitpod Education</Link> for more information or <Link to="/contact">Contact Sales</Link>. If you are a
                student, you may use the Student Unlimited Plan for {isEurope() ? '€8' : '$9'} per month (usually{' '}
                {isEurope() ? '€35' : '$39'}). See <a href="#plans">Gitpod for Students</a> for more information.
              </p>
            </div>
            <div>
              <h3>How can I pay?</h3>
              <p>All our plans can only be paid via credit card.</p>
              <p>
                <img src={MasterCard} alt="Mastercard" />
                <img src={Visa} alt="Visa" />
              </p>
            </div>
          </div>
          <div className="faqs__container">
            <div>
              <h3>Can I create a team account?</h3>
              <p>
                Sure, if you would like to mange subscriptions for a whole team on a single invoice, you can create a{' '}
                <a href="https://gitpod.io/teams/">team subscription.</a>
              </p>
              <p>
                In case you need more information on how to setup a team subscription, visit{' '}
                <Link to="/docs/teams/">gitpod.io/docs/teams.</Link>
              </p>
            </div>
            <div>
              <h3>Can I change my subscription at any time?</h3>
              <p>
                Yes, you can upgrade or downgrade whenever you want on <a href="https://gitpod.io/subscription/">gitpod.io/subscription</a>.
                Your billing cycle starts with the creation date of your subscription. After 30 days it will automatically renew itself.
              </p>
              <p>
                If you choose to upgrade, the pricing difference will be added to your next month’s invoice. If you choose to downgrade,
                you’ll be credited on your next month’s invoice.
              </p>
            </div>
            <div>
              <h3>What if I decide to cancel?</h3>
              <p>
                If you wish to stop using Gitpod, you may cancel your subscription at any time. Your cancellation will take into effect
                after that month’s billing cycle.
              </p>
            </div>
            <div>
              <h3>Still have more questions?</h3>
              <p>
                We are happy to answer them, please <Link to="/contact">Get in Touch</Link>.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  </StyledSelfHostedFAQs>
)

export default SelfHostedFAQs
