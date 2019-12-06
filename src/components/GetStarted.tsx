import React from 'react'

import styled from '@emotion/styled'
import { shadows, borders, sizes, colors } from '../styles/variables'
import { projects } from '../utils/projects'
import Project from '../components/Project'
import ArrowIcon from '../resources/arrow-icon.svg'
import LenseIcon from '../resources/lense-icon.svg'

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
                height: 5rem;
                background: ${colors.offWhite2};
                width: 95%;
                padding: 2rem;
                border: 2px solid #ccc;
                border-radius: 100px;
                font-size: 1.7rem;

                @media(max-width: 660px) {
                    font-size: 1.5rem;
                    width: 99%;
                    padding: .5rem 2rem;
                }

                & > div {
                    margin-right: auto;

                    span {
                        color: ${colors.textDark};

                        @media(max-width: 650px) {
                            display: none;
                        }

                        img {
                            margin-right: 1rem;
                            margin-bottom: -.5rem;
                        }
                    }
                }

                input {
                    display: inline-block;
                    border: none;
                    background: ${colors.white};
                    color: ${colors.text};
                    padding: .6rem .5rem;
                    font-size: inherit;
                    width: 44rem;
                    border-radius: 2px;


                    @media(max-width: ${sizes.breakpoints.md}) {
                        width: 44.5rem;
                    }

                    @media(max-width: 550px) {
                        width: auto;
                    }
                }

                a {
                    transform: translateY(.3rem);

                    @media(max-width: 660px) {
                        img {
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
                font-size: 2.1rem;

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
                    color: ${colors.link};
                    font-weight: 600;
                }
            }
        }

        /* ----- Projects ----- */

        &__projects {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;
                align-items: center;
            }

            & > .project {
                margin-bottom: 3rem;

                @media(min-wdith: ${sizes.breakpoints.md}) {
                    width: 18%;
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
            const url = new URL(val)
            if ( !(url.host === 'github.com' || url.hostname === 'gitlab.com') ) {
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

    render() {
        const { val, message } = this.state

        return (
            <StyledGetStarted className="row">
                <section className="get-started" id="get-started">
                    <h2>Get Started</h2>

                    <div className="get-started__prefix">
                        <div className="get-started__prefix-text-container">
                            <h3 className="get-started__prefix-text">Prefix any GitHub or GitLab<br aria-hidden={true} />URL with <span>gitpod.io/#</span></h3>
                        </div>
                        <label htmlFor="url" className="get-started__prefix-input-container">
                            <div className="get-started__prefix-input">
                                <div>
                                    <span>
                                        <img alt="Search Icon" src={LenseIcon}/>
                                        gitpod.io/#
                                    </span>
                                    <input
                                        id="url"
                                        defaultValue={val}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <a
                                    href={`https://gitpod.io#${val}`}
                                    target="_blank"
                                >
                                    <img alt="Arrow Right" src={ArrowIcon}/>
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
