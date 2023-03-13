import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

import "./Banner.scss";

export default function Banner() {
    return (
        <header className="banner-container">
            <div className="banner-text-container">
                <img src={logo} alt="logo" className="logo" />
                <nav className="menu">
                    <NavLink to="/" >Accueil</NavLink>
                    <NavLink to="/a-propos">A propos</NavLink>
                </nav>
            </div>
        </header>
    );
}