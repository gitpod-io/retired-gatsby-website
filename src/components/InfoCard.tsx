import React from 'react'

import Twitter from '../resources/twitter.svg'
import Mail from '../resources/mail.svg'
import Discourse from '../resources/discourse.svg'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledInfoCard = styled.section`
    /* --------------------------------------- */
    /* ----- Info ----- */
    /* --------------------------------------- */

    section {
        padding-top: 0;
    }

    .h3 + p {
        margin: 0;
    }

    .info {
        @media(min-width: 831px) {
            flex: 0 0 44%;

            &:last-of-type {
                margin-left: auto;
            }
        }

        @media(max-width: 830px) {
            &:not(:last-of-type) {
                margin-bottom: 5rem;
            }
        }

        &-container {
            display: flex;

            @media(max-width: 830px) {
                flex-direction: column;
            }
        }

        p:last-of-type {
            margin-bottom: 2rem;
        }

        a {
            &:not(:last-of-type) {
                margin-right: 2rem;
            }
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            &:not(:last-child) {
                margin-bottom: 8rem;
            }
        }
    }
`

const InfoCard: React.SFC<{}> = () => (
    <StyledInfoCard>
        <section className="info-container">
            <div className="info">
                <h2 className="h3">Getting Started with Gitpod</h2>
                <p>You can simply start coding in Gitpod by prefixing any GitHub URL with <code>gitpod.io/#</code></p>
                <p>For a more detailed description of Gitpod and its IDE, Theia, please have a look at our documentation.</p>
                <Link to="/docs/" className="btn">Gitpod Docs</Link>
            </div>
            <div className="info">
                <h2 className="h3">Do You Need Help?</h2>
                <p>If you have any question, issue or feedback, please get in touch. We love to hear your feedback and help you out.</p>
                <Link to="/contact/" title="Contact">
                    <img alt="Mail Logo" src={Mail} />
                </Link>
                <a href="https://community.gitpod.io/" target="_blank" rel="noopener" title="Community">
                    <img alt="Discourse Logo" src={Discourse} style={{ width: 25 }} />
                </a>
                <a href="https://twitter.com/gitpod" target="_blank" rel="noopener" title="Twitter">
                    <img alt="Twitter Logo" src={Twitter} />
                </a>
            </div>
        </section>
    </StyledInfoCard>
)

export default InfoCard
