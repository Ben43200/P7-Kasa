import React, { useState } from "react";
import GetCard from "./SecondCard";

export default function Carousel(props){
    console.log(props);
    const [position, setPosition] = useState(0);
    const carousels = props.images;

    function increment(){
        const newPosition = position+1;
        (newPosition >= carousels.length) ? setPosition(0) : setPosition(newPosition);
    }

    function decrement(){
        const newPosition = position - 1;
        (newPosition < 0 ) ? setPosition(carousels.length-1) : setPosition(newPosition);
    }

    return (
        <>
            <img src={`${carousels[position]}`} alt="super image" />
            <span onClick={decrement}>  > </span>
            <span>{position +1} / {carousels.length}</span>
            <span onClick={increment}> $ </span>
        </>
    );

}