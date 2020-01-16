import React from 'react'

import VSCGreyHover from '../resources/vsc-grey-hover.svg'
import VSCGrey from '../resources/vsc-grey.svg'
import TerminalHover from '../resources/terminal-hover.svg'
import Terminal from '../resources/terminal.svg'
import ShareHover from '../resources/share-hover.svg'
import Share from '../resources/share.svg'
import CameraHover from '../resources/camera-hover.svg'
import Camera from '../resources/camera.svg'
import IconPrebuiltHover from '../resources/icon-prebuilt-hover.svg'
import IconPrebuilt from '../resources/icon-prebuilt.svg'
import IconParallelHover from '../resources/icon-parallel-hover.svg'
import IconParallel from '../resources/icon-parallel.svg'
import IconWorksOnAnyDeviceHover from '../resources/icon-phone-hover.svg'
import IconWorksOnAnyDevice from '../resources/icon-phone.svg'
import IconCodeReviewHover from '../resources/icon-code-review-hover.svg'
import IconCodeReview from '../resources/icon-code-review.svg'
import IconLanguageHover from '../resources/icon-language-hover.svg'
import IconLanguage from '../resources/icon-language.svg'
import VSCodeExtensions from '../resources/vscode-extensions.png'
import LinuxTerminal from '../resources/linux-terminal.png'
import PrebuiltWorkspaces from '../resources/prebuilt-workspaces.svg'
import ParallelWorkspaces from '../resources/parallel-workspaces.svg'
import CodeReview from '../resources/code-review.png'
import SupportedLanguages from '../resources/supported-languages.svg'
import ShareWorkspaces from '../resources/share-workspace.svg'
import CreateASnapshot from '../resources/create-snapshot.svg'
import WorksOnAnyDevice from '../resources/works-on-any-device.svg'
import { Link } from 'gatsby'


