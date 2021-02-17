import React from 'react'
import IndexLayout from '../layouts'
import Hero from '../components/screencasts/Hero'
import Screencasts from '../components/screencasts/Screencasts'
// @ts-ignore
import screencastsData from '../contents/screencasts.json'

const ScreencastsPage = () => (
    <IndexLayout canonical='/screencasts/'>
        <Hero />
        <Screencasts
            screencasts={screencastsData.screencasts}
        />
    </IndexLayout>
)

export default ScreencastsPage
