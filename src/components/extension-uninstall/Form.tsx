import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { borders } from '../../styles/variables'
import { Email } from '../../functions/submit-form'
import tick from '../../resources/tick.svg'

const StyledForm = styled.form`
    p {
        margin-bottom: 1.2rem;
    }

    label, textarea {
        display: flex;
        align-items: center;
    }

    label {
        &:not(:last-of-type) {
            margin-bottom: .7rem;
        }
    }

    textarea {
        width: 100%;
        min-height: 100px;
        margin: 1.5rem 0;
        padding: 1rem;
        border: ${borders.light2};
        border-radius: 3px;
    }

    input {
        margin-right: 1rem;
    }

    .sucess {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .tick {
        margin-bottom: 3rem;
    }
`

const Form = () => {
    const [state, setState] = useState<{
        name?: string
        consent?: boolean
        email?: string
        feedback: string
        otherFeedback?: string
        messageSent?: boolean
        errorMessage?: string

    }>({
        feedback: ''
    })

    useEffect(() => {
        console.log(state)
    }, [state])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.getAttribute('data-text')
        setState({
            ...state,
            feedback: e.target.checked ? state.feedback + `\n${text}` : state.feedback.replace(`\n${text}`, '')
        })
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const email: Email = {
            from: {
                email: state.email,
                name: state.name
            },
            subject: 'Why did I uninstall the browser extension?' + '  (from ' + state.email + ')',
            message: state.feedback + state.otherFeedback
        }

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
        <StyledForm
            method="POST"
            name="Extension Deletion"
            onSubmit={handleSubmit}
        >
            {
                state.messageSent ? (
                    <div className="sucess">
                        <img src={tick} className="tick" alt="Tick" />
                        <h3>Thanks for your Feedback</h3>
                    </div>
                ) : (
                <>

                    <div style={{ visibility: 'hidden' }}>
                        <label>
                            Don’t fill this out if you're human: <input name="bot-field" />
                        </label>
                    </div>

                    <input type="hidden" name="form-name" value="extension-deletion" />
                    <h3>Why did you uninstall the browser extension?</h3>
                    <p>Check all that apply:</p>
                    <div>
                        <label>
                            <input type="checkbox" onChange={handleChange} name="usage" data-text="I never used it" />
                                I never used it
                        </label>
                        <label>
                            <input type="checkbox" onChange={handleChange} name="configuring" data-text="I have problems configuring my projects" />
                                I have problems configuring my projects
                        </label>
                        <label>
                            <input type="checkbox" onChange={handleChange} name="local" data-text="I prefer my local development" />
                                I prefer my local development
                        </label>
                        <label>
                            <input type="checkbox" onChange={handleChange} name="expected" data-text="Gitpod isn’t what I expected" />
                                Gitpod isn’t what I expected
                        </label>

                        <textarea onChange={handleTextAreaChange} aria-label="Do you have any other feedback?" placeholder="Do you have any other feedback?" name="otherFeedback"></textarea>

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

                        <button className="btn" disabled={!state.feedback && !state.otherFeedback}>Send</button>
                    </div>
                </>) 
            }
        </StyledForm>
    )
}

export default Form
