import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function tickingClock() {
    const element = (
        <div>
            <h1>Hello, World</h1>
            <h2>The Time Now is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    root.render(element);
}

setInterval(tickingClock, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
