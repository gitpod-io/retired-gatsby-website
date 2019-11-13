import React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts/index'


const StyledIndexPage = styled.div`

`

const IndexPage: React.SFC<{}> = () => (
    <IndexLayout canonical={'/blog/'}>
        <StyledIndexPage>
            Ready to Rock!!!!
        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage
