import React from 'react'

import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import FeaturesSection from '../components/FeaturesSection'
import { FeatureItemProps } from '../components/FeatureItem'
import Line from '../resources/line.svg'
import People from '../resources/people.svg'
import Remote from '../resources/remote.svg'
import Mission from '../resources/mission.svg'
import { sizes } from '../styles/variables'
import ExpandableJob, { ExpandableJobProps } from '../components/careers/ExpandableJob'
import ImageProvider from '../components/ImageProvider'

const StyledCareersPage = styled.div`
    /* --------------------------------------------- */
    /* ----- Intro ----- */
    /* --------------------------------------------- */

    .intro {
        text-align: center;

        p {
            margin: 2rem 0;
        }
    }

    /* --------------------------------------------- */
    /* ----- Team ----- */
    /* --------------------------------------------- */

    .team {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(max-width: 1040px) {
            flex-direction: column;
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
        }

        .img-container {
            flex: 0 0 50%;
        }

        img {
            max-width: 100%;
            border-radius: 3px;

            @media(max-width: 1040px) {
                margin-bottom: 4rem;
            }
        }

        .text {
            flex: 0 0 40%;
            font-size: ${sizes.font.h4};
        }
    }

    /* --------------------------------------------- */
    /* ----- Jobs ----- */
    /* --------------------------------------------- */

    .jobs {
        h2 {
            text-align: center;
        }

        .pattern-bg {
            margin-top: 12rem;
        }
    }

    .no-fit {
        padding: 10rem 0;
        max-width: 880px;
        margin: 0 auto;
        text-align: center;
        font-size: ${sizes.font.h4};
    }
`

const features: FeatureItemProps[] = [
    {
        title: "Open",
        text: "We are open minded, transparent and curious. We remain students of the game, not masters of the game.",
        img: Line,
        alt: 'Line'
    },
    {
        title: "Developer-first",
        text: "Developers architect our future. We are developers ourselves and built Gitpod to make lives of developers easier.",
        img: People,
        alt: 'People connected to each other'
    },
    {
        title: "Fully remote",
        text: "You can work from anywhere and schedule your working hours the way it fits best for you. We make sure you are all set and will treat you well.",
        img: Remote,
        alt: 'Wifi'
    },
    {
        title: "Frictionless",
        text: "Everybody should have a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps.",
        img: Mission,
        alt: 'Two Mountains: One with a flag on it.'
    },
]

