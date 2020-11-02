import React, {useEffect,useState} from 'react';
import "./DesktopView.css";


function DesktopView(){

    console.log("Rendering Desktop")
    return(
        <div className="DesktopView">
           <div className="hero">
                <nav><h1 className="title">HitPlay </h1> <div className="download">Switch to Mobile</div></nav>
                <ul>
                    <li><h1>mobile</h1></li>
                    <li><h1>streaming</h1></li>
                    <li><h1>video on demand</h1></li>
                </ul>
           </div>
           <div className="showCase">
                <div className="otherApps">
                    <h3 className="callToAction">Other apps</h3>
                </div>
                <div className="flow">
                   <div className="logos">Apps</div>
                </div>
           </div>
        </div>
    );
}

export default DesktopView;