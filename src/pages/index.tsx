import React from 'react'

import IndexLayout from '../layouts/index'
import Banner from '../components/index/Banner'
import TrustedBy from '../components/index/TrustedBy'
import SaveHours from '../components/index/SaveHours'
import FeatureCards from '../components/FeatureCards'
import Testimonials from '../components/index/Testimonials'
import GetStarted from '../components/index/GetStarted'
import OpenSourceImg from '../resources/open-source.png'
import HighlySecureImg from '../resources/highly-secure.png'
import MoreInfo from '../components/MoreInfo'
// import Gatsby from '../resources/gatsby.svg'
import FreeCodeCamp from '../resources/freecodecamp.svg'
import DWaveLogo from '../resources/dwave.svg'
import GoogleLogo from '../resources/google.svg'
import MozillaLogo from '../resources/mozilla.svg'
import OpenAILogo from '../resources/openai.svg'
import SauceLabsLogo from '../resources/sauce-labs.svg'
import FacebookLogo from '../resources/facebook.svg'
import CodeInstituteLogo from '../resources/code.svg'
import FourGeeksAcademyLogo from '../resources/4-geeks-academy.png'
import TheiaIDELogo from '../resources/theia-grey.svg'
// import VueLogo from '../resources/vuejs.svg'
import UberLogo from '../resources/uber.svg'
import AmazonLogo from '../resources/amazon.svg'
import IntelLogo from '../resources/intel.svg'
import { features } from '../utils/index'
import TextFeature from '../components/index/TextFeature'
// import ProductivityWithGitpod from '../components/index/ProductivityWithGitpod'

const IndexPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/'>
        <Banner />

        <TrustedBy
            brands={[
                {
                    alt: 'freeCodeCamp',
                    url: 'https://www.freecodecamp.org/',
                    svg: FreeCodeCamp,
                    className: 'fcc'
                },
                {
                    alt: 'D-Wave',
                    url: 'https://www.dwavesys.com/',
                    svg: DWaveLogo,
                    transform: 'scale(1.3)',
                    className: 'dwave-logo'
                },
                {
                    alt: 'Google',
                    url: 'https://about.google/',
                    svg: GoogleLogo,
                    transform: 'scale(0.9)',
                    className: 'grey-logo'
                },
                {
                    alt: 'Mozilla',
                    url: 'https://www.mozilla.org/',
                    svg: MozillaLogo,
                    className: 'grey-logo'
                },
                {
                    alt: 'Amazon',
                    url: 'https://www.aboutamazon.com',
                    svg: AmazonLogo,
                    transform: 'scale(0.9) translateY(5px)',
                    className: 'grey-logo'
                },
                {
                    alt: 'Facebook',
                    url: 'https://about.fb.com/',
                    svg: FacebookLogo,
                    className: 'grey-logo'
                },
                {
                    alt: 'Uber',
                    url: 'https://www.uber.com',
                    svg: UberLogo,
                    className: 'grey-logo'
                },
                {
                    alt: 'OpenAI',
                    url: 'https://openai.com/',
                    svg: OpenAILogo,
                    transform: 'scale(1.1)',
                    className: 'grey-logo'
                },
                {
                    alt: 'Sauce Labs',
                    url: 'https://saucelabs.com/',
                    svg: SauceLabsLogo,
                    className: 'grey-logo'
                },
                {
                    alt: 'Intel',
                    url: 'https://www.intel.com',
                    svg: IntelLogo,
                    transform: 'scale(0.8)',
                    className: 'grey-logo'
                },
                {
                    alt: 'Eclipse Theia',
                    url: 'https://theia-ide.org',
                    svg: TheiaIDELogo,
                    transform: 'scale(1.1)',
                    className: 'grey-logo'
                },
                {
                    alt: 'Code Institute',
                    url: 'https://codeinstitute.net/',
                    svg: CodeInstituteLogo,
                    className: 'grey-logo'
                },
                {
                    alt: '4Geeks Academy',
                    url: 'https://www.4geeksacademy.co/',
                    svg: FourGeeksAcademyLogo,
                    className: 'four-geeks grey-logo'
                },
                // {
                //     alt: 'Gatsby',
                //     url: 'https://www.gatsbyjs.org/',
                //     svg: Gatsby,
                //     className: 'gatsby-logo'
                // },
                // {
                //     alt: 'Vue.js',
                //     url: 'https://vuejs.org/',
                //     svg: VueLogo,
                //     className: 'vue-logo'
                // },
            ]}
        />

        {/* <ProductivityWithGitpod /> */}

        <SaveHours />

        <FeatureCards 
            features={features}
        />
        
        <Testimonials />

        <TextFeature 
            path={HighlySecureImg}
            alt="Secure"
            title="Secure and Flight-Proven"
            text={<><p>Built with modern security principles and strong encryption, Gitpod keeps your code and your data safe no matter what happens.</p><p>Hardened by professional pentesting and thousands of developer hours every single day.</p></>}
        />

        <GetStarted />

        <TextFeature 
            path={OpenSourceImg}
            alt="Open Source"
            title="Free For Open-Source!"
            text={<><p>Gitpod is built on open-source and wouldn’t exist without it. We’re happy to give something back by being completely <strong>free for open source</strong>.</p>
            <p>Find your next project on contribute.dev.</p>
</>}
        />
        
        <MoreInfo />
    </IndexLayout>
)

export default IndexPage
