import React from "react";

const Tag = (tags) => {
    console.log(tags);
    return (
        <div className="tagCont">
            <span className="tagBtn">{tags.tag}</span>
        </div>

    );

};

export default Tag;