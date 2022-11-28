import React from "react";
import { stockData } from "../data";

import { Link, useParams } from "react-router-dom";

export default function GetCard (){
    const params = useParams();

    console.log(params); // 👉️ {userId: '4200'}

    return (
        <>
            {/* <div className="stock-container">
                {stockData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.title

                            }
                        </div>
                    );
                })}

            </div>

            <Link to={`/card/:cardId/${params}`}>Précédent</Link> */}

            <p>userId is 👉️ {params.img}</p>
        </>
    );
};
