import React from 'react'

import IndexLayout from '../layouts'
import BackToTopButton from '../components/BackToTopButton'
import Intro from '../components/features/Intro'
import FeatureCards from '../components/FeatureCards'
import StartForFree from '../components/features/StarFortFree'
import { features } from '../contents/features'

const FeaturesPage: React.SFC<{}> = () => (
    <IndexLayout
        canonical='/features/'
        title="Features"
        description="Learn about Gitpod's collaboration tools, workspace snapshots, supported programming languages, and much more."
    >
        <Intro />

        <FeatureCards
            features={features}
        />

        <StartForFree />

        <BackToTopButton />
    </IndexLayout>
)

export default FeaturesPage
