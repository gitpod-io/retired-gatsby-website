import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Saturn from '../resources/saturn-icon.svg'
import TextCards from '../components/TextCards'
import TextCard from '../components/TextCard'
import { textCardsData } from '../contents/education'
import Quote from '../components/Quote'
import CollegeStudents from '../resources/college-students.png'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import PricingTable from '../components/PricingTable'
import Circle from '../components/Circle'
import Bitbucket from '../resources/bitbucket.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import { Link } from 'gatsby'
import PopOver from '../components/PopOver'
import { isEurope } from '../utils/helpers'

const EducationPage: React.SFC<{}> = () => (
    <IndexLayout
        canonical='/education/'
        title="Education"
        description="Gitpod simplifies the onboarding process, makes coding accessible from anywhere, and provides a productive learning environment."
    >
            <Banner
                subtitle="Gitpod Education"
                title={<h1>Let’s <strong>Focus on Teaching Code,</strong><br /> not Tedious Setups!</h1>}
                paragraph="Gitpod simplifies the onboarding process, makes coding accessible from any device, and provides a productive learning environment."
                linkPath="/education/#education"
                linkText="Choose your Solution"
                img={<object role="presentation" tabIndex={-1} style={{transform:"scale(0.8)"}} data={Saturn}/>}
            />

        <div className="grey-container">
            <TextCards title="For Schools, Universities, Coding Bootcamps, etc.">
                {
                    textCardsData.map((f, i) => (
                        <TextCard
                            key={i}
                            title={f.title}
                            paragraphs={f.paragraphs}
                        />
                    ))
                }
            </TextCards>
        </div>

        <Quote
            title="We eliminate tedious workflows."
        />

        <Bg url={CollegeStudents} />

        <PricingTable
            title="Gitpod Education Pricing"
            paragraph="You have the choice to either host Gitpod yourself or to use our cloud infrastructure."
            id="education"
        >
           <thead>
                <tr className="header">
                    <th style={{border: 'none', background: 'none'}}>&nbsp;</th>
                    <th>Gitpod.io
                        <span><span>FREE</span> Trial</span>
                    </th>
                    <th>Gitpod Managed
                        <span>&nbsp;</span>
                    </th>
                    <th>Gitpod Self-Hosted
                        <span><span>FREE</span> Trial</span>
                    </th>
                </tr>
           </thead>
            <tbody>
                <tr>
                    <th>Pricing</th>
                    <td>{isEurope() ? '€8' : '$9'} per user per month</td>
                    <td>Please enquire</td>
                    <td>{isEurope() ? '€0.9' : '$1'} per user per month</td>
                </tr>
                <tr>
                    <th>Domain</th>
                    <td>gitpod.io</td>
                    <td>Custom</td>
                    <td>Custom</td>
                </tr>
                <tr>
                    <th>Managed By</th>
                    <td>Gitpod</td>
                    <td>Gitpod</td>
                    <td>You</td>
                </tr>
                <tr>
                    <th>Infrastructure</th>
                    <td>Globally distributed</td>
                    <td>> 1 geographical regions</td>
                    <td>On-prem or private cloud</td>
                </tr>
                <tr>
                    <th>SLA <PopOver description="Custom Service Level Agreement"/></th>
                    <td>Optional</td>
                    <td>Optional</td>
                    <td></td>
                </tr>
                <tr>
                    <th>Support</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Github} alt="GitHub Logo"/> github.com</th>
                    <td><Circle /></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Github} alt="GitHub Logo"/> GitHub Enterprise</th>
                    <td>Public only</td>
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
                    <th><img src={Gitlab} alt="GitLab Logo"/> GitLab Self-Managed</th>
                    <td>Public only</td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr>
                    <th><img src={Bitbucket} alt="Bitbucket Logo"/> Bitbucket</th>
                    <td>Soon</td>
                    <td>Soon</td>
                    <td>Soon</td>
                </tr>
                <tr>
                    <th>Custom Authentication</th>
                    <td></td>
                    <td>OAuth2</td>
                    <td>OAuth2</td>
                </tr>
                <tr>
                    <th>Custom Branding</th>
                    <td></td>
                    <td><Circle /></td>
                    <td><Circle /></td>
                </tr>
                <tr className="buttons">
                    <th></th>
                    <td><Link to="/#get-started" className="btn btn--cta">Start for Free</Link></td>
                    <td><Link to="/contact/" state={{ subject: "I have a question regarding Gitpod Education" }} className="btn btn--cta">Contact Sales</Link></td>
                    <td><Link to="/self-hosted/" className="btn">Host Yourself</Link></td>
                </tr>
            </tbody>
        </PricingTable>

        <ActionCard
            title='Didn’t find what you’re looking for?'
            text='Please get in touch. We’re happy to answer your questions.'
            anchors={[{href: 'https://calendly.com/gitpod/sales',text: 'Schedule a Call'}, {href: '/contact/', subject: "I have a question regarding Gitpod Education", text: 'Contact'}]}
        />

    </IndexLayout>
)

export default EducationPage
