import JS from '../resources/js.svg'
import TS from '../resources/ts.svg'
import GO from '../resources/go.svg'
import JAVA from '../resources/java.svg'
import PY from '../resources/py.svg'

export const projects = [
  {
    image: JAVA,
    title: 'Java & Spring',
    githubUrl: 'https://github.com/gitpod-io/spring-petclinic',
    gitlabUrl: 'https://gitlab.com/gitpod/spring-petclinic',
    bitbucketUrl: 'https://bitbucket.org/gitpod/spring-petclinic',
    alt: 'Java Logo'
  },
  {
    image: JS,
    title: 'React & Next.js',
    githubUrl: 'https://github.com/gitpod-io/NextSimpleStarter',
    alt: 'JavaScript Logo'
  },
  {
    image: PY,
    title: 'Python & Flask',
    githubUrl: 'https://github.com/breatheco-de/python-flask-api-tutorial',
    alt: 'Python Logo'
  },
  {
    image: TS,
    title: <span>Gatsby & TypeScript</span>,
    githubUrl: 'https://github.com/gitpod-io/website',
    alt: 'TypeScript Logo'
  },
  {
    image: GO,
    title: 'Go & Gin',
    githubUrl: 'https://github.com/gitpod-io/go-gin-app',
    alt: 'Go Logo'
  }
]
