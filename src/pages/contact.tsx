import React from 'react'
import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import tick from '../resources/tick.svg'
import { sizes, borders } from '../styles/variables'

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
                @media(min-width: ${sizes.breakpoints.md}) {
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

    .sucess {
        min-height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
            text-align: center;
            min-height: 70vh;
        }

        h1 {
            line-height: 1.8;
        }

        span {
            font-weight: 600;
        }

        img {
            display: inline-block;
            height: 15rem;
            margin-right: 3rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                margin-right: 0;
                margin-bottom: 3rem;
            }
        }
    }

    .error {
        color: red;
        margin: 0 0 2rem;
        width: 100%;
    }
`

function encode(data: { [k: string]: string | number | boolean | null | undefined }) {
    return Object.keys(data)
        .map((key) => {
            const value = data[key];
            return encodeURIComponent(key) + '=' + (value === null || value === undefined ? 'null' : encodeURIComponent(value))
        })
        .join('&')
}

export default function ContactPage() {
    const [state, setState] = React.useState<{
        firstName?: string,
        lastName?: string,
        consent?: boolean,
        eMail?: string,
        message?: string,
        messageSent?: boolean,
        errorMessage?: string
    }>({})
    if (typeof window !== 'undefined' && window.location.hash && state.message === undefined) {
        setState({
            ...state,
            message: decodeURIComponent(window.location.hash.substr(1))
        });
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!state.eMail) {
            setState({
                ...state,
                errorMessage: 'Please provide a valid e-mail so we can reach out to you.'
            });
            return;
        }
        if(!state.message) {
            setState({
                ...state,
                errorMessage: "Sorry! message can't be empty please type a message."
            })
            return;
        }
        if (state.consent !== true) {
            setState({
                ...state,
                errorMessage: 'Please agree to the consent so we are allowed to store your provided information.'
            });
            return;
        }
        const form = e.target as HTMLFormElement;
        fetch('/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => setState({
                ...state,
                messageSent: true
            }))
            .catch((error) => alert(error))
    }

    return (
        <IndexLayout canonical="/contact/">
            <StyledContactPage className="grey-container">
                <div className="row">
                     
                    { state.messageSent ?
                        <div className="sucess">
                            <img src={tick} alt="Tick"/>
                            <h1><span>Thanks for Your Mail,</span><br/> We'll Get Back to you soon!</h1>
                        </div>
                    :
                    <form className="form"
                        method="POST"
                        name="Contact"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" 
                    />
                        <div style={{ visibility: "hidden" }}>
                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        </div>

                        <h1 style={{marginBottom: '2rem'}}>Contact</h1>

                        <div className="form__container">
                            <label className="visually-hidden" htmlFor="firstName">First Name</label>
                            <input 
                                autoFocus 
                                name="firstName" 
                                className="form__input form__input--half" 
                                type="text" placeholder="First Name" 
                                id="firstName" 
                                onChange={handleChange} 
                            />
                            <label className="visually-hidden" htmlFor="lastName">Last Name</label>
                            <input 
                                name="lastName" 
                                className="form__input form__input--half" 
                                type="text" placeholder="Last Name" 
                                id="lastName" 
                                onChange={handleChange} 
                            />
                            <label className="visually-hidden" htmlFor="eMail">E-Mail</label>
                            <input 
                                name="eMail" 
                                className="form__input" 
                                type="email" 
                                placeholder="E-mail" 
                                id="eMail" 
                                onChange={handleChange} 
                            />
                            <label className="visually-hidden" htmlFor="message">Please type your message</label>
                            <textarea name="message" className="form__textarea"
                                placeholder='Please Enter Your Message'
                                id="message"
                                onChange={handleChangeTextArea}
                                value={state.message}
                            >
                            </textarea>
                            <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '0px 0px 20px 0px' }}>
                                <input name="consent" id="consent" type="checkbox" onChange={handleChange} style={{margin: '0px 10px', transform: 'translateY(.5rem)'}}/>
                                <label htmlFor="consent">
                                    I consent to having this website store my submitted information so they can respond to my inquiry.
                                </label>
                            </div>
                             { state.errorMessage ? <p className="error">{state.errorMessage}</p> : null }
                            <div>
                                <button 
                                    type="submit" 
                                    className="btn btn--normal btn--cta" 
                                    style={{ cursor: 'pointer' }}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                    }
                </div>
            </StyledContactPage>
        </IndexLayout>
    )
}
