import React from 'react';
import './App.css'; 
import { BrowserRouter as Router,Switch } from "react-router-dom";
import './content'
import Content from './content';
import './nav'
import Navigation from './nav';
import MainContent from './main-content';
import Arrows from './arrow';
import LogoMade from './Trademark/logs'
// import Nav from './navigation'

function App() {
  return (
    <Router>
      <Switch>
    <div classNaName="App">
      <div className="main-background">
      <div className="nav">
       <Navigation />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="main-content">
       <MainContent />
      </div>
      <div className="arrows">
          {Arrows()}
      </div>
      <div className="logos-text">
           {LogoMade()}
      </div>
       
     
      </div>
    </div>
    </Switch>
    </Router>
  );
}


export default App;
