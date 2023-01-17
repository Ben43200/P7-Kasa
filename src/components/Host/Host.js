import React from "react";
import "./Host.css";

const Host = (host) => {
    console.log(host);
    return (
        // <>
        <div className="host">
            <p>{host.name}</p>
            {/* <div className="picture-container"> */}
            <img className="author-picture" src={host.picture} alt="auteur" />
        </div>

    );

};

export default Host;