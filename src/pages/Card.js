import React from "react";
import { stockData } from "../data";
import Cards from "./Card";

import { Link, useParams } from "react-router-dom";

const jsonString = JSON.stringify(stockData);
console.log(jsonString);

export default function Card (){
    const { id } = useParams();
    const arr = Object.entries(stockData);
    console.log(arr);

    // return (
    //     <ul>
    //         {Object.keys(stockData).map((id) => {
    //             const dayTasks = stockData[id];
    //             return Object.keys(dayTasks).map((key) => {
    //                 const task = dayTasks[key];
    //                 return (
    //                     <li>{task.name}</li>
    //                 );
    //             });
    //         })}
    //     </ul>
    // );
    return (
        <>
            <div className="stock-container">
                {stockData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.tags +
                    " , " +
                    data.location +
                    " ," +
                    data.description +
                    ", " +
                    data.title}
                        </div>
                    );
                })}
            </div>
        </>
    );
};
// return (
//     <div>
//         <div>{Card}</div>
//         <div>{id}</div>

//     </div>
// );
