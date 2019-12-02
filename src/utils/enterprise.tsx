import { Link } from 'gatsby'

export const features = [
    {
        title: 'Great Teamwork',
        paragraphs:['With Gitpod code reviews and spotting bugs becomes more convenient than ever. ', 'Your team can collaborate asynchronously with Gitpod Snapshots, as well as synchronously with life shared workspaces', 'Gitpod also enables cross-team people by not having project setup costs.'],
        more:<p>Read more about <Link to="/docs/33_sharing_and_collaboration/">Collaboration</Link></p>
    },
    {
         title: "Less Costs for more Machine Power",
        paragraphs: ['You can use elastic clouds to satisfy your demand as needed.', 'With Gitpod there is no need for many $3000 laptops, a few good servers are already suffice.', 'Also, server resources are more cost-efficient because they are shared resources.']
    },
    {
        title: "Better and Faster Security",
        paragraphs: ['Host Gitpod yourself and your source code will never be on the developers laptop or workstations.', 'With Gitpod you can roll out new runtimes, libs and frameworks faster, as they only need to be on the server and not on the developers machines.', 'Self-Hosted Gitpod can run in your corporate network, keep your data on your infrastructure, and does not require and internet connection.'],
        more: <p>Read more about <a href="#">Security</a></p>
    },
    {
        title: "Smooth Integration",
        paragraphs: ['All Gitpod needs is a Kubernetes cluster.', 'It enables user authorization and integration via your GitHub Enterprise, Gitlab, or Bitbucket.', 'Please contact TypeFox for further customizations.'],
        logos: ['Layer', 'Github', 'Gitlab', 'Git']
    },
    {
        title: "Full Compatibility",
        paragraphs: ['With Gitpod you can program in any language thanks to LSP. It is based on your runtime, your frameworks, and all the original binaries.', 'Also, it’s fully compatibly with your Docker containers, your VS Code extensions and your Theia extensions. Your workspaces are powerful enough to run a database easily.', 'Thanks to the similar UX to VS Code, Gitpod is a very familiar dev environment.'],
        more: <p>Read more about <a href="#">Compatibility</a></p>,
        logos: ['VSC', 'Theia', 'Docker']
    }
]
