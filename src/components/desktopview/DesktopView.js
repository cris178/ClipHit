import React, {useEffect,useState} from 'react';
import "./DesktopView.css";


function DesktopView(){

    console.log("Rendering Desktop")
    return(
        <div className="DesktopView">
           <div className="hero">
                <nav><h1 className="title">HitPlay </h1> <div className="download">Switch to Mobile</div></nav>
                <div className="advert">
                    <ul className="advertMessage">
                        <div className="flourish"></div>
                        <li><h1>mobile</h1></li>
                        <li><h1>streaming</h1></li>
                        <li><h1>video on demand</h1></li>
                    </ul>
                    <div className="advertPhoto">
                        <img src="https://via.placeholder.com/350x150" />
                    </div>
                </div>
                
           </div>
           <div className="showCase">
                <div className="otherApps">
                    <h3 className="callToAction">Other apps</h3>
                </div>
                <div className="flow">
                   <div className="logos">
                    <img className="logoImage" src="https://via.placeholder.com/140x100"></img>
                    <p>app name</p>
                    </div>
                   <div className="logos">
                    <img className="logoImage" src="https://via.placeholder.com/140x100"></img>
                    <p>app name</p>
                    </div>
                   <div className="logos">
                    <img className="logoImage" src="https://via.placeholder.com/140x100"></img>
                    <p>app name</p>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default DesktopView;