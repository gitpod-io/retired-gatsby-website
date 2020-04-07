import React from 'react'

import IndexLayout from '../layouts'
import ScrollToTopButton from '../components/ScrollToTopButton'
import StartFree from '../components/features/StartFree'
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

            <StartFree />
    </IndexLayout>
)


export default FeaturesPage
