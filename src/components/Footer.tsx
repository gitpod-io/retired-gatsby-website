import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { Link } from 'gatsby'
import ExternalLink from './ExternalLink'

const StyledFooter = styled.footer`
    background: ${colors.offWhite};
    padding: 7rem 0 4rem;
    font-size: 1.4rem;

    .links {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 1000px;
        margin: 0 auto;

        @media(min-width: 651px) {
            ul {
                width: 12.4rem;
            }
        }

        @media(max-width: 650px) {
            justify-content: center;

            ul {
                padding-bottom: 4rem;
                border-bottom: 1px solid #ddd;
                width: 48%;
                text-align: center;

                @media(max-width: 650px) {
                    width: 46%;
                    margin-left: 2%;
                    margin-right: 2%;
                }

                @media(max-width: 400px) {
                    width: 48%;
                    margin-left: 1%;
                    margin-right: 1%;
                }

                &:not(:last-child) {
                    margin-bottom: 5rem;
                }

                &:last-child {
                    transform: translateX(50%);

                    img {
                        transform: translateX(1rem);
                    }

                    @media(max-width: 650px) {
                        transform: none;
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

            svg {
                fill: ${colors.text};
            }

            .mail {
                stroke: ${colors.text};
            }
        }

    }

    svg {
        fill: #b5b5b5;
        height: 2.9rem;
        transition: all .2s;
    }

    .contact {
        max-width: 11rem;

        li:not(:first-child) {
            display: inline-block;
            margin-left: 2rem;
            transform: translateX(-2rem);

            @media(max-width: 650px) {
                transform: translateX(-1rem);
            }
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
                    <li><Link to="/features/">Features</Link></li>
                    <li><Link to="/pricing/">Pricing</Link></li>
                    <li><Link to="/blog/">Blog</Link></li>
                    <li><Link to="/self-hosted/">Self-Hosted</Link></li>
                    <li><Link to="/gitpod-vs-github-codespaces">Gitpod vs GitHub <br />Codespaces</Link></li>
                    <li><a href="https://gitpod.io/login/" style={{ color: colors.link, fontWeight: 600 }}>Log In</a></li>
                </ul>
                <ul>
                    <li>Solutions</li>
                    <li><Link to="/education/">Education</Link></li>
                    <li><Link to="/recruiting/">Recruiting</Link></li>
                    <li><Link to="/vendor/">Vendor</Link></li>
                </ul>
                <ul>
                    <li>Developer</li>
                    <li><Link to="/#get-started">Getting started</Link></li>
                    <li><Link to="/docs/">Documentation</Link></li>
                    <li>
                        <ExternalLink
                            href="https://github.com/gitpod-io/gitpod/issues/new?template=bug_report.md"
                            text="Report a Bug"
                        />
                    </li>
                    <li>
                        <ExternalLink
                            href="https://community.gitpod.io/"
                            text="Community"
                        />
                    </li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li><Link to="/about/">About</Link></li>
                    <li>
                        <Link to="/careers/">Careers</Link>
                    </li>
                    <li><Link to="/media-kit/">Media Kit</Link></li>
                </ul>
                <ul className="contact">
                    <li>Contact</li>
                    <li>
                        <Link to="/contact/" title="Contact">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32.118"
                                height="20.916"
                                viewBox="0 0 32.118 20.916"
                                className="mail"
                                stroke="#b5b5b5"
                            >
                                <title>Mail</title>
                                <path
                                    fillRule="evenodd"
                                    d="M2.137 2.086a1.252 1.252 0 00-.392.912v14.92a1.243 1.243 0 001.249 1.253h26.131a1.25 1.25 0 001.249-1.253V3a1.253 1.253 0 00-.39-.914L16.059 14.192 2.137 2.086zM2.994.5A2.489 2.489 0 00.5 2.982v14.952a2.482 2.482 0 002.494 2.482h26.13a2.489 2.489 0 002.494-2.482V2.982A2.482 2.482 0 0029.124.5zm13.065 12.074L28.506 1.745H3.612l12.447 10.829z"
                                ></path>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <a href="https://community.gitpod.io/" target="_blank" rel="noopener" title="Community">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Discourse</title>
                                <path d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563a7.395 7.395 0 00-6.337 3.57 7.247 7.247 0 00-.148 7.22L4.4 19.61l4.794-1.074a7.424 7.424 0 008.136-1.39 7.256 7.256 0 001.737-7.997 7.375 7.375 0 00-6.84-4.585h-.008z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/gitpod" target="_blank" rel="noopener" title="Twitter">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28.724"
                                height="23.348"
                                viewBox="0 0 28.724 23.348"
                            >
                                <title>Twitter</title>
                                <path
                                    d="M28.724 2.767a11.766 11.766 0 01-3.385.928A5.9 5.9 0 0027.93.435a11.806 11.806 0 01-3.743 1.427 5.9 5.9 0 00-10.041 5.373A16.73 16.73 0 012 1.082a5.9 5.9 0 001.823 7.873 5.865 5.865 0 01-2.668-.737 5.9 5.9 0 004.726 5.856 5.906 5.906 0 01-2.662.1 5.9 5.9 0 005.506 4.081A11.849 11.849 0 010 20.7a16.683 16.683 0 009.034 2.647 16.666 16.666 0 0016.75-17.529 12 12 0 002.941-3.051z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/gitpod-io/" target="_blank" rel="noopener" title="GitHub">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28.748"
                                height="28.016"
                                viewBox="0 0 28.748 28.016"
                            >
                                <title>GitHub</title>
                                <path
                                    d="M14.372 0a14.362 14.362 0 00-4.54 27.991c.718.133.949-.312.949-.691v-2.674c-4 .867-4.827-1.695-4.827-1.695a3.8 3.8 0 00-1.6-2.106c-1.3-.892.1-.873.1-.873a3.015 3.015 0 012.2 1.481 3.057 3.057 0 004.179 1.2 3.047 3.047 0 01.912-1.915c-3.19-.369-6.543-1.6-6.543-7.1a5.558 5.558 0 011.485-3.86 5.166 5.166 0 01.145-3.8s1.2-.385 3.95 1.472a13.613 13.613 0 017.192 0c2.742-1.858 3.95-1.472 3.95-1.472a5.161 5.161 0 01.141 3.8 5.544 5.544 0 011.478 3.855c0 5.516-3.36 6.731-6.558 7.087a3.433 3.433 0 01.978 2.659V27.3c0 .382.23.831.957.689A14.362 14.362 0 0014.372 0z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="info">
                <p>Copyright © <a href="https://www.gitpod.io/" target="_blank" rel="noopener" title="Gitpod">Gitpod</a></p>
                <div><Link to="/imprint/">Imprint</Link>&nbsp;|&nbsp;<Link to="/terms/">Terms of Service</Link>&nbsp;|&nbsp;<Link to="/privacy/">Privacy Policy</Link></div>
            </div>
        </div>
    </StyledFooter>
)

export default Footer
