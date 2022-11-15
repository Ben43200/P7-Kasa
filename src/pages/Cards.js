import React from "react";
// import data from "../data.json";

export default function Cards(props) {
    return (
        <div className="card">

            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}