import React,{useEffect,useState} from 'react';
import "./MobileView.css"
import VerticalSlider from '../verticalslider/VerticalSlider';


function MobileView(props){
    console.log("Rendering Mobile");

    const [isLandScape, setIsLandScape] = useState(false);
    useEffect(()=>{
        checkOrientationChange();
    },[])
    
    function checkOrientationChange()
    {
        let screenOrientation = window.orientation;
        switch(screenOrientation){
            case 0: 
            console.log('you are in portrait-primary mode');
            setIsLandScape(false);
            break;
            case 90: 
            setIsLandScape(true);
            break;
            case 180: 
            setIsLandScape(true);
            break;
            case 270:
            setIsLandScape(true);
            break;
            default: 
                console.log('implementation of screen orientation');
                setIsLandScape(false);
        }
    }


    return(
        <div className="MobileView">
            {
                isLandScape && <VerticalSlider />
            }
            
           
        </div>
    );
}

export default MobileView;