const jobs: ExpandableJobProps[] = [
    {
        title: 'Software Engineer',
        intro: `You are just starting out as a software engineer, and are super motivated and curious. This might be for you.`,
        paragraphs: `We are a highly motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. In this fashion, we present at international conferences and collaborate openly around the globe.
        We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
        lists: [
            {
                title: 'As part of the team you will ...',
                items: [
                    'Directly impact users. Gitpod has little fat to trim and changes directly affect users. We always have our users in mind and focus on making Gitpod work for them, not some abstract potential future requirement.',
                    'Be a "jack of all trades, master of some". As a small team we favour generalists. You might work on React code, or dive into the backend. There is loads of room to find your passion and see everything that makes the platform tick.',
                    'Solve technical problems. Be it on the backend where we live on right on the edge of what Kubernetes, containers and Linux can do; or on the frontend where we deeply care about performance and quality across browsers and platforms. Gitpod is not your typical Kubernetes web app and provides very unique problems you`d be unlikely to come across elsewhere.',
                    'Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom.',
                    'Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.']
            },
            {
                title: 'You will be a great fit if ...',
                items: [
                    'You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don`t dictate.',
                    'You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based development environments streamline how software is written today.',
                    'You enjoy working across the front- and backend. We hardly ever have a task that is clear cut along fontend/backend lines. If React is your thing, should should feel comfortable enough to have a look at the server. If Kubernetes is your thing, you should still feel comfortable enough to make that change on the dashboard. You do not think "not my department", but welcome the opportunity to venture out of your comfort zone.',
                    'You have experience shipping code in production. Your code is mostly ready for prime time, and you know how to test it. You understand the difference between "making something work" and "making something work reliably". You have read other people`s code, know how to make yourself at home and understand that code is read way more often than it`s written. You understand that every new dependency comes at a cost, as do lines of code.',
                    'You are product minded. You enjoy using what you`ve helped build, and still pay attention to things that feel off. You can empathize with other users and understand how they might see things differently, or that messaging that`s completely clear to you might be unintelligible to others. You are eager to understand why things are not working for others and quickly act when unexpected things happen.',
                    'You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.',
                ]
            },
            {
                title: 'Our stack:',
                items: [
                    'Gitpod is a distributed application running on Kubernetes. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.',
                    'Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.'
                ]
            },
            {
                title: 'We care about you',
                items: [
                    'Work and life',
                    '6 weeks paid time off',
                    'Fully-remote environment & flexible working hours',
                    'Competitive salary and equity package',
                    'Monthly physical health stipend for your local gym, home-gym equipment or Freeletics',
                    'Monthly mental health stipend to support your 🧘‍♀️',
                    'Blinkist, The Atlantic account and other educational budget',
                    'Premium work-from-home equipment (Macbook Pro, standing desk, monitor, webcam, mic)',
                ]
            },
        ],
        textAfterTheLists: '',
        rendered: false,
        date: '2021-01-26T14:00:00.000Z'
    },
    {
        title: 'Senior Software Engineer (Full-Stack)',
        intro: `We at Gitpod build tools that require a view across the stack.`,
        paragraphs: `We are a highly motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. In this fashion, we present at international conferences and collaborate openly around the globe.
        We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
        lists: [
            {
                title: 'As part of the team you will ...',
                items: [
                    'Directly impact users. Gitpod has little fat to trim and changes directly affect users. We always have our users in mind and focus on making Gitpod work for them, not some abstract potential future requirement.',
                    'Be a "jack of all trades, master of some". As a small team we favour generalists. You might work on React code, dive deeply into Kubernetes or read the Linux sources. There is loads of room to find your passion and see everything that makes the platform tick.',
                    'Solve hard technical problems. Be it on the backend where we live on right on the edge of what Kubernetes, containers and Linux can do; or on the frontend where we deeply care about performance and quality across browsers and platforms. Gitpod is not your typical Kubernetes web app and provides very unique problems you`d be unlikely to come across elsewhere.',
                    'Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom.',
                    'Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.']
            },
            {
                title: 'You will be a great fit if ...',
                items: [
                    'You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don`t dictate.',
                    'You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based development environments streamline how software is written today.',
                    'You enjoy working across the front- and backend. We hardly ever have a task that is clear cut along fontend/backend lines. If React is your thing, should should feel comfortable enough to have a look at the server. If Kubernetes is your thing, you should still feel comfortable enough to make that change on the dashboard. You do not think "not my department", but welcome the opportunity to venture out of your comfort zone.',
                    'You enjoy building distributed systems. That means understanding their idiosyncrasies, and wallowing in the fact that anyone elses computer can break yours. You don`t blindly follow trends, but have a keen eye for stable and pragmatic solutions. You have developed and interacted with distributed systems in the real world, have seen them fail and fixed them.',
                    'You have experience shipping code in production. Your code is ready for prime time, and you don`t expect others to test it thoroughly for you. You understand the difference between "making something work" and "making something work reliably". You have read other people`s code, know how to make yourself at home and understand that code is read way more often than it`s written. You understand that every new dependency comes at a cost, as do lines of code.',
                    'You are product minded. You enjoy using what you`ve helped build, and still pay attention to things that feel off. You can empathize with other users and understand how they might see things differently, or that messaging that`s completely clear to you might be unintelligible to others. You are eager to understand why things are not working for others and quickly act when unexpected things happen.',
                    'You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.',
                ]
            },
            {
                title: 'Our stack:',
                items: [
                    'Gitpod is a distributed application running on Kubernetes. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.',
                    'Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.'
                ]
            },
            {
                title: 'We care about you',
                items: [
                    'Work and life',
                    '6 weeks paid time off',
                    'Fully-remote environment & flexible working hours',
                    'Competitive salary and equity package',
                    'Monthly physical health stipend for your local gym, home-gym equipment or Freeletics',
                    'Monthly mental health stipend to support your 🧘‍♀️',
                    'Blinkist, The Atlantic account and other educational budget',
                    'Premium work-from-home equipment (Macbook Pro, standing desk, monitor, webcam, mic)',
                ]
            },
        ],
        textAfterTheLists: '',
        rendered: false,
        date: '2021-01-26T14:00:00.000Z'
    },
    {
        title: 'Senior Software Engineer (Workspace Runtime)',
        intro: `Workspaces are at the very heart of Gitpod. We want to provide best-in-class functionality by integrating deeply with cloud-native container tech. If that sounds like your cup of tea, have a look.`,
        paragraphs: `We are a highly motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. In this fashion, we present at international conferences and collaborate openly around the globe.
        We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
        lists: [
            {
                title: 'As part of the team you will ...',
                items: [
                    'Directly impact users. Gitpod has little fat to trim and changes directly affect users. We always have our users in mind and focus on making Gitpod work for them, not some abstract potential future requirement.',
                    'Be a "jack of all trades, master of some". As a small team we favour generalists. You might work on React code, dive deeply into Kubernetes or read the Linux sources. There is loads of room to find your passion and see everything that makes the platform tick.',
                    'Solve hard technical problems. Be it on the backend where we live on right on the edge of what Kubernetes, containers and Linux can do; or on the frontend where we deeply care about performance and quality across browsers and platforms. Gitpod is not your typical Kubernetes web app and provides very unique problems you`d be unlikely to come across elsewhere.',
                    'Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom.',
                    'Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.']
            },
            {
                title: 'You will be a great fit if ...',
                items: [
                    'You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don`t dictate.',
                    'You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based development environments streamline how software is written today.',
                    'You work on the intersection between Kubernetes and Linux. You understand deeply how containers are built, and how the OCI/CNCF landscape works. You have seen the nitty gritty of Kubernetes, interacted with it\'s API (e.g. written a controller), and are aware of some of its idiosyncrasies. You have some understanding of the Kubernetes integrations, e.g. CRI, CSI or CNI. You don\'t mind reading into the Linux, Kubernetes or runc source code and may have done that in the past.',
                    'You enjoy building distributed systems. That means understanding their idiosyncrasies, and wallowing in the fact that anyone elses computer can break yours. You don`t blindly follow trends, but have a keen eye for stable and pragmatic solutions. You have developed and interacted with distributed systems in the real world, have seen them fail and fixed them.',
                    'You have experience shipping code in production. Your code is ready for prime time, and you don`t expect others to test it thoroughly for you. You understand the difference between "making something work" and "making something work reliably". You have read other people`s code, know how to make yourself at home and understand that code is read way more often than it`s written. You understand that every new dependency comes at a cost, as do lines of code.',
                    'You are product minded. You enjoy using what you`ve helped build, and still pay attention to things that feel off. You can empathize with other users and understand how they might see things differently, or that messaging that`s completely clear to you might be unintelligible to others. You are eager to understand why things are not working for others and quickly act when unexpected things happen.',
                    'You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.',
                ]
            },
            {
                title: 'Our stack:',
                items: [
                    'Gitpod is a distributed application running on Kubernetes. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.',
                    'Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.'
                ]
            },
            {
                title: 'We care about you',
                items: [
                    'Work and life',
                    '6 weeks paid time off',
                    'Fully-remote environment & flexible working hours',
                    'Competitive salary and equity package',
                    'Monthly physical health stipend for your local gym, home-gym equipment or Freeletics',
                    'Monthly mental health stipend to support your 🧘‍♀️',
                    'Blinkist, The Atlantic account and other educational budget',
                    'Premium work-from-home equipment (Macbook Pro, standing desk, monitor, webcam, mic)',
                ]
            },
        ],
        textAfterTheLists: '',
        rendered: false,
        date: '2021-01-26T14:00:00.000Z'
    },
    {
        title: 'Senior Software Engineer (Infrastructure)',
        intro:`The infrastructure behind Gitpod runs services and workspaces on a global scale and self-managed by customers. We want your help to improve and automate this infrastructure with us.`,
        paragraphs:`We are a highly-motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
        lists: [
            {
                title: 'As part of the team you will ...',
                items: [
                    'Build global cloud-native infrastructure. We run dev environments (Kubernetes Pods) in clusters around the globe. You will help expand this infrastructure on GCP and other cloud providers to maximise resilience and global coverage. Describing the infrastructure-as-code helps us to keep it reproducible.',
                    'Make Gitpod easier to install on more platforms. We want to our users to be able to easily self-host Gitpod on almost any Kubernetes. You will help to improve and expand the infrastructure-as-code that can be used to install Gitpod. This reaches from improving the Helm chart and Terraform scripts that we have today to introducing new ways of installing Gitpod.',
                    'Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom. Create [work specific elements] where you think it makes sense.',
                    'Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.']
            },
            {
                title: 'You will be a great fit if ...',
                items: [
                    'You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don\'t dictate.',
                    'You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based development environments streamline how software is written today.',
                    'You embrace Open Source. You follow relevant open-source projects, maybe you contributed, maybe you know the maintainers. Gitpod itself is open-source and built on open-source projects, such as Kubernetes, Helm, Terraform, Grafana, Prometheus and many more. Knowledge about such projects will help you work on Gitpod and knowledge about Open Source will help you make Gitpod a better Open Source project.',
                    'You are Pragmatic. You understand that doing the right thing gives you momentum while doing a thing perfectly can cost a lot of time.',
                    'You are a curious deep diver. You know that humans and documentation often do not have an answer. That is when you dive. You read code, issues, explore metrics, traces, logs or conduct experiments. When you surface, you know the answer and the team will love you.',
                    'You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.'
                ]
            },
            {
                title: 'Our stack:',
                items: [
                    'Gitpod is an open source Kubernetes application. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.',
                    'Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.',
                    'We run gitpod.io on Google Cloud Platform. There we use GKE, Buckets, BigQuery and more. We may expand to other cloud providers. We make Gitpod self-hosted available for vanilla Kubernetes, AWS, and more platforms in the future.',
                    'We describe infrastructure using Helm and Terraform. We maintain a single helm chart to install Gitpod on Kubernetes. To create the cluster and other infrastructure around it, we use Terraform scripts.'
                ]
            },
            {
                title: 'We care about you',
                items: [
                    'Work and life',
                    '6 weeks paid time off',
                    'Fully-remote environment & flexible working hours',
                    'Competitive salary and equity package',
                    'Monthly physical health stipend for your local gym, home-gym equipment or Freeletics',
                    'Monthly mental health stipend to support your 🧘‍♀️',
                    'Blinkist, The Atlantic account and other educational budget',
                    'Premium work-from-home equipment (Macbook Pro, standing desk, monitor, webcam, mic)',
                ]
            },
        ],
        textAfterTheLists: '',
        rendered: false,
        date: '2021-01-26T14:00:00.000Z'
    },
    {
        title: 'Senior Software Engineer (Observability)',
        intro:`The infrastructure behind gitpod.io runs services and workspaces on a global scale. Want your help to get the best insights via metrics, traces, logs, and more.`,
        paragraphs:`We are a highly-motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
        lists: [
            {
                title: 'As part of the team you will ...',
                items: [
                    'Create obserability for our global infrastructure. We run dev environments (Kubernetes Pods) in Kubernetes clusters around the globe. You will impove and enhance our systems for collecting, storing and visualizing observability data, such as logs, metrics, alerts, traces and profiling data. We heavliy build on pre-existing solutions, such as Grafana, Prometheus, and the cloud platforms native solutions.',
                    'Make Gitpod more observable. You will identify the best metrics endpoints Gitpod should expose and implement them or help colleageus to implement them. Same goes for proper tracing and logging.  ',
                    'Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom. Create [work specific elements] where you think it makes sense.',
                    'Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.']
            },
            {
                title: 'You will be a great fit if ...',
                items: [
                    'You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don\'t dictate.',
                    'You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based development environments streamline how software is written today.',
                    'You embrace Open Source. You follow relevant open-source projects, maybe you contributed, maybe you know the maintainers. Gitpod itself is open-source and built on open-source projects, such as Kubernetes, Helm, Terraform, Grafana, Prometheus and many more. Knowledge about such projects will help you work on Gitpod and knowledge about Open Source will help you make Gitpod a better Open Source project.',
                    'You are Pragmatic. You understand that doing the right thing gives you momentum while doing a thing perfectly can cost a lot of time.',
                    'You are a curious deep diver. You know that humans and documentation often do not have an answer. That is when you dive. You read code, issues, explore metrics, traces, logs or conduct experiments. When you surface, you know the answer and the team will love you.',
                    'You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.'
                ]
            },
            {
                title: 'Our stack:',
                items: [
                    'Gitpod is an open source Kubernetes application. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.',
                    'Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.',
                    'We run gitpod.io on Google Cloud Platform. There we use GKE, Buckets, BigQuery and more. We may expand to other cloud providers. We make Gitpod self-hosted available for vanilla Kubernetes, AWS, and more platforms in the future.',
                    'We describe infrastructure using Helm and Terraform. We maintain a single helm chart to install Gitpod on Kubernetes. To create the cluster and other infrastructure around it, we use Terraform scripts.'
                ]
            },
            {
                title: 'We care about you',
                items: [
                    'Work and life',
                    '6 weeks paid time off',
                    'Fully-remote environment & flexible working hours',
                    'Competitive salary and equity package',
                    'Monthly physical health stipend for your local gym, home-gym equipment or Freeletics',
                    'Monthly mental health stipend to support your 🧘‍♀️',
                    'Blinkist, The Atlantic account and other educational budget',
                    'Premium work-from-home equipment (Macbook Pro, standing desk, monitor, webcam, mic)',
                ]
            },
        ],
        textAfterTheLists: '',
        rendered: false,
        date: '2021-01-26T14:00:00.000Z'
    },
    {
        title: 'Senior Kubernetes Engineer',
        intro:`We want to run Gitpod workspaces in self-manged Kubernetes clusters to benefit from the latest and greated advancements from the open source ommunity. We want your help to create, automate and operate such clusters.`,
        paragraphs:`We are a highly-motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
        lists: [
            {
                title: 'As part of the team you will ...',
                items: [
                    'Create Kubernetes Clusters. You will use the latest and greatest Linux kernels, containerd and Kuberntes versions. You will automate the process of creating the cluster and ensure that it is perfectly suited to run Gitpods dev environemtns. The clusters will run on a public cloud.',
                    'Help Gitpod being a good Kuberntes app. You know the best practices for running an app in Kuberntes and you will help implementing these best practices in Gitpod or help the team to folow the best practices. Resilience during incidents and deployment as well as security are of particular interest.',
                    'Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom. Create [work specific elements] where you think it makes sense.',
                    'Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.']
            },
            {
                title: 'You will be a great fit if ...',
                items: [
                    'You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don\'t dictate.',
                    'You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based development environments streamline how software is written today.',
                    'You embrace Open Source. You follow relevant open-source projects, maybe you contributed, maybe you know the maintainers. Gitpod itself is open-source and built on open-source projects, such as Kubernetes, Helm, Terraform, Grafana, Prometheus and many more. Knowledge about such projects will help you work on Gitpod and knowledge about Open Source will help you make Gitpod a better Open Source project.',
                    'You are Pragmatic. You understand that doing the right thing gives you momentum while doing a thing perfectly can cost a lot of time.',
                    'You are a curious deep diver. You know that humans and documentation often do not have an answer. That is when you dive. You read code, issues, explore metrics, traces, logs or conduct experiments. When you surface, you know the answer and the team will love you.',
                    'You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.'
                ]
            },
            {
                title: 'Our stack:',
                items: [
                    'Gitpod is an open source Kubernetes application. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.',
                    'Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.',
                    'We run gitpod.io on Google Cloud Platform. There we use GKE, Buckets, BigQuery and more. We may expand to other cloud providers. We make Gitpod self-hosted available for vanilla Kubernetes, AWS, and more platforms in the future.',
                    'We describe infrastructure using Helm and Terraform. We maintain a single helm chart to install Gitpod on Kubernetes. To create the cluster and other infrastructure around it, we use Terraform scripts.'
                ]
            },
            {
                title: 'We care about you',
                items: [
                    'Work and life',
                    '6 weeks paid time off',
                    'Fully-remote environment & flexible working hours',
                    'Competitive salary and equity package',
                    'Monthly physical health stipend for your local gym, home-gym equipment or Freeletics',
                    'Monthly mental health stipend to support your 🧘‍♀️',
                    'Blinkist, The Atlantic account and other educational budget',
                    'Premium work-from-home equipment (Macbook Pro, standing desk, monitor, webcam, mic)',
                ]
            },
        ],
        textAfterTheLists: '',
        rendered: false,
        date: '2021-01-26T14:00:00.000Z'
    },
    {
        title: 'Senior Site Reliability Engineer (SRE)',
        intro:`The infrastructure behind gitpod.io runs services and workspaces on a global scale and many professionals depend on it. We want your help to achive the required reliability.`,
        paragraphs:`We are a highly-motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
        lists: [
            {
                title: 'As part of the team you will ...',
                items: [
                    'Make gitpod more reliable. You apply best practices and lessons-learend from incidents to prevent future incidents. you implement the changes or work with colleageus and other teams to get the needed changes implemented.',
                    'Conduct Root-Cause analysis of incidents. Post-Incident, you dive deep to understand what caused the incident and apply to knowledge to make gitpod.io more reliable.',
                    'Mitigate incidents. If there is an incident, you know which switches to flip to quickly re-establish reliable service of Gitpod. You participate in on-call rotation.',
                    'Drive aplication health. You help to establish SLIs and SLOs, so that we, as a company, can find a healthy balance between rolling out new features and fixing bugs.',
                    'Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom. Create [work specific elements] where you think it makes sense.',
                    'Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.']
            },
            {
                title: 'You will be a great fit if ...',
                items: [
                    'You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don\'t dictate.',
                    'You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based development environments streamline how software is written today.',
                    'You embrace Open Source. You follow relevant open-source projects, maybe you contributed, maybe you know the maintainers. Gitpod itself is open-source and built on open-source projects, such as Kubernetes, Helm, Terraform, Grafana, Prometheus and many more. Knowledge about such projects will help you work on Gitpod and knowledge about Open Source will help you make Gitpod a better Open Source project.',
                    'You are Pragmatic. You understand that doing the right thing gives you momentum while doing a thing perfectly can cost a lot of time.',
                    'You are a curious deep diver. You know that humans and documentation often do not have an answer. That is when you dive. You read code, issues, explore metrics, traces, logs or conduct experiments. When you surface, you know the answer and the team will love you.',
                    'You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.'
                ]
            },
            {
                title: 'Our stack:',
                items: [
                    'Gitpod is an open source Kubernetes application. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.',
                    'Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.',
                    'We run gitpod.io on Google Cloud Platform. There we use GKE, Buckets, BigQuery and more. We may expand to other cloud providers. We make Gitpod self-hosted available for vanilla Kubernetes, AWS, and more platforms in the future.',
                    'We describe infrastructure using Helm and Terraform. We maintain a single helm chart to install Gitpod on Kubernetes. To create the cluster and other infrastructure around it, we use Terraform scripts.'
                ]
            },
            {
                title: 'We care about you',
                items: [
                    'Work and life',
                    '6 weeks paid time off',
                    'Fully-remote environment & flexible working hours',
                    'Competitive salary and equity package',
                    'Monthly physical health stipend for your local gym, home-gym equipment or Freeletics',
                    'Monthly mental health stipend to support your 🧘‍♀️',
                    'Blinkist, The Atlantic account and other educational budget',
                    'Premium work-from-home equipment (Macbook Pro, standing desk, monitor, webcam, mic)',
                ]
            },
        ],
        textAfterTheLists: '',
        rendered: false,
        date: '2021-01-26T14:00:00.000Z'
    },
    {
        title: 'Design Lead',
        intro:`Developer tools require a style and feel to win developers both from a functional and emotional angle. Help us institutionalise design as a key part of Gitpod.`,
        paragraphs:`We are a highly-motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others.
        We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
        lists: [
            {
                title: 'As part of the team you will ...',
                items: [
                    'Build a brand around developer experience. Enhance our brand identity and establish a visual language to embody the tone of a product that delights developers.',
                    'Produce clear guidelines and art direction. Work on producing designs and commissioning illustrations that shape Gitpod`s identity both on the website and product.',
                    'Create and evolve our design system. Closely collaborating with @georgtsiolis you will implement and evolve our design system from scratch. Minimalistic and delightful components that give Gitpod a consistent look and feel.',
                    'Establish a design culture within Gitpod. Design is a key part of the company. You will work cross-functionally and shape the overall design direction of Gitpod. This also includes helping with hiring as the company grows.',
                    'Co-own the product and work self-directed. We`re still a small team of individual creators. Everybody has autonomy and responsibility. Create flows, prototypes, and high-fidelity visuals, where you think it makes sense.',
                    'Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.']
            },
            {
                title: 'You will be a great fit if ...',
                items: [
                    'You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don`t dictate.',
                    'You love creating meaningful products. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based development environments streamline how software is written today.',
                    'You have built design systems and designed interactive applications. We expect a broad set of design skills. As you will be in charge of setting the standard, we are looking for humans who have worked in cross-functional product teams and created interactive products and applications.',
                    'You`re highly productive while designing best-in class UI. You are entrepreneurial and break down big projects in small deliverables and move fast based on user feedback. You prefer simple solutions and know when to improve something.',
                    'You have empathy for developers. Gitpod is developed by developers for developers. Preferably, you designed developer tools before and feel familiar with their workflows.',
                    'You like to establish a brand and culture. Gitpod isn`t just some tool. We want to build a brand around developer experience and productivity that developers fall in love with. We are also human beings and want to create a long-lasting empathetic and diverse culture that stands for something good.',
                ]
            },
            {
                title: 'Our stack:',
                items: [
                    'Figma. You will built with Figma, using components and variants to keep all our design documents in sync and consistent. ',
                    'JS/TS for the web. We use Gatsby for our website and deploy it with Netlify.',
                    'Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.'
                ]
            },
            {
                title: 'We care about you',
                items: [
                    'Work and life',
                    '6 weeks paid time off',
                    'Fully-remote environment & flexible working hours',
                    'Competitive salary and equity package',
                    'Monthly physical health stipend for your local gym, home-gym equipment or Freeletics',
                    'Monthly mental health stipend to support your 🧘‍♀️',
                    'Blinkist, The Atlantic account and other educational budget',
                    'Premium work-from-home equipment (Macbook Pro, standing desk, monitor, webcam, mic)',
                ]
            },
        ],
        textAfterTheLists: '',
        rendered: false,
        date: '2021-01-26T14:00:00.000Z'
    },
]

