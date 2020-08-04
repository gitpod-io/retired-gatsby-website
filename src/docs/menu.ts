// This file is used to define entries in the side menu

export interface MenuEntry {
  title: string
  path: string
  subMenu?: MenuEntry[]
}

function generateMenuEntry(title: string, path: string, subMenu?: MenuEntry[]): MenuEntry {
  return {
    title,
    subMenu,
    path: `/docs/${path ? `${path}/` : ''}`
  }
}

export const MENU: MenuEntry[] = [
  generateMenuEntry('Introduction', ''),
  generateMenuEntry('Getting Started', 'getting-started'),
  generateMenuEntry('Browser Extension', 'browser-extension'),
  generateMenuEntry('Workspaces', 'workspaces', [
    generateMenuEntry('Context URLs', 'context-urls'),
    generateMenuEntry('Life of a Workspace', 'life-of-workspace'),
    generateMenuEntry('Collaboration & Sharing', 'sharing-and-collaboration'),
    generateMenuEntry('Command Line Interface', 'command-line-interface')
  ]),
  generateMenuEntry('Configure Your Project', 'configuration', [
    generateMenuEntry('.gitpod.yml', 'config-gitpod-file'),
    generateMenuEntry('Docker Configuration', 'config-docker'),
    generateMenuEntry('Start Tasks', 'config-start-tasks'),
    generateMenuEntry('VS Code Extensions', 'vscode-extensions'),
    generateMenuEntry('Exposing Ports', 'config-ports'),
    generateMenuEntry('Prebuilt Workspaces', 'prebuilds'),
    generateMenuEntry('Environment Variables', 'environment-variables'),
    generateMenuEntry('Workspace Location', 'checkout-location'),
    generateMenuEntry('Editor Configuration', 'config-editor')
  ]),
  generateMenuEntry('Languages & Frameworks', 'languages-and-frameworks', [
    generateMenuEntry('Python', 'languages/python'),
    generateMenuEntry('HTML/CSS', 'languages/html'),
    generateMenuEntry('Java', 'languages/java'),
    generateMenuEntry('C++', 'languages/cpp'),
    generateMenuEntry('Go', 'languages/go'),
    generateMenuEntry('Bash', 'languages/bash'),
    generateMenuEntry('Ruby', 'languages/ruby'),
    generateMenuEntry('PHP', 'languages/php'),
    generateMenuEntry('Vue', 'languages/vue'),
    generateMenuEntry('Scala', 'languages/scala'),
    generateMenuEntry('Rust', 'languages/rust'),
    generateMenuEntry('.NET', 'languages/dotnet'),
    generateMenuEntry('Dart', 'languages/dart'),
    generateMenuEntry('Julia', 'languages/julia'),
    generateMenuEntry('LaTeX', 'languages/latex'),
    generateMenuEntry('R', 'languages/r'),
    generateMenuEntry('Kotlin', 'languages/kotlin')
  ]),
  generateMenuEntry("Theia – Gitpod's IDE", 'ide', [
    generateMenuEntry('Tips & Tricks', 'tips-and-tricks'),
    generateMenuEntry('Git Integration', 'git'),
    generateMenuEntry('Search', 'search'),
    generateMenuEntry('Fork a Reposiory', 'fork-a-repo'),
    generateMenuEntry('Pull Requests', 'pull-requests'),
    generateMenuEntry('Code Reviews', 'code-reviews')
  ]),
  generateMenuEntry('Subscriptions', 'subscriptions', [
    generateMenuEntry('Professional Open Source', 'professional-open-source'),
    generateMenuEntry('Create a Team', 'teams')
  ]),
  generateMenuEntry('Changelog', 'changelog'),
  generateMenuEntry('Gitpod Self-Hosted', 'self-hosted/latest/self-hosted', [
    generateMenuEntry('Install on Google Cloud Platform', 'self-hosted/latest/install/install-on-gcp-script/'),
    generateMenuEntry('Install on self-managed Kubernetes', 'self-hosted/latest/install/install-on-kubernetes/'),
    generateMenuEntry('Configure OAuth', 'self-hosted/latest/install/oauth/'),
    generateMenuEntry('Configure a Domain', 'self-hosted/latest/install/domain/'),
    generateMenuEntry('Configure HTTPS Certificates', 'self-hosted/latest/install/https-certs/'),
    generateMenuEntry('Configure a Database', 'self-hosted/latest/install/database/'),
    generateMenuEntry('Configure a Docker Registry', 'self-hosted/latest/install/docker-registry/'),
    generateMenuEntry('Configure Storage', 'self-hosted/latest/install/storage/'),
    generateMenuEntry('Configure Nodes', 'self-hosted/latest/install/nodes/'),
    generateMenuEntry('Configure Workspaces', 'self-hosted/latest/install/workspaces/')
  ])
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
]

export interface MenuContext {
  prev?: MenuEntry
  thisEntry?: MenuEntry
  next?: MenuEntry
}

export function getMenuContext(slug: string, menu: MenuEntry[] = MENU, context: MenuContext = {}): MenuContext {
  for (const e of menu) {
    if (context.next) {
      return context
    }
    if (context.thisEntry) {
      context.next = e
      return context
      // tslint:disable-next-line
    } else if (e.path === slug) {
      context.thisEntry = e
    } else {
      context.prev = e
    }
    if (e.subMenu) {
      getMenuContext(slug, e.subMenu, context)
    }
  }
  return context
}
