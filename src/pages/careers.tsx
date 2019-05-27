import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import GitGraph from '../components/GitGraph';
import { colors, breakpoints } from '../styles/variables';
import {UnderLine} from '../styles/typography';
import styled from '@emotion/styled';
import { getEmSize } from '../styles/mixins';

const FeatureList = styled.ul`
    list-style: none;
    text-align: center;
`

const Job = styled.div`
    background: ${colors.background2};
    padding: 15px 35px;
    margin-bottom: 40px;
    p {
        margin-bottom: 40px;
    }
    h3 {
        margin: 0;
    }
    h4 {
        margin-top: 50px;
        font-weight: bold;
    }
    li {
        position: relative;
        margin-bottom: 12px;
        list-style: none;
        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: -40px;
            display: block;
            background: #1aa6e4;
            height: 2px;
            width: 22px;
        }
    }
`

const SectionAbout = styled.section`
    .row {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .col {
        padding: 15px 0;
        text-align: center;
        @media(min-width: ${getEmSize(breakpoints.md)}em) {
            flex: 3.33;
            text-align: left;
            &:not(:last-child) {
                padding-right: 60px;
            }
        }
    }
    .svg-container {
        text-align: center;
        padding: 40px 0;
        svg {
            height: 60px;
        }
    }
    p {
        margin-top: -10px;
    }
    p + p {
        margin-top: 22px;
    }
`

