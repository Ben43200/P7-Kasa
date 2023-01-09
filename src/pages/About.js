import React from "react";

import { Link } from "react-router-dom";
import Collapsible from "./Collapsible";
import aboutTab from "../Tableau.json";
import logo from "../images/assets_images/LOGO.svg";
import backgroundAbout from "../images/assets_images/about-background.png";

export default function About() {
    return (

        <div>
            <img src={logo} alt="logo" />
            <Link to="/">Accueil</Link>
            <img src={backgroundAbout} alt="background" />
            {aboutTab.map((rule, id) => (
                <Collapsible
                    key={id}
                    aboutTitle={rule.Title}
                    aboutText={rule.Text}
                    aboutStyle="about-style"
                />

            ))}
        </div>
    );
}
