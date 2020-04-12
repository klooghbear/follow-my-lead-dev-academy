import React from 'react';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
    <>
      <Container className="hero-image">
        <div className="hero-text">
          <img
            className="home-image"
            src="/images/dog-on-lead.jpeg"
            alt="hero-dog-image"
          />
          {/* <div className="home-page-headline">
            <p>Follow My Lead!</p>
          </div>
          <div className="home-page-ptag">
            <p>Partnering People and Pooches!</p>
          </div>
          <div>
            <button>Resiter your dog for walks</button>
            <button>Resiter to walk a dog</button>
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default Home;
