import React from 'react';
import Home from './Home';
import NavigationBar from './NavigationBar';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Footer from './Footer';
import WalkerReg from './WalkerReg';
import { HashRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register/walker" component={WalkerReg} />
        {/* <Route path="/register/owner" component={OwnerReg}/> */}
        <Footer />
      </Router>
    </>
  );
};

export default App;
