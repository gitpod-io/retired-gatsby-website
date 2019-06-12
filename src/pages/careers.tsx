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
import GitpodLogo from '../resources/gitpod.svg';
import TypefoxLogo from '../resources/typefox.svg';
import TeamSVG from '../resources/team.svg';

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
        img {
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
                    <h4 style={{ color: colors.fontColor2 }}>Help us build your favourite developer environment!</h4>
                    <h1>Join the team</h1>
                    <UnderLine />
                </div>
                <p style={{ marginBottom: 150 }} >
                    Gitpod aims to make development better for everyone, and it's built on a culture of trust and empathy.<br />
                    Help us shape its future in Berlin, Paris, or anywhere in the world!
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
                                <img src={GitpodLogo} alt="Gitpod Logo" />
                            </div>
                            <p>Gitpod is a one-click online IDE that launches ready-to-code workspaces from any GitHub page. Automating developer environments eliminates hours of tedious setup time, and makes development more reproducible and scalable.<br /><br />
                                Launched in April 2019, Gitpod is a very young product which gives you lots of opportunities to shape its future.</p>
                        </div>
                        <div className='col'>
                            <div className="svg-container">
                                <img src={TypefoxLogo} alt="Typefox Logo" className="typefox-svg"/>
                            </div>
                            <p>TypeFox is the young bootstrapped start-up behind Gitpod.<br /><br />
                                Driven by technical founders and a passionate team, we want to make the lives of developers better. We contribute to many open-source projects and are the initiators of Theia IDE, the open-source, vendor neutral, cloud &amp; desktop IDE that powers Gitpod.</p>
                        </div>
                        <div className='col'>
                            <div className="svg-container">
                                <img src={TeamSVG} alt="Team" className="team-svg"/>
                            </div>
                            <p>Come join a young tech-driven team, with the mission of making software development better for everyone, and strong values around openness, honesty, and effective pragmatism. <br /><br />
                                We're convinced that continuous learning and exploring is the way to build the best solutions sustainably, therefore we're always curious about new approaches.</p>
                        </div>
                    </div>
                </SectionAbout>
            </Container>
            <Container>
                <h2>Current job openings</h2>
                <ExpandableJob jobTitle="Developer Tools Engineer 🛠">
                    <div>
                        <p>As a Developer Tools Engineer, you will help make Gitpod and Theia a frictionless developer experience, and collaborate with engineers around the globe. Become a professional open-source developer and work with a highly specialized and experienced team.</p>
                        <h4>What you'll do:</h4>
                        <ul>
                            <li>Use the tools you build to build the tools you use.</li>
                            <li>Implement the features you've always wanted using TypeScript &amp; Go.</li>
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
                        <p>As a Developer Advocate, you will connect with developers around the globe, try out new frameworks and technologies, and share what you've learned with the world. You will craft great resources to help developers build with Gitpod, including automated dev setups, sample projects, blog posts, and documentation. You will help grow our developer community, champion the interests of our users and translate their feedback into actionable product insights.</p>
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
                            <li>Comfortable presenting to different types of audiences, at meetups or conferences</li>
                            <li>Adept at communicating technically complicated topics simply and elegantly</li>
                            <li>Hands-on developer who is comfortable with full-stack development</li>
                            <li>Intellectually curious, with great problem-solving skills</li>
                            <li>Happy to travel regularly</li>
                        </ul>
                    </div>
                </ExpandableJob>
                <ExpandableJob jobTitle='Cloud Operations Engineer ⛅️'>
                    <p>As a Cloud Operations Engineer, you will help improve and operate the globally distributed Kubernetes clusters behind Gitpod, automate monitoring and incident response, and install and support on-premise installations.</p>
                    <h4>What you'll do</h4>
                    <ul>
                        <li>Ensure reliable operation for Gitpod production environments</li>
                        <li>Diagnose and troubleshoot technical issues, including network configuration</li>
                        <li>Collect, analyze, and summarize operating and engineering data and trends</li>
                        <li>Implement security and data protection</li>
                        <li>Develop and improve infrastructure automation and continuous deployment pipelines</li>
                    </ul>
                    <h4>What we're looking for</h4>
                    <ul>
                        <li>Experience with Kubernetes, VMs and containers</li>
                        <li>Linux / Unix and networking know how</li>
                        <li>Programming experience with Go, Rust or similar</li>
                        <li>Creative, clever and nice</li>
                    </ul>
                </ExpandableJob>
                <ExpandableJob jobTitle='Sales Engineer 🤝'>
                    <p>As a Sales Engineer, you will take control of our inbound marketing, and leverage Gitpod to help software organizations build better software faster. You will engage with Enterprises and Universities around the globe, understand the way they build software, identify their needs and bottlenecks, and design Gitpod-based solutions that make developers happy and more productive.</p>
                    <h4>What you'll do</h4>
                    <ul>
                        <li>Engage with organizations to identify their development process and bottlenecks</li>
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
