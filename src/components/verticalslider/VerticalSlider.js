import React, {useState,useEffect} from 'react';
import './VerticalSlider.css';
//import 'swiper/swiper-bundle.css';
import Swiper from 'react-id-swiper';
import "swiper/swiper-bundle.css";
import ReactDOM from "react-dom";
import ReactTwitchEmbedVideo from "react-twitch-embed-video"


function VerticalSlider (props){
    
    const [swiper, updateSwiper] = useState(null);
    //const [vw, setVW] = useState({width:"500px"});
    const [style, setStyle] = useState({width:"500px",height:"1050px",frameborder:"0", allowfullscreen:"false", scrolling:"no", border:"none"});
    
    useEffect(()=>{

        
        setStyle({width: (window.innerWidth).toString() + "px",height: (window.innerHeight).toString() + "px"});
        //setStyle({height: (window.innerHeight).toString() + "px"});
        
        //setVW((window.innerWidth * 0.01).toString() + "px");
    },[])
    
    
    

    const params = {
        //spaceBetween: 10,
        direction:'vertical',
        /*
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },*/
        spaceBetween: 0,
        getSwiper: updateSwiper
    };
    //https://embed.twitch.tv/embed/v1.js    
    //<ReactTwitchEmbedVideo channel="talk2megooseman" />
   /*
                        <iframe src="https://embed.twitch.tv/embed/v1.js" style={{frameborder:"0", allowfullscreen:"true", scrolling:"no", height:"100vh",width:"100vw"}}>
                        </iframe>
   */
 


/*
                    <div className="slideFit" ><img  style={dimension} src="https://s1.gaming-cdn.com/images/products/2670/orig/devil-may-cry-5-cover.jpg" /></div>
                    <div className="slideFit" ><img  style={dimension} src="https://s1.gaming-cdn.com/images/products/2670/orig/devil-may-cry-5-cover.jpg" /></div>
                    <div className="slideFit" ><img   style={dimension} src="https://s1.gaming-cdn.com/images/products/2670/orig/devil-may-cry-5-cover.jpg" /></div>
*/

    console.log("Width");
    console.log(style.width);
    console.log("Height");
    console.log(style.height);
    let dimension = {width:style.width,height:style.height};
    return( 
            <div className="VerticalSlider" style={dimension}>
                <Swiper {...params}>
                    <div className="slideFit"> 
                        <div className="scrollingHelpLeft"></div>
                        <div className="scrollingHelpRight"></div>
                        <iframe src="https://clips.twitch.tv/embed?clip=BlindingAlertBeeNerfRedBlaster&parent=www.100moons.app&parent=100moons.app&parent=localhost" style={style}>
                        </iframe>
                    </div>
                    <div className="slideFit"> 
                        <div className="scrollingHelpLeft"></div>
                        <div className="scrollingHelpRight"></div>
                        <iframe src="https://clips.twitch.tv/embed?clip=BlindingAlertBeeNerfRedBlaster&parent=www.100moons.app&parent=100moons.app&parent=localhost" style={style}>
                        </iframe>
                    </div>
                    <div className="slideFit" >
                        <div className="scrollingHelpLeft"></div>
                        <div className="scrollingHelpRight"></div>
                        <iframe src="https://clips.twitch.tv/embed?clip=BlindingAlertBeeNerfRedBlaster&parent=www.100moons.app&parent=100moons.app&parent=localhost" style={style}>
                        </iframe>
                    </div>
                   
                </Swiper>
            </div>
       
    );
}

export default VerticalSlider;