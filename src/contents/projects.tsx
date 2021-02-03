import ImageProvider from '../components/ImageProvider'

export const projects = [
    {
        image: <ImageProvider fileName="typescript.png" alt="TypeScript" />,
        title: 'TypeScript',
        githubUrl: "https://github.com/eclipse-theia/theia",
        alt: "TypeScript",
    },
    {
        image: <ImageProvider fileName="go.png" alt="Go" />,
        title: 'Go',
        githubUrl: "https://github.com/prometheus/prometheus",
        alt: "Go",
    },
    {
        image: <ImageProvider fileName="rust.png" alt="Rust" />,
        title: 'Rust',
        githubUrl: "https://github.com/nushell/nushell",
        alt: "Rust",
    },
    {
        image: <ImageProvider fileName="java.png" alt="Java" />,
        title: 'Java & Spring',
        githubUrl: "https://github.com/gitpod-io/spring-petclinic",
        gitlabUrl: "https://gitlab.com/gitpod/spring-petclinic",
        bitbucketUrl: "https://bitbucket.org/gitpod/spring-petclinic",
        alt: "Java",
    },
    {
        image: <ImageProvider fileName="python.png" alt="Python" />,
        title: 'Python & Flask',
        githubUrl: "https://github.com/breatheco-de/python-flask-api-tutorial",
        alt: "Python",
    },
    {
        image: <ImageProvider fileName="csharp.png" alt="C Sharp" />,
        title: '.NET Core',
        githubUrl: "https://github.com/gitpod-io/dotnetcore",
        gitlabUrl: "https://gitlab.com/gitpod/dotnetcore",
        bitbucketUrl: "https://bitbucket.org/gitpod/dotnetcore",
        alt: "C#",
    },
    {
        image: <ImageProvider fileName="ruby.png" alt="Ruby" imageStyles={{transform: 'scale(.9)'}} />,
        title: 'Rails & Postgres',
        githubUrl: "https://github.com/gitpod-io/ruby-on-rails",
        gitlabUrl: "https://gitlab.com/gitpod/rails",
        bitbucketUrl: "https://bitbucket.org/gitpod/ruby-on-rails",
        alt: "Ruby",
    },
    {
        image: <ImageProvider fileName="php.png" alt="Python" />,
        title: 'PHP & Symfony',
        githubUrl: "https://github.com/gitpod-io/symfony-demo",
        alt: "PHP",
    },
]
