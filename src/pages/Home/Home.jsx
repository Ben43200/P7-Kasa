import React from "react";
import "./Home.css";
import {Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to="/a-propos">A propos</Link>
            <h1>Test</h1>

        </div>
    );
}
