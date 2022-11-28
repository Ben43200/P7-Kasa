import React from "react";
import "./Home.css";

import { stockData } from "../../data";

import Card from "../Card";
import Carousel from "../Carousel";

export default function Home() {
    const cards = stockData.map(item => {

        return (
            <Card
                img ={`${item.cover}`}
                location={item.location}
                title={item.title}
                key={"card"+item.id}
                id={item.id}
            />
        );
    });

    return (
        <div>

            {cards}

        </div>
    );

}
