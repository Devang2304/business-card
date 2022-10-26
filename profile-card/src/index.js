import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

ReactDOM.render(<div onload="window.resizeTo(200,500)" className="business-card">
<Navbar/>
<SocialLinks/>
<About/>
<Interests/>
<Footer/>
</div>,document.getElementById("root"));

