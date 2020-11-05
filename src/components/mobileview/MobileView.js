import React,{useEffect,useState} from 'react';
import "./MobileView.css"
import VerticalSlider from '../verticalslider/VerticalSlider';


function MobileView(props){
    console.log("Rendering Mobile");
    

    return(
        <div className="MobileView">
            <VerticalSlider />
           
        </div>
    );
}

export default MobileView;