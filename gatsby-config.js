'use strict'

module.exports = {
    siteMetadata: {
        title: 'Gitpod - Online IDE for GitHub',
        description: 'One-click ready-to-code development environments for GitHub.',
        siteUrl: 'https://www.gitpod.io',
        author: {
            name: 'TypeFox',
            url: 'https://typefox.io',
            email: 'contact@gitpod.io'
        }
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'docs',
                path: `${__dirname}/src/docs`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blog',
                path: `${__dirname}/src/blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/docs/`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                            width: 800,
                            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                            height: 400, // Optional: Overrides optional.ratio
                            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                            noIframeBorder: true //Optional: Disable insertion of <style> border: 0
                        }
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1rem'
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-gitpod',
                    'gatsby-remark-autolink-headers',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1140,
                            quality: 90,
                            linkImagesToOriginal: false,
                            backgroundColor: '#1e1e1e'
                        }
                    }
                ]
            }
        },
        'gatsby-transformer-json',
        'gatsby-plugin-emotion',
        'gatsby-plugin-typescript',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: "UA-71727855-2",
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Enables Google Optimize using your container Id
                // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional create only fields (optional)
                // sampleRate: 5,
                // siteSpeedSampleRate: 10,
                // cookieDomain: "example.com",
            },
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                exclude: ['/education'],
            },
        },
    ]
}
