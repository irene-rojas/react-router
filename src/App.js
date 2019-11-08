import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home/Home';
import About from './components/About/About';
import Training from './components/Training/Training';
import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import Education from "./components/Education/Education";
import Develop from "./components/Develop/Develop";
import NICCS_Policy from "./components/NICCS_Policy/NICCS_Policy";
import Footer from "./components/Footer/Footer";
import NoFear from "./components/NoFear/NoFear";
import Accessibility from "./components/Accessibility/Accessibility";

function App() {
  return (
    <BrowserRouter>

    <div className="App">

      <header>
        <Navigation />
          <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/training" component={Training}/>
          <Route path="/education" component={Education}/>
          <Route path="/develop" component={Develop}/>
          <Route component={Error}/>
        </Switch>

      </header>

      <footer>
        <Footer />
          <Switch>
            <Route path="/niccs_policy" component={NICCS_Policy} />
            <Route path="/nofear" component={NoFear} />
            <Route path="/access" component={Accessibility} />
          </Switch>
      </footer>

    </div>

    </BrowserRouter>

  );
}

export default App;
