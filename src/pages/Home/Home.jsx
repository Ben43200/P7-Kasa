
import "./Home.css";
import { getLogements } from "../../services/dataManager";
import Cards from "../Card";
import Banner from "../Banner";
import FicheLogement from "../FicheLogement";
import React, { useEffect, useState } from "react";

// import Card from "../Card";
import Carousel from "../Carousel";
import HomeCard from "../../components/homeCard/HomeCard";

export default function Home() {

    const [test, setTest] = useState([{ name: "default" }]);
    useEffect(() => {
        getLogements()
            .then((logements) => { setTest(logements); });
    }, []);

    return (

        <>
            <Banner />
            <div className="cards-container">
                {test.map((logement, id) => (
                    <HomeCard {...logement} key={id} />
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
