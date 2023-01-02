
import { getOneLogement } from "../services/dataManager";
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

    // <div className="cards-container">
    return test.id !== null
        ? (
            <>
                <div className="carousel-container">
                    <div className="card_logement" key={id}>
                        {/* <Link className="link_card_logement" to={`/logement/${test.id}`}> */}
                        <Carousel images={test.pictures} />
                        {/* </Link> */}
                    </div>
                </div>
            </>
        )
        : null;
}

;