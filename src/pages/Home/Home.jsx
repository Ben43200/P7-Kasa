import React from "react";
import "./Home.css";
import {Link } from "react-router-dom";
import { stockData } from "../../data";

import Cards from "../Card";
export default function Home() {
    const cards = stockData.map(item => {
        return (
            <Cards

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
