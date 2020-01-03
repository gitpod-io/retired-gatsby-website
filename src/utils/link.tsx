import { Link } from 'gatsby'

const link = (href: string, text: string, primary: boolean = false, normal: boolean = true) => {
    if (href.indexOf('://') !== -1) {
        return ( 
            <a 
                className={"btn" + (primary ? " btn--cta" : "") + (normal ? " btn--normal" : "")} 
                href={href} 
                target="_blank">{text}
            </a> 
        )
    } else {
        return <Link 
            to={href} 
            className={"btn" + (primary ? " btn--cta" : "") + (normal ? " btn--normal" : "")}>{text}</Link>
    }
}

export default link
