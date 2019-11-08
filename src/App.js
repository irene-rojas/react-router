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
import NICCS_Policy from "./components/NICCS_Policy/NICCS_Policy";
import Footer from "./components/Footer/Footer";

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
              <footer>
                <Footer />
                  <Switch>
                    <Route path="/niccs_policy" component={NICCS_Policy} />
                  </Switch>
              </footer>
            </div> 
          </BrowserRouter>
      </div>

      

      {/* <footer className="footer">
        <p><a href="/">Home</a></p>
        <p>Privacy Policy</p>
        <p><a href="/niccs_policy">NICCS Policy</a></p>
        <p>FOIA Policy</p>
        <p>No Fear Act Policy</p>
        <p>Accessibility</p>
        <img src={dhsLogo} alt="dhs logo" id="dhsLogo"/>
      </footer> */}


    </div> // end App
  );
}

export default App;
