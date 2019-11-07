import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import dhsLogo from "./images/dhs_logo_official_0.png"
 
import Home from './components/Home/Home';
import About from './components/About/About';
import Training from './components/Training/Training';
import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import Education from "./components/Education/Education";
import Develop from "./components/Develop/Develop";

function App() {
  return (
    <div className="App">

      <div className="routerDiv">
        <BrowserRouter>
            <div>
              <Navigation />
                <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/training" component={Training}/>
                <Route path="/education" component={Education}/>
                <Route path="/develop" component={Develop}/>
                <Route component={Error}/>
              </Switch>
            </div> 
          </BrowserRouter>
      </div>

      {/* <div className="logoDiv">
        This is in App. It should appear on all pages.
        <br/>
        <img src={logo} alt="React Logo" className="logoImg" />
      </div> */}

      <footer className="footer">
        <p>Home</p>
        <p>Privacy Policy</p>
        <p>NICCS Policy</p>
        <p>FOIA Policy</p>
        <p>No Fear Act Policy</p>
        <p>Accessibility</p>
        <img src={dhsLogo} alt="dhs logo" id="dhsLogo"/>
      </footer>


    </div> // end App
  );
}

export default App;
