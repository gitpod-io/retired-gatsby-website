import React from 'react'


import IndexLayout from '../layouts/index'
import Banner from '../components/index/Banner'
import Intro from '../components/index/Intro'
import WhyGitpod from '../components/index/WhyGitpod'
import Details from '../components/Details'
import TrustedBy from '../components/TrustedBy'
import AppliToolsLogo from '../resources/aplitools.svg'
import Gatsby from '../resources/gatsby.svg'
import FreeCodeCamp from '../resources/freecodecamp.svg'
import DWaveLogo from '../resources/dwave.svg'
import GoogleLogo from '../resources/google.svg'
import MozillaLogo from '../resources/mozilla.svg'
import OpenAILogo from '../resources/openai.svg'
import SauceLabsLogo from '../resources/sauce-labs.svg'
import FacebookLogo from '../resources/facebook.svg'
import CodeInstituteLogo from '../resources/code.png'
import FourGeeksAcademyLogo from '../resources/4-geeks-academy.png'
import TheiaIDELogo from '../resources/theia-grey.svg'
import Testimonials from '../components/Testimonials'
import GetStarted from '../components/GetStarted'
import OpenSource from '../components/index/OpenSource'


const IndexPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/'>
        <Banner />

        <Intro />

        <Testimonials />

        <WhyGitpod />

        <TrustedBy
            brands={[
                {
                    alt: 'freeCodeCamp.org Logo',
                    url: 'https://www.freecodecamp.org/',
                    svg: FreeCodeCamp,
                    className: 'fcc'
                },
                {
                    alt: 'Theia IDE Logo',
                    url: 'https://theia-ide.org',
                    svg: TheiaIDELogo
                },
                {
                    alt: 'D-Wave Logo',
                    url: 'https://www.dwavesys.com/',
                    svg: DWaveLogo,
                    className: 'greyed-out'
                },
                {
                    alt: 'Code Institute Logo',
                    url: 'https://codeinstitute.net/',
                    svg: CodeInstituteLogo
                },
                {
                    alt: 'Aplitools Logo',
                    url: 'https://applitools.com/',
                    svg: AppliToolsLogo
                },
                {
                    alt: '4Geeks Academy Logo',
                    url: 'https://www.4geeksacademy.co/',
                    svg: FourGeeksAcademyLogo
                },
                {
                    alt: 'Google Logo',
                    url: 'https://about.google/',
                    svg: GoogleLogo,
                    className: 'greyed-out'
                },
                {
                    alt: 'Mozilla Logo',
                    url: 'https://www.mozilla.org/',
                    svg: MozillaLogo,
                    className: 'greyed-out'
                },
                {
                    alt: 'Facebook Logo',
                    url: 'https://about.fb.com/',
                    svg: FacebookLogo,
                    className: 'greyed-out'
                },
                {
                    alt: 'OpenAI Logo',
                    url: 'https://openai.com/',
                    svg: OpenAILogo,
                    className: 'greyed-out'
                },
                {
                    alt: 'Sauce Labs Logo',
                    url: 'https://saucelabs.com/',
                    svg: SauceLabsLogo,
                    className: 'greyed-out'
                },
                {
                    alt: 'Gatsby Logo',
                    url: 'https://www.gatsbyjs.org/',
                    svg: Gatsby
                },
            ]}
        />

        <OpenSource />

        {/* ----- Section Getting Started ----- */}

        <GetStarted />

        {/* ----- Section Explore Gitpod ----- */}

        <Details
            title="Explore Gitpod"
            text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
            anchors={[{ href: '/features/', text: 'See Features' }, { href: '/blog/', text: 'See Blog' }]}
        />

    </IndexLayout>
)

export default IndexPage
