import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import About from "./pages/About/About";
import FicheLogement from "./pages/Fichelogement/FicheLogement";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import "./css/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    // <React.StrictMode>
        <Router>
            <Banner />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos/" element={<About />} />
                <Route path="/fichelogement/:id" element={<FicheLogement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
