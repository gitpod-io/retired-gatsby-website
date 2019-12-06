import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Planet from '../resources/planet.png'
import Features from '../components/Features'
import Feature from '../components/Feature'
import { features } from '../utils/education'
import Quote from '../components/Quote'
import CollegeStudents from '../resources/college-students.png'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'
import styled from '@emotion/styled'
import { colors, shadows } from '../styles/variables'
import PricingTable from '../components/PricingTable'
import Circle from '../components/Circle'
import Layer from '../resources/layer.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import { Link } from 'gatsby'

const StyledHeading = styled.h2`
    max-width: 40rem;
    margin: 10rem auto;
    padding: 5rem 3rem;
    text-align: center;
    background: ${colors.offWhite};
    box-shadow: ${shadows.light};

    span {
        display: block;
        margin: 2rem auto;
        background: ${colors.link};
        height: 3px;
        width: 80px;
    }
`

const EducationPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/education/' title="Education">
        <div className="grey-container">

            {/* ----- Banner ----- */}

            <Banner
                subtitle="Gitpod Education"
                title={<h1>Let’s <strong>Focus on Teaching Code,</strong><br /> not Tedious Setups!</h1>}
                paragraph="Gitpod simplifies the onboarding process, makes coding accessible from any device and provides a productive learning environment."
                linkPath="#"
                linkText="Choose your Solution"
                img={<img alt="Planet Mars" src={Planet}/>}
            />

            {/* ----- Section Features ----- */}

            <Features title="For Schools, Universities, Coding Bootcamps, etc.">
                {
                    features.map((f, i) => (
                        <Feature
                            key={i}
                            title={f.title}
                            paragraphs={f.paragraphs}
                        />
                    ))
                }
            </Features>
        </div>

        {/* ----- Quote ----- */}

        <Quote
            title="We eliminate tedious workflows."
        />

        {/* ----- BG ----- */}

        <Bg url={CollegeStudents} />

        {/* ----- Pricing Table ----- */}

        <PricingTable
            title="Pricing Gitpod Education"
            paragraph="You have the choice to either host Gitpod yourself or to use our cloud infrastructure."
        >
           <thead>
                <tr className="header">
                    <th style={{border: 'none', background: 'none'}}>&nbsp;</th>
                    <th>Gitpod.io
                        <span><span>FREE</span> Trial</span>
                    </th>
                    <th>Gitpod Cloud
                        <span><span>FREE</span> Trial</span>
                    </th>
                    <th>Gitpod Self Hosted
                        <span><span>FREE</span> Trial</span>
                    </th>
                </tr>
           </thead>
            <tbody>
                <tr>
                    <th>Pricing</th>
                    <td>x</td>
                    <td>3000$ per month</td>
                    <td>x</td>
                </tr>
                <tr>
                    <th>Domain</th>
                    <td>Gitpod.io</td>
                    <td>Custom</td>
                    <td>Custom</td>
                </tr>
                <tr>
                    <th>Managed By</th>
                    <td>Typefox</td>
                    <td>Typefox</td>
                    <td>You</td>
                </tr>
                <tr>
                    <th>Infrastructure</th>
                    <td>Globally distributed</td>
                    <td>> 1 geographical regions</td>
                    <td>On-prem or private cloud</td>
                </tr>
                <tr>
                    <th>SLA</th>
                    <td>optional</td>
                    <td>optional</td>
                    <td></td>
                </tr>
                <tr>
                    <th><strong>Support</strong></th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><strong>White Labeling</strong></th>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>&emsp;&emsp;Theia</th>
                    <td></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th>&emsp;&emsp;Gitpod</th>
                    <td></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th>Features</th>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Git Integeration</th>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th><img src={Github} alt="Github Logo"/> github.com</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Github} alt="Github Logo"/> Github Enterprise</th>
                    <td>public only</td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Gitlab} alt="GitLab Logo"/> gitlab.com</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Gitlab} alt="GitLab Logo"/> GitLab self-hosted</th>
                    <td>public only</td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Layer} alt="Layer Logo"/> Bitbucket</th>
                    <td>Soon</td>
                    <td>Soon</td>
                    <td>Soon</td>
                </tr>
                <tr>
                    <th>Custom Authorization</th>
                    <td>OAuth2</td>
                    <td>OAuth2</td>
                    <td>OAuth2</td>
                </tr>
                <tr>
                    <th></th>
                    <td><Link to="#" className="btn btn--cta">Start for Free</Link></td>
                    <td><Link to="#" className="btn btn--cta">Contact Sales</Link></td>
                    <td><Link to="/self-hosted" className="btn">Host Yourself</Link></td>
                </tr>
            </tbody>
        </PricingTable>

        {/* ----- Didn't find ----- */}

        <ActionCard
            title='Didn’t find what you’re looking for?'
            text='Please, get in touch. We’re happy to answer your questions.'
            anchors={[{href: '/schedule-call',text: 'Schedule a Call'}, {href: '/contact', text: 'Contact'}]}
        />

        <div className="row">
            <StyledHeading>
                Are You a Student? <span aria-hidden="true" /> Tell your Teacher about it!
            </StyledHeading>
        </div>

        <Details
            title="Explore Gitpod"
            text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
            anchors={[{href: '/features', text: 'Features'}, {href: '/blog', text: 'See Blog'}]}
        />
    </IndexLayout>
)

export default EducationPage
