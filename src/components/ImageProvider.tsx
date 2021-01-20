import React, { CSSProperties } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styled from '@emotion/styled'

const StyledImageProvider = styled.div`
    height: 100%;
    width: 100%;
`

interface ImageProviderProps {
    fileName?: string
    alt: string
    wrapperStyles?: CSSProperties
    imageStyles?: CSSProperties
    isNotRelativeToGatsbyImgWrapper?: boolean
    IsAPricingBoxIcon?: boolean
    isBlurred?: boolean
    fluidData?: any
    providerStyles?: CSSProperties
    className?: string
}

const ImageProvider = ({ fileName, alt, wrapperStyles, imageStyles, isNotRelativeToGatsbyImgWrapper, IsAPricingBoxIcon, isBlurred, fluidData, providerStyles, className }: ImageProviderProps) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(traceSVG: { color: "#0b2144" }) {
            originalName
            tracedSVG
            src
          }
          blurredFluid: fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let resultingFluid

  if(!fluidData) {
    const found = allImageSharp.nodes.find((n: any) => {
        return n.fluid.originalName === fileName
    })
   
    resultingFluid = isBlurred ? found.blurredFluid : found.fluid
  }
  
  const imageStylesIfIsNotRelativeToGatsbyImgWrapper = {
    top: '50%', 
    transform: 'translateY(-50%) scale(.93)',
  };

  let position;

  if (isNotRelativeToGatsbyImgWrapper) {
    position = 'none'
  } else if (IsAPricingBoxIcon) {
    position = 'static'
  } else {
    position = 'relative'
  }

  return (
    <StyledImageProvider style={providerStyles}>
      <Img className={`gatsby-image ${className}`} fluid={!fluidData ? resultingFluid : fluidData} alt={alt} style={{position, ...wrapperStyles}} imgStyle={isNotRelativeToGatsbyImgWrapper ? imageStylesIfIsNotRelativeToGatsbyImgWrapper : imageStyles ? imageStyles : {}} />
    </StyledImageProvider>
  )
}

export default ImageProvider;
