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

        @media(max-width: 472px) {
            right: 1rem;
        }

        @media(max-width: 320px) {
            right: .5rem;
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

  .row {
    @media(max-width: 472px) {
        padding: 0 2.8rem 0 .5rem;
    }
  }

  .text {
    padding: 1rem 0;
    font-weight: 600;
    text-align: center;
    font-size: 90%;

    @media(max-width: 472px) {
        text-align: left;
    }

    @media(max-width: 410px) {
        text-align: center;
    }

    @media(max-width: 320px) {
        padding: .8rem;
    }
  }

  .openings {
    background: ${colors.white};
    color: ${colors.grey};
    padding: .5rem 1.4rem;
    border-radius: 10rem;
    margin-left: 2rem;

    @media(max-width: 505px) {
        margin-left: 1rem;
    }

    @media(max-width: 405px) {
        padding: .2rem .9rem;
    }
  }

  i {
      margin-left: .3rem;

      @media(max-width: 472px) {
          display: none;
      }
  }

  .arrow {
      height: 8px;
      width: 15px;
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
                        Wanna help make Gitpod better? Join our team!
                        <span className="openings">
                            <strong>{jobs.length}</strong>
                            &nbsp;Openings <i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="283"
                                    height="118"
                                    fill="none"
                                    viewBox="0 0 283 118"
                                    className="arrow"
                                >
                                    <path
                                        stroke="#000"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="18"
                                        d="M224 9l50 50-50 50"
                                    ></path>
                                    <path stroke="#000" strokeWidth="18" d="M274.023 58L0.023 59.07"></path>
                                </svg>
                            </i>
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
