import { Link } from 'gatsby'

const link = (href: string, text: string, subject = '', primary: boolean = false, normal: boolean = true) => {
    if (href.indexOf('://') !== -1) {
        return (
            <a
                className={"btn" + (primary ? " btn--cta" : "") + (normal ? " btn--normal" : "")}
                href={href}
                target="_blank">{text}
            </a>
        )
    } else {
        return (
            <Link
                to={href}
                className={"btn" + (primary ? " btn--cta" : "") + (normal ? " btn--normal" : "")}
                state={{ subject: subject ? subject : '' }}
            >
                {text}
            </Link>
        )
    }
}

export default link
