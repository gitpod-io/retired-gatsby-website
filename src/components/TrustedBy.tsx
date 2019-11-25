import React from 'react'

import styled from '@emotion/styled'
import AppliToolsLogo from '../resources/aplitools.svg'
import FourGeeksAcademyLogo from '../resources/4-geeks-academy.png'
import CodeInstituteLogo from '../resources/code.png'


const StyledTrustedBy = styled.section`
    /* ------------------------------------------- */
    /* ----- Section Trusted By ----- */
    /* ------------------------------------------- */

    .logos {
        display: flex;
        justify-content: space-between;
    }

    img {
        height: 8rem;
        width: 16rem;
    }
`

const TrustedBy: React.SFC<{}> = () => (
    <StyledTrustedBy>
        <div className="row">
            <h2>Trusted by</h2>
            <div className="logos">
                <img alt="Aplitools Image" src={AppliToolsLogo}/>
                <img alt="4 Geeks Academy" src={FourGeeksAcademyLogo}/>
                <img alt="Aplitools Image" src={AppliToolsLogo}/>
                <img alt="Code Institute" src={CodeInstituteLogo}/>
                <img alt="4 Geeks Academy" src={FourGeeksAcademyLogo}/>
                <img alt="Code Institute" src={CodeInstituteLogo}/>
            </div>
        </div>
    </StyledTrustedBy>
)

export default TrustedBy
