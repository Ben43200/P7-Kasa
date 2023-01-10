import React from "react";

const Host = (host) => {
    console.log(host);
    return (
        <>
            <p>{host.name}</p>
            <img className="author" src={host.picture} alt="auteur" />

        </>

    );

};

export default Host;