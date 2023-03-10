import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

import "./Banner.scss";

export default function Banner() {
    return (
        <header className="banner-container">
            <div className="banner-text-container">
                <img src={logo} alt="logo" className="logo" />
                <nav className="menu">
                    <Link to="/">Accueil</Link>
                    <Link to="/a-propos">A propos</Link>
                </nav>

            </div>
        </header>
    );
}