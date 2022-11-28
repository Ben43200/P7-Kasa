import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
// import Card from "./pages/SecondCard";
import GetCard from "./pages/SecondCard";
import Home from "./pages/Home/Home";
import Error from "./pages/Error";
import Carousel from "./pages/Carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos/" element={<About />} />
                <Route path="/Getcard/:cardId" element={<GetCard />} />
                <Route  path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
