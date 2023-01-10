import React from "react";
import "./Host.css";

const Host = (host) => {
    console.log(host);
    return (
        <>
            <p>{host.name}</p>
            <div className="img-author">
                <img className="author" src={host.picture} alt="auteur" />
            </div>
        </>

    );

};

export default Host;