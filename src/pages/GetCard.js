import React from "react";
import { stockData } from "../data";

import { Link, useParams } from "react-router-dom";

export default function Cards({ cover, title }) {

    return (
        <article className="card-logement">
            <img src={cover} alt="location" />
            <div className="card-logement__layer">
                <p className="card-logement__title">{title}</p>
            </div>
        </article>
    );
};
