import React, { useEffect, useRef } from 'react'

import Video from '../../resources/video-website.mp4'
import styled from '@emotion/styled'
import GitLab from '../../resources/gitlab.svg'
import GitHub from '../../resources/octicons-mark-github.svg'
import Bitbucket from '../../resources/bitbucket.svg'
import { sizes, colors } from '../../styles/variables'

const Styled = styled.div`
  height: 700px;
  margin-bottom: 47rem;

  @media (max-width: 1140px) {
    margin-bottom: 35%;
  }

  @media (max-width: 1020px) {
    margin-bottom: 30%;
  }

  @media (max-width: 800px) {
    height: 400px;
    margin-bottom: 50rem;
  }

  @media (max-width: 740px) {
    margin-bottom: 45rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 40rem;
  }

  @media (max-width: 560px) {
    margin-bottom: 30rem;
  }

  @media (max-width: 360px) {
    margin-bottom: 25rem;
  }

  @media (max-width: 320px) {
    margin-bottom: 22rem;
  }

  .banner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10rem 0 10rem;

    &__container {
        margin-top: 3rem;
        &_header {
            display: flex;
            width: 100%;
            height: 2.4rem;
            background: #3a3a3a;
            & .btn_circle_container {
                display: flex;
                align-items: center;
                margin-left: 1rem;
                & .btn_circle {
                    align-items: center;
                    margin: 0 0.4rem;
                    width: 1.0rem;
                    height: 1.0rem;
                    border-radius: 50%!important;
                    &.red {
                        background-color: #ff0000;
                    }
                    &.yellow {
                        background-color: #ffcc00;
                    }
                    &.green {
                        background-color: #00ff00;
                    }
                } 
            }
            & .navi_container {
                display: flex;
                align-items: center;
                margin-left: 1rem;
                & .navi {
                    width: 1.2rem;
                    height: 1.2rem;
                    color: #eeeeee;
                    display: flex;
                    align-items: center;
                    margin-left: 1rem;
                }
            }
            & .url_container {
                display: flex;
                align-items: center;
                margin-left: 1rem;
                flex: 1;
                & .url-input {
                    border-radius: 1.2rem;
                    background-color: #111;
                    margin: 0 1rem;
                    flex: 1;
                    height: 1.7rem;
                    align-self: center;
                } 
            }
        }
        &_video {
            display: block;
            width: 100%;
            max-width: 1000px;
            box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.2);
        }
    }


    h1 {
      font-size: 4.5rem;
      font-weight: 400;

      @media (max-width: ${sizes.breakpoints.md}) {
        font-size: 3.8rem;
      }

      span {
        display: block;
        font-weight: 400;
      }
    }

    p {
      max-width: 450px;
      margin: 2.5rem auto;

      img {
        height: 2rem;
        margin-left: 1.5rem;
      }
    }
  }

  .works-with {
    color: ${colors.textLight};
  }
`

const Banner = () => {
    const videoEl = useRef<HTMLVideoElement>(null);
    const scrollHandler = () => {
        const top = document.body.getBoundingClientRect().top;
        if (videoEl.current) {
            const threshold = videoEl.current.offsetTop + videoEl.current.offsetHeight - window.innerHeight;
            if (top < threshold) {
                videoEl.current.play();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    });

    return <Styled className="pattern">
        <div className="row">
            <header role="banner" className="banner">
                <div className="banner__text-box">
                    <h1>
                        <strong>Dev Environments</strong> Built for the Cloud.
                    </h1>
                    <p>Describe your dev environments as code and automate the last missing piece in your DevOps pipeline.</p>
                    <a href="#get-started" className="btn btn--cta">
                        Try Now
                    </a>
                    <p className="works-with">
                        Works with
                        <img src={GitLab} alt="GitLab" />
                        <img src={GitHub} alt="GitHub" />
                        <img src={Bitbucket} alt="Bitbucket" />
                    </p>
                </div>
                <div className="banner__container">
                    <div className="banner__container_header">
                        <div className="btn_circle_container">
                            <div className="btn_circle red"></div>
                            <div className="btn_circle yellow"></div>
                            <div className="btn_circle green"></div>
                        </div>
                        <div className="navi_container">
                            <div className="navi">&lt;</div>
                            <div className="navi">&gt;</div>
                        </div>
                        <div className="url_container">
                            <div className="url-input"></div>
                        </div>
                    </div>
                    <video ref={videoEl} src={Video + "#t=10"} className="banner__container_video" autoPlay={false} loop={true} muted={true} />
                </div>
            </header>
        </div>
    </Styled>
}

export default Banner
