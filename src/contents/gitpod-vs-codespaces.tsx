import React from 'react'
import { FeatureCardProps } from '../components/FeatureCard'
import SpeedComparison from '../components/gitpod-vs-codespaces/SpeedComparison'
import PowerComparison from '../components/gitpod-vs-codespaces/PowerComparison'
import { Link } from 'gatsby'
import ImageProvider from '../components/ImageProvider'

export const features: FeatureCardProps[] = [
  {
    id: 'fast',
    title: <strong>15x Faster Loading</strong>,
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
        <p>
          More about <Link to="/blog/continuous-dev-environment-in-devops/">Continuous Dev Environments.</Link>
        </p>
      </>
    ),
    Figure: SpeedComparison,
    figFootnote: 'Compared start-up time until ready-to-code for https://github.com/gitpod-io/vscode. Last verified 25 Sep 2020.'
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
    figFootnote: <>Compared resources for 100 active hours at $9/month. Last verified 25 Sep 2020. Sources: <Link to="/pricing/">Gitpod</Link>, <a href=
    "https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/about-billing-for-codespaces" target="_blank">GitHub Codespaces</a>.</>,
  },
  {
    id: 'open-source',
    title: <strong>Open-Source</strong>,
    text: (
      <>
        <p>
          <strong>Gitpod puts developers' interest first and thereby guarantees full transparency and flexibility. Integrate, don't dictate.</strong>
        </p>
        <ul className="text-list">
          <li>host Gitpod yourself on GCP, AWS, Azure or self-managed Kubernetes</li>
          <li>works just as smoothly with GitHub, GitLab and Bitbucket</li>
          <li>contribute to Gitpod and build customizations yourself</li>
        </ul>
      </>
    ),
    gatsbyImage: <ImageProvider isNotRelativeToGatsbyImgWrapper={true} fileName="stay-in-flow.png" alt="Git Platforms" />,
  }
]
