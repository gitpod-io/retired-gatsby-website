import React from 'react'

import { FeatureCardProps } from '../components/FeatureCard'

import Collaboration from '../resources/collaboration-placeholder.png'
import KubernetesGraphics from '../resources/kubernetes-graphic.svg'
import IPad from '../resources/ipad.png'
import FullAutomationGraphics from '../components/features/FullAutomationGraphics'
import FullAutomationButtons from '../components/features/FullAutomationButtons'
import { Link } from 'gatsby'

export const features: FeatureCardProps[] = [
  {
    id: 'automation',
    Graphic: FullAutomationGraphics,
    title: (
      <strong>
        Think CI/CD for
        <br />
        Dev Environments
      </strong>
    ),
    text: (
      <>
        <p>
          Application code, configuration and infrastructure should all be stored as machine-executable code in your git repositories and
          applied to dev environments automatically and continuously. This is why we invented prebuilds
        </p>
        <p>
          More about <Link to="/blog/continuous-dev-environment-in-devops/">Continuous Dev Environments.</Link>
        </p>
      </>
    ),
    Buttons: FullAutomationButtons
  },
  {
    id: 'teams-together',
    src: Collaboration,
    title: (
      <strong>
        Where Teams
        <br />
        Code Together
      </strong>
    ),
    text: (
      <ul className="text-list">
        <li>
          <div>
            <strong>Do code reviews within Gitpod</strong>
            <br />
            No need to switch contexts anymore.
          </div>
        </li>
        <li>
          <div>
            <strong>Mentor or be mentored</strong>
            <br />
            Work together in one workspace in real-time.
          </div>
        </li>
        <li>
          <div>
            <strong>Take snapshots</strong>
            <br />
            Share a reproducible workspace with your team.
          </div>
        </li>
      </ul>
    )
  },
  {
    src: IPad,
    alt: 'Gitpod on an iPad',
    title: <strong>Remote-first. Secure by Design.</strong>,
    text: (
      <>
        <p>
          You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a
          browser.
        </p>
        <p>Gitpod centralizes all source code and never stores it on insecure machines and networks.</p>
      </>
    )
  },
  {
    src: KubernetesGraphics,
    alt: 'Kubernetes',
    title: <strong>Cloud Native Development Done Right</strong>,
    text: (
      <>
        <p>Gitpod is a multi-service Kubernetes application that we develop in Gitpod.</p>
        <p>
          Code, build, debug and run K8s applications entirely in the cloud. Get fully-baked workspaces for every branch and pull/merge
          request, pre-configured and pre-connected to their own dedicated K8s deployment.
        </p>
      </>
    )
  }
]
