import React, { CSSProperties } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

interface AvatarProviderProps {
    fileName: string
    alt: string
}

const AvatarProvider = ({ fileName, alt }: AvatarProviderProps) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fixed(width: 50, height: 50, quality: 100) {
            originalName
            base64
            aspectRatio
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  const fixed = allImageSharp.nodes.find((n: any) => n.fixed.originalName === fileName).fixed

  return (
    <Img fixed={fixed} alt={alt} style={{borderRadius: '50%', marginRight: '1rem'}} />
  )
}

export default AvatarProvider;
