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
        feedback: string
        otherFeedback?: string
        messageSent?: boolean
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
            subject: 'Why did I uninstall the browser extension?',
            feedback: state.feedback,
            otherFeedback: state.otherFeedback
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
                !state.messageSent ? (
                <>
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
                        <button className="btn" disabled={!state.feedback && !state.otherFeedback}>Send</button>
                    </div>
                </>) : ( 
                <div className="sucess">
                    <img src={tick} className="tick" alt="Tick" />
                    <h3>Thanks for your Feedback</h3>
                </div> 
                )
            }
        </StyledForm>
    )
}

export default Form
