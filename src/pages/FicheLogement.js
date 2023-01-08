
import { getLogements, getOneLogement } from "../services/dataManager";
// import Cards from "./GetCard";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import Collapsible from "./Collapsible";

import React, { useEffect, useState } from "react";
import Content from "./Collapsible";

export default function FicheLogement(props) {

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

                                <div className="collapse-fiche-container">
                                    <Collapsible
                                        aboutTitle="Description"
                                        aboutText={description}
                                    />
                                    <Collapsible
                                        aboutTitle="Equipements"
                                        aboutText={equipments}
                                    />

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