const CareersPage: React.SFC<{}> = () => (
    <IndexLayout title="Gitpod - Careers" canonical="https://www.gitpod.io/careers">
        <Page>
            <Container>
                <GitGraph left={-900} top={150} graph={[
                    { start: [0, 150] },
                    { right: 860 },
                    { down: 100 },
                    { right: 145 },
                    {},
                    { right: 210 },
                    {},
                    { right: 200 },
                    {},
                    { right: 180 },
                    {},
                    { right: 200 },
                    {},
                    { right: 145 },
                    { up: 100 },
                    { right: 860 },

                ]} />
                <Logos logos={[
                    [1050, 125, 40],
                ]} />
                <div style={{ marginTop: 60 }}>
                    <h4 style={{ color: colors.fontColor2 }}>We're hiring!</h4>
                    <h1>Join the Gitpod team</h1>
                    <UnderLine/>
                </div>
                <p style={{ marginBottom: 170 }} >
                    Gitpod aims to make development better for everyone, and it's built on a culture of trust and empathy. Help us shape its future!
                </p>
                <FeatureList className='flex hidden-md-down' style={{ justifyContent: 'space-between', marginTop: '5rem', marginBottom: '8rem', alignItems: 'flex-end' }}>
                    <li>Remote-friendly</li>
                    <li>A worthy mission</li>
                    <li>People who care</li>
                    <li>Travel opportunities</li>
                    <li>An office with a view</li>
                </FeatureList>
            </Container>
            <Container>
                <SectionAbout>
                    <h3>About us</h3>
                    <div className='row'>
                        <div className='col'>
                            <div className="svg-container">
                                <svg id="logo-final" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.7 206.4" >
                                    <polygon className="st0" points="89.3,185.6 17.7,144.6 17.7,61.9 17.8,61.9 0,51.6 0,154.8 0,154.8 89.3,206.4 89.3,206.4"
                                        fill="#0078c6"
                                    />
                                    <polygon className="st0" points="89.3,103.2 89.3,103.2 35.8,72.3 35.7,72.3 35.7,134.2 89.3,164.9 89.3,103.2"
                                        fill="#0078c6"
                                    />
                                    <polygon className="st1" points="178.7,51.6 89.3,0 0,51.6 0,51.6 17.8,61.9 89.3,20.6 161,61.8 178.7,51.6 178.7,51.6"
                                        fill="#1aa6e4"
                                    />
                                    <polygon className="st1" points="143,72.2 89.4,41.3 35.8,72.3 89.3,103.2"
                                        fill="#1aa6e4"
                                    />
                                    <polygon className="st2" points="89.3,103.2 89.3,103.2 89.3,103.2 89.3,103.2 89.3,103.2"
                                        fill="#0081d8"
                                    />
                                    <polygon className="st2" points="89.3,103.2 89.3,103.2 89.3,103.2 143,72.2 143,72.2"
                                        fill="#0081d8"
                                    />
                                    <polygon className="st2" points="161,61.8 161,61.8 178.7,51.6 178.7,51.6"
                                        fill="#0081d8"
                                    />
                                    <polygon className="st2" points="178.7,51.6 161,61.8 143,72.2 89.3,103.2 89.3,103.2 89.3,103.2 89.3,103.2 89.3,112.4 89.3,112.4 89.3,136.9 89.3,136.9 89.3,164.9 89.3,164.9 143,134.1 143,113.7 107,134.2 107,113.4 161,82.7 161,144.6 89.3,185.6 89.3,206.4 178.7,154.8 178.7,154.8 178.7,154.8"
                                        fill="#0081d8"
                                    />
                                </svg>
                            </div>
                            <p>
                                Gitpod is an online one-click IDE that launches ready-to-code dev environments from any GitHub page. Automating development environments eliminates hours of tedious setup time, improves teamwork, and makes software development more reproducible and scalable.
                                </p>
                            <p>
                                Officially launched in April 2019, Gitpod is a very young product which gives you lots of opportunities to shape its future. Currently we’re working in a team of less than 20 people and we’re planning to grow continually.
                                </p>
                        </div>
                        <div className='col'>
                            <div className="svg-container">
                                <svg id="Gruppe_170" data-name="Gruppe 170" xmlns="http://www.w3.org/2000/svg" width="116.521" height="71.526" viewBox="0 0 116.521 71.526">
                                    <path d="M305.72,115.889c-4.938-9.669-5.116-18.31-2.1-25.9,3.512-8.832,11.353-16.187,21.04-22.062l1.347-.816L326,68.68l-.061,11.188a65.709,65.709,0,0,1,14.454,2.323c6.924,1.664,12.7,3.394,19.457,2.39,5.8-.857-7.061,11.352-24.958,15.017-11.483,2.353-17.435,8.9-19.165,15.722a17.212,17.212,0,0,0,.784,10.969,13.714,13.714,0,0,0,7.14,7.339c4.2,1.8,9.791,1.557,16.331-2.106a46.985,46.985,0,0,0,7.408-.873q.543-.106,1.085-.223l-.561.447c-10.278,8.2-19.28,9.173-25.785,6.27a17.877,17.877,0,0,1-9.022-9.357A21.373,21.373,0,0,1,312,114.268c1.983-8.114,8.831-15.8,22.105-18.519a71.547,71.547,0,0,0,11.447-3.166,29.222,29.222,0,0,0,7.729-4.278c-3.163-.024-6.81-.9-10.879-1.876-5.752-1.382-12.377-2.972-19.479-2.554l-.938.056,0-.941.05-8.777c-7.266,4.952-12.685,11-15.084,17.942a25.991,25.991,0,0,0,.475,17.894A21.62,21.62,0,0,0,306,116.431Z" transform="translate(-301.626 -67.107)" fill="#fff" fill-rule="evenodd" />
                                    <path d="M377.508,125.328l2.929-3.1,4.139,3.483Z" transform="translate(-352.724 -104.225)" fill="#fff" fill-rule="evenodd" />
                                    <path d="M348.5,138.516c10.388,4.863,19.877,3.947,28.8.227,9.031-3.765,17.537-10.409,25.813-16.876,2.564-2,5.108-3.991,7.645-5.879l-13.224,4.161,6.5-15.435-.992.3a40.718,40.718,0,0,0-6.177,6.772,74.89,74.89,0,0,0-8.686,16.048c-1.816,1.2-3.651,2.33-5.5,3.365a87.207,87.207,0,0,1,10.579-21.121c4.424-6.181,9.429-10.552,15.026-13.066,5.723-2.57,11.873-2.944,18.588-1.324,3.661.726,27.2,12.4,20.866,12.006-13.7-5.038-27.194,5.527-40.838,16.208l-1.365,1.067c-8.468,6.617-17.167,13.413-26.564,17.389-9.495,4.017-19.646,5.141-30.868.3l-.423-.183-.092-.456c-.087-.429-.159-.867-.215-1.31s-.1-.9-.125-1.337l-.084-1.473Z" transform="translate(-332.287 -85.694)" fill="#fff" fill-rule="evenodd" />
                                </svg>
                            </div>
                            <p>
                                TypeFox is the company behind Gitpod, a team of developer tool specialists and longtime contributors to many open-source projects. We’re a driving force behind the language server protocol and initiators of Eclipse Theia, the next generation IDE that powers Gitpod. A characteristic of our team is a fervour to learn new things.
                                </p>
                        </div>
                        <div className='col'>
                            <div className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="120.084" height="82.37"
                                    viewBox="0 0 120.084 82.37" stroke="#1aa6e4" fill="#1e1e1e">
                                    <defs />
                                    <g id="Gruppe_169" data-name="Gruppe 169" transform="translate(1.053)">
                                        <g id="Gruppe_101" data-name="Gruppe 101" transform="translate(48.047 8.415)">
                                            <path id="Pfad_192" data-name="Pfad 192" className="cls-1" d="M17203.043,14544.99s-6.35-42.762,14.889-43.471,13.748,43.471,13.748,43.471"
                                                transform="translate(-17202.154 -14480.678)" />
                                            <g id="Ellipse_190" data-name="Ellipse 190" className="cls-1" transform="translate(4.227)">
                                                <ellipse className="cls-2" cx="11.2" cy="10.839" rx="11.2" ry="10.839"
                                                />
                                                <ellipse className="cls-3" cx="11.2" cy="10.839" rx="10.2" ry="9.839"
                                                />
                                            </g>
                                        </g>
                                        <g id="Gruppe_103" data-name="Gruppe 103" transform="translate(78.804)">
                                            <path id="Pfad_191" data-name="Pfad 191" className="cls-1" d="M17203.283,14556.793s-8.078-54.373,18.926-55.273,17.486,55.273,17.486,55.273"
                                                transform="translate(-17202.15 -14475.022)" />
                                            <g id="Ellipse_189" data-name="Ellipse 189" className="cls-1" transform="translate(5.374)">
                                                <ellipse className="cls-2" cx="14.241" cy="13.781" rx="14.241" ry="13.781"
                                                />
                                                <ellipse className="cls-3" cx="14.241" cy="13.781" rx="13.241" ry="12.781"
                                                />
                                            </g>
                                        </g>
                                        <g id="Gruppe_104" data-name="Gruppe 104" transform="translate(68.154 18.163)">
                                            <path id="Pfad_191-2" data-name="Pfad 191" className="cls-1" d="M17203.039,14544.754s-6.32-42.527,14.8-43.234,13.676,43.234,13.676,43.234"
                                                transform="translate(-17202.152 -14480.791)" />
                                            <g id="Ellipse_189-2" data-name="Ellipse 189" className="cls-1" transform="translate(4.204)">
                                                <ellipse className="cls-2" cx="11.139" cy="10.78" rx="11.139" ry="10.78"
                                                />
                                                <ellipse className="cls-3" cx="11.139" cy="10.78" rx="10.139" ry="9.78"
                                                />
                                            </g>
                                        </g>
                                        <g id="Gruppe_105" data-name="Gruppe 105" transform="translate(0 8.54)">
                                            <path id="Pfad_191-3" data-name="Pfad 191" className="cls-1" d="M17203.047,14544.986s-6.355-42.76,14.885-43.467,13.748,43.467,13.748,43.467"
                                                transform="translate(-17202.156 -14480.678)" />
                                            <g id="Ellipse_189-3" data-name="Ellipse 189" className="cls-1" transform="translate(4.227)">
                                                <ellipse className="cls-2" cx="11.201" cy="10.839" rx="11.201" ry="10.839"
                                                />
                                                <ellipse className="cls-3" cx="11.201" cy="10.839" rx="10.201" ry="9.839"
                                                />
                                            </g>
                                        </g>
                                        <g id="Gruppe_102" data-name="Gruppe 102" transform="translate(23.678)">
                                            <path className="cls-1" d="M17203.283,14556.793s-8.078-54.373,18.926-55.273,17.486,55.273,17.486,55.273"
                                                transform="translate(-17202.15 -14475.022)" />
                                            <g className="cls-1" transform="translate(5.374)">
                                                <ellipse className="cls-2" cx="14.241" cy="13.781" rx="14.241" ry="13.781"
                                                />
                                                <ellipse className="cls-3" cx="14.241" cy="13.781" rx="13.241" ry="12.781"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <p>
                                We’re a young and tech-driven team with the mission of making development better for everyone. In our team value an open and honest mindset, and effective pragmatism. We lead, collaborate and contribute to open-source projects and would love to share that with you. We’re convinced that continuous learning and exploring is the way to go for sustainably building the best solutions. Therefore we’re always curious about new approaches.
                                </p>
                        </div>
                    </div>
                </SectionAbout>
            </Container>
            <Container>
                <h3>Jobs</h3>
                <Job>
                    <h2>Gitpod Developer Advocate</h2>
                    <p>As a Developer Advocate, you will connect with developers around the world, try out new frameworks and technologies, and share what you’ve learned with the world. You will craft great resources to help developers build with Gitpod, including sample projects, blog posts, and documentation. You’ll help grow our developer community, champion the interests of our users and translate their feedback into actionable product insights.</p>
                    <h4>What you’ll do:</h4>
                    <ul>
                        <li>Create momentum and drive adoption of Gitpod through your interactions with developers building applications and projects with Gitpod</li>
                        <li>Champion Gitpod in person and online by presenting at conferences, writing technical tutorials, publishing articles and videos</li>
                        <li>Build inspiring demos, sample apps, and continuously improve the developer experience of Gitpod</li>
                        <li>Identify strategic partnership opportunities to grow our developer community</li>
                        <li>Influence the direction of Gitpod’s development by gathering insights from our developer community</li>
                        <li>Engage with developers to help them get the most out of Gitpod</li>
                    </ul>
                    <h4>What we’re looking for:</h4>
                    <ul>
                        <li>Creative, empathetic, communicative, and clever</li>
                        <li>Confident and comfortable presenting to different types of audiences, large and small</li>
                        <li>Adept at communicating technically complicated topics simply and elegantly</li>
                        <li>Strong hands-on developer who is comfortable with full-stack development</li>
                        <li>Intellectually curious, with great problem-solving skills</li>
                        <li>Happy to travel regularly</li>
                    </ul>
                </Job>
                <Job>
                    <h2>Gitpod Sales Engineer</h2>
                    <p>As a Sales Engineer, you will take control of our inbound marketing, and leverage Gitpod to make life easier for other software companies. You should like to engage with Enterprises and Universities, and advize them on their development tools and processes.</p>
                    <h4>What you’ll do</h4>
                    <ul>
                        <li>engage with customers to identify the best solutions for their needs</li>
                        <li>follow-up on leads from inbound marketing and conferences</li>
                        <li>tailor demonstrations for customers, conferences, and special events</li>
                        <li>set up proof-of-concepts and work closely with the customer to answer questions and troubleshoot as needed</li>
                        <li>confer with customers and engineering to assess technical constraints and determine requirements</li>
                    </ul>
                    <h4>What we’re looking for</h4>
                    <ul>
                        <li>prior experience with sales activities in enterprise or academia</li>
                        <li>ability to creatively explain and present complex concepts in an easy to understand manner</li>
                        <li>solid technical background with hands-on experience in software development and web technologies</li>
                    </ul>
                </Job>
                <p style={{ margin: "70px 0 40px 0" }}>
                    If no current Job offer fits your qualifications, but you're totally in love with Gitpod and want to help us improving it,
                        please send your application at <a href="mailto:contact@gitpod.io">contact@gitpod.io</a> anyway. We're curious to hear about you.
                    </p>
            </Container>
        </Page>
    </IndexLayout>
)

export default CareersPage
