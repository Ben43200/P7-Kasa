// import { getLogements, getOneLogement } from "../services/dataManager";
import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./collapsible.css";
// import vectorBase from "../images/assets_images/vectorBas.svg";
// import vectorHaut from "../images/assets_images/vectorHaut.svg";

const Collapsible = (props) => {
    console.log(props);
    const [toggle, setToggle] = useState(false);
    const [height, setHeight] = useState("0rem");
    const isList = Array.isArray(props.aboutText);
    const style = {
        characterHeight: 26,
        characterWidth: 10,
        // padding: 54
        padding: 50
    };

    const toggleState = () => {
        setToggle(!toggle);
    };

    const ref = useRef(null);
    useEffect(() => {
        const width = ref.current ? ref.current.offsetWidth : 1;
        setHeight(roundSize(isList
            ? estimateRows(props.aboutText, style.characterWidth, width)
            : rowsFollowingText(props.aboutText, style.characterWidth, width)
            , style
        ));
    }, [ref.current]);

    return (
        <div className="collapsible" onClick={toggleState} ref={ref}>
            <div className={`chevron ${toggle ? "unfold" : ""}`}>{props.aboutTitle}</div>

            {toggle && (
                <motion.div
                    className="toggle"
                    initial={{ height: 0 }}
                    animate={{ height: height }}
                    transition={{ duration: 0.5 }}
                >
                    {isList
                        ? <MakeList list={props.aboutText} />
                        : `${props.aboutText}`
                    }</motion.div>
            )
            }

        </div>

    );

};
export default Collapsible;

function MakeList({ list }) {
    return (
        <ul>
            {
                list.map((entry, i) => <li key={"li" + i}>{entry}</li>)
            }
        </ul>
    );
}

function rowsFollowingText(text, characterWidth, divWidth) {
    console.log("rows", text, text.length, characterWidth, divWidth, Math.ceil((text.length * characterWidth) / divWidth));
    return Math.ceil((text.length * characterWidth) / divWidth);
}

function estimateRows(list, characterSize, width) {
    let rows = 0;
    for (const entry of list) {
        rows += rowsFollowingText(entry, characterSize, width);
    }
    return rows;
}
function roundSize(rows, style) {
    return Math.ceil((style.characterHeight * rows) + style.padding) + "px";
}

// import React, { useState } from "react";
// import vectorBas from "../images/assets_images/vectorBas.svg";
// import vectorHaut from "../images/assets_images/vectorHaut.svg";

// import {
//   faChevronUp,
//   faChevronDown
// } from "@fortawesome/fontawesome-free-solid";
// interface IProps {
//   open?: boolean;
//   title: string;
// }

// const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
//   const [isOpen, setIsOpen] = useState(open);

//   const handleFilterOpening = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <div className="card">
//         <div>
//           <div className="p-3 border-bottom d-flex justify-content-between">
//             <h6 className="font-weight-bold">{title}</h6>
//             <button type="button" className="btn" onClick={handleFilterOpening}>
//               {!isOpen ? (
//                 <img src={vectorBas} />
//               ) : (
//                 <img src={vectorHaut} />
//               )}
//             </button>
//           </div>
//         </div>

//         <div className="border-bottom">
//           <div>{isOpen && <div className="p-3">{children}</div>}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Collapsible;