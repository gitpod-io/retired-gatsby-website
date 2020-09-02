import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Bg from '../resources/announcement-banner.jpg'
import { colors, borders } from '../styles/variables'

const StyledAnnouncementBanner = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
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
    padding: 2rem;

    @media (max-width: 480px) {
      flex-direction: column;
      text-align: center;

      span {
        display: none;
      }
    }
  }

  .announcement {
    padding: 3px 5px;
    border-radius: 3px;
    border: 1px solid;

    @media (max-width: 600px) {
      font-size: 70%;
    }

    @media (min-width: 601px) {
      margin-right: 2rem;
    }

    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }
  }

  a {
    font-weight: 400;
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
      fill: ${colors.textDark};

      .cross {
        stroke: ${colors.white};
      }
    }
  }

  .outline {
    fill: ${colors.textDark};
  }

  .cross {
    stroke: ${colors.textDark};
  }
`;

function markWasShown(): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('wasShown', 'true');
    }
}

function wasShown(): boolean {
    if (typeof localStorage !== 'undefined') {
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
    <StyledAnnouncementBanner ref={bannerRef} style={{ display: wasShown() ? 'none' : 'inline'}}>
      <div className="row">
        <div className="text">
          <strong className="announcement">New Announcement</strong>
          <span>&nbsp;</span>
          <p>
            <strong>
              Gitpod Is Now Open Source. <Link to="/blog/opensource/">Learn More.</Link>
            </strong>
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
