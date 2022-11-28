import React from "react";
// import data from "../data.json";

export default function Card(props) {
    console.log(props);
    // console.log(props.id);

    return (
        <div className="card">
            <img src={`${props.img}`} alt= "cover" className="card--image" />
            <p>{props.title}</p>
            <p>{props.location}</p>

        </div>
    );
}