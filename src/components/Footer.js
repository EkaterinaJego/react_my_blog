import React from "react";
import "../components/footer.css";

const Footer = (props) => {
    return (<div className="footerbody">
    
    <span className="firstspan">{props.firsttitle}</span> <span className="secondspan">{props.secondtitle}</span> <span className="thirdspan">{props.thirdtitle}</span>

    </div>)
}

export default Footer;