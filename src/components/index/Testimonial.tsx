import React from 'react'

import styled from '@emotion/styled'
import { borders, colors } from '../../styles/variables'

const StyledTestimonial = styled.blockquote`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  max-width: 375px;
  min-width: 360px;
  border: ${borders.normal};
  border-radius: 16px;
  text-align: left;

  @media(max-width: 700px) {
    min-width: 340px;
  }

  @media(max-width: 500px) {
    min-width: 320px;
    padding: 1.8rem;
  }

  @media(max-width: 340px) {
    min-width: 280px;
  }

  .text-container {
    display: flex;
    font-size: 95%;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    font-size: 1.5rem;
  }

  .twitter-icon {
    fill: #b5b5b5;
    height: 2rem;
    margin-left: .4rem;
    transition: all .5s;

    @media(max-width: 640px) {
        height: 1.8rem;
        margin-left: .3rem;
    }
  }

  a {
     &:hover,
     &:focus {
        .twitter-icon {
            fill: ${colors.textDark};
        }
     }
  }
`

export interface TestimonialProps {
    name: string
    avatar: JSX.Element
    org: string | JSX.Element
    role: string | JSX.Element
    text: string | JSX.Element
    tweetId: string
    twitterHandle: string
}

const Testimonial = ({ name, avatar, role, org, text, tweetId, twitterHandle }: TestimonialProps) => (
    <StyledTestimonial>
        <div className="text-container">
            <div>{text}</div>
            <a href={`https://twitter.com/${twitterHandle}/status/${tweetId}`} target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.724"
                    height="23.348"
                    viewBox="0 0 28.724 23.348"
                    className="twitter-icon"
                >
                    <path d="M28.724 2.767a11.766 11.766 0 01-3.385.928A5.9 5.9 0 0027.93.435a11.806 11.806 0 01-3.743 1.427 5.9 5.9 0 00-10.041 5.373A16.73 16.73 0 012 1.082a5.9 5.9 0 001.823 7.873 5.865 5.865 0 01-2.668-.737 5.9 5.9 0 004.726 5.856 5.906 5.906 0 01-2.662.1 5.9 5.9 0 005.506 4.081A11.849 11.849 0 010 20.7a16.683 16.683 0 009.034 2.647 16.666 16.666 0 0016.75-17.529 12 12 0 002.941-3.051z"></path>
                </svg>
            </a>
        </div>
        <footer>
           <div>{avatar}</div>
            <div className="author-description">
                <h4>{name}</h4>
                <p>{role} {org}</p>
            </div>
        </footer>
    </StyledTestimonial>
)

export default Testimonial
