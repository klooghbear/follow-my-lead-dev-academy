import React from 'react';
import HeroImage from './BackgroundImage';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
    <>
      <div className="register-buttons">
        <Button className="button" to="/Register/Owner">
          Sign your dog up for walks!
        </Button>
        <Button className="button" to="/Register/Walker">
          Register to walk a dog!
        </Button>
      </div>
      <div className="home-page-ptag">Partnering People and Pooches!</div>
      <Container className="blurb-container">
        <div className="blurb-headline">
          <h3>Who are we?</h3>
        </div>
        <div className="blurb-text">
          We are a group of web development students who all happen to love
          dogs! We are working together to improve our development skills by
          creating a platform for dog lovers that can't own dogs and dog owners
          that don't always have the time to walk them.
        </div>
      </Container>
    </>
  );
};

export default Home;
