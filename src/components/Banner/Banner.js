import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import background from "../../images/background-banner.png";
import "./Banner.css";

export default function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-text-container">

                <img src={logo} alt="logo" />
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
                <img src={background} alt="background" className="fond-home" />
                <div className="banner-text">Chez vous, partout et ailleurs</div>

            </div>
        </div>
    );
}