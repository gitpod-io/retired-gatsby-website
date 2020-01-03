import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import link from '../utils/link'

const StyledBanner = styled.header`
    /* ------------------------------------------- */
    /* ----- Banner ----- */
    /* ------------------------------------------- */

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14rem 0 10rem;

    @media(max-width: ${sizes.breakpoints.md}) {
        flex-direction: column-reverse;
        padding: 5rem 0;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        flex-direction: column-reverse;
        padding: 1rem 0 5rem;
    }

    .para {
        margin-top: 3rem;
        max-width: 70rem;
    }

    .btn {
        margin: 5rem 2rem 2rem 0;

        @media(max-width: ${sizes.breakpoints.md}) {
            margin-top: 3rem;
        }
    }

    p + .btn {
        margin-top: 3rem;
    }


    object, img {
        display: block;
        height: 35rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            height: 20rem;
            margin-bottom: 5rem;
        }
    }

`

interface BannerProps {
    subtitle: string
    title: JSX.Element
    paragraph?: string | JSX.Element
    linkPath: string
    linkText: string
    img: JSX.Element
}

const Banner: React.SFC<BannerProps> = ({subtitle, title, paragraph, linkPath, linkText, img, children}) => (
     <div className="row">
        <StyledBanner role="banner" className="banner">
            <div className="banner__text">
                <h3 className="sub">{subtitle}</h3>
                {title}
                { paragraph ? <p className="para">{paragraph}</p> : null }
                {link(linkPath, linkText, true, false)}
                {children}
            </div>
            {img}
        </StyledBanner>
     </div>
)

export default Banner
