import React from 'react'

import { FeatureCardProps } from '../components/FeatureCard'

import Collaboration from '../resources/collaboration-placeholder.png'
import KubernetesGraphics from '../resources/cloud-native.svg'
import IPad from '../resources/ipad.png'
import FullAutomationGraphics from '../components/features/FullAutomationGraphics'
import FullAutomationButtons from '../components/features/FullAutomationButtons'
import BenHalpern from '../resources/ben-halpern.jpg'
import HughDurkin from '../resources/hugh-durkin.jpg'
import Mrugesh from '../resources/mrugesh.jpg'
import DavidRessler from '../resources/david-ressler.jpg'
import JonathanListerParsons from '../resources/jayfresh.jpg'
import SvenPeters from '../resources/sven-peters.jpg'
import Marcel from '../resources/marcel.jpg'
import Brenden from '../resources/brenden-o-leary.jpg'
import MikeNikles from '../resources/mike-nikles.jpg'
import Alejandro from '../resources/alejandro.jpeg'
import Joonas from '../resources/joonas-lehtinen.png'
import Yo from '../resources/yo.jpg'
import K33g from '../resources/k33g.jpg'
import Michael from '../resources/michael.jpg'
import Roku from '../resources/roku.jpg'
import Julius from '../resources/julius.jpg'
import { TestimonialProps } from '../components/index/Testimonial'

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
    alt: 'A code review within Gitpod',
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

