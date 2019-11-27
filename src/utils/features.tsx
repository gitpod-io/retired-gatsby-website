import VSCGrey from '../resources/vsc-grey.svg'
import Terminal from '../resources/terminal.svg'
import Share from '../resources/share.svg'
import Camera from '../resources/camera.svg'
import VSCodeExtensions from '../resources/vscode-extensions.png'
import LinuxTerminal from '../resources/linux-terminal.png'
import { Link } from 'gatsby'

export const features = [
    {
        alt: 'Visual Studio Code',
        img: VSCGrey,
        text: 'VS Code Extensions'
    },
    {
        alt: 'Prebuilt Workspaces',
        img: VSCGrey,
        text: 'Prebuilt Workspaces'
    },
    {
        alt: 'Parallel Workspaces',
        img: VSCGrey,
        text: 'Parallel Workspaces'
    },
    {
        alt: 'Phone',
        img: VSCGrey,
        text: 'Works on any Device'
    },
    {
        alt: 'Linux Terminals',
        img: Terminal,
        text: 'Linux Terminals'
    },
    {
        alt: 'Share',
        img: Share,
        text: 'Share Running Workspace'
    },
    {
        alt: 'Camera',
        img: Camera,
        text: 'Create a Snapshot'
    },
    {
        alt: 'Code Reviews',
        img: Camera,
        text: 'Code Reviews'
    },
    {
        alt: 'Web & Desktop Support',
        img: Terminal,
        text: 'Web & Desktop Support'
    },
    {
        alt: 'Language Support',
        img: Terminal,
        text: 'Language Support'
    }
]


export const featuresCardsData = [
    {
        title: "VS Code Extensions",
        paragraphs: ["Gitpod feels just like your local dev environment, as you can install any VS Code extensions. Install it via drag and drop and enjoy all the features you're used to."],
        more: <p>Read more about <Link to="#">VS Code Extensions.</Link></p>,
        img: <img alt="VS Code Extensions" src={VSCodeExtensions}/>
    },
    {
        title: "Prebuilt Workspaces",
        paragraphs: ["Gitpod continuously builds your code and pull requests with all dependencies already downloaded and all code already compiled in the background to save your time."],
        more: <p>Read more about <Link to="#">VS Code Extensions.</Link></p>,
        strong: "It's first IDE that builds your project before you even open it.",
        img: <img alt="VS Code Extensions" src={VSCodeExtensions}/>
    },
    {
        title: "Parallel Workspaces",
        paragraphs: ["Don’t postpone work because your workspaces is occupied with your work on the latest features.", "To sneak in a bugfix on a maintenance branch or a code review - just start more workspaces - in parallel."],
        strong: 'Use clean, fresh workspaces for every task.',
        img: <img alt="VS Code Extensions" src={VSCodeExtensions}/>
    },
    {
        title: "Works on any Device",
        paragraphs: ["No more need for high-end notebooks, with Gitpod coding gets accessible for everyone.", "It works just as smoothly on a Chromebook as on a high-end notebook or a tablet."],
        img: <img alt="VS Code Extensions" src={VSCodeExtensions}/>
    },
    {
        title: "Linux Terminals",
        paragraphs: ["Gitpod instantly starts a machine in the cloud based on a Docker image supporting your project. All required tools are readily installed and configured.", " And still if you like to do configurations yourself, you can adjust everything to your satisfaction."],
        more: <p>Read more about <Link to="#">Terminals.</Link></p>,
        img: <img alt="Linux Terminals" src={LinuxTerminal}/>
    },
    {
        title: "Share a Running Workspace",
        paragraphs:["Collaborate with your friends and colleagues and hunt down bugs together."],
        more: <p>Read more about <Link to="#">Sharing a Workspace.</Link></p>,
        img:<img alt="Linux Terminals" src={LinuxTerminal}/>
    },
    {
        title: "Create a Snapshot",
        paragraphs:["Create a snapshot of your work and share it with the world.", "Based on your snapshot new workspaces can be created and edited independently."],
        more: <p>Read more about <Link to="#">Sharing a Snapshot.</Link></p>,
        img:<img alt="Linux Terminals" src={LinuxTerminal}/>
    }
]
