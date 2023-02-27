import React, { useEffect, useState } from "react";
import "./FicheLogement.scss";
// import Cards from "./GetCard";
import Carousel from "../../components/Caroussel/Carousel";
import Collapsible from "../../components/Collapsible/Collapsible";
import Host from "../../components/Host/Host";
import { getOneLogement } from "../../services/dataManager";
import Tags from "../../components/Tag/Tag";
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
            <main className="singleproduct">
                <Carousel images={test.pictures} />
                <h2>{title}</h2>
                <h3>{location}</h3>
                {/* <div className="host-stars"> */}
                <Host {...host} />
                <div className={"stars qty" + rating}> </div>
                {/* </div> */}
                <Tags tags={tags} />
                {/* <div className={"stars qty" + rating}> </div> */}
                <Collapsible aboutTitle="Description" aboutText={description} />
                <Collapsible aboutTitle="Equipements" aboutText={equipments} />
            </main>
        )
        : null;
}

;