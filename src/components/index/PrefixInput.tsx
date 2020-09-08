import React, { useState } from 'react'

import styled from '@emotion/styled'
import Close from '../../resources/close.svg'
import Plus from '../../resources/plus.svg'
import World from '../../resources/world.svg'
import ArrowPointer from '../../resources/arrow-pointer.svg'
import { colors, sizes } from '../../styles/variables'

const Styled = styled.label`
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #252629;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

    .header {
        display: flex;
        align-items: center;
        padding-top: .8rem;
    }

    .dots {
        display: flex;
        align-items: center;
        padding: 0 1.5rem;
        height: 100%;

        span {
            display: block;
            height: 15px;
            width: 15px;
            background: #fff;
            border-radius: 50%;

            &:not(:last-of-type) {
                margin-right: .7rem;
            }

            &:nth-of-type(1) {
                background: #FF5A52;
            }

            &:nth-of-type(2) {
                background: #E6C029;
            }

            &:nth-of-type(3) {
                background: #54C22C;
            }
        }
    }

    .tab,
    .main {
        background: #36393b;
    }

    .tab {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        flex: 0 0 45%;
        height: 4rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        .bar {
            flex: 0 0 85%;
        }
    }

    .bar {
        background: #4e4e4e;
        border-radius: 10rem;
    }

    .new-tab {
        display: flex;
        margin-left: 2rem;
        color: #bdbfc3;
    }

    .main {
        display: flex;
        align-items: center;
        padding: .8rem 0;

        .bar {
            height: 2rem;
            width: 2.8rem;

            &-container {
                display: flex;
                padding-left: 1.5rem;
                margin-right: 1rem;

                @media(max-width: 640px) {
                    display: none;
                }
            }

            &:last-of-type {
                width: 3.2rem;
            }

            &:not(:last-of-type) {
                margin-right: 1.2rem;
            }

        }

        .input-container {
            display: flex;
            padding: .8rem;
            flex: 1;
            color: ${colors.offWhite0};
            line-height: 1;
            border: 1px solid #aaa;
            border-top-left-radius: 10rem;
            border-bottom-left-radius: 10rem;
            border-right: none;

            @media(max-width: 640px) {
                margin-left: 1rem;
            }
        }

        .wrapper {
            position: relative;
            flex: 1;

            &::before {
                content: url(${ArrowPointer});
                position: absolute;
                bottom: -5rem;
            }

            .message {
                position: absolute;
                bottom: -12rem;
                left: 2.5rem;
                display: flex;
                flex-direction: column;
                align-items: baseline;

                .btn {
                    margin-top: 2rem;
                }

                @media(max-width: 829px) {
                    bottom: -14rem;
                }

                @media(max-width: ${sizes.breakpoints.md}) {
                    bottom: -13rem;
                }

                @media(max-width: 700px) {
                    bottom: -14rem;
                }

                @media(max-width: 530px) {
                    left: -12rem;
                }

                @media(max-width: 410px) {
                    left: -14rem;
                    transform: scale(.8);
                }

                @media(max-width: 340px) {
                    left: -16rem;
                    bottom: -13rem;
                }
            }
        }

        .label {
            display: flex;
            align-items: center;
            @media(max-width: 340px) {
                font-size: 90%;
            }

            img {
                height: 1rem;
                margin: 0 1.5rem;
                transform: scale(2);
            }

            span {
                margin-right: .3rem;
                background: #3f638b;
            }
        }

        input {
            display: block;
            width: 100%;
            max-width: 50rem;
            padding: .3rem 0;
            color: ${colors.text};
            background: ${colors.offWhite0};
            border: 2px solid ${colors.link};

            @media(max-width: 340px) {
                font-size: 90%;
            }
        }

    }

    .info {
        height: 14rem;
        background: #292c31;
        border-bottom-right-radius: 3px;
    }

    .btn--small {
        border: 2px solid ${colors.link};
        padding: .96rem 2.3rem;

        &:hover {
            border: 2px solid ${colors.lightBlue};
        }
    }
`

const errorMessage = 'Please enter a valid GitLab, GitHub, or Bitbucket repository URL'

const PrefixInput = () => {
    const [url, setUrl] = useState<string>(`https://github.com/gitpod-io/spring-petclinic`)
    const [error, setError] = useState<string>('')

    const validateUrl = (url: string) => {
        const lowerCaseUrl = url.toLowerCase()
        if (lowerCaseUrl.includes('github.com')) {
            return true;
        }
        if (lowerCaseUrl.includes('gitlab.com')) {
            return true;
        }
        if (lowerCaseUrl.includes('bitbucket.org')) {
            return true;
        }
        return false;
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const el = e.target as HTMLInputElement
        if(validateUrl(el.value) || el.value == '') {
            setError('')
            setUrl(el.value)
        } else {
            setError(errorMessage)
        }
    }

    const handleReturn = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            const el = e.target as HTMLInputElement
            if(validateUrl(el.value)) {
                window.open(`https://gitpod.io/#${el.value}`, '_blank')
                setError('')
            } else {
              setError(errorMessage)
            }
        }
    }

    return (
        <Styled>
            <div className="header" aria-hidden="true">
                <div className="dots">
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                </div>
                <div className="tab">
                    <div className="bar">
                        &nbsp;
                </div>
                    <img src={Close} />
                </div>
                <div className="new-tab">
                    <img src={Plus} />
                </div>
            </div>
            <div className="main">
                <div className="bar-container" aria-hidden="true">
                    <div className="bar">&nbsp;</div>
                    <div className="bar">&nbsp;</div>
                    <div className="bar">&nbsp;</div>
                </div>
                <div className="input-container">
                    <div className="label">
                        <img src={World} aria-hidden="true" />
                        <span>https://gitpod.io/#</span>
                    </div>
                    <span className="wrapper">
                        <input
                            defaultValue={url}
                            onKeyPress={handleReturn}
                            onChange={handleChange}
                            type="text"
                        />
                        <div className="message" style={ error ? {color: '#bf4338'} : {}}>
                            <>
                                <p>
                                    { error ? error : 'Enter your GitLab, GitHub, or Bitbucket URL' }
                                </p>
                                <a
                                    href={`https://gitpod.io/#${url}`}
                                    target='_blank'
                                    className={`btn btn--small btn--cta ${error || !url ? 'btn--disabled' : ''}`}
                                    tabIndex={error || !url ? -1 : 0 }
                                >
                                    Start Workspace
                                </a>
                            </>
                        </div>
                    </span>
                </div>
            </div>
            <div className="info">
                &nbsp;
            </div>
        </Styled>
    )
}

export default PrefixInput
