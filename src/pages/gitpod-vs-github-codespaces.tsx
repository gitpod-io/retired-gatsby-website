import React from 'react'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import FeatureCards from '../components/FeatureCards'
import { features } from '../contents/gitpod-vs-codespaces'
import GitLab from '../resources/gitlab-logo.svg'
import FreeCodeCamp from '../resources/freecodecamp.svg'
import DWaveLogo from '../resources/dwave.svg'
import GoogleLogo from '../resources/google.svg'
import OpenAILogo from '../resources/openai.svg'
import SauceLabsLogo from '../resources/sauce-labs.svg'
import FacebookLogo from '../resources/facebook.svg'
import CodeInstituteLogo from '../resources/code.svg'
import FourGeeksAcademyLogo from '../resources/4-geeks-academy.png'
import TheiaIDELogo from '../resources/theia-grey.svg'
import UberLogo from '../resources/uber.svg'
import AmazonLogo from '../resources/amazon.svg'
import IntelLogo from '../resources/intel.svg'
import TrustedBy from '../components/TrustedBy'
import { Link } from 'gatsby'
import PricingTable from '../components/PricingTable'
import Bitbucket from '../resources/bitbucket.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import Kubernetes from '../resources/kubernetes.svg'
import GoogleCloudLogo from '../resources/google-cloud-logo.svg'
import AWS from '../resources/aws.svg'
import PopOver from '../components/PopOver'
import { colors } from '../styles/variables'
import tickImg from '../resources/icon-tick-blue.svg'
import questionMarkImg from '../resources/question-mark.svg'
import crossImg from '../resources/cross.svg'
import Difference from '../components/gitpod-vs-codespaces/Difference'
import Octocat from '../resources/octocat.svg'

const Tick = () => <img style={{ height: '2.1rem' }} src={tickImg} alt="Check Mark" />

const QuestionMark = () => <img style={{ height: '2.1rem' }} src={questionMarkImg} alt="Question Mark" />

const Cross = () => <img style={{ height: '2.1rem' }} src={crossImg} alt="Cross" />

const StyledGitpodVsGitHubCodespacesPage = styled.div`
  .main {
    padding: 0;
  }

  .pattern {
    &::after {
      top: -25rem;
      height: calc(100% + 25rem);
    }
  }

  .intro {
    padding: 4rem 0 6rem;
    text-align: center;

    &__title {
      margin: 2rem 0 2rem;
    }
  }

  .octocat {
      height: 14rem;
  }

  .glance {
    text-align: center;
  }

  .th__title {
      font-size: 3rem;
      color: ${colors.textDark};
  }
`

