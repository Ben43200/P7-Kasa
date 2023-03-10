import React from "react";
import "./Host.scss";

const Host = (host) => {
    console.log(host);
    return (
        // <>
        <div className="host">
            <h3>{host.name}</h3>
            {/* <div className="picture-container"> */}
            <img className="author-picture" src={host.picture} alt="auteur" />
        </div>

    );

};

export default Host;