// // import React from "react";
// import { stockData } from "../data";
// import { getLogements } from "../services/dataManager";
// import Cards from   "./GetCard";
// import Carousel from "./Carousel";
// import { Link, useParams } from "react-router-dom";
// import React, { Component, useEffect, useState } from "react";

// export default function GetCard(props) {
//     console.log(props);

//     const [test, setTest] = useState([{name:"default"}]);
//     useEffect( () => {
//         getLogements()
//             .then(( logements ) => { setTest(logements );});
//     }, []);

//     return (

//         <>
//             <Banner />
//             <div className="cards-container">
//                 {test.map((logement, id) => (
//                     <div className="card_logement" key={id}>
//                         <Link className="link_card_logement" to={`/logement/${logement.id}`}>
//                             <Card cover={logement.cover} title={logement.title} />
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// ;
