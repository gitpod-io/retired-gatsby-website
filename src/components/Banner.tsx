import React from 'react'

import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { sizes, colors } from '../styles/variables'

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
        padding: 1rem 0;
    }

    .para {
        margin-top: 3rem;
        max-width: 70rem;
    }


    .btn + p {
        display: inline-block;

        span {
            color: ${colors.link};
            font-weight: 600;
        }
    }

    .btn {
        margin: 5rem 2rem 0 0;

        @media(max-width: ${sizes.breakpoints.sm}) {
            margin: 3rem 0 2rem;
        }
    }

    object {
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
    paragraph?: string
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
                <Link to={linkPath} className="btn btn--cta">{linkText}</Link>
                {children}
            </div>
            {img}
        </StyledBanner>
     </div>
)

export default Banner
