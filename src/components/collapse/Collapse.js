import { useState, useRef, useEffect } from "react"; //import des hooks de base react
// import Chevron from "../../images/vectorBas.svg";
import "./collapse.scss";

export default function Collapse(props) {
    const [toggle, setToggle] = useState(false); // je definis le state du toggle (et false par défaut)
    const [heightEl, setHeightEl] = useState(); // je definie le state de la hauteur du collapse

    const isList = Array.isArray(props.aboutText);

    const toggleState = () => {
        //je définis la fonction toggleState qui modifie la valeur toggle au clic
        setToggle(!toggle);
    };

    const refHeight = useRef(); //récupère et conserve la valeur de hauteur du collapse déplié

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`); //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight
    }, []);

    return (
        // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
        <div className={`collapse ${props.aboutStyle}`}>
            <div onClick={toggleState} className="collapse__visible">
                <h2>{props.aboutTitle}</h2>
                <div className={`chevron ${toggle ? "unfold" : ""}`}></div>
            </div>
            <div
                ref={refHeight}
                className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
                style={{ height: toggle ? `${heightEl}` : "0px" }}
            >

                <div className="infos" aria-hidden={toggle ? "true" : "false"}> {isList
                    ? <MakeList list={props.aboutText} />
                    : `${props.aboutText}`
                }</div>
            </div>
        </div>
    );
}

function MakeList({ list }) {
    return (
        <ul>
            {
                list.map((entry, i) => <li key={"li" + i} className="listEquipements">{entry}</li>)
            }
        </ul>
    );
}