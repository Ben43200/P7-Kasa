import React from "react";
import "./Home.css";

import { stockData } from "../../data";

import Card from "../Card";
export default function Home() {
    const cards = stockData.map(item => {
        return (
            <Card

                location={item.location}
                title={item.title}

            />
        );
    });

    return (
        <div>

            {cards}
        </div>
    );
}
