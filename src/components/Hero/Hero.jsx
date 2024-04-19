import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = ({classes,src,title,text,url,btnClass,btnText}) => {
    return (
        <div className={classes}>
            <img src={src} alt="hero image" />
            <div className="hero_text">
                <h1>{title}</h1>
                <p>{text}</p>
                <Link  to={url} className={btnClass} >
                    {btnText}
                </Link>
            </div>
        </div>
    )
}

export default Hero