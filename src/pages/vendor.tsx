import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Vendor from '../resources/vendor.png'
import Features from '../components/Features'
import Feature from '../components/Feature'
import Quote from '../components/Quote'
import VendorBG from '../resources/vendor-bg.png'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'

const VendorPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/vendor/'>
        <div className="grey-container">

            {/* ----- Banner ----- */}

            <Banner
                subtitle="Gitpod Vendor"
                title={<h1>Use <strong>Gitpod as a Showroom</strong> for<br /> Your Developer Products</h1>}
                linkPath="#"
                linkText="Choose your Solution"
                img={<img alt="Network" src={Vendor}/>}
            />

            {/* ----- Section Features ----- */}

            <Features title="Highlight Your Developer Products">
                <Feature
                    title="Create a Showroom"
                    paragraphs={['With Gitpod you can offer hands-on experience with your developer products within seconds. It allows to run, modify and test your code and is highly customisable as you can adjust it to your API, library, framework, demos and examples.', 'Gitpod guarantees an excellent user experience by eliminating the risk of a wrong setup.']}
                />
                <Feature
                    title="Show Your Products to Everyone"
                    paragraphs={['All workspaces are well sandboxed so that …….. Gitpod prevents abuse like spammers, miners, etc..', 'A GitHub account is not required as your backend can be integrated via OAuth.']}
                />
                <Feature
                    title="Familiar Environment"
                    paragraphs={['Original VS Code extensions and Theia, the VS Code alike online IDE, make users feel at home immediately. Also, no modifications are required for your developer product, neither are runtimes required.']}
                />
                <Feature
                    title="Guide Your Users"
                    paragraphs={['Let Gitpod show your users what to try next. You can also integrate your own help system.']}
                />
                <Feature
                    title="Your Developer-Oriented Marketing Tool"
                    paragraphs={['With Gitpod you can obtain analytics on how your products are experienced. Finally you can fill in the missing block in your marketing funnel.']}
                />
            </Features>
        </div>

        {/* ----- Quote ----- */}

        <Quote
            title="We’ll make your developer products shine."
        />

        {/* ----- BG ----- */}

        <Bg url={VendorBG} />

        {/* ----- Didn't find ----- */}

        <ActionCard
            title='Didn’t find what you’re looking for?'
            text='Please, get in touch. We’re happy to answer your questions.'
            anchors={[{href: '/schedule-call',text: 'Schedule a Call'}, {href: '/contact', text: 'Contact'}]}
        />

        <Details
            title="Explore Gitpod"
            text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
            anchors={[{href: '/blog', text: 'See Blog'}, {href: '/features', text: 'See Features'}]}
        />
    </IndexLayout>
)

export default VendorPage
