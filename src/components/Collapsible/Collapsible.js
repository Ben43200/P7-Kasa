// import { getLogements, getOneLogement } from "../services/dataManager";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./collapsible.css";
// import vectorBase from "../images/assets_images/vectorBas.svg";
// import vectorHaut from "../images/assets_images/vectorHaut.svg";

const Collapsible = (props) => {

    console.log(props);
    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle);
    };

    return (
        <div className="collapsible" onClick={toggleState}>
            <div className={`chevron ${toggle ? "unfold" : ""}`}>{props.aboutTitle}</div>

            {toggle && (
                <motion.div
                    className="toggle"
                    initial={{ height: 0 }}
                    animate={{ height: "10rem" }}
                    transition={{ duration: 0.5 }}
                >
                    {Array.isArray(props.aboutText)
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