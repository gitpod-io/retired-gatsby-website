import React from 'react'

import styled from '@emotion/styled'
import { shadows, borders, sizes, colors } from '../styles/variables'
import { projects } from '../utils/projects'
import Project from '../components/Project'
import GitpodGrey from '../resources/gitpod-logo-grey.svg'

const StyledGetStarted = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Get Started ----- */
    /* ------------------------------------------- */

    .get-started {

        h3 {
            font-weight: 400;
        }

        &__prefix {
            display: flex;
            margin-bottom: 12rem;
            box-shadow: ${shadows.light};
            border: ${borders.light};

            @media(max-width: ${sizes.breakpoints.lg}) {
                flex-direction: column;
            }

            &-input {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 95%;
                padding: 2rem;
                height: 5rem;
                font-size: 1.7rem;
                background: ${colors.offWhite2};
                box-shadow: ${shadows.light};
                border-radius: 100px;

                @media(max-width: 690px) {
                    font-size: 1.4rem;
                    width: 99%;
                    padding: .5rem 2rem;
                }

                @media(max-width: 600px) {
                    font-size: 1.3rem;
                }

                @media(max-width: 540px) {
                    padding: 4rem 1rem 4rem;
                }

                & > div {
                    margin-right: auto;

                    @media(max-width: 540px) {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin: 2rem 0;
                        transform: translateY(-1rem);
                    }

                    span {
                        color: ${colors.textDark};

                        @media(max-width: 523px) {
                            display: block;
                            margin-bottom: .5rem;
                        }

                        img {
                            margin-right: 1rem;
                            margin-bottom: -.5rem;
                            height: 2.5rem;
                            transform: translateY(.2rem);

                            @media(max-width: 560px) {
                                transform: scale(.8);
                            }
                        }
                    }
                }

                input {
                    display: inline-block;
                    width: 49rem;
                    background: ${colors.white};
                    color: ${colors.text};
                    padding: .1rem .3rem;
                    font-size: inherit;
                    border: 2px solid ${colors.link};

                    @media(max-width: 900px) {
                        width: 44.5rem;
                    }

                    @media(max-width: 690px) {
                       width: 38rem;
                    }

                    @media(max-width: 600px) {
                       width: 34rem;
                       padding: .1rem .2rem;
                    }


                    @media(max-width: 450px) {
                        min-width: 26rem;
                        width: auto;
                    }

                    @media(max-width: 310px) {
                        min-width: auto;
                    }
                }

                a {
                    transform: translateY(.3rem);

                    @media(max-width: 523px ) {
                        transform: translateY(.7rem);
                    }

                    &:hover,
                    &:focus {
                        svg {
                            stroke: ${colors.lightBlue};
                        }
                    }

                    svg {
                        transition: all .2s;

                        @media(max-width: 660px) {
                            transform: scale(.9);
                        }

                        @media(max-width: 600px) {
                            transform: scale(.7);
                        }
                    }
                }

                &-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 8rem 0;
                    transform: translateY(1.5rem);

                    @media(max-width: 523px) {
                        padding: 8rem 1rem;
                    }

                    @media(max-width: ${sizes.breakpoints.sm}) {
                        padding: 8rem .5rem;
                    }

                    p {
                        margin-top: 1rem;
                    }

                    @media(min-width: ${sizes.breakpoints.lg}) {
                        width: 65%;
                    }
                }

            }

            &-text {
                margin: 0;
                font-size: 2.4rem;

                @media(max-width: ${sizes.breakpoints.lg}) {
                    padding: 5rem 2rem;
                }

                &-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: ${colors.offWhite};


                    @media(min-width: ${sizes.breakpoints.lg}) {
                        width: 35%;
                    }
                }

                span {
                    color: transparent;
                    font-weight: 600;
                    background: url('/galaxy.jpg');
                    background-position: center right;
                    background-clip: text;
                    -webkit-background-clip: text;
                }
            }
        }

        h2 + p {
            font-size: 2rem;
        }

        /* ----- Projects ----- */

        &__projects {
            display: flex;
            justify-content: space-between;

            @media(max-width: ${sizes.breakpoints.lg}) {
                overflow-x: scroll;
            }

            & > .project {
                margin-bottom: 3rem;

                @media(min-wdith: ${sizes.breakpoints.md}) {
                    width: 18%;
                }

                @media(max-width: ${sizes.breakpoints.lg}) {
                    margin-right: 5rem;
                }
            }
        }
    }

`

class GetStarted extends React.Component {

    state = {
        val: 'https://github.com/freeCodeCamp/freeCodeCamp',
        message: '',
    }

    handleChange = (e: any) => {
        const val = e.target.value
        this.handleValidation(val)
        this.setState({val})
    }

    handleValidation = (val: string) => {
        try {
            if ( !( val.includes('github.com') || val.includes('gitlab.com')) ) {
                this.setState({message: 'Please Enter a valid Github or GitLab repo Url!'})
            }
            else {
                this.setState({message: ''})
            }
        }
        catch(e) {
            console.log(e.message)
        }
    }

    handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            this.handleValidation(e.target.value)
            if (!this.state.message) window.open(`https://gitpod.io#${this.state.val}`, '_blank')
        }
    }

    render() {
        const { val, message } = this.state

        return (
            <StyledGetStarted className="row">
                <section className="get-started" id="get-started">
                    <h2>Get Started</h2>
                    <p>Free for Open Source and 30 days free trial for private repositories.</p>

                    <div className="get-started__prefix">
                        <div className="get-started__prefix-text-container">
                            <h3 className="get-started__prefix-text">Prefix any GitHub or GitLab<br aria-hidden={true} />URL with <span>gitpod.io/#</span></h3>
                        </div>
                        <label htmlFor="url" className="get-started__prefix-input-container">
                            <div className="get-started__prefix-input">
                                <div>
                                    <span>
                                        <img alt="Gitpod Logo" src={GitpodGrey}/>
                                        gitpod.io/#
                                    </span>
                                    <input
                                        id="url"
                                        defaultValue={val}
                                        onChange={this.handleChange}
                                        onKeyPress={this.handleKeyPress}
                                    />
                                </div>
                                <a
                                    href={`https://gitpod.io#${val}`}
                                    target="_blank"
                                    style={ message ? {pointerEvents: "none"} : {} }
                                    tabIndex={ message ? -1 : 0 }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#4D4D4D" width="29.524" height="20.157"><g data-name="Gruppe 615" transform="translate(1.5 2.117)"><path data-name="Linie 99" fill="none" strokeLinecap="round" strokeWidth="2" d="M0 7.684h25.253"/><path data-name="Pfad 35" d="M18.984 0l7.038 7.972-7.038 7.951" fill="none" strokeLinecap="round" strokeWidth="2"/></g></svg>
                                </a>
                            </div>
                            <p>{ message ? <span style={{color: '#FF4136 '}}>{message}</span> : 'Enter your GitHub or GitLab URL' }</p>
                        </label>
                    </div>

                    <h3>Or Select a Project</h3>

                    <div className="get-started__projects">
                        {
                            projects.map(
                                (project, i) => (
                                    <Project
                                        key={i}
                                        image={<img alt={project.alt} src={project.image}/>}
                                        title={project.title}
                                        href={project.href}
                                    />
                                )
                            )
                        }
                    </div>

                </section>
            </StyledGetStarted>
        )
    }
}

export default GetStarted
