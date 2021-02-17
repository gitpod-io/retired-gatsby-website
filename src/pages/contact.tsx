import React from 'react'
import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import { sizes, borders } from '../styles/variables'
import SubmissionSucess from '../components/SubmissionSucess'
import { Email } from '../functions/submit-form'

const StyledContactPage = styled.div`
    /* --------------------------------------------- */
    /* ----- Form ----- */
    /* --------------------------------------------- */

    .form {
        padding: 10rem 0 8rem;
        margin: 0 auto;
        max-width: 650px;

        &__container {
            display: flex;
            flex-wrap: wrap;
        }

        &__input {
            display: block;
            width: 100%;
            padding: 1rem 2rem;
            border: ${borders.light1};
            border-radius: 3px;


            &:not(:last-child) {
                margin-bottom: 2rem;
            }

            &--half {
                @media(min-width: calc(${sizes.breakpoints.md} + 1px)) {
                    width: 48%;
                    &:first-of-type {
                        margin-right: 4%;
                    }
                }
            }
        }

        &__textarea {
            width: 100%;
            padding: 1rem 2rem;
            margin-bottom: 2rem;
            height: 22rem;
            border: ${borders.light1};
            border-radius: 3px;

        }
    }

    select {
        margin-bottom: 2rem;
        border-radius: 3px;
        border: ${borders.light1};
        color: inherit;
        background-size: 1.2em auto, 100%;
    }

    .subject {
        label {
            display: block;
            margin-bottom: 1rem;
        }
    }

    .error {
        color: red;
        margin: 0 0 2rem;
        width: 100%;
    }
`

const subjects: string[] = [
    'Question about Gitpod\'s Plans / Pricing',
    'Student Unlimited: Get Verified as a Student',
    'Applying for Professional Open Source',
    'Applying for the Custom IDE Support Beta',
    'Applying for a Job at Gitpod',
    'Other',
]

export default function ContactPage(props: any) {
    const [state, setState] = React.useState<{
        name?: string
        consent?: boolean
        email?: string
        subject?: string
        message?: string
        messageSent?: boolean
        errorMessage?: string
    }>({ subject: props && props.location && props.location.state && props.location.state.subject })
    if (typeof window !== 'undefined' && window.location.hash && state.message === undefined) {
        setState({
            ...state,
            message: decodeURIComponent(window.location.hash.substr(1))
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            errorMessage: undefined,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }

    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({
            ...state,
            errorMessage: undefined,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!state.email) {
            setState({
                ...state,
                errorMessage: 'Please provide a valid email address so that we can reply to you.'
            })
            return
        }
        if (!state.message) {
            setState({
                ...state,
                errorMessage: "Sorry! The message can't be empty, please type a message."
            })
            return
        }
        if (state.consent !== true) {
            setState({
                ...state,
                errorMessage: 'Please agree to us storing your provided information so that we can reply to you.'
            })
            return
        }

        const email: Email = {
            from: {
                email: state.email,
                name: state.name
            },
            subject: state.subject + '  (from ' + state.email + ')',
            message: state.message
        };

        fetch('/.netlify/functions/submit-form', {
            method: 'POST',
            body: JSON.stringify(email)
        })
            .then(() =>
                setState({
                    ...state,
                    messageSent: true
                })
            )
            .catch((error) => alert(error))
    }
    return (
        <IndexLayout canonical="/contact/">
            <StyledContactPage className="pattern">
                <div className="row">
                    {state.messageSent ? (
                        <SubmissionSucess />
                    ) : (
                            <form
                                className="form"
                                method="POST"
                                name="Contact"
                                onSubmit={handleSubmit}
                            >
                                <input 
                                    type="hidden" 
                                    name="form-name" 
                                    value="contact" 
                                />
                                <div style={{ visibility: 'hidden' }}>
                                    <label>
                                        Don’t fill this out if you're human: <input name="bot-field" />
                                    </label>
                                </div>

                                <h1 style={{ marginBottom: '2rem' }}>
                                    Contact
                                </h1>

                                <div className="form__container">
                                    <label className="visually-hidden" htmlFor="Name">
                                        {' '}
                                        Name
                                    </label>
                                    <input
                                        autoFocus
                                        name="name"
                                        className="form__input form__input--half"
                                        type="text"
                                        placeholder="Name"
                                        id="Name"
                                        onChange={handleChange}
                                    />
                                    <label className="visually-hidden" htmlFor="email">
                                        E-Mail
                                    </label>
                                    <input
                                        name="email"
                                        className="form__input form__input--half"
                                        type="email"
                                        placeholder="E-mail"
                                        id="email"
                                        onChange={handleChange}
                                    />
                                    <div className="subject">
                                        <label htmlFor="subject">Please choose a subject</label>
                                        <select value={state.subject} onChange={handleChangeSelect} name="subject" id="subject">
                                            <option>{state.subject ? state.subject : '-- Subject --'}</option>
                                            {subjects
                                                .filter((subject) => subject !== state.subject)
                                                .map((subject, i) => (
                                                    <option key={i} value={subject}>
                                                        {subject}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                    <div>
                                        <p style={{marginBottom: '.5rem'}}>Looking for help with a common request?</p>
                                        <ul>
                                            <li><a href="https://community.gitpod.io/">Get help from the Gitpod Community</a></li>
                                        </ul>
                                    </div>
                                    <div style={{ flex: '0 0 100%', marginTop: '1.5rem' }}>
                                        <label style={{ display: 'block', marginBottom: 10 }}>How can we help?</label>
                                        <textarea
                                            name="message"
                                            className="form__textarea"
                                            placeholder="Please type your message"
                                            id="message"
                                            onChange={handleChangeTextArea}
                                            value={state.message}
                                        ></textarea>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '0px 0px 20px 0px' }}>
                                        <input
                                            name="consent"
                                            id="consent"
                                            type="checkbox"
                                            onChange={handleChange}
                                            style={{ margin: '0px 10px', transform: 'translateY(.5rem)' }}
                                        />
                                        <label htmlFor="consent">
                                            I consent to having this website store my submitted information so that a support staff can respond to my inquiry.
                  </label>
                                    </div>
                                    {state.errorMessage ? <p className="error">{state.errorMessage}</p> : null}
                                    <div>
                                        <button type="submit" className="btn btn--cta" style={{ cursor: 'pointer' }}>
                                            Send
                  </button>
                                    </div>
                                </div>
                            </form>
                        )}
                </div>
            </StyledContactPage>
        </IndexLayout>
    )
}