export const featuresCardsData = [
    {
        id: 'vs',
        title: "VS Code Extensions",
        icon: VSCGrey,
        hover: VSCGreyHover,
        iconTitle: <span>VS Code<br />Extensions</span>,
        paragraphs: <React.Fragment>
            <p>Gitpod feels just like your local dev environment, as you can install any VS Code extensions. Install it via drag and drop and enjoy all the features you're used to.</p>
        </React.Fragment>,
        more: <p>Read more about <Link to="/docs/vscode-extensions/">VS Code Extensions.</Link></p>,
        img: <img alt="VS Code Extensions" src={VSCodeExtensions}/>
    },
    {
        id: 'prebuilt',
        title: "Prebuilt Workspaces",
        icon: IconPrebuilt,
        hover: IconPrebuiltHover,
        iconTitle: <span>Prebuilt<br />Workspaces</span>,
        paragraphs: <React.Fragment>
            <p>Gitpod continuously builds your git branches like a CI server to provide ready-to-code workspaces when you need them.</p>
            <p>This means no more waiting for dependencies to be downloaded and builds to finish. Just coding.</p>
            <p>Gitpod is the first IDE that builds your project before you even open it.</p>
        </React.Fragment>,
        more: <p>Read more about <Link to="/docs/46_prebuilds/">Prebuilt Workspaces.</Link></p>,
        img: <object tabIndex={-1} data={PrebuiltWorkspaces}/>,
        isIllustration: true
    },
    {
        id: "programming-languages",
        title: "Supports All Programming Languages",
        icon: IconLanguage,
        hover: IconLanguageHover,
        iconText: <span>Language<br />Support</span>,
        paragraphs: <React.Fragment>
            <p>Gitpod comes with built-in language support for most popular languages: Java, JavaScript, Python, Go, Rust and C/C++, are supported out of the box and come with auto completion, diagostics, formatting and many more.</p>
            <p>It's easy to get the same quality of language support for any other language by installing the needed <Link to="/docs/42_config_docker/">tools via docker</Link> and adding useful <Link to="/docs/vscode-extensions/">VS Code Extensions</Link>.</p>
                    </React.Fragment>,
        img: <img alt="Supported Languages" src={SupportedLanguages} />,
    },
    {
        id: 'linux',
        title: "Linux Terminals",
        icon: Terminal,
        hover: TerminalHover,
        iconText: <span>Linux<br />Terminals</span>,
        paragraphs: <React.Fragment>
            <p>Gitpod instantly starts a machine in the cloud based on a Docker image. Tools that are required for your project or popular are readily installed and configured.</p>
            <p>And still, if you like to do configurations yourself, you can adjust everything to your satisfaction by bringing your own Docker image or Dockerfile.</p>
        </React.Fragment>,
        more: <p>Read more about <Link to="/docs/42_config_docker/">Terminals.</Link></p>,
        img: <img alt="Linux Terminals" src={LinuxTerminal}/>,
    },
    {
        id: "code-review",
        title: "Code Reviews",
        icon: IconCodeReview,
        hover: IconCodeReviewHover,
        iconText: <span>Code<br />Reviews</span>,
        paragraphs: <React.Fragment>
            <p>Open pull requests in Gitpod to run, navigate, and review the code from within the IDE. Reply to comments and publish code reviews without switching back to GitHub.</p>
            <p>Thanks to <a href="#parallel">Parallel</a> and <Link to="/docs/46_prebuilds/">Prebuilt</Link> Workspaces, you can review code within seconds and without interfering with other ongoing work.</p>
            </React.Fragment>,
        more: <p>Read more about <Link to="/blog/when-code-reviews-lgtm/">Code Reviews.</Link></p>,
        img: <img alt="Code Review" src={CodeReview} />,
    },
    {
        id: 'parallel',
        title: "Parallel Workspaces",
        icon: IconParallel,
        hover: IconParallelHover,
        iconTitle: <span>Parallel<br />Workspaces</span>,
        paragraphs: <React.Fragment>
            <p>Don’t postpone work because your current workspace is occupied with your work on the latest features.</p>
            <p>To sneak in a bugfix on a maintenance branch or a code review - just start more workspaces - in parallel.</p>
        </React.Fragment>,
        strong: 'Use clean, fresh workspaces for every task.',
        img: <object tabIndex={-1}  data={ParallelWorkspaces}/>,
        isIllustration: true
    },
    {
        id: 'snapshot',
        title: "Create Snapshots",
        icon: Camera,
        hover: CameraHover,
        iconText: <span>Create<br />Snapshots</span>,
        paragraphs:<React.Fragment>
            <p>Create a snapshot of your work and share it with the world. Based on your snapshot new workspaces can be created and edited independently.</p>
        </React.Fragment>,
        more: <p>Read more about <Link to="/docs/33_sharing_and_collaboration/#sharing-snapshots">Sharing a Snapshot.</Link></p>,
        img:<object tabIndex={-1}  data={CreateASnapshot}/>,
        isIllustration: true
    },
    {
        id: 'works',
        title: "Works on any Device",
        icon: IconWorksOnAnyDevice,
        hover: IconWorksOnAnyDeviceHover,
        iconText: <span>Works on<br />Any Device</span>,
        paragraphs: <React.Fragment>
            <p>No more need for expensive notebooks, with Gitpod <strong>coding becomes accessible anywhere and for everyone</strong>.</p>
            <p>It works just as smoothly on a Chromebook as on a high-end notebook or any other computer.</p>
        </React.Fragment>,
        img: <object tabIndex={-1}  data={WorksOnAnyDevice}/>,
        caption: '*comprehensive tablet support is coming soon',
        isIllustration: true
    },
    {
        id: 'share',
        title: "Share Running Workspaces",
        icon: Share,
        hover: ShareHover,
        iconText: <span>Share Running<br />Workspaces</span>,
        paragraphs:<React.Fragment>
            <p>Collaborate with your friends and colleagues and hunt down bugs together.</p>
        </React.Fragment>,
        more: <p>Read more about <Link to="/docs/33_sharing_and_collaboration/">Sharing a Workspace.</Link></p>,
        img:<object tabIndex={-1}  data={ShareWorkspaces} style={{transform: 'translateY(2rem) scale(.9)'}}/>,
    }
]
