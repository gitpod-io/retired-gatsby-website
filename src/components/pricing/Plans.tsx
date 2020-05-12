import React from 'react'

import { isEurope } from '../../utils/helpers'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { sizes, colors, borders } from '../../styles/variables'
import BagGrey from '../../resources/bag-grey.svg'
import ProfessionalBadge from '../../resources/open-source-badge-grey.svg'

const Styled = styled.div`
    padding: 5rem 0;

    h2 {
        text-align: center;
    }

    .links {
        display: flex;
        justify-content: space-between;
        padding: 5rem 0;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;

            & > div:first-of-type {
                margin-bottom: 3rem;
            }
        }

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 0 0 45%;
            padding: 2rem 4rem;
            background: ${colors.white};
            border: ${borders.light};
            border-radius: 3px;
        }

        img {
            display: block;
            height: 7.5rem;
            margin-bottom: 3rem;        
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
    }
`

const Plans = () => (
    <Styled>
        <section>
            <h2>Special <strong>Use Cases</strong></h2>
            <div className="links">
                <div>
                    <div>
                        <img src={ProfessionalBadge} alt="Professional Badge"/>
                        <h3>Professional Open Source</h3>
                        <p>
                            Gitpod is free for up to 50 hours/month on any public repository.
                        </p>
                        <p>
                            If you're a professional open-source developer and need more hours, you can apply to our free <a href="/docs/professional-open-source/" target="_blank"><strong>Professional Open Source</strong></a> plan.
                        </p>
                    </div>
                    <div className="btn-container">
                        <Link to="/contact/" state={{ subject: "Applying for Professional Open Source" }} className="btn">Apply Now</Link>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={BagGrey} alt="School Bag"/>
                        <h3>For Students</h3>
                        <p>
                            Get the <strong><a href="https://gitpod.io/subscription/" target="_blank">Student Unlimited</a> plan for {isEurope() ? '€8' : '$9'}</strong> per month.
                        </p>
                        <p>
                            Make sure your student email is set as your primary email on GitHub/GitLab. Please let us know if your educational institution is not correctly recognized.
                        </p>
                    </div>
                    <div className="btn-container">
                        <Link to="/contact/" state={{ subject: "Student Unlimited: Get Verified as a Student" }} className="btn">Get Verified as Student</Link>
                    </div>
                </div>
            </div>
        </section>
    </Styled>
)

export default Plans

