import './App.css';
import React,{useEffect,useState} from  'react';
import {BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom';
import Desktop from "./components/desktopview/DesktopView";
import Mobile from "./components/mobileview/MobileView";

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
  //Can place divs in Router that will show in each page.
  return (
    <div className="App">
      <Router>
        {
          isMobile && (<Redirect  to="/Vods" />)
        }
        {
          !isMobile && (<Redirect to="/about" />)
        }
        <Switch>
          <Route path="/about"><Desktop /></Route>
          <Route path="/Vods"><Mobile /></Route>
        </Switch>
      </Router>
    </div>
    
);
}

export default App;