const GitpodVsGitHubCodespacesPage = () => (
  <IndexLayout title="Gitpod vs GitHub Codespaces"
    description="Gitpod is the faster, more powerful open-source platform that integrates with your individual stack."
    canonical="gitpod-vs-github-codespaces"
    ogImage="https://www.gitpod.io/octocat-gitpod-hat.jpg">
    <StyledGitpodVsGitHubCodespacesPage>
      <section className="main">
        <div className="row">
          <div className="intro pattern">
            <img className="octocat" src={Octocat} alt="Octocat"/>
            <h1 className="intro__title">
              <strong>Gitpod vs GitHub Codespaces</strong>
            </h1>
            <p>
               Gitpod is the <a href="#fast">faster</a>, <a href="#resource-efficient">more powerful</a>{' '}
              <a href="#open-source">open-source</a> platform that integrates with your individual stack.
            </p>
          </div>
        </div>

        <FeatureCards opposite={true} features={features} />
      </section>

      <div className="glance section">
        <div className="row">
          <PricingTable
            title={<strong>Gitpod vs GitHub Codespaces at a Glance</strong>}
            styles={{ minWidth: '800px', borderCollapse: 'separate', borderSpacing: '2rem 0', margin: '0 auto', tableLayout: 'fixed' }}
            containerMaxWidthLarge={true}
            disableMarginBottom={true}
          >
            <thead className="comparison">
              <tr className="header">
                <th className="th__title--1" style={{ border: 'none', background: colors.white }}>
                  &nbsp;
                </th>
                <th className="th__title">
                  Gitpod
                </th>
                <th className="th__title">
                  GitHub Codespaces
                </th>
              </tr>
            </thead>
            <tbody className="comparison">
              <tr>
                <th>Pricing (Hosted)</th>
                <td>Free for Open-Source</td>
                <td>
                  <QuestionMark />
                </td>
              </tr>
              <tr>
                <th>License</th>
                <td>Open Source</td>
                <td>Proprietary</td>
              </tr>
              <tr>
                <th>
                  <img src={Github} alt="GitHub" />
                  GitHub Integration
                </th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Tick />
                </td>
              </tr>
              <tr>
                <th>
                  <img src={Gitlab} alt="GitLab" />
                  GitLab Integration
                </th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Cross />
                </td>
              </tr>
              <tr>
                <th>
                  <img src={Bitbucket} alt="Bitbucket" />
                  Bitbucket Integration
                </th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Cross />
                </td>
              </tr>
              <tr>
                <th>
                  <img src={GoogleCloudLogo} alt="Google Cloud Platform" />
                  Self-Host on GCP
                </th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Cross />
                </td>
              </tr>
              <tr>
                <th>
                  <img src={AWS} alt="Amazon Web Services" />
                  Self-Host on AWS
                </th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Cross />
                </td>
              </tr>
              <tr>
                <th>
                  <img src={Kubernetes} alt="Kubernetes" />
                  Self-Host on Kubernetes
                </th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Cross />
                </td>
              </tr>
              <tr>
                <th>
                  Prebuilds{' '}
                  <PopOver
                    description={
                      <>
                        Accelerate your workspaces by continuously prebuilding your projects, branches, and Pull Requests ahead-of-time.{' '}
                        <Link style={{ fontWeight: 400 }} to="/docs/prebuilds/">
                          Learn More.
                        </Link>
                      </>
                    }
                  />
                </th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Cross />
                </td>
              </tr>
              <tr>
                <th>
                  Snapshots{' '}
                  <PopOver
                    description={
                      <>
                        Capture your current workspace state and share a reproducible snapshot as a link.{' '}
                        <Link style={{ fontWeight: 400 }} to="/docs/sharing-and-collaboration/#sharing-snapshots">
                          Learn More.
                        </Link>
                      </>
                    }
                  />
                </th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Cross />
                </td>
              </tr>
              <tr>
                <th>VS Code Extensions</th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Tick />
                </td>
              </tr>
              <tr>
                <th>iPad Support</th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Tick />
                </td>
              </tr>
              <tr>
                <th>Virtual Desktop (VNC)</th>
                <td>
                  <Tick />
                </td>
                <td>
                  <Tick />
                </td>
              </tr>
              <tr>
                <th>Multi-IDE Support</th>
                <td>Coming soon</td>
                <td>
                  <Cross />
                </td>
              </tr>
              <tr>
                <th style={{ border: 'none', background: colors.white }}>&nbsp;</th>
                <td className="footnote disclaimer" colSpan={2}>
                  Disclaimer: All information, prices, and data were last verified on Sept. 25, 2020. To report any incorrect or outdated
                  information, please{' '}
                  <Link to="/contact" style={{ fontWeight: 400 }}>
                    contact us.
                  </Link>
                </td>
              </tr>
            </tbody>
          </PricingTable>
        </div>
      </div>

      <Difference />

      <TrustedBy
        title={<strong>Used by 300,000+ Developers & Businesses</strong>}
        styles={{ margin: '10rem 0' }}
        brands={[
          {
            alt: 'GitLab',
            url: 'https://about.gitlab.com/',
            svg: GitLab,
            className: 'grey-logo'
          },
          {
            alt: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/',
            svg: FreeCodeCamp,
            className: 'fcc'
          },
          {
            alt: 'D-Wave',
            url: 'https://www.dwavesys.com/',
            svg: DWaveLogo,
            transform: 'scale(1.3)',
            className: 'dwave-logo'
          },
          {
            alt: 'Google',
            url: 'https://about.google/',
            svg: GoogleLogo,
            transform: 'scale(0.9)',
            className: 'grey-logo'
          },
          {
            alt: 'Amazon',
            url: 'https://www.aboutamazon.com',
            svg: AmazonLogo,
            transform: 'scale(0.9) translateY(5px)',
            className: 'grey-logo'
          },
          {
            alt: 'Facebook',
            url: 'https://about.fb.com/',
            svg: FacebookLogo,
            className: 'grey-logo'
          },
          {
            alt: 'Uber',
            url: 'https://www.uber.com',
            svg: UberLogo,
            className: 'grey-logo'
          },
          {
            alt: 'OpenAI',
            url: 'https://openai.com/',
            svg: OpenAILogo,
            transform: 'scale(1.1)',
            className: 'grey-logo'
          },
          {
            alt: 'Sauce Labs',
            url: 'https://saucelabs.com/',
            svg: SauceLabsLogo,
            className: 'grey-logo'
          },
          {
            alt: 'Intel',
            url: 'https://www.intel.com',
            svg: IntelLogo,
            transform: 'scale(0.8)',
            className: 'grey-logo'
          },
          {
            alt: 'Eclipse Theia',
            url: 'https://theia-ide.org',
            svg: TheiaIDELogo,
            transform: 'scale(1.1)',
            className: 'grey-logo'
          },
          {
            alt: 'Code Institute',
            url: 'https://codeinstitute.net/',
            svg: CodeInstituteLogo,
            className: 'grey-logo'
          },
          {
            alt: '4Geeks Academy',
            url: 'https://www.4geeksacademy.co/',
            svg: FourGeeksAcademyLogo,
            className: 'four-geeks grey-logo'
          }
        ]}
      />
    </StyledGitpodVsGitHubCodespacesPage>
  </IndexLayout>
)

export default GitpodVsGitHubCodespacesPage
