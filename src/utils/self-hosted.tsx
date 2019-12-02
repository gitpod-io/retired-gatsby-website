import { Link } from 'gatsby'

export const features = [
    {
        title: "Keep Data on your Network",
        paragraphs: ['All data remains on your infrastructure, as Gitpod will run on air-gapped networks, disconnected from the internet.'],
        more: <p className="read-more">Read more about <Link to="#">Data Control.</Link></p>
    },
    {
        title: "Full Integration",
        paragraphs: ['Gitpod integrates smoothly with with self-hosted services like npm registry, docker registry or maven registry.', 'It also highly compatible with Git Hosting solution like GitHub Enterprise, GitLab Community Edition or Enterprise Edition. BitBucket will be available soon.'],
        more: <p className="read-more">Read more about <Link to="#">Full Integration.</Link></p>
    },
    {
        title: "Easy Administration",
        paragraphs: ['With Gitpod no additional User Management is needed. You can just use OAuth from Git Hosting and enjoy its the privileges.', 'No need to waste time on administrations.']
    }
]
