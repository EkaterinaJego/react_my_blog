import React from "react";
import "../components/item.css";
import LavkaLavka from "../images/LavkaLavka.jpg"


const Item =(props) => {
    return (<>
        <h2>{props.title}</h2>
        <span>{props.description}</span>
        <img src={LavkaLavka} alt="LavkaLavka"/>
        <p>{props.text}</p>
        </>
    )
}

export default Item; 