const Careers = ({data}) => (
    <IndexLayout
        canonical="/careers"
        title="Careers"
    >
        <StyledCareersPage>
            <div className="row">
                <section className="intro pattern">
                    <h1><strong>Join the Team</strong></h1>
                    <p>Gitpod is built on a culture of trust and empathy.</p>
                    <a href="#jobs" className="btn btn--cta">See Job Openings</a>
                </section>
            </div>

            <section>
                <div className="row">
                    <div className="team">
                        <div className="img-container">
                            <ImageProvider 
                                fluidData={data.file.childImageSharp.fluid} alt="Gitpod Team" 
                                isBlurred={true}
                            />
                        </div>
                        <div className="text">
                            <p>Come join a quickly growing venture-backed team and work together with incredible humans from 🇦🇺 🇧🇷 🇨🇦 🇫🇷 🇩🇪 🇬🇷 🇵🇰 🇷🇺 🇺🇸  - in an environment with strong values around openness, honesty, and diversity. </p>
                            <p> We are not as diverse as we would like to be.</p>
                            <p><strong>Help us to change that and shape Gitpod’s future from anywhere in the world! 🌈 🌍 </strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturesSection features={features} />

            <section className="jobs" id="jobs">
                <div className="row">
                    <h2>Current <strong>Job Openings</strong></h2>
                    <div className="text">
                            <p>We aim to <strong>free developers from the friction of manual, stateful, local dev environments.</strong> We believe that in a few years working with ephemeral, automated dev environments is going to be as common as using version control or having CI/CD. <strong> Help us pioneering this! 👐 </strong> </p>
                            <br /><br />
                        </div>
                    <div>
                        {jobs.map((job, i) => <ExpandableJob key={i + job.title} {...job} />)}
                    </div>
                </div>

                <div className="pattern-bg">
                    <div className="row">
                        <div className="no-fit">
                            <p>If no current Job offer fits your qualifications, but you're totally in love with Gitpod and want to help us improving it, please send your application at <a href="mailto:career@gitpod.io">career@gitpod.io</a> anyway.</p>
                            <p><strong>We're curious to hear about you.</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        </StyledCareersPage>
    </IndexLayout>
)

export default Careers

export const query = graphql` 
    query {
        file(relativePath: { eq: "team_2020.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
