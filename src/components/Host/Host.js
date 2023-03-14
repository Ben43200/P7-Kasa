import React from "react";
import "./Host.scss";

const Host = (host) => {
    return (
        <div className="host">
            <h3>{host.name}</h3>
            <img className="author-picture" src={host.picture} alt="auteur" />
        </div>

    );

};

export default Host;