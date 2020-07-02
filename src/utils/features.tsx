import React from 'react'

import VSCodeExtensions from '../resources/vscode-extensions.png'
import LinuxTerminal from '../resources/linux-terminal.png'
import PrebuiltWorkspaces from '../resources/prebuilt-workspaces.png'
import ParallelWorkspaces from '../resources/parallel-workspaces.png'
import CodeReview from '../resources/code-review.png'
import SupportedLanguages from '../resources/languages.svg'
import SharedWorkspaces from '../resources/shared-workspaces.png'
import CreateASnapshot from '../resources/workspace-snapshot.png'
import Disposable from '../resources/disposable.jpg'
import { Link } from 'gatsby'
import { FeatureCardProps } from '../components/FeatureCard'

export const features: FeatureCardProps[] = [
    {
        id: 'vs',
        src: VSCodeExtensions,
        alt: 'VS Code Extensions',
        title: <>Use Your Favourite<br /><strong>VS Code Extensions</strong></>,
        text: (<>
            <p>Install any VS Code extension with one click via the integrated vendor-neutral marketplace <a href="https://open-vsx.org/">Open VSX</a>.</p>
            <p>More about <a href="/docs/vscode-extensions/">VS Code Extensions in Gitpod</a>.</p>
        </>)
    },
    {
        id: 'prebuilt',
        src: PrebuiltWorkspaces,
        alt: 'Prebuilt Workspaces',
        title: <>Save Time with <strong>Prebuilt Workspaces</strong></>,
        text: (<>
            <p>Gitpod continuously builds your git branches like a CI server. This means no more waiting for dependencies to be downloaded and builds to finish. Just start coding.</p>
            <p><strong>Gitpod is the first IDE that builds your project before you even open it.</strong></p>
            <p>Read more about <Link to="/docs/prebuilds/">Prebuilt Workspaces.</Link></p>
        </>)
    },
    {
        id: 'parallel',
        src: ParallelWorkspaces,
        alt: 'Parallel Workspaces',
        title: <>Stay Productive, Work<br />in <strong>Parallel Workspaces</strong></>,
        text: (<>
            <p>Don't postpone time-sensitive tasks because your current workspace is in the middle of a rebase.</p>
            <p>With Gitpod, you can: implement new features; merge a quick fix to a maintenance branch; troubleshoot someone's code; and do deep code reviews — all in self-contained browser tabs.</p>
        </>)
    },
    {
        id: 'linux',
        src: LinuxTerminal,
        alt: 'Linux Terminals',
        title: <>Just Like on Your Laptop, Including <strong>Linux Terminals</strong></>,
        text: (<>
            <p>Gitpod instantly starts a container in the cloud based on your Docker image. Tools that are required for your project are easy to install and configure.</p>
            <p>With good defaults and full customizability, you can adjust everything to your satisfaction.</p>
            <p>More about <Link to="/docs/config-docker/">Docker Configuration</Link>.</p>
        </>)
    },
    {
        id: 'share',
        src: SharedWorkspaces,
        alt: 'Share Running Workspaces',
        title: <>Better Collaboration with <strong>Shared Workspaces</strong></>,
        text: (<>
            <p>Collaborate with your friends, colleagues, and clients and run software or hunt down bugs together. </p>
            <p>More about <Link to="/docs/sharing-and-collaboration/">Workspace Sharing</Link><div className=""></div></p>
        </>)
    },
    {
        id: 'snapshot',
        src: CreateASnapshot,
        alt: 'Create A Snapshot',
        title: <>Spread Your Work by <strong>Creating a Snapshot</strong></>,
        text: (<>
            <p>Whenever you want to share a runnable code example, or reproducible bug report, simply take a Snapshot.</p>
            <p>Based on your Snapshot, new workspaces can be created and edited independently.</p>
            <p>More about <Link to="/docs/sharing-and-collaboration/#sharing-snapshots">Sharing a Snapshot.</Link></p>
        </>)
    },
     {
        id: 'disposable',
        src: Disposable,
        alt: 'Disposable Workspaces',
        title: <>Start a Fresh Workspace<br />For Every Task With<br /> <strong>Disposable Workspaces</strong></>,
        text: (<>
            <p>Work in up to 16 workspaces at the same time, then push your work and dispose of them when you're done. You can always get a fresh start.</p>
        </>)
    },
    {
        id: "code-review",
        src: CodeReview,
        alt: 'Code Review',
        title: <>Do <strong>Code Reviews</strong><br />Within the IDE</>,
        text: (<>
            <p>Open Pull/Merge Requests in Gitpod and run, navigate, and review the code from within the IDE. Reply to comments and publish code reviews without needing to switcch.</p>
            <p>More about <Link to="/blog/when-code-reviews-lgtm/">Code Reviews.</Link></p>
        </>)
    },
    {
        id: 'intelligence',
        src: SupportedLanguages,
        alt: 'Supported Programming Languages',
        title: <>Industry-Leading<br /><strong>Code Intelligence</strong></>,
        text: (<>
            <p>Gitpod supports 15+ programming languages out of the box and  is continuously extending. </p> <p>If your favourite language is missing: simply install your VS Code language extension via the integrated vendor-neutral marketplace of <a href="https://open-vsx.org/" target="_blank">Open VSX</a>. </p>
        </>),
        featuresList: ['Syntax Highlighting', 'Smart Completions', 'Linting & Quick Fixes', 'Code Navigation', 'Debugging', 'Refactoring', 'Security Vulnerability Detection', 'Suggested Optimizations']
    }
]


