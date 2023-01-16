import React from "react";

const Tags = ({ tags }) => {
    console.log(tags);
    return (
        <ul>
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>

    );

};

export default Tags;