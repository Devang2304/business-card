import React from "react";
import "./Navbar.css"


export default function Navbar() {
    return (
        <Navbar className="navbar">
        <img className="profile-picture" src="" alt="profile"/>
        <h3 className="full-name">Devang Vartak</h3>
        <h6 className="current-role">Software Engineering Student</h6>
    </Navbar>
    );
}