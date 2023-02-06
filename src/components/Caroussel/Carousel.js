import React, { useState } from "react";

export default function Carousel({ images }) {
    // console.log(images);
    const [position, setPosition] = useState(0);

    function increment() {
        const newPosition = position + 1;
        (newPosition >= images.length) ? setPosition(0) : setPosition(newPosition);
    }

    function decrement() {
        const newPosition = position - 1;

        (newPosition < 0) ? setPosition(images.length - 1) : setPosition(newPosition);
    }

    function arrow(direction, method) {
        return <span onClick={method}> <i className={"arrow-" + direction}></i></span>;
    }

    return (
        <div className="carousel">
            <img src={`${images[position]}`} alt="super" />
            {images.length > 1 && arrow("left", decrement)}
            <aside>{position + 1} / {images.length}</aside>
            {images.length > 1 && arrow("right", increment)}
        </div>
    );

}