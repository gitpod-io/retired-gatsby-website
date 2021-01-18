import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'
import { projects } from '../../contents/projects'
import Project from './Project'
import PrefixInput from './PrefixInput'

const StyledGetStarted = styled.div`
  /* ------------------------------------------- */
  /* ----- Section Get Started ----- */
  /* ------------------------------------------- */

  .get-started {
    padding-top: 0;
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
      justify-content: center;
      flex-wrap: wrap;

      @media (max-width: ${sizes.breakpoints.lg}) {
        overflow-x: scroll;
        justify-content: space-between;
        flex-wrap: nowrap;
      }

      & > .project {
        margin-bottom: 5rem;
          margin-right: 5rem;

        @media (min-width: ${sizes.breakpoints.md}) {
          width: 19rem;
        }
      }
    }
  }
`

const GetStarted = () => (
  <StyledGetStarted className="row pattern">
    <section className="get-started" id="get-started">
      <h2>
        <strong>Get Started</strong>
      </h2>
      <p>
        Prefix any GitLab, GitHub, or Bitbucket URL with <strong>gitpod.io/#</strong>
      </p>

      <div className="get-started__prefix">
        <PrefixInput />
      </div>

      <h3>Or Try an Example Project</h3>

      <div className="get-started__projects">
        {projects.map((project, i) => (
          <Project
            key={i}
            image={project.image}
            title={project.title}
            githubUrl={project.githubUrl}
            gitlabUrl={project.gitlabUrl}
            bitbucketUrl={project.bitbucketUrl}
          />
        ))}
      </div>
    </section>
  </StyledGetStarted>
)

export default GetStarted
