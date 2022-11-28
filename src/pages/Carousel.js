import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//     const [index, setIndex] = useState(0);

//     const carousels = [
//         "https://www.w3schools.com/css/img_5terre.jpg",
//         "https://www.w3schools.com/css/img_forest.jpg",
//         "https://www.w3schools.com/css/img_lights.jpg"
//     ];

//     const onNext = () => {
//         console.log(carousels.length);

//         if (index < carousels.length - 1) {
//             const i = index + 1;
//             setIndex(i);
//         } else {
//             setIndex(0);
//         }
//     };

//     const onPrev = () => {
//         if (index > 0 && index < carousels.length) {
//             const i = index - 1;
//             setIndex(i);
//         } else {
//             setIndex(carousels.length - 1);
//         }
//     };

//     return (
//         <div className="carousel">
//             {carousels.map((item, i) =>
//                 i === index
//                     ? (
//                         <div className="carousel-item" key={i}>
//                             <img src={item} alt={item} />
//                         </div>
//                     )
//                     : null
//             )}

//             <a className="prev" onClick={onPrev}>
//         Prev
//             </a>
//             <a className="next" onClick={onNext}>
//         Next
//             </a>
//         </div>
//     );
// };

export default function Caroussel(props){
    console.log(props);
    const [position, setPosition] = useState(0);
    const carousels = props.images;

    function increment(){
        const newPosition = position+1;
        (newPosition >= carousels.length) ? setPosition(0) : setPosition(newPosition);
    }

    function decrement(){
        const newPosition = position - 1;
        (newPosition < 0 ) ? setPosition(carousels.length-1) : setPosition(newPosition);
    }

    return (
        <>
            <img src={carousels[position]} alt="super image" />
            <span onClick={decrement}>  > </span>
            <span>{position +1} / {carousels.length}</span>
            <span onClick={increment}> $ </span>
        </>
    );

}