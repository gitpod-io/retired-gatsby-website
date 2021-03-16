import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, borders } from '../styles/variables'
import { jobs } from '../pages/careers'

const AnnoucementBannerWrapper = styled.div`
    position: relative;
    background: ${colors.grey};
    transition: all 0.3s;

    button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 2rem;
        border: none;
        border-radius: 50%;

        @media(max-width: 505px) {
            display: none;
        }
    }

    .cross {
        display: block;
        height: 1.5rem;
        width: 1.5rem;
        fill: ${colors.white}
    }
`

const StyledAnnouncementBanner = styled(Link)`
  color: ${colors.white};
  font-weight: 400;
  border-bottom: ${borders.light};

  &:hover,
  &:focus {
    color: ${colors.white};
  }

  @media (max-width: 600px) {
    font-size: 85%;
  }

  .text {
    padding: 1rem 0;
    font-weight: 600;
    text-align: center;
    font-size: 90%;

    @media(max-width: 320px) {
        padding: .8rem;
    }
  }

  @media(max-width: 505px) {
    .help {
        display: none;
    }

    .openings {
        margin-left: .3rem;
    }
  }

  @media(min-width: 506px) {
    .openings {
        display: inline flex;
        align-items: center;
        background: ${colors.white};
        color: ${colors.grey};
        padding: .5rem 1.4rem;
        border-radius: 10rem;
        margin-left: 2rem;
    }
  }

  .arrow {
    margin-left: .8rem;

    @media(max-width: 505px) {
        height: .8rem;
        margin-left: .2rem;
    }
  }

  .arrow-path {
    stroke: #3D515E;

    @media(max-width: 505px) {
        stroke: #fff;
    }
  }
`;

function markWasDisplayed(): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('wasDisplayed', 'true');
    }
}

function wasDisplayed(): boolean {
    if (typeof localStorage !== 'undefined') {
        // @ts-ignore
        return localStorage.getItem('wasDisplayed')
    }
    return false;
}

const AnnoucementBanner = () => {
    const bannerRef = useRef<any>(null)

    const hideTheBanner = () => {
        if (null !== bannerRef.current) {
            bannerRef.current.style.transform = 'translateY(-100%)'
            bannerRef.current.style.marginTop = `-${bannerRef.current.offsetHeight}px`
        }

        // @ts-ignore
        markWasDisplayed(true);

        setTimeout(() => {
            if (null !== bannerRef.current) {
                bannerRef.current.style.display = 'none'
            }
        }, 300)
    }

    useEffect(() => {
        const wasAlreadyDisplayed = wasDisplayed();
        if (wasAlreadyDisplayed) {
            if (null !== bannerRef.current) {
                bannerRef.current.style.display = 'none';
            }
        }
    })

    return (
        <AnnoucementBannerWrapper ref={bannerRef} style={{
            display:
                wasDisplayed() ? 'none' :
                    'inline'
        }}>
            <StyledAnnouncementBanner to="/careers/#jobs">
                <div className="row">
                    <div className="text">
                        <span className="help">Wanna help make Gitpod better?&nbsp;</span>Join our team!&nbsp;
                        <span className="openings">
                            <strong>{jobs.length}</strong>
                            &nbsp;Openings
                                <svg className="arrow" width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-path" d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
            </StyledAnnouncementBanner>
            <button
                aria-label="Close"
                onClick={() => {
                    hideTheBanner()
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 94.926 94.926"
                    className="cross"
                >
                    <path d="M55.931 47.463L94.306 9.09a2.118 2.118 0 000-2.994L88.833.62a2.123 2.123 0 00-2.996 0L47.463 38.994 9.089.62c-.795-.795-2.202-.794-2.995 0L.622 6.096a2.117 2.117 0 000 2.994l38.374 38.373L.622 85.836a2.117 2.117 0 000 2.994l5.473 5.476a2.123 2.123 0 002.995 0l38.374-38.374 38.374 38.374c.397.396.937.62 1.498.62s1.101-.224 1.498-.62l5.473-5.476a2.118 2.118 0 000-2.994L55.931 47.463z"></path>
                </svg>
            </button>
        </AnnoucementBannerWrapper>
    )
}

export default AnnoucementBanner
