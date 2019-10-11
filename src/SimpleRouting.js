import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>This is HOME page</h1>
    </>
  );
}

const About = () => {
  return (
    <>
      <h1>This is ABOUT page</h1>
    </>
  );
}

const Contact = () => {
  return (
    <>
      <h1>This is CONTACT page</h1>
    </>
  );
}

const SimpleRouting = () => {
  return (
    <div className="App">

      <Router>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact'><Contact /></Route>
        </Switch>

      </Router>



    </div>
  );
}

export default SimpleRouting;