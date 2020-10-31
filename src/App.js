import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from  'react';
import {Route} from 'react-router';

function App() {
  const [isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
    console.log("Determining Screen Size");
    let ua = navigator.userAgent;
    console.log(ua);
    let mobile = ua.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/gi)
    console.log("Matches found: " + mobile);
    mobile ? setIsMobile(true) : setIsMobile(false);
  });

  console.log("Is Mobile: " + isMobile);
  return (
    <div className="App">
     Hello
      
    </div>
  );
}

export default App;
