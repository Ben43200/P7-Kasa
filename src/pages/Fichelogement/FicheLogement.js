import React, { useEffect, useState } from "react";
import "./FicheLogement.scss";
import Carousel from "../../components/Caroussel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import Host from "../../components/Host/Host";
import { getOneLogement } from "../../services/dataManager";
import Tags from "../../components/Tag/Tag";
import { useParams, useNavigate } from "react-router-dom";

export default function FicheLogement(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [test, setTest] = useState({ id: null, pictures: [] });
    useEffect(() => {
        getOneLogement(id)
            .then((logement) => {
                logement
                    ? setTest(logement)
                    : navigate("/error");
            });
    }, [id]);
    const { title, location, rating, host, tags, equipments, description } = test;
    return test.id !== null
        ? (
            <main className="singleproduct">
                <Carousel images={test.pictures} />
                <h2>
                    {title}
                    <small>{location}</small>
                </h2>
                <Host {...host} />
                <div className={"stars qty" + rating}> </div>
                <Tags tags={tags} />
                <Collapse aboutTitle="Description" aboutText={description} />
                <Collapse aboutTitle="Equipements" aboutText={equipments} />
            </main>
        )
        : null;
}

;