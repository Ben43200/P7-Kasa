import React, { useEffect, useState } from "react";

import { getLogements, getOneLogement } from "../services/dataManager";

import vectorHaut from "../images/assets_images/vectorHaut.svg";
import vectorBase from "../images/assets_images/vectorBas.svg";
import "./collapsible.css";

const Collapsible = (props) => {

    console.log(props);
    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle);
    };

    return (
        <div>

            <button onClick={toggleState}>
                <h5>{props.aboutTitle}</h5>	<img
                    className={toggle ? "chevron rotated" : "chevron"}
                    src={vectorHaut}
                    alt="chevron"
                /></button>

            {toggle && (
                <div className="toggle">
                    <p> {`${props.aboutText}`}</p>

                </div>
            )
            }

        </div>

    );

};
export default Collapsible;

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