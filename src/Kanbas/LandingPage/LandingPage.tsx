import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'; // Importing the CSS file

export default function LandingPage() {
    return (
        <div id="landing-page">
            {/* Display your name and course section */}
            <h1>Xian Cao</h1>
            <h3>Section: CS5610-FALL24</h3>

            {/* Links to Lab Assignments */}
            <h2>Lab Assignments</h2>
            <ul>
                <li><Link to="/Labs/Lab1" target="_blank">Lab 1</Link></li>
                <li><Link to="/Labs/Lab2" target="_blank">Lab 2</Link></li>
                <li><Link to="/Labs/Lab3" target="_blank">Lab 3</Link></li>
                <li><Link to="/Labs/Lab4" target="_blank">Lab 4</Link></li>
                <li><Link to="/Labs/Lab4" target="_blank">Lab 5</Link></li>
            </ul>

            {/* Kanbas Application */}
            <h2>Kanbas Application</h2>
            <ul>
                <li><Link to="/Kanbas" target="_blank">Kanbas</Link></li>
            </ul>

            {/* Source Code Repositories */}
            <h2>Source Code Repositories</h2>
            <ul>
                <li><a href="https://github.com/xiancao2024/kanbas-react-web-app-cs5610-fa24" target="_blank">A1 Repo</a></li>
            </ul>
        </div>
    );
}
