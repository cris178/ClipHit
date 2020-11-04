import React,{useEffect,useState} from 'react';
import "./MobileView.css"
import 'swiper/swiper-bundle.css';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation, Autoplay } from "swiper";


function MobileView(props){
    console.log("Rendering Mobile");
    const [parallaxSwiper, setParallaxSwiper] = useState(null);
    const [swiper, updateSwiper] = useState(null);

    const params = {
        modules: [Pagination, Navigation, Autoplay],
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        spaceBetween: 30,
        getSwiper: updateSwiper
      };

    return(
        <div className="MobileView">
            

           <Swiper {...params} >
                <div><img src="https://via.placeholder.com/350x150"/></div>
                <div><img src="https://via.placeholder.com/350x150"/></div>
                <div><img src="https://via.placeholder.com/350x150"/></div>
                <div><img src="https://via.placeholder.com/350x150"/></div>
                <div><img src="https://via.placeholder.com/350x150"/></div>
            </Swiper>
        </div>
    );
}

export default MobileView;