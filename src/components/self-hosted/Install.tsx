import React from 'react'

import styled from '@emotion/styled'
import Kubernetes from '../../resources/kubernetes.svg'
import { colors, sizes, borders } from '../../styles/variables'
import GoogleCloudLogo from '../../resources/google-cloud-logo.svg'
import AWS from '../../resources/aws.svg'
import { Link } from 'gatsby'

interface InstallProps {
  title: string | JSX.Element
  img: string
  alt: string
  linkPath: string
  btnBackground?: boolean
}

const installs: InstallProps[] = [
  {
    title: 'Google Cloud Platform',
    img: GoogleCloudLogo,
    alt: 'Google Cloud logo',
    linkPath: 'install-on-gcp-script'
  },
  {
    title: 'Amazon Web Services',
    img: AWS,
    alt: 'AWS logo',
    linkPath: 'install-on-aws-script'
  },
  {
    title: 'Vanilla Kubernetes',
    img: Kubernetes,
    alt: 'Kubernetes logo',
    linkPath: 'install-on-kubernetes'
  }
]

const StyledSection = styled.section`
  text-align: center;

  /* ------------------------------------------- */
  /* ----- Section Install ----- */
  /* ------------------------------------------- */

    .install {
        display: flex;
        justify-content: space-between;
        max-width: 110rem;
        margin: 0 auto;
        padding: 4rem 0 5rem;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      padding: 2rem;
    }

    &__box {
      display: flex;
      flex-direction: column;
      flex: 0 0 30%;
      max-width: 32rem;
      padding: 3rem 1rem;
      background: ${colors.white};
      border: ${borders.light};
      border-radius: 3px;

      @media (max-width: ${sizes.breakpoints.lg}) {
        &:not(:last-of-type) {
          margin-bottom: 5rem;
        }
      }

      @media (max-width: 900px) {
        min-width: 28rem;
      }

      @media (max-width: 320px) {
        min-width: 25rem;
      }

      .text {
        flex: 1;
      }

      .btn {
        align-self: center;
      }

      h3 {
        font-size: 1.9rem;
      }

      img {
        height: 8rem;
        width: 8rem;
        margin-bottom: 3rem;
      }

      .btn {
        margin-top: 2rem;
      }
    }
    }

    & + p {
      @media (max-width: ${sizes.breakpoints.lg}) {
        max-width: 70rem;
        margin: 0 auto;
      }
    }
  }
`

const Install = () => (
  <StyledSection className="install__section pattern-bg">
    <div className="row" id="install">
      <h2>Install Gitpod Self-Hosted</h2>
      <div className="install">
        {installs.map(({ title, img, alt, linkPath, btnBackground }: InstallProps, i) => (
          <div key={`${i}+${title}`} className="install__box">
            <div className="text">
              <img src={img} alt={alt} />
              <h3>{title}</h3>
            </div>
            <Link to={`/docs/self-hosted/latest/install/${linkPath}/`} className={btnBackground ? 'btn btn--cta' : 'btn'}>
              Install Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  </StyledSection>
)

export default Install
