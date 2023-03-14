
import "./Home.scss";
import { getLogements } from "../../services/dataManager";
import background from "../../images/background-banner.png";
import React, { useEffect, useState } from "react";
import HomeCard from "../../components/HomeCard/HomeCard";

export default function Home() {

    const [test, setTest] = useState([{ name: "default" }]);
    useEffect(() => {
        getLogements()
            .then((logements) => { setTest(logements); });
    }, []);

    return (
        <>
            <div className="heading">
                <img src={background} alt="background" className="fond-home" />
                <div className="banner-text">Chez vous, partout et ailleurs</div>
            </div>
            <main className="cards-container">
                {test.map((logement, id) => (
                    <HomeCard {...logement} key={id} />
                ))}

            </main>
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
