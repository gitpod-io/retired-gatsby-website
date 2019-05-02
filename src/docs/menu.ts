
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
        "10_Getting_Started"
    ),
    M(
        "Browser Extension",
        "20_Browser_Extension"
    ),
    M(
        "Workspaces",
        "30_Workspaces",
        [
            M(
                "Context URLs",
                "31_Context_Urls"
            ),
            M(
                "Life of a Workspace",
                "32_Life_of_Workspace"
            ),
            M(
                "Collaboration & Sharing",
                "33_Sharing_and_Collaboration"
            ),
            M(
                "Command Line Interface",
                "34_Command_Line_Interface"
            )
        ]
    ),
    M(
        "Configure Your Repository",
        "40_Configuration",
        [
            M(
                ".gitpod.yml",
                "41_Config_Gitpod_File"
            ),
            M(
                "Docker Image",
                "42_Config_Docker"
            ),
            M(
                "Exposing Ports",
                "43_Config_Ports"
            ),
            M(
                "Start Tasks",
                "44_Config_Start_Tasks"
            ),
            M(
                "Working with Go",
                "45_Config_Go"
            ),
            M(
                "Prebuilt Workspaces",
                "46_Prebuilds"
            ),
            M(
                "Environment Variables",
                "47_Environment_Variables"
            )
        ]
    ),
    M(
        "Theia – Gitpod's IDE",
        "50_IDE",
        [
            M(
                "Tips & Tricks",
                "52_Tips_and_Tricks"
            ),
            M(
                "Git Integration",
                "54_Git"
            ),
            M(
                "Search",
                "56_Search"
            ),
            M(
                "Pull Requests",
                "58_Pull_Requests"
            ),
            M(
                "Code Reviews",
                "59_Code_Reviews"
            )
        ]
    ),
    M(
        "Dashboard",
        "60_Dashboard"
    ),
    M(
        "Subscriptions",
        "70_Subscriptions"
    ),
    M(
        "Release Notes",
        "80_Release_Notes",
        [
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
