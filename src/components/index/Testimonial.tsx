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

  .avatar {
    height: 5rem;
    margin-right: 1.2rem;
    border-radius: 50%;
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
    avatar: string
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
                <svg xmlns="http://www.w3.org/2000/svg" className="twitter-icon" width="28.724" height="23.348" viewBox="0 0 28.724 23.348"><path d="M28.724,5.012a11.766,11.766,0,0,1-3.385.928,5.9,5.9,0,0,0,2.591-3.26,11.806,11.806,0,0,1-3.743,1.427A5.9,5.9,0,0,0,14.146,9.48,16.73,16.73,0,0,1,2,3.327,5.9,5.9,0,0,0,3.823,11.2a5.865,5.865,0,0,1-2.668-.737,5.9,5.9,0,0,0,4.726,5.856,5.906,5.906,0,0,1-2.662.1A5.9,5.9,0,0,0,8.725,20.5,11.849,11.849,0,0,1,0,22.945a16.683,16.683,0,0,0,9.034,2.647A16.666,16.666,0,0,0,25.784,8.063a12,12,0,0,0,2.941-3.051Z" transform="translate(0 -2.245)" /></svg>
            </a>
        </div>
        <footer>
            <img src={avatar} alt={name} className="avatar" />
            <div className="author-description">
                <h4>{name}</h4>
                <p>{role} {org}</p>
            </div>
        </footer>
    </StyledTestimonial>
)

export default Testimonial
