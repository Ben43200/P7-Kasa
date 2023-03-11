import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

import "./Banner.scss";

export default function Banner() {
    return (
        <header className="banner-container">
            <div className="banner-text-container">
                <img src={logo} alt="logo" className="logo" />
                <nav className="menu">
                    {/* <Link to="/">Accueil</Link>
                    <Link to="/a-propos">A propos</Link>
                </nav>  */}
                    {/* // <Nav> */}
                    <NavLink exact activeClassName='is-active' to='/'>Home</NavLink>
                    <NavLink activeClassName='is-active' to='/a-propos'>About</NavLink>
                    {/* // </Nav> */}
                </nav>
            </div>
        </header>
    );
}