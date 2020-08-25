import React from 'react'

import styled from '@emotion/styled'
import Kubernetes from '../../resources/kubernetes.svg'
import { colors, sizes, borders } from '../../styles/variables'
import GoogleCloudLogo from '../../resources/google-cloud-logo.svg'
import AWSLogo from '../../resources/aws.svg'
import { Link } from 'gatsby'

interface InstallProps {
    title: string
    img: string
    alt: string
    text: string
    linkPath: string
    btnBackground?: boolean
}

const installs: InstallProps[] = [
    {
        title: "Google Cloud Platform",
        img: GoogleCloudLogo,
        alt: "Google Cloud",
        text: " Install Gitpod optimised for Google Cloud Platform.",
        linkPath: 'install-on-gcp-script',
        btnBackground: true
    },
    {
        title: "Amazon Web Services",
        img: AWSLogo,
        alt: "AWS",
        text: "Getting started with Gitpod on Amazon Web Services.",
        linkPath: 'install-on-aws-script',
        btnBackground: true
    },
    {
        title: "Vanilla Kubernetes",
        img: Kubernetes,
        alt: "Kubernetes",
        text: "All you need is a Kubernetes cluster.",
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
        max-width: 75rem;
        margin: 0 auto;
        padding: 4rem 0 5rem;

        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
            align-items: center;
        }

        &__box {
            max-width: 32rem;
            padding: 3rem 2rem;
            background: ${colors.white};
            border: ${borders.light};
            border-radius: 3px;

            @media(max-width: ${sizes.breakpoints.lg}) {
                margin: 5rem 0 0;
            }

            img {
                height: 6rem;
                margin-bottom: 3rem;
            }

            .btn {
                margin-top: 2rem;
            }
        }

        & + p {
           @media(max-width: ${sizes.breakpoints.lg}) {
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
                {
                    installs.map(({ title, text, img, alt, linkPath, btnBackground }: InstallProps, i) => (
                        <div key={`${i}+${title}`}className="install__box">
                            <img src={img} alt={alt} />
                            <h3>{title}</h3>
                            <p>
                                {text}
                            </p>
                            <Link to={`/docs/self-hosted/latest/install/${linkPath}/`} className={btnBackground ? 'btn btn--cta' : 'btn'}>Install Now</Link>
                        </div>
                    ))
                }
            </div>
            <p>Enhanced support for Azure and OpenShift is coming soon.</p>
        </div>
    </StyledSection>
)

export default Install 
