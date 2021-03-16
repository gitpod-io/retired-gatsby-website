import React from 'react'

import styled from '@emotion/styled'
import { sizes, borders } from '../styles/variables'

const StyledNewsletterForm = styled.section`
    /* ------------------------------------------- */
    /* ----- Section Newsletter ----- */
    /* ------------------------------------------- */

    .newsletter {
        padding: 12rem 0;

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 8rem 0;
        }

        &__input {
            margin: 0 1.5rem 3rem 0;
            padding: 1.2rem 2.5rem;
            border: ${borders.light1};
            border-radius: 100px;

            @media(max-width: ${sizes.breakpoints.sm}) {
                width: 100%;
            }
        }

        &__text {
            margin: -3rem 0 3rem;
        }
    }
`

const NewsletterForm: React.SFC<{}> = () => (
    <div className="row">
        <StyledNewsletterForm className="newsletter">
            <h2>Never Miss a Blog Post</h2>
            <p className="newsletter__text">Sign up for the newsletter and stay informs about the latest news from Gitpod and its community.</p>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input
                    placeholder="Enter your Email"
                    className="newsletter__input"
                />
                <button className="btn btn--cta">Sign Up</button>
            </form>
        </StyledNewsletterForm>
    </div>
)

export default NewsletterForm
