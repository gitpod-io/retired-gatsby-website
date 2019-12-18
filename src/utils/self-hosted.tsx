import { Link } from 'gatsby'

export const features = [
    {
        title: "Keep Data on your Network",
        paragraphs: [
            'All data remains on your infrastructure and inside your network. Gitpod does not "call home" and can run air-gapped networks, disconnected from the internet.'
        ],
        //more: <p className="read-more">Read more about <Link to="#">Data Control.</Link></p>
    },
    {
        title: "Full Integration",
        paragraphs: [
            'Gitpod integrates smoothly with GitHub Enterprise or Gitlab CE/EE. BitBucket support will be available soon.',
            'Gitpod also connects seamlessly to self-hosted services such as npm, docker or maven registries, databases or Kubernetes clusters.'
        ],
        //more: <p className="read-more">Read more about <Link to="#">Full Integration.</Link></p>
    },
    {
        title: "Easy Setup and Administraction",
        paragraphs: [
            'With Gitpod, no additional User Management is needed.',
            'Gitpod supports "login via GitHub/Gitlab" to automatically create user accounts and manage access to git repositories.'
        ],
        more: <p className="read-more">Read more about <Link to="/docs/self-hosted/latest/install/01_prepare_installation/#user-authorization-and-git-integration">GitHub and Gitlab integration</Link>.</p>
    }
]
