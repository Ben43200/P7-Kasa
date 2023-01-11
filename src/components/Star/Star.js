
import React from "react";
import fullStar from "../../images/star-rate.svg";
import emptyStar from "../../images/emptyStar.svg";

const RatingStars = ({ score }) => {
    const GRADES = [1, 2, 3, 4, 5];

    return (
        <div className="container">
            <h1 className="result"></h1>
            <div className="stars">
                {
                    GRADES.map((level, index) =>
                        score >= level ?
                            <img
                                key={level.toString()}
                                className="star"
                                src={fullStar}
                                alt="rating star"
                            />
                            : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
                                <img
                                    key={level.toString()}
                                    className="star"
                                    src={emptyStar}
                                    alt="rating star"
                                />
                            ))
                }
            </div>
        </div>
    );
};

export default RatingStars;