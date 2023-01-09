import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/assets_images/LOGO.svg";
import background from "../images/assets_images/background-banner.png";

export default function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-text-container">

                <img src={logo} alt="logo" />
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
                <img src={background} alt="background" />
                <div className="banner-text">Chez vous, partout et ailleurs</div>

            </div>
        </div>
    );
}