import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { Link } from 'gatsby'
import Twitter from '../resources/twitter.svg'
import Github from '../resources/github.svg'
import Mail from '../resources/mail.svg'
import Spectrum from '../resources/spectrum.svg'
import ExternalLink from './ExternalLink'

const StyledFooter = styled.footer`
    background: ${colors.offWhite};
    padding: 7rem 0 4rem;
    font-size: 1.4rem;

    .links {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        @media(max-width: 650px) {
            justify-content: space-between;

            ul {
                padding-bottom: 4rem;
                border-bottom: 1px solid #ddd;
                width: 48%;
                text-align: center;

                &:not(:last-child) {
                    margin-bottom: 5rem;
                }

                &:last-child {
                    transform: translateX(50%);

                    img {
                        transform: translateX(1rem);
                    }
                }
            }
        }
    }

    li {

        &:not(:last-child) {
            margin-bottom: 1.6rem;
        }

        &:first-of-type {
            font-size: 1.7rem;
            font-weight: 600;
        }

    }

    a {
        color: ${colors.text};
        font-weight: 400;
        transition: all .2s;

        &:hover,
        &:focus {
            color: ${colors.link};
        }

    }

    .contact {
        li:not(:first-child) {
            display: inline-block;
            margin-right: 2rem;
        }
    }

    .info {
        text-align: center;
        margin: 5rem 0 0;

        p {
            margin-bottom: 2rem;
        }
    }

`

const Footer: React.SFC<{}> = () => (
    <StyledFooter role="contentinfo">
        <div className="row">
            <div className="links">
                <ul>
                    <li>Gitpod</li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/enterprise">Enterprise</Link></li>
                    <li><Link to="/login" style={{color: colors.link, fontWeight: 600}}>Login</Link></li>
                </ul>
                <ul>
                    <li>Solutions</li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/vendor">Vendor</Link></li>
                    <li><Link to="/recruiting">Recruiter</Link></li>
                </ul>
                <ul>
                    <li>Developer</li>
                    <li><Link to="/#get-started">Getting started</Link></li>
                    <li><Link to="/docs">Documentation</Link></li>
                    <li>
                        <ExternalLink
                            href="https://github.com/gitpod-io/gitpod/issues/new?template=bug_report.md"
                            text="Report a Bug"
                        />
                    </li>
                    <li>
                        <ExternalLink
                            href="https://spectrum.chat/gitpod"
                            text="Community"
                        />
                    </li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <ExternalLink
                            href="https://typefox.io/careers"
                            text="Career"
                        />
                    </li>
                    <li><Link to="#">Media Kit</Link></li>
                </ul>
                <ul className="contact">
                    <li>Contact</li>
                    <li>
                        <a href="https://twitter.com/gitpod" target="_blank">
                            <img alt="Twitter Logo" src={Twitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/gitpod-io/" target="_blank">
                            <img alt="GitHub Logo" src={Github} />
                        </a>
                    </li>
                    <br aria-hidden={true} />
                    <li>
                        <a href="mailto:contact@gitpod.io" target="_blank">
                            <img alt="Mail Logo" src={Mail} />
                        </a>
                    </li>
                    <li>
                        <a href="https://spectrum.chat/gitpod/" target="_blank">
                            <img alt="Spectrum Logo" src={Spectrum} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="info">
                <p>Copyright TypeFox All Right Reserved</p>
                <div><Link to="/imprint">Imprint</Link>&nbsp;|&nbsp;<Link to="/terms">Terms of Service</Link>&nbsp;|&nbsp;<Link to="/privacy">Privacy Policy</Link></div>
            </div>
        </div>
    </StyledFooter>
)

export default Footer
