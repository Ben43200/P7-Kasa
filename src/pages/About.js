import React from "react";

import { Link } from "react-router-dom";
import Collapsible from "./Collapsible";
import aboutTab from "../Tableau.json";

export default function About() {
    return (

        <div>
            <h1>A Propos</h1>
            <Link to="/">Accueil</Link>
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
