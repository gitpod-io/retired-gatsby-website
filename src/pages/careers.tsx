import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import GitGraph from '../components/GitGraph';
import ExpandableJob from '../components/ExpandableJob';
import { colors, breakpoints } from '../styles/variables';
import { UnderLine } from '../styles/typography';
import styled from '@emotion/styled';
import { getEmSize } from '../styles/mixins';

const FeatureList = styled.ul`
    list-style: none;
    text-align: center;
`
const SectionAbout = styled.section`
    .row {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .col {
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
        padding-top: 25px;
        padding-bottom: 45px;
        svg {
            height: 60px;
        }
    }

    .team-svg {
        height: 75px;
        width: 75px;
    }

    .typefox-svg {
        width: 80px;
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
                <GitGraph left={-900} top={170} graph={[
                    { start: [0, 150] },
                    { right: 845 },
                    { down: 70 },
                    { right: 177 },
                    {},
                    { right: 263 },
                    {},
                    { right: 259 },
                    {},
                    { right: 256 },
                    {},
                    { right: 177 },
                    { up: 70 },
                    { right: 860 },

                ]} />
                <Logos logos={[
                    [1050, 125, 40],
                ]} />
                <div style={{ marginTop: 60 }}>
                    <h4 style={{ color: colors.fontColor2 }}>Help us build your favorite dev environment!</h4>
                    <h1>Join the team</h1>
                    <UnderLine />
                </div>
                <p style={{ marginBottom: 150 }} >
                    Gitpod aims to make development better for everyone, and it's built on a culture of trust and empathy.<br />
                    Help us shape its future, from Berlin, Paris, or anywhere in the world!
                </p>
                <FeatureList className='flex hidden-md-down' style={{ justifyContent: 'space-between', marginBottom: '2rem', alignItems: 'flex-end' }}>
                    <li>Flat hierarchy<br />&amp;<br />Short decision-paths</li>
                    <li>Work remotely<br />&amp;<br />Flexible working hours</li>
                    <li>People who care<br />&amp;<br />Regular team events</li>
                    <li>Worthy mission<br />&amp;<br />Effective pragmatism</li>
                </FeatureList>
            </Container>
            <Container>
                <SectionAbout>
                    <h2>About us</h2>
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
                            <p>Gitpod is a one-click online IDE that launches ready-to-code environments from any GitHub page. Automating dev environments eliminates hours of tedious setup time, and makes development more reproducible and scalable.<br /><br />
                                Launched in April 2019, Gitpod is a very young product which gives you lots of opportunities to shape its future.</p>
                        </div>
                        <div className='col'>
                            <div className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" className="typefox-svg" width="116.521" height="71.526" viewBox="0 0 116.521 71.526">
                                    <path d="M305.72,115.889c-4.938-9.669-5.116-18.31-2.1-25.9,3.512-8.832,11.353-16.187,21.04-22.062l1.347-.816L326,68.68l-.061,11.188a65.709,65.709,0,0,1,14.454,2.323c6.924,1.664,12.7,3.394,19.457,2.39,5.8-.857-7.061,11.352-24.958,15.017-11.483,2.353-17.435,8.9-19.165,15.722a17.212,17.212,0,0,0,.784,10.969,13.714,13.714,0,0,0,7.14,7.339c4.2,1.8,9.791,1.557,16.331-2.106a46.985,46.985,0,0,0,7.408-.873q.543-.106,1.085-.223l-.561.447c-10.278,8.2-19.28,9.173-25.785,6.27a17.877,17.877,0,0,1-9.022-9.357A21.373,21.373,0,0,1,312,114.268c1.983-8.114,8.831-15.8,22.105-18.519a71.547,71.547,0,0,0,11.447-3.166,29.222,29.222,0,0,0,7.729-4.278c-3.163-.024-6.81-.9-10.879-1.876-5.752-1.382-12.377-2.972-19.479-2.554l-.938.056,0-.941.05-8.777c-7.266,4.952-12.685,11-15.084,17.942a25.991,25.991,0,0,0,.475,17.894A21.62,21.62,0,0,0,306,116.431Z" transform="translate(-301.626 -67.107)" fill="#fff" fill-rule="evenodd" />
                                    <path d="M377.508,125.328l2.929-3.1,4.139,3.483Z" transform="translate(-352.724 -104.225)" fill="#fff" fill-rule="evenodd" />
                                    <path d="M348.5,138.516c10.388,4.863,19.877,3.947,28.8.227,9.031-3.765,17.537-10.409,25.813-16.876,2.564-2,5.108-3.991,7.645-5.879l-13.224,4.161,6.5-15.435-.992.3a40.718,40.718,0,0,0-6.177,6.772,74.89,74.89,0,0,0-8.686,16.048c-1.816,1.2-3.651,2.33-5.5,3.365a87.207,87.207,0,0,1,10.579-21.121c4.424-6.181,9.429-10.552,15.026-13.066,5.723-2.57,11.873-2.944,18.588-1.324,3.661.726,27.2,12.4,20.866,12.006-13.7-5.038-27.194,5.527-40.838,16.208l-1.365,1.067c-8.468,6.617-17.167,13.413-26.564,17.389-9.495,4.017-19.646,5.141-30.868.3l-.423-.183-.092-.456c-.087-.429-.159-.867-.215-1.31s-.1-.9-.125-1.337l-.084-1.473Z" transform="translate(-332.287 -85.694)" fill="#fff" fill-rule="evenodd" />
                                </svg>
                            </div>
                            <p>TypeFox is the young bootstrapped start-up behind Gitpod.<br /><br />
                                Driven by technical founders and a passionate team, we want to make the lives of developers better. We are contributing to many open-source projects and are the initiators of the Theia IDE, the open-source, vendor neutral, cloud &amp; desktop IDE that powers Gitpod.</p>
                        </div>
                        <div className='col'>
                            <div className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" className="team-svg" width="153.811" height="106.443"
                                    viewBox="0 0 153.811 106.443">
                                    <g data-name="Gruppe 169" fill="#1e1e1e" stroke="#26a4dd" strokeWidth="2">
                                        <g data-name="Gruppe 101">
                                            <path data-name="Pfad 192" d="M17203.295,14557.4s-8.16-54.97,19.141-55.882,17.674,55.882,17.674,55.882"
                                                transform="translate(-17139.307 -14463.209)" />
                                            <g data-name="Ellipse 190" transform="translate(68.279 10.818)">
                                                <ellipse cx="14.398" cy="13.934" rx="14.398" ry="13.934" stroke="none"
                                                />
                                                <ellipse cx="14.398" cy="13.934" rx="13.398" ry="12.934" fill="none" />
                                            </g>
                                        </g>
                                        <g data-name="Gruppe 103">
                                            <path data-name="Pfad 191" d="M17203.607,14572.578s-10.385-69.9,24.33-71.056,22.479,71.056,22.479,71.056"
                                                transform="translate(-17099.769 -14466.757)" />
                                            <g data-name="Ellipse 189" transform="translate(109.292)">
                                                <ellipse cx="18.306" cy="17.716" rx="18.306" ry="17.716" stroke="none"
                                                />
                                                <ellipse cx="18.306" cy="17.716" rx="17.306" ry="16.716" fill="none" />
                                            </g>
                                        </g>
                                        <g data-name="Gruppe 104">
                                            <path data-name="Pfad 191" d="M17203.293,14557.1s-8.125-54.669,19.031-55.578,17.58,55.578,17.58,55.578"
                                                transform="translate(-17113.462 -14450.824)" />
                                            <g data-name="Ellipse 189" transform="translate(94.096 23.349)">
                                                <ellipse cx="14.32" cy="13.858" rx="14.32" ry="13.858" stroke="none" />
                                                <ellipse cx="14.32" cy="13.858" rx="13.32" ry="12.858" fill="none" />
                                            </g>
                                        </g>
                                        <g data-name="Gruppe 105">
                                            <path data-name="Pfad 191" d="M17203.3,14557.4s-8.17-54.968,19.135-55.877,17.674,55.877,17.674,55.877"
                                                transform="translate(-17201.078 -14463.049)" />
                                            <g data-name="Ellipse 189" transform="translate(6.514 10.978)">
                                                <ellipse cx="14.398" cy="13.934" rx="14.398" ry="13.934" stroke="none"
                                                />
                                                <ellipse cx="14.398" cy="13.934" rx="13.398" ry="12.934" fill="none" />
                                            </g>
                                        </g>
                                        <g data-name="Gruppe 102">
                                            <path data-name="Pfad 191" d="M17203.607,14572.578s-10.385-69.9,24.33-71.056,22.479,71.056,22.479,71.056"
                                                transform="translate(-17170.633 -14466.757)" />
                                            <g data-name="Ellipse 189" transform="translate(38.428)">
                                                <ellipse cx="18.306" cy="17.716" rx="18.306" ry="17.716" stroke="none"
                                                />
                                                <ellipse cx="18.306" cy="17.716" rx="17.306" ry="16.716" fill="none" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <p>Come join a young tech-driven team, with the mission of making software development better for everyone, and strong values around openness, honesty, and effective pragmatism. <br /><br />
                                We're convinced that continuous learning and exploring is the way to build the best solutions sustainably, therefore we're always curious about new approaches.</p>
                        </div>
                    </div>
                </SectionAbout>
            </Container>
            <Container>
                <h2>Current job openings</h2>
                <ExpandableJob jobTitle="Developer Tools Engineer 👩🏻‍💻">
                    <div>
                        <p>As a Developer Tools Engineer, you will help making Gitpod and Theia a frictionless developer experience. You will collaborate with engineers around the globe. Become a professional open-source developer and work with a highly specialized and well experienced team.</p>
                        <h4>What you'll do:</h4>
                        <ul>
                            <li>Use the tools you build to build the tools you use.</li>
                            <li>Implement the features you always wanted to have using TypeScript &amp; Go.</li>
                            <li>Participate in product design and direction of Gitpod and Theia.</li>
                            <li>Develop customized versions of Gitpod and Theia for our clients targeting interesting vertical domains (e.g. embedded, aerospace, education)</li>
                            <li>Measure and optimize our applications for maximum speed and scalability</li>
                            <li>Engage with developers to help them get the most out of Gitpod</li>
                        </ul>
                        <h4>What we're looking for:</h4>
                        <ul>
                            <li>Self responsible acting and decision making</li>
                            <li>Fast and confident learner</li>
                            <li>Hands-on developer who is comfortable with full-stack development</li>
                            <li>More than 4 years of experience as a developer</li>
                            <li>Creative, communicative, and clever</li>
                        </ul>
                    </div>
                </ExpandableJob>
                <ExpandableJob jobTitle="Developer Advocate 🥑">
                    <div>
                        <p>As a Developer Advocate, you will connect with developers around the globe, try out new frameworks and technologies, and share what you've learned with the world. You will craft great resources to help developers build with Gitpod, including automated setups, sample projects, blog posts, and documentation. You'll help grow our developer community, champion the interests of our users and translate their feedback into actionable product insights.</p>
                        <h4>What you'll do:</h4>
                        <ul>
                            <li>Create momentum and drive adoption of Gitpod through your interactions with developers</li>
                            <li>Champion Gitpod in person and online by presenting at meetups, conferences, writing technical tutorials, publishing articles and videos</li>
                            <li>Build inspiring demos, sample apps, and help continuously improve the developer experience of Gitpod</li>
                            <li>Identify strategic partnership opportunities to grow our developer community</li>
                            <li>Influence the direction of Gitpod's development by gathering insights from our developer community</li>
                            <li>Engage with developers to help them get the most out of Gitpod</li>
                        </ul>
                        <h4>What we're looking for:</h4>
                        <ul>
                            <li>Creative, empathetic, communicative, and clever</li>
                            <li>Confident and comfortable presenting to different types of audiences, at meetups or conferences</li>
                            <li>Adept at communicating technically complicated topics simply and elegantly</li>
                            <li>Hands-on developer who is comfortable with full-stack development</li>
                            <li>Intellectually curious, with great problem-solving skills</li>
                            <li>Happy to travel regularly</li>
                        </ul>
                    </div>
                </ExpandableJob>
                <ExpandableJob jobTitle='Cloud Operations Engineer ⛅️'>
                    <p>As a Cloud Operations Engineer, you will help improve and operate the microservice architecture behind Gitpod, automate monitoring and install and support on-premise installations.</p>
                    <h4>What you'll do</h4>
                    <ul>
                        <li>Ensure reliable operation for Gitpod production environments</li>
                        <li>Diagnose and troubleshooting technical issues, including network configuration</li>
                        <li>Collect, analyze, and summarize operating and engineering data and trends</li>
                        <li>Implement security and data protection</li>
                        <li>Develop and improve infrastructure automation and continuous deployment pipelines</li>
                    </ul>
                    <h4>What we're looking for</h4>
                    <ul>
                        <li>Experience with Kubernetes, VMs and containers</li>
                        <li>Linux / Unix and networking know how</li>
                        <li>Programming experience with Go, Rust or similar.</li>
                        <li>Creative, clever and nice</li>
                    </ul>
                </ExpandableJob>
                <ExpandableJob jobTitle='Sales Engineer 🤝'>
                    <p>As a Sales Engineer, you will take control of our inbound marketing, and leverage Gitpod to help software organizations build better software faster. You will engage with Enterprises and Universities around the globe, understand the way they build software and identify their needs and bottlenecks, then design Gitpod-based solutions to make their developers happy and more productive.</p>
                    <h4>What you'll do</h4>
                    <ul>
                        <li>Engage with organizations to identify their development needs and bottlenecks</li>
                        <li>Follow-up on leads from inbound marketing and conferences</li>
                        <li>Set up proof-of-concepts and work closely with customers to answer questions and solve problems</li>
                        <li>Confer with customers and engineering to deliver great solutions that meet requirements and technical constraints</li>
                        <li>Tailor demonstrations for customers, conferences, and special events</li>
                    </ul>
                    <h4>What we're looking for</h4>
                    <ul>
                        <li>Prior experience with sales activities in enterprise or academia</li>
                        <li>Ability to creatively explain and present complex concepts in an easy to understand manner</li>
                        <li>Solid technical background with hands-on experience in software development and web technologies</li>
                    </ul>
                </ExpandableJob>
                <p style={{ margin: "70px 0 40px 0" }}>
                    If no current Job offer fits your qualifications, but you're totally in love with Gitpod and want to help us improving it,
                        please send your application at <a href="mailto:contact@gitpod.io">contact@gitpod.io</a> anyway. We're curious to hear about you.
                    </p>
            </Container>
        </Page>
    </IndexLayout >
)


export default CareersPage
