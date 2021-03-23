import React from 'react'
import styled from '@emotion/styled'

import { Author } from '../../contents/authors'
import { colors } from '../../styles/variables'

const StyledSharePost = styled.div`
  text-align: center;

  div {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  svg {
      height: 3rem;
    fill: #b5b5b5;
    transition: all .2s;
  }

  a {
    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:hover svg {
        fill: ${colors.text};
    }
  }
`

interface SharePostProps {
  title: string
  authors: Author[]
  url: string
  dontRenderHeading?: boolean
}

const SharePost = ({ title, authors, url, dontRenderHeading }: SharePostProps) => (
  <StyledSharePost>
    {dontRenderHeading ? null : <h2 className="h4">Share Blog Post</h2>}
    <div>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${title} by ${authors.map((author) => '@' + author.socialProfiles.twitter).join(', ')} ${url}`
        )}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28.724" height="23.348" viewBox="0 0 28.724 23.348">
          <path
            d="M28.724 2.767a11.766 11.766 0 01-3.385.928A5.9 5.9 0 0027.93.435a11.806 11.806 0 01-3.743 1.427 5.9 5.9 0 00-10.041 5.373A16.73 16.73 0 012 1.082a5.9 5.9 0 001.823 7.873 5.865 5.865 0 01-2.668-.737 5.9 5.9 0 004.726 5.856 5.906 5.906 0 01-2.662.1 5.9 5.9 0 005.506 4.081A11.849 11.849 0 010 20.7a16.683 16.683 0 009.034 2.647 16.666 16.666 0 0016.75-17.529 12 12 0 002.941-3.051z"
          ></path>
        </svg>
      </a>
      <a href={`http://www.reddit.com/submit?url=${encodeURIComponent(`${url}&title=${title}`)}`} target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3593.8 3600">
          <g>
            <path d="M1756.5 76.2C2742.4 54 3550.3 859 3524.2 1853.5c-23.8 906.6-767.9 1688.3-1748.8 1678.4-934.6-9.4-1703.3-766.5-1708-1728.5C73.1 842.8 837.4 97 1756.5 76.2zm1257.8 1679.4c91.6-67.9 147.2-155.8 136.1-274.5-10.8-116.3-69.7-202.8-176.3-249.9-115.3-50.9-225.6-36.5-324.5 44.3-11.3 9.2-18.2 9.6-29.8 2-183.4-120.9-385.4-188.6-603.4-210.7-24.4-2.5-48.8-5.1-76.8-8 47.3-147.4 93.5-291 140.1-436 11.2 1.8 20.2 2.8 29 4.7 111.3 23.9 222.4 48.6 333.9 71.3 23 4.7 34.3 12.7 40.8 36.9C2514.2 850 2628 922.9 2743 904.4c158.1-25.5 243.9-195.8 167.3-332.2-61.2-109-251.7-174.2-374.4-31.5-12.1 14-22.3 17.3-40.1 13.4-144.5-31.7-289.2-62.1-433.9-93-60.1-12.9-88.2 3.6-106.7 62.4-52.2 165.6-104.6 331.2-156.6 496.8-4.5 14.3-8.2 24.8-27.6 24.7-97.6-.6-193.8 13.2-289.2 33.3-171.1 36.2-330.3 100.8-474.9 199.5-13.2 9-21.3 5.3-33.4-.2-49.5-22.9-97.9-51.4-150-65.2-180.4-47.8-394.6 98.8-357.7 339.7 14.5 94.7 70.8 163.2 148.4 215.2 12.7 8.5 15.6 16.2 13.3 30.2-21.8 130.3-8.2 256.7 44.4 378.3 74.8 173 203.4 297.9 359.8 396.5 178.4 112.6 376.3 169.6 583.8 195.7 181.5 22.8 362 14.2 540.3-26.1 256.6-57.9 485.1-168 661-369.7 139.5-160 201.3-346 172.6-558.2-3.8-28.4 3-42.1 24.9-58.4z"></path>
            <path
              fill="#fff"
              d="M3150.5 1481.1c11.1 118.6-44.5 206.6-136.1 274.5-22 16.3-28.8 30-24.9 58.3 28.7 212.2-33.1 398.2-172.6 558.2-175.9 201.7-404.4 311.8-661 369.7-178.3 40.2-358.8 48.8-540.3 26.1-207.5-26.1-405.4-83.1-583.8-195.7-156.3-98.6-285-223.6-359.8-396.5-52.6-121.6-66.1-248-44.4-378.3 2.3-14-.5-21.7-13.3-30.2-77.6-52-133.9-120.5-148.4-215.2-36.9-240.9 177.3-387.5 357.7-339.7 52.2 13.8 100.5 42.3 150 65.2 12.1 5.6 20.2 9.2 33.4.2 144.7-98.7 303.8-163.3 474.9-199.5 95.4-20.2 191.6-34 289.2-33.3 19.3.1 23.1-10.3 27.6-24.7 52-165.7 104.4-331.2 156.6-496.8 18.5-58.8 46.6-75.3 106.7-62.4 144.7 30.9 289.4 61.3 433.9 93 17.9 3.9 28.1.6 40.1-13.4 122.7-142.7 313.1-77.5 374.4 31.5 76.6 136.4-9.2 306.7-167.3 332.2-115 18.5-228.9-54.4-259.5-168.8-6.5-24.2-17.9-32.2-40.8-36.9-111.6-22.7-222.7-47.4-333.9-71.3-8.8-1.9-17.8-2.9-29-4.7-46.6 145-92.7 288.6-140.1 436 28 2.9 52.4 5.5 76.8 8 217.9 22.1 420 89.8 603.4 210.7 11.6 7.6 18.5 7.2 29.8-2 98.9-80.8 209.2-95.1 324.5-44.3 106.5 47.3 165.3 133.8 176.2 250.1zM2221.8 1946c96.7-.1 182.7-85.8 182.3-181.6-.4-102-83.1-185.4-183.3-185.1-97.3.3-182.1 83.5-182 178.4.1 103.8 82.4 188.4 183 188.3zm43.2 347.4c21-24.3 15.6-53.2-3.7-72.3-26.8-26.6-61.4-34-88.3-18.6-10.8 6.2-20.7 13.9-31.3 20.4-185.3 112.6-378.9 130.1-579.5 46.7-41.1-17.1-78.9-42.5-117.6-65-28.8-16.8-65-10.9-92.6 17-18.2 18.3-20.5 49.8-2.3 75.6 10.3 14.5 24.2 27.6 38.8 37.8 125.4 88 266.4 124.7 429.5 126.6 17.7-1.3 46.7-2.9 75.7-5.6 101.4-9.3 198.1-36 285.6-88.6 31.9-19.4 61.1-45.8 85.7-74zM1398.5 1946c90.9-.2 178-89.4 177.6-182-.4-100.4-84.7-184.7-184.5-184.6-98.5 0-182.4 84.6-182.2 183.7.3 100.2 86 183.1 189.1 182.9z"
            ></path>
            <path
              d="M2404.1 1764.4c.4 95.8-85.6 181.5-182.3 181.6-100.6.1-182.9-84.5-183-188.3-.1-95 84.7-178.1 182-178.4 100.2-.4 182.8 83 183.3 185.1zm-142.8 456.7c19.3 19.1 24.7 48 3.7 72.3-24.6 28.3-53.8 54.7-85.8 73.9-87.5 52.6-184.2 79.3-285.6 88.6-29 2.7-57.9 4.3-75.7 5.6-163.1-1.8-304.1-38.6-429.5-126.6-14.7-10.3-28.5-23.3-38.8-37.8-18.2-25.8-15.9-57.4 2.3-75.6 27.7-27.9 63.8-33.7 92.6-17 38.7 22.6 76.5 47.9 117.6 65 200.6 83.5 394.2 65.9 579.5-46.7 10.6-6.4 20.6-14.1 31.3-20.4 27-15.4 61.6-7.9 88.4 18.7zm-685.1-457.2c.4 92.6-86.7 181.8-177.6 182-103.2.2-188.8-82.7-189.1-183-.2-99.1 83.7-183.7 182.2-183.7 99.8 0 184.1 84.3 184.5 184.7z"
              className="st0"
            ></path>
          </g>
        </svg>
      </a>
    </div>
  </StyledSharePost>
)

export default SharePost