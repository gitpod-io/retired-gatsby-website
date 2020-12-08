import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Chrome from '../../resources/chrome-logo.svg'
import Firefox from '../../resources/firefox-logo.svg'
import { getBrowser } from '../../utils/helpers'

const StyledDifference = styled.section<{spacing?: 'small'}>`
  padding: ${({spacing}) => spacing === 'small' ? '6rem 0' : ''};
  text-align: center;

  p {
    font-size: 110%;
  }

  h2 + p {
    max-width: 700px;
    margin: 3rem auto 2rem;
  }

  .btn {
    margin: 2.5rem 0 5rem;
    padding-left: 1.5rem;

    span {
        display: flex;
        align-items: center;
    }

    img {
        width: 4rem;
        margin-right: 2.5rem;
    }
  }
`

interface DifferenceProps {
    title?: string
    spacing?: 'small'
}

const Difference = ({title, spacing}: DifferenceProps) => {
  const [browser, setBrowser] = useState<any>()

  const getBrowserString = (browser: any) => {
    if ( browser === 'Firefox') {
        return 'Firefox'
    }
    return 'Chrome'
  }

  useEffect(() => {
    let usersBrowser = getBrowser(window.navigator.userAgent)
    setBrowser(getBrowserString(usersBrowser))
  })

  return (
    <StyledDifference className="pattern-bg" spacing={spacing}>
      <div className="row">
        <h2>
            <strong>{title ? title : 'Want to See the Difference for Yourself?'}</strong>
        </h2>
        <p>Install the browser extension which adds a Gitpod button to your GitLab, GitHub and Bitbucket projects to easily spin up a dev environment with a single click.</p>
        <a
          href={
            browser === 'Firefox'
              ? 'https://addons.mozilla.org/firefox/addon/gitpod/'
              : 'https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki'
          }
          target="_blank"
          className="btn btn--big btn--cta"
        >
         <span>
              <img 
            src={browser === 'Firefox' ? Firefox : Chrome } 
            alt={browser}  
          /> 
          Add to {browser}
         </span>
        </a>
        <p>
          Or prefix any GitLab, GitHub or Bitbucket URL with <strong>gitpod.io/#</strong>
        </p>
      </div>
    </StyledDifference>
  )
}

export default Difference
