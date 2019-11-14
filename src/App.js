import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import axios from 'axios';
 
import Home from './components/Home/Home';
import About from './components/About/About';
import Training from './components/Training/Training';
// import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import Education from "./components/Education/Education";
import Develop from "./components/Develop/Develop";
import NICCSPolicy from "./components/NICCSPolicy/NICCSPolicy";
import Footer from "./components/Footer/Footer";
import NoFear from "./components/NoFear/NoFear";
import Accessibility from "./components/Accessibility/Accessibility";
import usFlag from "./images/icn-us-flag-21px.png";

function App() {

  return (
    <BrowserRouter>

    <div className="App">

        <div className="dhsHeader">
          
          <p id="officialFed">
            <img src={usFlag} id="usFlag" alt="US Flag signifying that this is United States Federal Government Website" />
          Official website of the Department of Homeland Security</p>
        </div>

        <header>
        <Navigation />
        {/* start navDiv */}
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/training" component={Training}/>
            <Route path="/education" component={Education}/>
            <Route path="/develop" component={Develop}/>
            {/* <Route component={Error}/> */}
        </Switch>
        {/* end navDiv */}

      </header>

      <footer className="footer">
        <Footer />
          <Switch>
            <Route path="/niccs_policy" component={NICCSPolicy} />
            <Route path="/nofear" component={NoFear} />
            <Route path="/access" component={Accessibility} />
          </Switch>
      </footer>

    </div>

    </BrowserRouter>

  );
}

export default App;
