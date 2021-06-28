import React from 'react'
import "./Main.css";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Logo from "./../Img/Vtrious.svg";
import Illustration from "./../Img/Illustration.svg"
function Main() {
    return (
        <div className="Main">
        <div className="header">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="nav">
                <h3>Features</h3>
                <h3>Pricing</h3>
                <h3 id="redi"><Link to="/Sign in"style={{ textDecoration: 'none',color:"#71A89E"}}>Sign In</Link></h3>
            </div>
            </div>
            <div className="cont">
                <div className="text">
                    <h1>Simple time tracking. <br/>
                    Powerfull reporting.</h1>
                    <p>Turn your team on to productivity with Gravity the time tracker</p>
                   <button><Link to="/Sign in"style={{ textDecoration: 'none',color:"white" }}> Request early access</Link>  </button>
                </div>
                <div className="illustration">
                    <img src={Illustration} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Main
