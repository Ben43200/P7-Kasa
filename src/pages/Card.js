import React from "react";
// import data from "../data.json";

/**
 * @param {{ title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; location: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }} props
 */
export default function Card(props) {
    return (
        <div className="card">

            <p>{props.title}</p>
            <p>{props.location}</p>

        </div>
    );
}