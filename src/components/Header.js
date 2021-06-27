import React from "react";
import "../components/header.css"

const Header = (props) => {
return <div className="headerbody">
    <h1>{props.maintitle}</h1>
    <span>{props.baseline}</span>
</div>

}

export default Header; 
