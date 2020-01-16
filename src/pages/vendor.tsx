import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Vendor from '../resources/vendor.svg'
import Features from '../components/Features'
import Feature from '../components/Feature'
import { features } from '../utils/vendor'
import Quote from '../components/Quote'
import VendorBG from '../resources/vendor-bg.png'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import PricingTable from '../components/PricingTable'
import PopOver from '../components/PopOver'
import Circle from '../components/Circle'
import Layer from '../resources/layer.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import { Link } from 'gatsby'

const VendorPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/vendor/' title="Vendor">
        <div className="grey-container">

            {/* ----- Banner ----- */}

            <Banner
                subtitle="Gitpod Vendor"
                title={<h1>Use <strong>Gitpod as a Showroom</strong> for<br /> Your Developer Products</h1>}
                linkPath="/vendor/#vendor"
                linkText="Choose your Solution"
                img={<object tabIndex={-1} data={Vendor}/>}
            />

            {/* ----- Section Features ----- */}

            <Features title="Highlight Your Developer Products">
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
            title="We’ll make your developer products shine."
        />

        {/* ----- BG ----- */}

        <Bg url={VendorBG} />

        {/* ----- Pricing Table ----- */}

        <PricingTable
            title="Gitpod Vendor Pricing"
            paragraph="You have the choice to either host Gitpod yourself or to use our cloud infrastructure."
            id="vendor"
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
                    <td>Please enquire</td>
                    <td>Please enquire</td>
                    <td>Please enquire</td>
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
                    <th><img src={Layer} alt="Bitbucket Logo"/> Bitbucket</th>
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
                    <td><Link to="/contact/" state={{ subject: "I'm interested in Gitpod Vendor" }} className="btn btn--cta">Contact Sales</Link></td>
                    <td><Link to="/self-hosted/" className="btn">Host Yourself</Link></td>
                </tr>
            </tbody>
        </PricingTable>

        {/* ----- Didn't find ----- */}

        <ActionCard
            title='Didn’t find what you’re looking for?'
            text='Please get in touch. We’re happy to answer your questions.'
            anchors={[{href: 'https://calendly.com/gitpod/sales',text: 'Schedule a Call'}, {href: '/contact/', subject: "I have a question regarding Gitpod Vendor", text: 'Contact'}]}
        />

    </IndexLayout>
)

export default VendorPage
