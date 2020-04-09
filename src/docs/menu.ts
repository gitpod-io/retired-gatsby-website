// This file is used to define entries in the side menu

export interface MenuEntry {
    title: string;
    path: string;
    subMenu?: MenuEntry[];
}

function M(title: string, path: string, subMenu?: MenuEntry[]): MenuEntry {
    return {
        title, path: '/docs/' + (path ? path + '/' : ''), subMenu
    };
}

export const MENU: MenuEntry[] = [
    M(
        "Introduction",
        ""
    ),
    M(
        "Getting Started",
        "getting-started"
    ),
    M(
        "Browser Extension",
        "browser-extension"
    ),
    M(
        "Workspaces",
        "workspaces",
        [
            M(
                "Context URLs",
                "context-urls"
            ),
            M(
                "Life of a Workspace",
                "life-of-workspace"
            ),
            M(
                "Collaboration & Sharing",
                "sharing-and-collaboration"
            ),
            M(
                "Command Line Interface",
                "command-line-interface"
            )
        ]
    ),
    M(
        "Configure Your Project",
        "configuration",
        [
            M(
                ".gitpod.yml",
                "config-gitpod-file"
            ),
            M(
                "Docker Configuration",
                "config-docker"
            ),
            M(
                "Start Tasks",
                "config-start-tasks"
            ),
            M(
                "VS Code Extensions",
                "vscode-extensions"
            ),
            M(
                "Exposing Ports",
                "config-ports"
            ),
            M(
                "Prebuilt Workspaces",
                "prebuilds"
            ),
            M(
                "Environment Variables",
                "environment-variables"
            ),
            M(
                "Workspace Location",
                "checkout-location"
            ),
            M(
                "Editor Configuration",
                "config-editor"
            ),
        ]
    ),
    M(
        "Languages & Frameworks",
        "languages-and-frameworks",
        [
            M(
                "Python",
                "languages/python"
            ),
            M(
                "HTML/CSS",
                "languages/html"
            ),
            M(
                "Java",
                "languages/java"
            ),
            M(
                "C++",
                "languages/cpp"
            ),
            M(
                "Go",
                "languages/go"
            ),
            M(
                "Bash",
                "languages/bash"
            ),
            M(
                "Ruby",
                "languages/ruby"
            ),
            M(
                "PHP",
                "languages/php"
            ),
            M(
                "Vue",
                "languages/vue"
            ),
            M(
                "Scala",
                "languages/scala"
            ),
            M(
                "Rust",
                "languages/rust"
            ),
            M(
                ".NET",
                "languages/dotnet"
            ),
            M(
                "Julia",
                "languages/julia"
            ),
            M(
                "R",
                "languages/r"
            )
        ]
    ),
    M(
        "Theia – Gitpod's IDE",
        "ide",
        [
            M(
                "Tips & Tricks",
                "tips-and-tricks"
            ),
            M(
                "Git Integration",
                "git"
            ),
            M(
                "Search",
                "search"
            ),
            M(
                "Pull Requests",
                "pull-requests"
            ),
            M(
                "Code Reviews",
                "code-reviews"
            )
        ]
    ),
    M(
        "Subscriptions",
        "subscriptions",
        [
            M(
                "Professional Open Source",
                "professional-open-source"
            ),
            M(
                "Create a Team",
                "teams"
            )
        ]
    ),
    M(
        "Changelog",
        "changelog",
    ),
    M(
        "Gitpod Self-Hosted",
        "self-hosted/latest/self-hosted",
        [
            M(
                "Prerequisites",
                "self-hosted/latest/install/prepare-installation/"
            ), 
            M(
                "Install on Vanilla Kubernetes",
                "self-hosted/latest/install/install-on-kubernetes/"
            ),
            M(
                "Install on Google Cloud Platform",
                "self-hosted/latest/install/install-on-gcp-script/"
            )
        ]
    ),
    // M(
    //     "Release Notes",
    //     "release-notes",
    //     [
    //         M(
    //             "June 2019",
    //             "release-notes/2019-06-17/june-2019"
    //         ),
    //         M(
    //             "April 2019",
    //             "release-notes/2019-04-05/april-2019"
    //         ),
    //         M(
    //             "February 2019",
    //             "release-notes/2019-02-15/february-2019"
    //         )
    //     ]
    // )
];

interface MenuContext {
    prev?: MenuEntry;
    thisEntry?: MenuEntry;
    next?: MenuEntry;
}

export function getMenuContext(slug: string, menu: MenuEntry[] = MENU, context: MenuContext = {}): MenuContext {
    for (const e of menu) {
        if (context.next) {
            return context;
        }
        if (context.thisEntry) {
            context.next = e;
            return context;
        } else if (e.path === slug) {
            context.thisEntry = e;
        } else {
            context.prev = e;
        }
        if (e.subMenu) {
            getMenuContext(slug, e.subMenu, context);
        }
    }
    return context;
}
