import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import GitGraph from '../components/GitGraph';
import { colors } from '../styles/variables';
import styled from '@emotion/styled';

const FeatureList = styled.ul`
    list-style: none;
    text-align: center;
`

const TeamContainer = styled.div`
    div {
        text-align: center;
        margin-bottom: 20px;
    }
   @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        div {
            padding: 0 100px;
        }
        p {
            width: 80%;
        }
   }
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
        margin-top: 70px;
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

const CareersPage: React.SFC<{}> =  () => (
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
                        <h4 style={{ color: colors.fontColor2 }}>We're hiring</h4>
                        <h1>Become Part of the Team</h1>
                        <div style={{ height: 3, width: 95, backgroundColor: colors.brand, marginBottom: 30 }} />
                    </div>
                    <p style={{ marginBottom: 170 }} >
                        Our Employees are the core of Gitpod and sharing its future.
                        <br />
                        We're convinced that great results are built on culture of trust, empathy and productivity. That's why working with us means:
                    </p>
                    <FeatureList className='flex hidden-md-down' style={{ justifyContent: 'space-between', marginTop: '5rem', marginBottom: '8rem', alignItems: 'flex-end' }}>
                        <li>Flat Hierarchy<br />&amp;<br />short-decision paths</li>
                        <li>Flexible working hours<br />&amp;<br />Home Office</li>
                        <li>Great team sprit<br />&amp;<br />Regular Events</li>
                        <li>Organic fruit Baskets<br />&amp;<br />Soft Drinks</li>
                        <li>Central Office<br />&amp;<br />A view over Kiel harbor</li>
                    </FeatureList>
                </Container>
                <Container>
                    <TeamContainer>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="181.016" height="124.664"><g fill="#1e1e1e" stroke="#26a4dd" stroke-width="2"><g><path d="M75.275 110.249s-9.629-64.824 22.57-65.9 20.844 65.9 20.844 65.9" /><g transform="translate(80.335 12.757)"><ellipse cx="16.98" cy="16.432" rx="16.98" ry="16.432" stroke="none" /><ellipse cx="16.98" cy="16.432" rx="15.98" ry="15.432" fill="none" /></g></g><g><path d="M122.268 123.96s-12.242-82.425 28.7-83.789 26.506 83.789 26.506 83.789" /><g transform="translate(128.7)"><ellipse cx="21.589" cy="20.892" rx="21.589" ry="20.892" stroke="none" /><ellipse cx="21.589" cy="20.892" rx="20.589" ry="19.892" fill="none" /></g></g><g><path d="M105.752 124.496s-9.58-64.473 22.439-65.539 20.738 65.539 20.738 65.539" /><g transform="translate(110.781 27.535)"><ellipse cx="16.887" cy="16.342" rx="16.887" ry="16.342" stroke="none" /><ellipse cx="16.887" cy="16.342" rx="15.887" ry="15.342" fill="none" /></g></g><g><path d="M2.433 110.44s-9.631-64.828 22.568-65.9 20.844 65.9 20.844 65.9" /><g transform="translate(7.495 12.946)"><ellipse cx="16.98" cy="16.432" rx="16.98" ry="16.432" stroke="none" /><ellipse cx="16.98" cy="16.432" rx="15.98" ry="15.432" fill="none" /></g></g><g><path d="M38.698 123.96s-12.242-82.425 28.7-83.789 26.506 83.789 26.506 83.789" /><g transform="translate(45.13)"><ellipse cx="21.589" cy="20.892" rx="21.589" ry="20.892" stroke="none" /><ellipse cx="21.589" cy="20.892" rx="20.589" ry="19.892" fill="none" /></g></g></g></svg>
                        </div>
                        <p>
                            We're a young and tech-driven team with a mission of creating developers tools for everyone. In our team we seek for an open an honest mindset, as well as an effective pragmatism. We lead, collaborate and contribute for open source projects and would love to share that with you. We're convinced that continous learning and exploring is the way to go for sustainably building the best solutions therefore we're always curious about new approaches.
                        </p>
                    </TeamContainer>
                </Container>

                <Container>
                    <h3>Current Job Offers</h3>
                    <Job>
                        <h2>Gitpod Enterprise Sales Representative</h2>

                        <p>
                            Gitpod is an online one-click IDE that launches ready-to-code dev environments from any GitHub page. Automating development environments eliminates hours of tedious setup time, improves teamwork, and makes software development more reproducible and scalable.
                        </p>

                        <p>
                            TypeFox is the company behind Gitpod with a team of developer tool specialists and longtime contributors to many open-source projects. We’re a driving force behind the language server protocol and initiators of Eclipse Theia, the next generation IDE that powers Gitpod. A characteristic of our team is a fervour to learn new things. We’re convinced that missing knowledge shouldn’t hold one back, but encourage us to learn more.
                        </p>

                        <p>
                            We started developing Gitpod about 2 years ago and this April we officially launched it. Gitpod is a very young product which gives you lots of opportunities to shape its future. Currently we’re working in a team of less than 20 people and we’re planning to grow continually.
                        </p>


                        <p>
                            Now we are looking for a passionate sales representative who takes control of our inbound marketing. You should have an understanding of Gitpod’s technical background and like to engage with industrial customers. We especially support remote work and collaboration from different time zones.
                        </p>

                        <h4>What you’ll do</h4>

                        <ul>
                            <li>engage with industrial customers to find the best solutions and prices</li>
                            <li>follow-up on leads from inbound marketing and conferences</li>
                            <li>tailor demonstrations for customers, conferences, and special events</li>
                            <li>work closely with the customer to set up and maintain a successful demo period, be available to answer questions and trouble-shoot as needed</li>
                            <li>confer with customers and engineers to assess equipment needs and to determine system requirements</li>
                        </ul>

                        <h4>
                            What we’re looking for
                        </h4>

                        <ul>
                            <li>ability to creatively explain and present complex concepts in an easy to understand manner</li>
                            <li>solid technical background with hands-on experience in software development and web technologies</li>
                        </ul>

                        <h4>
                            Contact
                        </h4>

                        <p>
                            Would you like to join our team? Then we’re looking forward to hearing from you. Please send your application, including your motivation and your CV to career@typefox.io
                        </p>

                    </Job>

                    <Job>
                        <h3>Software Engineer Developer Tools</h3>
                    </Job>

                    <Job>
                        <h3>Operation and Sales Manager</h3>
                    </Job>

                    <Job>
                        <h3>Solution Engineer</h3>
                    </Job>

                    <p style={{ margin: "70px 0 40px 0" }}>
                        If no current Job offer fits your qualifications, but you're totally in love with Gitpod and want to help us improving it,
                        please send your application at <a href="mailto:careers@typefox.io">careers@typefox.io</a> anyway. We're curious to hear about you.
                    </p>

                </Container>



            </Page>
        </IndexLayout>
)

export default CareersPage