export const featuresCardsData = [
    {
        id: 'vs',
        title: "VS Code Extensions",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="#BCBCBC"
        >
            <g>
                <path d="M39.276 0v44.981L.004 39.148l39.272 13.225 13.093-5.447V5.45L39.276 0z"></path>
                <path d="M25.531 7.663L13.502 19.554 6.259 14.1l-2.985 1 7.368 7.284-7.368 7.284 2.985 1 7.243-5.455 12.029 11.884 7.2-3.061v-23.31l-7.2-3.063zm0 8.485v12.464l-8.276-6.232 8.276-6.232z"></path>
            </g>
            <defs>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H52.373V52.373H0z"></path>
                </clipPath>
            </defs>
        </svg>,
        iconTitle: <span>VS Code<br />Extensions</span>,
    },
    {
        id: 'prebuilt',
        title: "Prebuilt Workspaces",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45.944"
            height="45.945"
            viewBox="0 0 45.944 45.945"
        >
            <path
                stroke="rgba(0,0,0,0)"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M.5 22.973a22.472 22.472 0 1122.472 22.472A22.5 22.5 0 01.5 22.973zm16.174 9.355s10 .1 13.075.1c2.04 0 4.22 4.97 6.039 4.63s6.609-5.448 6.584-14.089A19.4 19.4 0 109.155 36.575c.841.852 2.267-.572 3.813-2 1.222-1.127 2.52-2.255 3.66-2.255zm2.507-6.4a3.946 3.946 0 016.226-3.219l10.042-5.117a1.554 1.554 0 011.411 2.768l-9.828 5.008a3.946 3.946 0 11-7.852.56zM6.169 19.582c0-.019.009-.038.014-.056l.005-.021v-.023a18.118 18.118 0 011.292-3.41 17.995 17.995 0 0117.156-9.9 18.2 18.2 0 013.6.585c.214.058.431.121.646.186h0l-1.513 4.952a12.68 12.68 0 00-.473-.137 13.09 13.09 0 00-2.583-.421 12.954 12.954 0 00-10.962 4.964 12.8 12.8 0 00-1.355 2.149 13.059 13.059 0 00-.928 2.447z"
                data-name="Vereinigungsmenge 101"
            ></path>
        </svg>,
        iconTitle: <span>Prebuilt<br />Workspaces</span>,
    },
    {
        id: 'parallel',
        title: "Parallel Workspaces",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48.5"
            height="39.342"
            viewBox="0 0 48.5 39.342"
        >
            <g
                strokeLinecap="round"
                strokeWidth="4"
                data-name="Gruppe 944"
            >
                <path d="M2 2v35.342" data-name="Linie 172"></path>
                <path d="M16.833 2v35.342" data-name="Linie 173"></path>
                <path d="M31.667 2v35.342" data-name="Linie 174"></path>
                <path d="M46.5 2v35.342" data-name="Linie 175"></path>
            </g>
        </svg>,
        iconTitle: <span>Parallel<br />Workspaces</span>,
        img: <img alt="Parallel Workspaces" src={ParallelWorkspaces} />,
    },
    {
        id: 'linux',
        title: "Linux Terminals",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54.014"
            height="46.297"
            viewBox="0 0 54.014 46.297"
        >
            <path
                d="M50.155 0H3.858A3.858 3.858 0 000 3.858v38.581A3.858 3.858 0 003.858 46.3h46.3a3.858 3.858 0 003.858-3.858V3.858A3.858 3.858 0 0050.155 0zM7.716 27.007l7.716-7.716-7.716-7.716 3.858-3.858 11.574 11.574-11.574 11.574zm30.865 3.858H23.149v-3.858h15.432z"
            ></path>
        </svg>,
        iconText: <span>Linux<br />Terminals</span>
    },
    {
        id: 'share',
        title: "Share Running Workspaces",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="49"
            fill="#BCBCBC"
            viewBox="0 0 50 49"
        >
            <g clip-path="url(#clip0)">
                <path
                    d="M40.953 31.664a8.43 8.43 0 00-6.126 2.636l-18.01-8.817c.138-.828.14-1.672.005-2.5l17.983-8.721a8.452 8.452 0 10-2.314-5.8c.003.413.037.826.1 1.234l-17.983 8.72a8.46 8.46 0 10-.021 11.627l18.01 8.817a8.456 8.456 0 108.357-7.2l-.001.004z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H49.414V48.587H0z"></path>
                </clipPath>
            </defs>
        </svg>,
        iconText: <span>Share Running<br />Workspaces</span>,
    },
    {
        id: 'snapshot',
        title: "Create Snapshots",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="42"
            viewBox="0 0 54 42"
            fill="#BCBCBC"
        >
            <g clip-path="url(#clip0)">
                <path d="M49.15 6.555h-8.676l-5.193-5.244s-.026-.026-.039-.026l-.026-.026A4.201 4.201 0 0032.223 0h-10.8a4.251 4.251 0 00-3.162 1.4v.013l-5.077 5.141H4.319A4.268 4.268 0 000 10.822V36.8a4.323 4.323 0 004.319 4.331H49.15a4.33 4.33 0 004.319-4.331V10.822a4.275 4.275 0 00-4.319-4.267zM26.734 34.639a11.9 11.9 0 1111.876-11.9 11.912 11.912 0 01-11.876 11.9zM48.34 13.431a1.812 1.812 0 11-.024-3.624 1.812 1.812 0 01.024 3.624z"></path>
                <path d="M26.734 13.74a9 9 0 108.971 9 8.976 8.976 0 00-8.971-9z"></path>
            </g>
            <defs>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H53.469V41.13H0z"></path>
                </clipPath>
            </defs>
        </svg>,
        iconText: <span>Create<br />Snapshots</span>,
    },
    {
        id: 'disposable',
        title: "Disposable Workspaces",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46.365"
            height="44.945"
            viewBox="0 0 46.365 44.945"
            fill="#dcdcdc"
        >
            <path
                d="M37.6 30.908l-.4 9.7-.053.58-11.066-.764a2.943 2.943 0 01-1.765-.83 5.05 5.05 0 01-1.238-1.726 5.7 5.7 0 01-.382-1.449 5.364 5.364 0 01.105-1.713q.2-.975.316-1.449t.566-1.686q.448-1.212.5-1.4 2.066.315 13.417.737zM27.4 15.469l4.742 9.986-3.864-2.425a37.256 37.256 0 00-2.938 3.807 24.43 24.43 0 00-1.91 3.293q-.632 1.383-1.041 2.49a9.064 9.064 0 00-.487 1.66l-.105.553-5.007-9.405a2.824 2.824 0 01-.474-1.475 3.071 3.071 0 01.158-1.238l.211-.474q.922-1.66 3-4.953L16 15.021zM59.841 29.09l-4.953 9.459a2.774 2.774 0 01-.962 1.225 2.826 2.826 0 01-1.146.54l-.474.105q-1.871.184-5.77.316l.211 4.321-6.06-9.669 5.559-9.538.184 4.558a40.278 40.278 0 007.456.132 18.046 18.046 0 004.479-.869zM39.159 4.745q-1.238 1.66-6.982 11.461l-8.352-4.927-.5-.316 5.928-9.38A2.975 2.975 0 0130.833.4a4.852 4.852 0 012.108-.265 4.324 4.324 0 011.278.316A7.2 7.2 0 0135.326 1a8.027 8.027 0 011.093.869q.632.58.948.909t.948 1.041q.633.715.844.926zm17.257 8.089L62 22.4a3.4 3.4 0 01.329 2 4.924 4.924 0 01-.725 1.95 4.505 4.505 0 01-.869.975 8.043 8.043 0 01-1 .738 7.171 7.171 0 01-1.278.58q-.8.29-1.238.422t-1.357.369q-.922.237-1.212.316-.9-1.9-6.982-11.487l8.247-5.138zm-3.767-5.955l3.741-2.186-5.8 9.827-11.039-.527 3.978-2.266a38.634 38.634 0 00-1.976-4.374A26.4 26.4 0 0039.567 4.1q-.909-1.225-1.7-2.108A10.285 10.285 0 0036.63.767l-.448-.343 10.67.027a2.756 2.756 0 011.528.276 3.048 3.048 0 011.028.751l.29.4q1.027 1.603 2.951 5.001z"
                transform="translate(-16 -.111)"
            ></path>
        </svg>,
        iconText: <span>Disposable<br />Workspaces</span>,
    },
    {
        id: "code-review",
        title: "Code Reviews",
        icon:
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="49"
                viewBox="0 0 57 49"
                fill="#BCBCBC"
            >
                <g clip-path="url(#clip0)">
                    <path

                        d="M53.735 0H2.542C1.257 0 .215 1.356.215 3.028L0 33.847c0 1.673 1.042 3.028 2.327 3.028h31.431L45.768 48.4l-3.089-11.524H53.52c1.285 0 2.327-1.356 2.327-3.028l.215-30.819C56.062 1.356 55.02 0 53.735 0z"
                    ></path>
                    <path
                        className="white"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M47.352 11.587H9.029M47.352 18.11H9.029M47.352 24.634H9.029"
                    ></path>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <path d="M0 0H56.062V48.399H0z"></path>
                    </clipPath>
                </defs>
            </svg>,
        iconText: <span>Code<br />Reviews</span>,
    },
    {
        id: 'intelligence',
        title: "",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43.286"
            height="42.99"
            viewBox="0 0 43.286 42.99"
        >
            <g data-name="Gruppe 691">
                <path d="M43.238 6.236V1.151A1.168 1.168 0 0042.085 0H1.153A1.168 1.168 0 000 1.151v5.085z"></path>
                <path
                    d="M23.109 38.949a4.871 4.871 0 01-1.489.192 4.871 4.871 0 01-1.489-.192L0 33.097v3.166a1.7 1.7 0 001.153 1.487l19.361 5.132a5.96 5.96 0 002.258 0l19.361-5.132a1.6 1.6 0 001.153-1.487v-3.166z"
                    data-name="Pfad 599"
                ></path>
                <path
                    d="M43.238 31.082V8.154H0v22.928l20.658 6z"
                    data-name="andy-holmes-rCbdp8VCYhQ-unsplash"
                ></path>
            </g>
        </svg>,
        iconText: <span>Code <br /> Intelligence</span>
    }
]
