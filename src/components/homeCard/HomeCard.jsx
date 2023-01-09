import "./homeCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeCard({ title, cover, id }) {
    return (
        <Link to={`/fichelogement/${id}`}>
            <article className="homeCard">
                <img src={cover} alt="location" />
                <p>{title}</p>
            </article>
        </Link>
    );
}