import React, { useEffect, useState } from "react";

import { getLogements, getOneLogement } from "../services/dataManager";

import vectorHaut from "../images/assets_images/vectorHaut.svg";
import vectorBase from "../images/assets_images/vectorBas.svg";

const Collapsible = (props) => {

    //     const [toggle, setToggle] = useState(true);

    //     return (
    //         <>
    //             <button
    //                 onClick={() => setToggle(!toggle)}
    //                 class="btn btn-primary mb-5">
    //                 Toggle State
    //             </button>
    //             {toggle && (
    //                 <ul class="list-group">
    //                     <li class="list-group-item">{props.equipments}</li>
    //                     <li class="list-group-item">A second item</li>
    //                     <li class="list-group-item">A third item</li>
    //                     <li class="list-group-item">A fourth item</li>
    //                     <li class="list-group-item">And a fifth one</li>
    //                 </ul>
    //             )}
    //         </>
    //     );
    // };

    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle);
    };

    return (
        <div>

            <button onClick={toggleState}>	<img
                className={toggle ? "chevron rotated" : "chevron"}
                src={vectorHaut}
                alt="chevron"
            /></button>

            {toggle && (
                <div className="toggle">
                    <h1>{props.equipments}</h1>

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