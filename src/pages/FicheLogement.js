
import { getLogements, getOneLogement } from "../services/dataManager";
// import Cards from "./GetCard";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import Collapsible from "./Collapse";

import React, { useEffect, useState } from "react";
import Content from "./Collapse";

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
                <div className="singleproduct">
                    <div className="singleproduct__content">
                        <div className="carousel-container">
                            <div className="card_logement" key={id}>

                                <Carousel images={test.pictures} />

                                <h1 className="singleproduct__title">{title}</h1>
                                <p className="singleproduct__location">{location}</p>

                                <div className="singleproduct__dropdowns">
                                    <Collapsible title="description" content={description} />
                                    <Collapsible title="équipement" content={equipments} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
        : null;
}

;