import React from 'react';
import HeroImage from './BackgroundImage';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
    <>
      <HeroImage />
      <Container className="home-page-headline text-center">Follow My Lead!</Container>
      <div className="home-page-ptag">Partnering People and Pooches!</div>
      <div className="register-buttons">
        <Button className="button" to="/Register/Owner">
          Sign your dog up for walks!
        </Button>
        <Button className="button" to="/Register/Walker">
          Register to walk a dog!
        </Button>
      </div>
    </>
  );
};

export default Home;
