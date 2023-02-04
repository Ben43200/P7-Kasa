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

    return (
        <div className="carousel">
            <img src={`${images[position]}`} alt="super" />
            <span onClick={decrement}> {images.length > 1 ? (<i className="arrow-left"></i>) : (null)} </span>
            <aside>{position + 1} / {images.length}</aside>
            <span onClick={increment}> {images.length > 1 ? (<i className="arrow-right"></i>) : (null)}</span>
        </div>
    );

}