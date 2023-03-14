import React from "react";
import Collapse from "../../components/collapse/Collapse";
import aboutTab from "../../Tableau.json";
import "./About.scss";

export default function About() {
    return (

        <main>
            <div className="heading-container">
                <div className="fond-about"></div>
            </div>
            {aboutTab.map((rule, id) => (
                <Collapse
                    key={id}
                    aboutTitle={rule.Title}
                    aboutText={rule.Text}
                    aboutStyle="about-style"
                />

            ))}
        </main>
    );
}
