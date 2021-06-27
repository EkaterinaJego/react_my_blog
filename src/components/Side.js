import React from "react";
import '../components/side.css'
import PraktikaByDarvn from "../images/PraktikaByDarvin.jpg"

const Side = (props) => {
    return (<>
        <h2>{props.title}</h2>
        <img src={PraktikaByDarvn} alt="Praktika" /><br/>
        <span>{props.description}</span>
    </>)
}


export default Side ;
