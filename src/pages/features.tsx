
import React from 'react'

import IndexLayout from '../layouts'
import BackToTopButton from '../components/BackToTopButton'
import Intro from '../components/features/Intro'
import FeatureCards from '../components/FeatureCards'
import StartForFree from '../components/features/StarFortFree'
import { features } from '../utils/features'
import { graphql } from 'gatsby'

export const FeaturesPageQuery = graphql`
    query {
        file(relativePath: { eq: "ice-cream-small.png" }) {
            childImageSharp {
                fluid {
                    sizes
                    src
                    srcSet
                    aspectRatio
                    #base64
                    tracedSVG
                }
            }
        }
    }

`

const FeaturesPage: React.SFC<{}> = ({ data }: any) => {
    return (
    <IndexLayout
        canonical='/features/'
        title="Features"
        description="Learn about Gitpod's collaboration tools, workspace snapshots, supported programming languages, and much more."
    >
        <Intro iceStick={data.file.childImageSharp.fluid} />

        <FeatureCards 
            features={features}
        />

        <StartForFree />

        <BackToTopButton />
    </IndexLayout>
)
}

export default FeaturesPage
