import React from 'react'
import styled from '@emotion/styled'
import TextFeature from './TextFeature'
import ImageProvider from '../ImageProvider'

const Styled = styled.section`
  .pattern {
      padding-bottom: 12rem;
      margin-top: 12rem;
  }

  .text-container {
    display: flex;
    justify-content: center;

    @media (max-width: 1040px) {
      flex-direction: column;
      align-items: center;
    }

    & > * {
      &:not(:last-of-type) {
        @media (max-width: 1040px) {
          margin-bottom: 5rem;
        }

        @media (min-width: 1041px) {
          margin-right: 5rem;
        }
      }
    }
  }
`

const SecurityAndOSS = () => (
  <Styled>
    <div className="row pattern">
      <div className="text-container">
        <TextFeature
          img={<ImageProvider fileName="highly-secure.png" alt="Secure" />}
          title="Secure and Flight-Proven"
          text={
            <>
              <p>
                Built with modern security principles and strong encryption, Gitpod keeps your code and your data safe no matter what
                happens.
              </p>
              <p>Hardened by professional pentesting and thousands of developer hours every single day.</p>
            </>
          }
        />
        <TextFeature
          img={<ImageProvider fileName="open-source.png" alt="Open Source" />}
          title="Free For Open-Source!"
          text={
            <>
              <p>
                Gitpod is built on open-source and wouldn’t exist without it. We’re happy to give something back by being completely{' '}
                <strong>free for open source.</strong>
              </p>
              <p>Do you want to contribute to a new project? Here is a list of all prebuilt open-source projects.</p>
            </>
          }
          btnText="Find Your Next Project"
          href="https://contribute.dev/"
        />
      </div>
    </div>
  </Styled>
)

export default SecurityAndOSS
