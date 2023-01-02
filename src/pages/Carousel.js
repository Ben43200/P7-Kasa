import React, { useState } from "react";
import FicheLogement from "./FicheLogement";

export default function Carousel({ images }) {
    console.log(images);
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
        <>
            <img src={`${images[position]}`} alt="super image" />
            <span onClick={decrement}>  > </span>
            <span>{position + 1} / {images.length}</span>
            <span onClick={increment}> $ </span>
        </>
    );

}