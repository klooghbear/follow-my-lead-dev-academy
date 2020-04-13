import React from 'react';
import Home from './Home';
import NavigationBar from './NavigationBar';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import { HashRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" component={NavigationBar} />
        <BackgroundImage />
        <Header />
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
};

export default App;
