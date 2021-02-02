import React from 'react'

import { Link } from 'gatsby'

export const textCardsData = [
    {
        title: 'Better Teamwork',
        paragraphs: ['With Gitpod, reviewing code and finding bugs becomes more convenient than ever. ', 'Your team can collaborate asynchronously with Gitpod Snapshots, and synchronously with live-shared workspaces', 'Gitpod also makes it easy for non-developers to open a workspace.'],
        // more:<p>Read more about <Link to="/docs/sharing-and-collaboration/">Collaboration</Link></p>
    },
    {
        title: "Less Costs for More Machine Power",
        paragraphs: ['You can use elastic clouds to satisfy your demand as needed.', 'With Gitpod there is no need for many $3000 laptops, a few good servers are already enough.', 'Servers are also more cost-effective because they are shared resources.']
    },
    {
        title: "More Secure",
        paragraphs: ['Host Gitpod yourself and your source code will never leave your corporate infrastructure.', 'With Gitpod you can roll out new runtimes, libraries and frameworks faster, as they only need to be on the server and not on developer laptops and workstations.', 'Self-Hosted Gitpod runs on your corporate network, keeps your data in your infrastructure, and does not require an internet connection.'],
        // more: <p>Read more about <a href="#">Security</a></p>
    },
    {
        title: "Smooth Integration",
        paragraphs: ['All Gitpod needs is a Kubernetes cluster.', 'It enables user authentication and integration with your GitHub Enterprise, GitLab, or Bitbucket.', <>Please <Link to="/contact/" state={{ subject: 'Question about Gitpod Enterprise' }}>contact us</Link> for further customizations.</>],
        logos: ['Bitbucket', 'Github', 'Gitlab', 'Git']
    },
    // {
    //     title: "Full Compatibility",
    //     paragraphs: ['With Gitpod you can program in any language thanks to LSP. It is based on your runtime, your frameworks, and all the original binaries.', 'Also, it’s fully compatibly with your Docker containers, your VS Code extensions and your Theia extensions. Your workspaces are powerful enough to run a database easily.', 'Thanks to the similar UX to VS Code, Gitpod is a very familiar dev environment.'],
    //     // more: <p>Read more about <a href="#">Compatibility</a></p>,
    //     logos: ['VSC', 'Theia', 'Docker']
    // }
]
