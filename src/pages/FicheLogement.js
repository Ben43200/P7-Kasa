
import { getLogements, getOneLogement } from "../services/dataManager";
// import Cards from "./GetCard";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";

export default function FicheLogement() {
    const { id } = useParams();

    const [test, setTest] = useState({ id: null, pictures: [] });

    useEffect(() => {
        getOneLogement(id)
            .then((logement) => { setTest(logement); });
    }, []);
    console.log(test);
    const { title, location, rating, host, tags, equipments, description } =
        test;
    // <div className="cards-container">

    return test.id !== null
        ? (
            <>
                <div className="carousel-container">
                    <div className="card_logement" key={id}>

                        <Carousel images={test.pictures} />

                        <h1 className="singleproduct__title">{title}</h1>
                        <p className="singleproduct__location">{location}</p>
                        <p>{equipments}</p>
                    </div>
                </div>

            </>
        )
        : null;
}

;