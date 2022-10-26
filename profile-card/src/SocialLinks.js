import React from "react";
import "./SocialLinks.css";

export default function SocialLinks(){
    return (
        <div className="buttons">
            <a href="devangvartak2304@gmail.com" target="_blank">
            <button className="email-button">
                <img className="email-symbol" src="" alt="email"/>
                Email
            </button>
            </a>
            <a href="https://www.linkedin.com/in/devang230403" target="_blank">
            <button className="Linked-button">
                <img className="linkedin-logo-white" src="" alt="linkedin" />
            </button>
            </a>
        </div>
    );
}
