import React from 'react';
import Home from './Home';
import NavigationBar from './NavigationBar';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import Contact from './Contact'
import { HashRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact}/>
      </Router>
    </>
  );
};

export default App;
