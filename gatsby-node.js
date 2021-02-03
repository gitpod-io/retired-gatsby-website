'use strict'

const { execSync } = require('child_process');
const { URL } = require('url');
const path = require('path')
const screencasts = require('./src/contents/screencasts.json').screencasts
const hyphenate = require('./src/utils/hyphenate')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    // Sometimes, optional fields tend to get not picked up by the GraphQL
    // interpreter if not a single content uses it. Therefore, we're putting them
    // through `createNodeField` so that the fields still exist and GraphQL won't
    // trip up. An empty string is still required in replacement to `null`.
    switch (node.internal.type) {
        case 'MarkdownRemark': {
            const { permalink, configuredLayout } = node.frontmatter
            const { relativePath, absolutePath } = getNode(node.parent)

            let slug = permalink;
            let layout = configuredLayout;
            if (absolutePath.indexOf('/docs/') !== -1) {
                if (relativePath.endsWith('index.md')) {
                    slug = `/docs/`;
                } else {
                    slug = `/docs/${relativePath}`;
                }
                layout = layout || 'doc';
            } else {
                slug = `/blog/${relativePath}`;
                layout = layout || 'blog';
            }

            if (slug.endsWith('.md')) {
                slug = slug.replace('.md', '/');
            }
            // Used to generate URL to view this content.
            createNodeField({
                node,
                name: 'slug',
                value: slug
            })

            // Used to determine a page layout.
            createNodeField({
                node,
                name: 'layout',
                value: layout
            })
        }
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `)

    if (allMarkdown.errors) {
        console.error(allMarkdown.errors)
        throw new Error(allMarkdown.errors)
    }

    allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug, layout } = node.fields

        createPage({
            path: slug,
            // This will automatically resolve the template to a corresponding
            // `layout` frontmatter in the Markdown.
            //
            // Feel free to set any `layout` as you'd like in the frontmatter, as
            // long as the corresponding template file exists in src/templates.
            // If no template is set, it will fall back to the default `page`
            // template.
            //
            // Note that the template has to exist first, or else the build will fail.
            component: path.resolve(`./src/templates/${layout}.tsx`),
            context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug
            }
        })
    })

    screencasts.forEach((screencast, i) => {
        createPage({
            path: `/screencasts/${hyphenate(screencast.title)}`,
            component: path.resolve(`./src/templates/screencast.tsx`),
            context: {
                screencast,
                nextScreencast: screencasts[i + 1] ? screencasts[i + 1] : null
            }
        })
    })
}

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
    if (stage !== "develop") {
        return;
    }
    const config = getConfig();
    const output = config.output || {};
    const url = new URL(execSync('gp url 8000').toString());
    output.publicPath = 'https://' + url.host + ":443/";
    actions.setWebpackConfig({
        output,
        devServer: {
            public: url.host + ":443",
            disableHostCheck: true
        }
    });
}
