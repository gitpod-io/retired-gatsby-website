import React from 'react'

import IndexLayout from '../layouts'
import ScrollToTopButton from '../components/ScrollToTopButton'
import StartForFree from '../components/features/StartForFree'
import Intro from '../components/features/Intro'
import FeaturesList from '../components/features/FeaturesList'


const FeaturesPage: React.SFC<{}> = () => (
    <IndexLayout 
        canonical='/features/' 
        title="Features" 
        description="Learn about Gitpod's collaboration tools, workspace snapshots, supported programming languages, and much more."
    >
            <div className="grey-container">
                <div className="row">
                    <ScrollToTopButton />

                    <Intro />

                    <FeaturesList />
                </div>
            </div>

            <StartForFree />
    </IndexLayout>
)


export default FeaturesPage
