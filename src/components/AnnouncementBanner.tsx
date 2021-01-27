import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, borders } from '../styles/variables'
import { jobs } from '../pages/careers'

const StyledAnnouncementBanner = styled.div`
  background: ${colors.link};
  color: ${colors.white};
  border-bottom: ${borders.light};
  transition: all 0.3s;

  @media (max-width: 1100px) {
    background-position: bottom;
  }

  @media (max-width: 600px) {
    font-size: 85%;
  }

  .text {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .8rem 1rem;

    @media (max-width: 480px) {
      flex-direction: column;
      text-align: center;
    }
  }

  a {
    font-weight: 400;
  }

  .wrapper {
    @media(max-width: 460px) {
        display: block;
        margin-bottom: 1rem;
    }
  }

  .emojis {
      margin-left: 1rem;
      letter-spacing: 3px;
  }

  .btn {
    background: ${colors.lightBlue};
    border-color: ${colors.lightBlue};
    margin-left: 1.5rem;
    font-size: 1.4rem;

    &:hover,
    &:focus {
        color: ${colors.text};
        background: ${colors.white};
        border-color: ${colors.text};
    }
  }

  button {
    position: absolute;
    right: 0;
    background: ${colors.white};
    border: none;
    border-radius: 50%;
  }

  svg {
    display: block;
    height: 2.6rem;
    width: 2.6rem;
    fill: ${colors.white};
    transition: all 0.2s;

    &:hover {
      .cross {
        stroke: ${colors.link};
      }
    }
  }

  .cross {
    stroke: ${colors.textDark};
    transition: all .2s;
  }
`;

function markWasShown(): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('wasShown', 'true');
    }
}

function wasShown(): boolean {
    if (typeof localStorage !== 'undefined') {
        // @ts-ignore
        return localStorage.getItem('wasShown')
    }
    return false;
}

const AnnoucementBanner = () => {
    const bannerRef = useRef<HTMLDivElement>(null)

    const hideTheBanner = () => {
        if (null !== bannerRef.current) {
            bannerRef.current.style.transform = 'translateY(-100%)'
            bannerRef.current.style.marginTop = `-${bannerRef.current.offsetHeight}px`
        }

        // @ts-ignore
        markWasShown(true);

        setTimeout(() => {
            if (null !== bannerRef.current) {
                bannerRef.current.style.display = 'none'
            }
        }, 300)
    }

    useEffect(() => {
        const wasAlreadyShown = wasShown();
        if (wasAlreadyShown) {
            if (null !== bannerRef.current) {
                bannerRef.current.style.display = 'none';
            }
        }
    })

    return (
        <StyledAnnouncementBanner ref={bannerRef} style={{ 
            display: 
            wasShown() ? 'none' : 
            'inline' }}>
            <div className="row">
                <div className="text">
                    <p>
                            <span className="wrapper">We're hiring!<span className="emojis">🌈 🌎</span></span>
                            <Link 
                                to="/careers/#jobs" 
                                className="btn btn--cta btn--small"
                            >
                                <strong>{jobs.length}</strong> 
                                &nbsp;Openings
                            </Link>
                    </p>
                    <button
                        aria-label="Close"
                        onClick={() => {
                            hideTheBanner()
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.86" height="29.86" data-name="Banner closing" viewBox="0 0 30.86 30.86">
                            <g data-name="Gruppe 950">
                                <g data-name="Pfad 1398">
                                    <path d="M14.93 29.86a14.93 14.93 0 1114.93-14.93 14.93 14.93 0 01-14.93 14.93z"></path>
                                    <path
                                        className="outline"
                                        d="M14.93 27.86c3.454 0 6.7-1.345 9.143-3.787a12.845 12.845 0 003.787-9.143c0-3.454-1.345-6.7-3.787-9.143A12.845 12.845 0 0014.93 2c-3.454 0-6.7 1.345-9.143 3.787A12.845 12.845 0 002 14.93c0 3.454 1.345 6.7 3.787 9.143a12.845 12.845 0 009.143 3.787m0 2C6.684 29.86 0 23.176 0 14.93 0 6.684 6.684 0 14.93 0c8.246 0 14.93 6.684 14.93 14.93 0 8.246-6.684 14.93-14.93 14.93z"
                                    ></path>
                                </g>
                            </g>
                            <g className="cross" strokeLinecap="round" strokeWidth="2" data-name="Gruppe 1035">
                                <path d="M9.779 10.1l11.009 9.967" data-name="Pfad 940"></path>
                                <path d="M10.373 20.2l10.1-10.1" data-name="Linie 102"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </StyledAnnouncementBanner>
    )
}

export default AnnoucementBanner
