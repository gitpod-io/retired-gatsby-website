
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
        "10_getting_started"
    ),
    M(
        "Browser Extension",
        "20_browser_extension"
    ),
    M(
        "Workspaces",
        "30_workspaces",
        [
            M(
                "Context URLs",
                "31_context_urls"
            ),
            M(
                "Life of a Workspace",
                "32_life_of_workspace"
            ),
            M(
                "Collaboration & Sharing",
                "33_sharing_and_collaboration"
            ),
            M(
                "Command Line Interface",
                "34_command_line_interface"
            )
        ]
    ),
    M(
        "Configure Your Repository",
        "40_configuration",
        [
            M(
                ".gitpod.yml",
                "41_config_gitpod_file"
            ),
            M(
                "Docker Image",
                "42_config_docker"
            ),
            M(
                "Exposing Ports",
                "43_config_ports"
            ),
            M(
                "Start Tasks",
                "44_config_start_tasks"
            ),
            M(
                "VS Code Extensions",
                "vscode-extensions"
            ),
            M(
                "Workspace Location",
                "45_checkout_location"
            ),
            M(
                "Prebuilt Workspaces",
                "46_prebuilds"
            ),
            M(
                "Environment Variables",
                "47_environment_variables"
            )
        ]
    ),
    M(
        "Theia – Gitpod's IDE",
        "50_ide",
        [
            M(
                "Tips & Tricks",
                "52_tips_and_tricks"
            ),
            M(
                "Git Integration",
                "54_git"
            ),
            M(
                "Search",
                "56_search"
            ),
            M(
                "Pull Requests",
                "58_pull_requests"
            ),
            M(
                "Code Reviews",
                "59_code_reviews"
            )
        ]
    ),
    M(
        "Languages & Frameworks",
        "languages_and_frameworks",
        [
            M(
                "Java",
                "java_in_gitpod"
            ),
            M(
                "Python",
                "python_in_gitpod"
            )
        ]
    ),
    M(
        "Dashboard",
        "60_dashboard"
    ),
    M(
        "Subscriptions",
        "70_subscriptions"
    ),
    // M(
    //     "Release Notes",
    //     "80_release_notes",
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
