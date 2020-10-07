import React from 'react'
import { FeatureCardProps } from '../components/FeatureCard'
import GitPlatforms from '../resources/stay-in-flow.svg'
import SpeedComparison from '../components/gitpod-vs-codespaces/SpeedComparison'
import PowerComparison from '../components/gitpod-vs-codespaces/PowerComparison'
import { Link } from 'gatsby'

export const features: FeatureCardProps[] = [
  {
    id: 'fast',
    title: <strong>Loads 15x Faster</strong>,
    text: (
      <>
        <p>
          Gitpod removes long init and build times by continuously pre-building workspaces for your project. Thereby it allows you to start coding or debugging immediately, from any context, at any time. 
        </p>
        <p>
          Simply add your build command into a .gitpod.yml file and let Gitpod do the heavy-lifting. Once you’ve experienced the freedom of
          ephemeral workspaces, you’ll never want to go back to long-lived, manually-maintained environments.
        </p>
        <p>
          <strong>Why wait for long builds when you can start coding immediately?</strong>
        </p>
      </>
    ),
    Figure: SpeedComparison,
    figFootnote: 'Compared start up time until ready-to-code of https://github.com/microsoft/vscode. Last verified Sept 25, 2020.'
  },
  {
    id: 'resource-efficient',
    title: <strong>3x More Power</strong>,
    text: (
      <>
        <p>
          By leveraging cloud technologies like containers and Kubernetes, Gitpod achieves best-in-class resource-efficiency with scalable
          workspaces running on shared high-powered cloud servers.
        </p>
        <p>
          Gitpod is not only more resource-efficient but it also runs on 100% carbon-neutral cloud servers (<a style={{fontWeight: 400}} href="https://cloud.google.com/sustainability" target="_blank">GCP</a>).
        </p>
      </>
    ),
    Figure: PowerComparison,
    figFootnote: <>Compared hardware specs $9/month using 100 active hours. Last verified Sept 25, 2020. Sources: <Link to="/pricing">Gitpod Pricing</Link>, <a href=
    "https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/about-billing-for-codespaces" target="_blank">Codespaces Pricing.</a></>,
  },
  {
    id: 'open-source',
    title: <strong>Open-Source</strong>,
    text: (
      <>
        <p>
          <strong>Gitpod is open-source and thereby guarantees full transparency and flexibility</strong>
        </p>
        <ul className="text-list">
          <li>host Gitpod yourself on GCP, AWS, Azure or self-managed Kubernetes</li>
          <li>works just as smoothly with GitHub, GitLab and Bitbucket</li>
          <li>contribute to Gitpod and build customizations yourself</li>
        </ul>
      </>
    ),
    src: GitPlatforms
  }
]
