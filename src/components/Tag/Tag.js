import React from "react";

const Tag = (tags) => {
    console.log(tags);
    return (
        <div className="tagCont">
            <ul className="TagList"><li>{tags.tag}</li>
            </ul>
        </div>

    );

};

export default Tag;