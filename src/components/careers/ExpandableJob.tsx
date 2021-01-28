import React, { useState, useEffect } from 'react'

import styled from '@emotion/styled'
import { colors, borders } from '../../styles/variables'
import Arrow from '../Arrow'
import GitpodLogo from '../../resources/gitpod-logo-dark.svg'
// @ts-ignore
import hyphenate from '../../utils/hyphenate'

const StyledExpandableJob = styled.div`
  position: relative;
  padding: 4rem 4rem 4rem 10rem;
  background: ${colors.offWhite};
  border: ${borders.light2};
  border-radius: 3px;

  @media (max-width: 600px) {
    padding: 4rem 2rem 2rem 8rem;
  }

  .arrow-btn {
    position: absolute;
    top: 4rem;
    left: 4rem;
    border: none;
    transform: translateY(-0.6rem);

    @media (max-width: 600px) {
      left: 2rem;
    }

    &:hover {
      svg {
        fill: ${colors.text};
      }
    }
  }

  h3:hover {
    .permalink {
        visibility: visible;
    }
  }

  .permalink {
    display: inline-block;
    height: 3rem;
    transform: translateY(28%);
    margin-left: 1rem;
    visibility: hidden;

    &:focus {
      visibility: visible;  
    }
  }

  .permalink-icon {
    height: 3rem;
   }

  p + p {
    margin-top: 2rem;
  }

  .after {
    margin: 5rem 0;
  }

  .btn {
    margin-bottom: 5rem;
  }

  h4 {
    margin: 5rem 0 2rem;
  }

    ul {
        list-style: initial;
        list-style-position: inside;
    }

    ul li{
        list-style: none;
        margin-left: 20px;
        text-indent: -20px;
        margin-bottom: 10px;
    }

    ul li:before {
        content: "▫️ ";
    }
`

interface Listing {
    title: string
    items: string[]
}

export interface ExpandableJobProps {
    title: string
    intro: string
    paragraphs: string
    lists: Listing[]
    textAfterTheLists: string
    rendered?: boolean
    date?: string
}

const ExpandableJob = ({ title, intro, paragraphs, lists, textAfterTheLists, rendered, date }: ExpandableJobProps) => {
    const [isRendered, setIsRendered] = useState<boolean>(rendered || false)
    const hash = `${hyphenate(title)}`

    useEffect(() => {
        if (window.location.hash === `#${hash}`) {
            setIsRendered(true)
        }
    }, [])

    const toggleIsRendered = () => {
        setIsRendered(!isRendered)
    }

    const applicationEmail = `mailto:contact@typefox.io?subject=Application as ${title}`

    const structuredData = {
        '@context': 'https://schema.org/',
        '@type': 'JobPosting',
        title: title,
        description: (`
        <div>    
            <p>${intro}</p>
            ${paragraphs.split('\n').map((p) => `<p>${p}</p>`).join(' ')}
            <div>
                ${lists.map(({ title, items }: Listing) => `
                    <h4>${title}</h4>
                    <ul>
                        ${items.map(item => `<li>${item}</li>`).join(' ')}
                    </ul>
                ` ).join(' ')}
                <p>${textAfterTheLists}</p>
            </div>
        </div>
    `),
        datePosted: date,
        hiringOrganization: {
            '@type': 'Organization',
            name: 'Gitpod, Inc.',
            sameAs: 'https://www.gitpod.io/',
            logo: GitpodLogo,
            contactPoint: {
                '@type': 'ContactPoint',
                url: 'https://www.gitpod.io/contact/'
            }
        },
        // Location: Remote, anywhere on Earth.
        // Ref: https://developers.google.com/search/docs/data-types/job-posting#remote-jobs
        jobLocationType: 'TELECOMMUTE',
        employmentType: 'FULL_TIME',
        applicationContact: {
            '@type': 'ContactPoint',
            email: applicationEmail
        }
    }

    return (
        <StyledExpandableJob id={hash}>
            <button className="arrow-btn" onClick={toggleIsRendered}>
                <Arrow
                    styles={{ transform: isRendered ? 'rotate(-90deg)' : 'rotate(90deg)' }}
                />
            </button>
            <h3>
                {title} 
                <a href={`#${hash}`} class="permalink">
                    <svg xmlns="http://www.w3.org/2000/svg" class="permalink-icon" viewBox="0 0 512 512"><path d="M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64m-140.71-96h187.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="36"/></svg>
                </a>
            </h3>
            <p>{intro}</p>
            {
                isRendered ? (<>
                    {paragraphs.split('\n').map((p, i) => <p key={i + title}>{p}</p>)}
                    {lists.map((item, i) => <List key={i + item.title} {...item} />)}
                    <p className="after">{textAfterTheLists}</p>
                    <a
                        href={`mailto:career@gitpod.io?subject=Application as ${title}`}
                        target="_blank"
                        className="btn btn--cta"
                    >
                        Apply Now
                </a>
                </>) : null
            }
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </StyledExpandableJob >
    )
}

const List = ({ title, items }: Listing) => (
    <div>
        <h4>{title}</h4>
        <ul>
            {items.map((item, i) => {
                const sentences = item.split('. ')
                let firstSentence: any = sentences[0]
                firstSentence = sentences.length !== 1 ? <strong>{firstSentence}. </strong> : firstSentence
                return (
                    <li key={item + i}>
                        { firstSentence }
                        { sentences.slice(1, sentences.length).join('. ') }
                    </li>
                )
            })}
        </ul>
    </div>
)

export default ExpandableJob
