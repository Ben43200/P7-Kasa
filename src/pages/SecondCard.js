import React from "react";
import { stockData } from "../data";
import Cards from "./SecondCard";
import Caroussel from "./Carousel";
import { Link, useParams } from "react-router-dom";

const jsonString = JSON.stringify(stockData);
// console.log(jsonString);

export default function GetCard (){
    const params = useParams();

    console.log(params); // 👉️ {userId: '4200'}
    const listImages = [
        "https://www.w3schools.com/css/img_5terre.jpg",
        "https://www.w3schools.com/css/img_forest.jpg",
        "https://www.w3schools.com/css/img_lights.jpg"
    ];

    return (
        <>
            <div className="stock-container">
                {stockData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.tags +
                    " , " +
                    data.location +
                    " ," +
                    data.description +
                    ", " +
                    data.title}
                        </div>
                    );
                })}
                <h2>userId is 👉️ {params.userId}</h2>;
                <Caroussel images={listImages} />

            </div>
        </>
    );
};
