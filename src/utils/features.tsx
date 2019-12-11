import VSCGrey from '../resources/vsc-grey.svg'
import Terminal from '../resources/terminal.svg'
import Share from '../resources/share.svg'
import Camera from '../resources/camera.svg'
import IconPrebuilt from '../resources/icon-prebuilt.svg'
import IconParallel from '../resources/icon-parallel.svg'
import IconWorksOnAnyDevice from '../resources/icon-phone.svg'
import IconCodeReview from '../resources/icon-code-review.svg'
import IconLanguage from '../resources/icon-language.svg'
import VSCodeExtensions from '../resources/vscode-extensions.png'
import IconDesktop from '../resources/icon-desktop.svg'
import LinuxTerminal from '../resources/linux-terminal.png'
import PrebuiltWorkspaces from '../resources/prebuilt-workspaces.png'
import ParallelWorkspaces from '../resources/parallel-workspaces.png'
import ShareWorkspaces from '../resources/share-workspace.png'
import CreateASnapshot from '../resources/create-snapshot.png'
import WorksOnAnyDevice from '../resources/works-on-any-device.png'

import { Link } from 'gatsby'

export const features = [
    {
        alt: 'Visual Studio Code',
        img: VSCGrey,
        text: 'VS Code Extensions',
        path: 'vs'
    },
    {
        alt: 'Prebuilt Workspaces',
        img: IconPrebuilt,
        text: 'Prebuilt Workspaces',
        path: 'prebuilt'
    },
    {
        alt: 'Parallel Workspaces',
        img: IconParallel,
        text: 'Parallel Workspaces',
        path: 'parallel'
    },
    {
        alt: 'Phone',
        img: IconWorksOnAnyDevice,
        text: 'Works on any Device',
        path: 'works'
    },
    {
        alt: 'Linux Terminals',
        img: Terminal,
        text: <span>Linux<br/>Terminals</span>,
        path: 'linux'
    },
    {
        alt: 'Share',
        img: Share,
        text: 'Share Running Workspace',
        path: 'share'
    },
    {
        alt: 'Camera',
        img: Camera,
        text: <span>Create<br/>a Snapshot</span>,
        path: 'snapshot'
    },
    {
        alt: 'Code Reviews',
        img: IconCodeReview,
        text: <span>Code<br />Reviews</span>,
        path: 'code'
    },
    {
        alt: 'Web & Desktop Support',
        img: IconDesktop,
        text: 'Web & Desktop Support',
        path: 'web'
    },
    {
        alt: 'Language Support',
        img: IconLanguage,
        text: <span>Language<br/>Support</span>,
        path: 'lang'
    }
]


export const featuresCardsData = [
    {
        title: "VS Code Extensions",
        paragraphs: ["Gitpod feels just like your local dev environment, as you can install any VS Code extensions. Install it via drag and drop and enjoy all the features you're used to."],
        more: <p>Read more about <Link to="/docs/vscode-extensions/">VS Code Extensions.</Link></p>,
        img: <img alt="VS Code Extensions" src={VSCodeExtensions}/>,
        id: 'vs'
    },
    {
        title: "Prebuilt Workspaces",
        paragraphs: ["Gitpod continuously builds your code and pull requests with all dependencies already downloaded and all code already compiled in the background to save your time."],
        more: <p>Read more about <Link to="/docs/46_prebuilds/">Prebuilt Workspaces.</Link></p>,
        strong: "It's first IDE that builds your project before you even open it.",
        img: <img alt="Prebuilt Workspaces" src={PrebuiltWorkspaces}/>,
        id: 'prebuilt'
    },
    {
        title: "Parallel Workspaces",
        paragraphs: ["Don’t postpone work because your workspaces is occupied with your work on the latest features.", "To sneak in a bugfix on a maintenance branch or a code review - just start more workspaces - in parallel."],
        strong: 'Use clean, fresh workspaces for every task.',
        img: <img alt="Parallel Workspaces" src={ParallelWorkspaces}/>,
        id: 'parallel'
    },
    {
        title: "Works on any Device",
        paragraphs: ["No more need for high-end notebooks, with Gitpod coding gets accessible for everyone.", "It works just as smoothly on a Chromebook as on a high-end notebook or a tablet."],
        img: <img alt="Works On Any Device" src={WorksOnAnyDevice}/>,
        caption: '*comprehensive tablet support is coming soon',
        id: 'works'
    },
    {
        title: "Linux Terminals",
        paragraphs: ["Gitpod instantly starts a machine in the cloud based on a Docker image supporting your project. All required tools are readily installed and configured.", " And still if you like to do configurations yourself, you can adjust everything to your satisfaction."],
        more: <p>Read more about <Link to="/docs/42_config_docker/">Terminals.</Link></p>,
        img: <img alt="Linux Terminals" src={LinuxTerminal}/>,
        id: 'linux'
    },
    {
        title: "Share a Running Workspace",
        paragraphs:["Collaborate with your friends and colleagues and hunt down bugs together."],
        more: <p>Read more about <Link to="/docs/33_sharing_and_collaboration/">Sharing a Workspace.</Link></p>,
        img:<img alt="Share a Running Workspace" src={ShareWorkspaces}/>,
        id: 'share'
    },
    {
        title: "Create a Snapshot",
        paragraphs:["Create a snapshot of your work and share it with the world.", "Based on your snapshot new workspaces can be created and edited independently."],
        more: <p>Read more about <Link to="/docs/33_sharing_and_collaboration/#sharing-snapshots">Sharing a Snapshot.</Link></p>,
        img:<img alt="Creating Snapshot" src={CreateASnapshot}/>,
        id: 'snapshot'
    }
]
