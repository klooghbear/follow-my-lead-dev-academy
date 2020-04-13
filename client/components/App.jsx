import React from 'react';
import Home from './Home';
import NavigationBar from './NavigationBar';
import About from './About'
import Contact from './Contact'
import { HashRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
      </Router>
    </>
  );
};

export default App;
