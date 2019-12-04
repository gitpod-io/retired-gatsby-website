import React from 'react'

import styled from '@emotion/styled'
import { shadows, borders, sizes, colors } from '../styles/variables'
import { projects } from '../utils/projects'
import Project from '../components/Project'
import ArrowIcon from '../resources/arrow-icon.svg'

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
                        color: ${colors.textLight};

                        @media(max-width: 650px) {
                            display: none;
                        }
                    }
                }

                input {
                    display: inline-block;
                    border: none;
                    background: #555;
                    color: ${colors.white};
                    padding: .5rem;
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
        val: 'https://github.com/freeCodeCamp/freeCodeCamp'
    }

    handleChange = (e: any) => {
        const val = e.target.value
        this.setState({val})
    }

    render() {
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
                                    <span>gitpod.io/#</span>
                                    <input
                                        id="url"
                                        defaultValue={this.state.val}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <a
                                    href={`https://gitpod.io#${this.state.val}`}
                                    target="_blank"
                                >
                                    <img alt="Arrow Right" src={ArrowIcon}/>
                                </a>
                            </div>
                            <p>Enter your GitHub or GitLab URL</p>
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
