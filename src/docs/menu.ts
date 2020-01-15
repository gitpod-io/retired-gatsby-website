
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
        "10-getting-started"
    ),
    M(
        "Browser Extension",
        "20-browser-extension"
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
        "Configure Your Repository",
        "configuration",
        [
            M(
                ".gitpod.yml",
                "config-gitpod-file"
            ),
            M(
                "Docker Image",
                "config-docker"
            ),
            M(
                "Exposing Ports",
                "config-ports"
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
                "Workspace Location",
                "checkout-location"
            ),
            M(
                "Prebuilt Workspaces",
                "prebuilds"
            ),
            M(
                "Environment Variables",
                "environment-variables"
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
        "Languages & Frameworks",
        "languages-and-frameworks",
        [
            M(
                "Java",
                "java-in-gitpod"
            ),
            M(
                "Python",
                "python-in-gitpod"
            ),
            M(
                "Julia",
                "julia-in-gitpod"
            ),
            M(
                "Go",
                "go-in-gitpod"
            )
        ]
    ),
    M(
        "Dashboard",
        "dashboard"
    ),
    M(
        "Subscriptions",
        "70-subscriptions"
    ),
    M(
        "Gitpod Self-Hosted",
        "self-hosted/latest/self-hosted",
        [
            M(
                "Prerequisites",
                "self-hosted/latest/install/01-prepare-installation/"
            ),M(
                "Install on Vanilla Kubernetes",
                "self-hosted/latest/install/10-install-on-kubernetes/"
            ),
            M(
                "Install on Google Cloud Platform",
                "self-hosted/latest/install/11-install-on-gcp-script/"
            )
        ]
    ),
    M(
        "Release Notes",
        "80-release-notes",
        [
            M(
                "June 2019",
                "release-notes/2019-06-17/june-2019"
            ),
            M(
                "April 2019",
                "release-notes/2019-04-05/april-2019"
            ),
            M(
                "February 2019",
                "release-notes/2019-02-15/february-2019"
            )
        ]
    )
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
