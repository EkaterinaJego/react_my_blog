import React from "react";
import "../components/navigation.css"

const Navigation =(props) => {
    return (<div className="navmain">
       <span>{props.link}</span>
       <span>{props.link}</span>
       <span>{props.link}</span>
       <span>{props.link}</span>
</div>
    )
}


export default Navigation;