export const testimonials: TestimonialProps[] = [
    {
        name: 'Ben Halpern',
        avatar: BenHalpern,
        org: <>
            <a href="https://twitter.com/forem" target="_blank">
                @forem
            </a> and <a href="https://twitter.com/ThePracticalDev" target="_blank">
                @ThePracticalDev
            </a>
        </>,
        role: 'Creator and Co-founder',
        text: (
            <>
                <p>GitPod is incredibly cool.</p>
                <p>In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
            </>
        ),
        twitterHandle: 'bendhalpern',
        tweetId: '1115274432958930946'
    },
    {
        name: 'Michael Friedrich',
        avatar: Michael,
        org: <a href="https://twitter.com/gitlab" target="_blank">@GitLab</a>,
        role: 'Developer Evangelist',
        text: (
            <>
                <p>
                    Let's say we were overwhelmed how smooth <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> workspaces creation & own Docker image for workspaces worked.
                </p>
                <p>
                    Plus, installing <a href="https://twitter.com/code" target="_blank">@code</a> extensions from the store and integrating <a href="https://twitter.com/gitlab" target="_blank">@gitlab</a> CI. That blew my mind entirely, and that is hard ;)
                </p>
            </>
        ),
        twitterHandle: 'dnsmichi',
        tweetId: '1311560585717460992'
    },
    {
        name: 'Julius Volz',
        avatar: Julius,
        org: <a href="https://twitter.com/PrometheusIO" target="_blank">@PrometheusIO</a>,
        role: 'Creator',
        text: (
            <>
                <p>
                    Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "<a href="https://gitpod.io" target="_blank">gitpod.io#</a>" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!
                </p>
            </>
        ),
        twitterHandle: 'juliusvolz',
        tweetId: '1298972181708275717'
    },
    {
        name: 'David Ressler',
        avatar: DavidRessler,
        org: <a href="https://twitter.com/instagram" target="_blank">
            @instagram
        </a>,
        role: 'Engineering Manager',
        text: (
            <>
                <p>I think I’m in love with <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a>. It’s such a powerful tool. I’ve learned so much in the past week just from stumbling across Github repos that interest me and appending “<a href="http://gitpod.io/#" target="_blank">http://gitpod.io/#</a>” to the URL. A+ tool all around.</p>
            </>
        ),
        twitterHandle: 'DavidRessler',
        tweetId: '1191710936605831169'
    },
    {
        name: 'Mrugesh Mohapatra',
        avatar: Mrugesh,
        org: <a href="https://twitter.com/freeCodeCamp" target="_blank">
            @freeCodeCamp
        </a>,
        role: 'Technology & Community',
        text: (
            <>
                <p>
                    Ya'all <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> is freaking amazing! We integrated it into our workflow for working on <a href="https://twitter.com/freeCodeCamp" target="_blank">@freeCodeCamp</a> 's codebase and I am honestly loving it. 🔥🔥!
        <br />
            Go check it out on our repo https://github.com/freeCodeCamp/f... now!
        </p>
            </>
        ),
        twitterHandle: 'raisedadead',
        tweetId: '1167463499779338243'
    },
    {
        name: 'Sven Peters',
        avatar: SvenPeters,
        org: <a href="https://twitter.com/MongoDB" target="_blank">
            @MongoDB
        </a>,
        role: 'Dev Advocate',
        text: (
            <>
                <p>Huge time saver, less frustrations for devs: Automated ready-to-code dev environments with pre-build workspaces. #gitpod #cloudide
        </p>
            </>
        ),
        twitterHandle: 'svenpet',
        tweetId: '1159698330764611584'
    },
    {
        name: 'Mike Nikles',
        avatar: MikeNikles,
        org: <a href="https://twitter.com/Google" target="_blank">
            @Google
        </a>,
        role: 'Software Architect',
        text: (
            <>
                <p>12 lines of configuration gives me a 1-click development setup, installs dependencies and starts the dev servers for 3 APIs and 1 frontend application. It also ensures the Svelte extension is installed for all team members.
        </p>
                <p>
                    How? With <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a>!
        </p>
            </>
        ),
        twitterHandle: 'mikenikles',
        tweetId: '1298711944141000710'
    },
    {
        name: 'Jonathan Lister Parsons',
        avatar: JonathanListerParsons,
        org: <a href="https://twitter.com/pensionbee" target="_blank">@PensionBee</a>,
        role: 'CTO',
        text: (
            <>
                <p>I'm really enjoying <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> - for me, it's made full-stack development in the browser (yes, including mobile) a reality</p>
            </>
        ),
        twitterHandle: 'jayfresh',
        tweetId: '1217728632887611397'
    },
    {
        name: 'Alejandro',
        avatar: Alejandro,
        org: <a href="https://twitter.com/4GeeksAcademy" target="_blank">
            @4GeeksAcademy
        </a>,
        role: 'Co-Founder',
        text: (
            <>
                <p>My setup is on <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a>, just like Christopher McCandless, where I go my code goes with me, no setup whatsoever Smiling face with sunglasses 😎 #IntoTheWild</p>
            </>
        ),
        twitterHandle: 'alesanchezr',
        tweetId: '1247219573767667715'
    },
    {
        name: 'ROKU',
        avatar: Roku,
        org: <a href="https://twitter.com/gitlab" target="_blank">@GitLab</a>,
        role: 'Engineering Manager',
        text: (
            <>
                <p>
                    Have to say that  <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> is just super nice to use. Very impressed by the performance!
                </p>
            </>
        ),
        twitterHandle: 'Codebryo',
        tweetId: '1331252316255768578'
    },
    {
        name: 'Hugh Durkin',
        avatar: HughDurkin,
        org: <a href="https://twitter.com/HubSpot" target="_blank">
            @HubSpot
        </a>,
        role: 'Platform Ecosystem',
        text: (
            <>
                <p>I've been playing around with the "next generation" of Cloud IDEs lately, and <a href="https://twitter.com/gitpodio" target="_blank">@gitpodio</a> is quickly emerging as one of the best 👨‍💻
        <br />
        Awesome <a href="https://twitter.com/github" target="_blank">@github</a> integration, slick Chrome extension, and super fast 🚀
        https://gitpod.io/index.html
        </p>
            </>
        ),
        twitterHandle: 'hughdurkin',
        tweetId: '1102215129696010240'
    },
    {
        name: 'Marcel van Remmerden',
        avatar: Marcel,
        org: <a href="https://twitter.com/GitLab" target="_blank">
            @GitLab
        </a>,
        role: 'Product Design Manager',
        text: (
            <>
                <p>
                    Can only agree, opening a GitLab repository in gitpod is a magical experience, thanks for the integration <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a>!
        </p>
            </>
        ),
        twitterHandle: 'MvRemmerden',
        tweetId: '1215707492740739072'
    },
    {
        name: 'Brendan O’Leary',
        avatar: Brenden,
        org: <a href="https://twitter.com/GitLab" target="_blank">
            @GitLab
        </a>,
        role: 'Dev. Evangelist',
        text: (
            <>
                <p>
                    I just discovered the <a href="https://twitter.com/gitlab" target="_blank">@gitlab</a> and <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> integration is alive on <a href="http://GitLab.com" target="_blank">http://GitLab.com</a> (released in 13.4 behind a feature flag).  And it's AMAZING <a href="https://docs.gitlab.com/ee/integration/gitpod.html" target="_blank">https://docs.gitlab.com/ee/integration....</a>.
        </p>
                <p>Now I can code from *anywhere*</p>
            </>
        ),
        twitterHandle: 'olearycrew',
        tweetId: '1310376245629198341'
    },
    {
        name: 'Joonas Lehtinen',
        avatar: Joonas,
        org: <a href="https://twitter.com/vaadin" target="_blank">
            @vaadin
        </a>,
        role: 'Co-founder',
        text: (
            <>
                <p>
                    Wow - <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> is a brilliant way of evaluating a framework without installing anything.
                </p>
                <p>
                    Launch gitpod for <a href="https://twitter.com/vaadin" target="_blank">@vaadin</a> at <a href="https://vaadin.com/start/v14" target="_blank">https://vaadin.com/start/v14</a> ("Online workspace" tab). You'll have app running and will be editing code in 3min from clicking "Launch" button.
                </p>
            </>
        ),
        twitterHandle: 'joonaslehtinen',
        tweetId: '1238597160121200640'
    },
    {
        name: 'Yo',
        avatar: Yo,
        org: <a href="https://twitter.com/Taskord" target="_blank">@Taskord</a>,
        role: 'Creator',
        text: (
            <>
                <p>
                    Now contributing to <a href="https://twitter.com/gitlab" target="_blank">@gitlab</a> is a cakewalk with <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> 🎉!
                </p>
                <p>
                    Already started my game! #100DaysOfCode
                </p>
            </>
        ),
        twitterHandle: 'big1nt',
        tweetId: '1317483426421776385'
    },
    {
        name: 'Senior Enterprise Geek',
        avatar: K33g,
        org: <a href="https://twitter.com/gitlab" target="_blank">@GitLab</a>,
        role: 'Senior Technical Account Manager',
        text: (
            <>
                <p>
                    Today is a great day, we added the <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> support to the <a href="https://twitter.com/golo_lang" target="_blank">@golo_lang</a> repository. So now you can start hacking <a href="https://twitter.com/golo_lang" target="_blank">@golo_lang</a> in almost only one click. Enjoy 🎉
                </p>
                <p>
                    <a href="https://gitpod.io/#https://github.com/eclipse/golo-lang" target="_blank">gitpod.io/#https://githu...</a>
                </p>
            </>
        ),
        twitterHandle: 'k33g_org',
        tweetId: '1329461150422065152'
    },
]
