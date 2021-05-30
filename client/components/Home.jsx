import React from "react"
import { Link } from "react-router-dom"
import { Container } from "reactstrap"
import BackgroundImage from "./BackgroundImage"
import Header from "./Header"

const Home = () => {
  return (
    <>
      <BackgroundImage />
      <Header />
      <div className="register-buttons">
        <Link to="/register/owner">
          <button className="button">Owner Registration</button>
        </Link>
        <Link to="/register/walker">
          <button className="button" to="/Register/Walker">
            Walker Registration
          </button>
        </Link>
      </div>
      <div className="home-page-header">
        <div className="home-page-ptag">Partnering People and Pooches!</div>
      </div>
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
  )
}

export default Home
