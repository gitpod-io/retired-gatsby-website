
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
                "34-command-line-interface"
            )
        ]
    ),
    M(
        "Configure Your Repository",
        "40-configuration",
        [
            M(
                ".gitpod.yml",
                "41-config-gitpod-file"
            ),
            M(
                "Docker Image",
                "42-config-docker"
            ),
            M(
                "Exposing Ports",
                "43-config-ports"
            ),
            M(
                "Start Tasks",
                "44-config-start-tasks"
            ),
            M(
                "VS Code Extensions",
                "vscode-extensions"
            ),
            M(
                "Workspace Location",
                "45-checkout-location"
            ),
            M(
                "Prebuilt Workspaces",
                "46-prebuilds"
            ),
            M(
                "Environment Variables",
                "47-environment-variables"
            )
        ]
    ),
    M(
        "Theia – Gitpod's IDE",
        "50-ide",
        [
            M(
                "Tips & Tricks",
                "52-tips-and-tricks"
            ),
            M(
                "Git Integration",
                "54-git"
            ),
            M(
                "Search",
                "56-search"
            ),
            M(
                "Pull Requests",
                "58-pull-requests"
            ),
            M(
                "Code Reviews",
                "59-code-reviews"
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
        "60-dashboard"
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
