import React from 'react'
import CloudGrey from '../resources/cloud-grey.svg'
import { Link } from 'gatsby'

export const MoreInfoContents = {
  selfHosted: {
    img: <img src={CloudGrey} alt="Self Hosted" />,
    title: (
      <>
        Gitpod <strong>Self-Hosted</strong>
      </>
    ),
    text: (
      <>
        <h3>Unleash Developer Productivity.</h3>
        <p>Run your own Gitpod and enjoy automated setups, better collaboration, higher code quality, and a more streamlined workflow.</p>
      </>
    ),
    links: (
      <>
        <Link to="/docs/self-hosted/latest/self-hosted/" className="btn btn--cta">
          See Docs
        </Link>
      </>
    )
  }
}
