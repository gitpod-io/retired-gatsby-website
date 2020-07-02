import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'
import { projects } from '../../utils/projects'
import Project from './Project'
import PrefixInput from './PrefixInput'

const StyledGetStarted = styled.div`
    /* ------------------------------------------- */
    /* ----- Section Get Started ----- */
    /* ------------------------------------------- */

    .get-started {
        text-align: center;

        h3 {
            font-weight: 400;
        }

        &__prefix {
            display: flex;
            margin-bottom: 12rem;
            text-align: left;
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
                    width: 19rem;
                }

                @media(max-width: ${sizes.breakpoints.lg}) {
                    margin-right: 5rem;
                }
            }
        }
    }

`

const GetStarted = () => (
    <StyledGetStarted className="row">
        <section className="get-started" id="get-started">
            <h2><strong>Get Started</strong></h2>
            <p>Prefix any GitLab, GitHub, or Bitbucket URL with <strong>gitpod.io/#</strong></p>

            <div className="get-started__prefix">
                <PrefixInput />
            </div>

            <h3>Or Try an Example Project</h3>

            <div className="get-started__projects">
                {
                    projects.map(
                        (project, i) => (
                            <Project
                                key={i}
                                image={<object role="presentation" tabIndex={-1}data={project.image} />}
                                title={project.title}
                                githubUrl={project.githubUrl}
                                gitlabUrl={project.gitlabUrl}
                                bitbucketUrl={project.bitbucketUrl}
                            />
                        )
                    )
                }
            </div>

        </section>
    </StyledGetStarted>
)

export default GetStarted
