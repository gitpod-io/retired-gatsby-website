import React from 'react'

import { isEurope } from '../../utils/helpers'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'

const Styled = styled.div`
    .links {
        display: flex;
        justify-content: space-between;
        padding-bottom: 1rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
        }

        & > div {

            &:not(:last-of-type) {
                margin-bottom: 4rem;
            }

            h2 {
                margin-bottom: 3rem;
            }

            h2 + p {
                margin: 0;
            }

            p:last-of-type {
                margin-bottom: 3rem;
            }

            .btn {
                margin-bottom: 2rem;
                margin-right: 2rem;
            }

            @media(min-width: ${sizes.breakpoints.md}) {
                &:first-of-type {
                    width: 45%;
                }

                &:last-of-type {
                    width: 40%;
                }
            }
        }
    }
`

const Plans = () => (
    <Styled>
        <section className="links">
            <div>
                <h2>Professional Open Source</h2>
                <p>
                    Gitpod is free for up to 50 hours/month on any public repository.
                </p>
                <p>
                    If you're a professional open-source developer and need more hours, you can apply to our free <a href="/docs/professional-open-source/" target="_blank"><strong>Professional Open Source</strong></a> plan.
                </p>
                <Link to="/contact/" state={{ subject: "Applying for Professional Open Source" }} className="btn">Apply Now</Link>
            </div>
            <div>
                <h2>For Students</h2>
                <p>
                    Get the <strong><a href="https://gitpod.io/subscription/" target="_blank">Student Unlimited</a> plan for {isEurope() ? '€8' : '$9'}</strong> per month.
                </p>
                <p>
                    Make sure your student email is set as your primary email on GitHub/GitLab. Please let us know if your educational institution is not correctly recognized.
                </p>
                <p>
                    <Link to="/contact/" state={{ subject: "Student Unlimited: Get Verified as a Student" }} className="btn">Get Verified as Student</Link>
                </p>
            </div>
        </section>
    </Styled>
)

export default Plans

