
import "./Home.css";
import { getLogements } from "../../services/dataManager";
import Cards from "../Card";
import Banner from "../Banner";
import { Link, useParams } from "react-router-dom";
import React, {  useEffect, useState } from "react";

import Card from "../Card";
import Carousel from "../Carousel";

export default function Home() {

    const [test, setTest] = useState([{name:"default"}]);
    useEffect( () => {
        getLogements()
            .then(( logements ) => { setTest(logements );});
    }, []);

    return (

        <>
            <Banner />
            <div className="cards-container">
                {test.map((logement, id) => (
                    <div className="card_logement" key={id}>
                        <Link className="link_card_logement" to={`/logement/${logement.id}`}>
                            <Card cover={logement.cover} title={logement.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

;
//     const cards = stockData.map(item => {

//         return (
//             <Card
//                 img ={`${item.cover}`}
//                 location={item.location}
//                 title={item.title}
//                 key={"card"+item.id}
//                 id={item.id}
//             />
//         );
//     });

//     return (
//         <div>

//             {cards}

//         </div>
//     );

// }
