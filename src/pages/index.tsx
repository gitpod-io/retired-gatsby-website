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
import CodeInstituteLogo from '../resources/code.png'
import FourGeeksAcademyLogo from '../resources/4-geeks-academy.png'
import TheiaIDELogo from '../resources/theia-grey.svg'
import Testimonials from '../components/Testimonials'
import GetStarted from '../components/GetStarted'


const IndexPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/'>
        <Banner />

        <Intro />

        <Testimonials />

        <WhyGitpod />

        <TrustedBy
            brands={[
                {
                    alt: 'freeCodeCamp.org',
                    url: 'https://www.freecodecamp.org/',
                    svg: FreeCodeCamp,
                    className: 'fcc'
                },
                {
                    alt: 'Gatsby Logo',
                    url: 'https://www.gatsbyjs.org/',
                    svg: Gatsby
                },
                {
                    alt: 'Theia Ide Logo',
                    url: 'https://theia-ide.org',
                    svg: TheiaIDELogo
                },
                {
                    alt: 'Code Institute',
                    url: 'https://codeinstitute.net/',
                    svg: CodeInstituteLogo
                },
                {
                    alt: 'Aplitools Logo',
                    url: 'https://applitools.com/',
                    svg: AppliToolsLogo
                },
                {
                    alt: '4 Geeks Academy Logo',
                    url: 'https://www.4geeksacademy.co/',
                    svg: FourGeeksAcademyLogo
                },
            ]}
        />

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
