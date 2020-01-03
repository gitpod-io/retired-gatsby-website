import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import BackPack from '../resources/backpack.svg'


const GithubStudentPackPage: React.SFC<{}> = () => (
    <IndexLayout canonical="/github-student-developer-pack/" title="GitHub Student Developer Pack">
        <div className="grey-container">
            <Banner 
                subtitle="GitHub Student Developer Pack"
                title={<h1>Make Your Life Easier with Gitpod</h1>}
                paragraph={<span>With Gitpod you have no more tedious setups, you save hours of compiling<br />code, and you can start coding from any device, immediately.</span>}
                linkPath="https://gitpod.io/subscription/"
                linkText="Claim Offer"
                img={<img src={BackPack} alt="GitHub Backpack" />}
            />
        </div>
    </IndexLayout>
)

export default GithubStudentPackPage
