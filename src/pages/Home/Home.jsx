import React from "react";
import "./Home.css";

import { stockData } from "../../data";
import { useParams } from "react-router-dom";
import Card from "../Card";
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
