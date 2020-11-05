import React, {useState,useEffect} from 'react';
import './VerticalSlider.css';
//import 'swiper/swiper-bundle.css';
import Swiper from 'react-id-swiper';
import "swiper/swiper-bundle.css";
import ReactDOM from "react-dom";


function VerticalSlider (props){
    
    const [swiper, updateSwiper] = useState(null);

    const params = {
        //spaceBetween: 10,
        direction:'vertical',
        /*
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },*/
        //spaceBetween: 0,
        getSwiper: updateSwiper
    };
    

    return( 
            <div className="VerticalSlider">
                <Swiper {...params}>
                    <div className="slideFit" ><img src="https://s1.gaming-cdn.com/images/products/2670/orig/devil-may-cry-5-cover.jpg" /></div>
                    <div className="slideFit" ><img src="https://s1.gaming-cdn.com/images/products/2670/orig/devil-may-cry-5-cover.jpg" /></div>
                    <div className="slideFit" ><img src="https://s1.gaming-cdn.com/images/products/2670/orig/devil-may-cry-5-cover.jpg" /></div>
                    <div className="slideFit" ><img src="https://s1.gaming-cdn.com/images/products/2670/orig/devil-may-cry-5-cover.jpg" /></div>
                    <div className="slideFit" ><img src="https://s1.gaming-cdn.com/images/products/2670/orig/devil-may-cry-5-cover.jpg" /></div>
                </Swiper>
            </div>
       
    );
}

export default VerticalSlider;