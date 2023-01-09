import React, { useEffect, useState } from "react";
// import Cards from "./GetCard";
import Carousel from "./Carousel";
import Collapsible from "./Collapsible";
import Host from "./Host";
import { getOneLogement } from "../services/dataManager";
import RatingStars from "./Star";
import { useParams } from "react-router-dom";

export default function FicheLogement(props) {
    const { id } = useParams();
    const [test, setTest] = useState({ id: null, pictures: [] });
    useEffect(() => {
        getOneLogement(id)
            .then((logement) => { setTest(logement); });
    }, [id]);
    console.log(test);
    const { title, location, rating, host, tags, equipments, description } = test;
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
                                <div className="rate-container">
                                    <Host {...host} />
                                    <RatingStars score={rating} />
                                    <div className="collapse-fiche-container">
                                        <Collapsible aboutTitle="Description" aboutText={description} />
                                        <Collapsible aboutTitle="Equipements" aboutText={equipments} />
                                    </div>
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