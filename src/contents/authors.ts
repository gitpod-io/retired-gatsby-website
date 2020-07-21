// based on https://github.com/TypeFox/typefox-website/blob/master/src/utils/authors.ts

export interface Author {
    name: string
    socialProfiles: {
        github: string
        twitter: string
        linkedin?: string
    }
    description: string
}

export const allAuthors: { [idx: string]: Author } = {
    'svenefftinge': {
        name: "Sven Efftinge",
        socialProfiles: {
            github: 'svenefftinge',
            twitter: 'svenefftinge',
            linkedin: 'efftinge'
        },
        description: "Sven loves finding sweet spots in product development. Always keeping an eye on pragmatism and the real benefit for the end user, he has proven to be a creative source for many sucessful technologies. He is a co-founder of TypeFox, co-lead of Eclipse Theia and product manager of Gitpod."
    },
    'meysholdt': {
        name: "Moritz Eysholdt",
        socialProfiles: {
            github: 'meysholdt',
            twitter: 'meysholdt',
            linkedin: 'moritzeysholdt'
        },
        description: "Moritz loves to make things works. He is a co-founder of TypeFox and Gitpod."
    },
    'akosyakov': {
        name: "Anton Kosyakov",
        socialProfiles: {
            github: 'akosyakov',
            twitter: 'akosyakov',
            linkedin: 'anton-kosyakov-4093b610'
        },
        description: "Anton is core committer and co-architect of Eclipse Theia. He is an exceptionally productive coder and a great team player. At the moment he works primarily on Theia, Gitpod, the monaco language client and various associated satellite projects. He also is committer of Xtext."
    },
    'geropl': {
        name: "Gero Posmyk-Leinemann",
        socialProfiles: {
            github: 'geropl',
            twitter: 'geropl2',
        },
        description: "Gero is a passionate software developer with a strong interest in programming languages. He likes to learn new stuff but somehow always turns out to work on the backend side of things. His current pet peeve is Kubernetes and everything around it."
    },
    '32leaves': {
        name: "Christian Weichel",
        socialProfiles: {
            github: '32leaves',
            twitter: 'csweichel',
            linkedin: 'christian-weichel-740b4224'
        },
        description: "Christian loves building things, systems and software. Ever keen to solve cross-cutting problems, he has experience in human-computer interaction, embedded software development, and the backend side of things (Kubernetes, Docker). He is also co-leading Eclipse Mita."
    },
    'jankeromnes': {
        name: "Jan Keromnes",
        socialProfiles: {
            github: 'jankeromnes',
            twitter: 'jankeromnes',
            linkedin: 'jankeromnes'
        },
        description: "Jan is the creator of Janitor, and he has been automating development environments for almost a decade. He is passionate about making software development saner, easier, and more accessible for all humans."
    },
    'nisarhassan12': {
        name: "Nisar Hassan",
        socialProfiles: {
            github: 'nisarhassan12',
            twitter: 'nisarhassan',
            linkedin: 'nisar-hassan-naqvi-413466199'
        },
        description: 'Nisar is a web developer who creates UX rich performant websites and web applications.'
    },
    'anudeepreddy': {
        name: 'Anudeep Reddy',
        socialProfiles: {
            github: 'anudeepreddy',
            twitter: '',
            linkedin: ''
        },
        description: 'Anudeep is a developer advocate at Gitpod.'
    },
    'spoenemann': {
        name: "Miro Spönemann",
        socialProfiles: {
            github: 'spoenemann',
            twitter: 'sponemann',
            linkedin: 'mirospoenemann'
        },
        description: "Miro is thrilled about innovation on programming languages, DSLs, graphical modeling and web technologies."
    },
    'JesterOrNot': {
        name: "Sean Hellum",
        socialProfiles: {
            github: "JesterOrNot",
            twitter: '',
            linkedin: 'sean-hellum-84ba401a2'
        },
        description: "Sean is a developer advocate and rustacean with a passion for Docker, Linux, Bash, Rust, and CLIs"
    }
}

export function parseAuthors(input: string): Author[] {
    const authorNames = input.split(/\s*,\s*/);
    const authorArray = authorNames.map(name => allAuthors[name]);
    for (let i = 0; i < authorArray.length; i++) {
        if (!authorArray[i]) {
            authorArray[i] = {
                name: authorNames[i],
                socialProfiles: {
                    github: authorNames[i],
                    twitter: authorNames[i]
                },
                description: ""
            }
        }
    }
    return authorArray;
}
