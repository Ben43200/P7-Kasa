import React from "react";
import Collapsible from "../../components/Collapsible/Collapsible";
import aboutTab from "../../Tableau.json";
import backgroundAbout from "../../images/about-background.png";
import "./About.css";

export default function About() {
    return (

        <main>
            <div className="heading-container">
                <img src={backgroundAbout} className="fond-about" alt="background" />
            </div>
            {aboutTab.map((rule, id) => (
                <Collapsible
                    key={id}
                    aboutTitle={rule.Title}
                    aboutText={rule.Text}
                    aboutStyle="about-style"
                />

            ))}
        </main>
    );
}
