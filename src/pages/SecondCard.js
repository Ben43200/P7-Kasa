import React from "react";
import { stockData } from "../data";
import Cards from "./SecondCard";
import Carousel from "./Carousel";
import { Link, useParams } from "react-router-dom";

const jsonString = JSON.stringify(stockData);
// console.log(jsonString);

export default function GetCard (props){
    // const params = useParams();

    console.log(props); // 👉️ {userId: '4200'}
    const images = stockData.map(item => {

        return (
            <GetCard
                img ={`${item.cover}`}

                key={"card"+item.id}

            />
        );
    });

    return (

        <Carousel images= {images} />

    );
};
