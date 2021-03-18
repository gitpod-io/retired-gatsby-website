import * as React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import GitpodIcon from '../resources/gitpod.svg'
import GitpodIcon196 from '../resources/gitpod-196x196.png'
import GitpodIconApple from '../resources/apple-touch-icon.png'

import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'


type StaticQueryProps = {
    site: {
        siteMetadata: {
            title: string
            description: string
            siteUrl: string
        }
    }
}

class IndexLayout extends React.Component<{ title?: string; canonical?: string; description?: string, ogImage?: string }, {}> {
    handleFirstTab = (e: any) => {
        if (e.key === 'Tab') {
            // the "I am a keyboard user" key
            document.body.classList.add('user-is-tabbing')
            window.removeEventListener('keydown', this.handleFirstTab)
            window.addEventListener('mousedown', this.handleMouseDownOnce)
        }
    }

    handleMouseDownOnce = () => {
        document.body.classList.remove('user-is-tabbing')

        window.removeEventListener('mousedown', this.handleMouseDownOnce)
        window.addEventListener('keydown', this.handleFirstTab)
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleFirstTab)
    }

    render() {
        const { title, canonical, description, ogImage, children } = this.props

        return (
            <StaticQuery
                query={graphql`
          query IndexLayoutQuery {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `}
                render={(data: StaticQueryProps) => (
                    <LayoutRoot>
                        <Helmet>
                            <html lang="en" />
                            <title>{(title && `${title} - Gitpod`) || data.site.siteMetadata.title}</title>
                            <meta name="description" content={description || data.site.siteMetadata.description} />
                            <meta
                                name="keywords"
                                content="dev environment, development environment, devops, cloud ide, github ide, gitlab ide, javascript, online ide, web ide, code review"
                            />
                            {canonical ? <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${canonical}`} /> : null}
                            <link href="/font.css" rel="stylesheet" />
                            <link rel="apple-touch-icon" type="image/png" href={GitpodIconApple} sizes="180x180" />
                            <link rel="icon" type="image/png" href={GitpodIcon196} sizes="196x196" />
                            <link rel="icon" type="image/svg+xml" href={GitpodIcon} sizes="any" />

                            <meta name="twitter:card" content="summary"></meta>
                            <meta name="twitter:site" content="@gitpod"></meta>
                            <meta name="twitter:creator" content="@gitpod"></meta>

                            <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
                            <meta property="og:title" content={title || data.site.siteMetadata.title} />
                            <meta property="og:description" content={description || data.site.siteMetadata.description} />
                            <meta property="og:image" content={ogImage || "https://www.gitpod.io/media-image.jpg"} />

                            <meta name="google-site-verification" content="NBio3hCkfn2FKJpqZritJpXuyKo54noPGZzWsjDIp-M" />
                        </Helmet>
                        <LayoutMain>
                            {children}
                        </LayoutMain>
                    </LayoutRoot>
                )}
            />
        )
    }
}
export default IndexLayout
