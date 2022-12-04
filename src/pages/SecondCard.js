// import React from "react";
import { stockData } from "../data";
import Cards from "./SecondCard";
import Carousel from "./Carousel";
import { Link, useParams } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";

const jsonString = JSON.stringify(stockData);
// console.log(jsonString);

// export default function GetCard (props){
//     // const params = useParams();

//     console.log(props); // 👉️ {userId: '4200'}
//     const images = stockData.map(item => {

//         return (
//             <GetCard
//                 img ={`${item.cover}`}

//                 key={"card"+item.id}

//             />
//         );
//     });

//     return (

//         <Carousel images= {images} />

//     );
// };

// import { useEffect, useState } from 'react';
export default function GetCard() {

    const [test, setTest] = useState([{name:"default"}]);
    useEffect(() => {
        testfunc();
    }, []);

    async function testfunc(){
        // const api = await fetch("https://jsonplaceholder.typicode.com/users");
        const api = await fetch("/logement.json");

        const apijson = await api.json();
        setTest(apijson);
        console.log(apijson);
    }

    return (

        <div className="App">
            {
                test.map((item,key) => {
                    return (
                        <div key={key}>
                            <li>{item.title}</li>
                            {/* img ={`${item.cover}`} */}
                        </div>
                    );
                })
            }
        </div>
    );
}

;