import React from "react"

const About = () => {
  return (
    <div className="about">
      <h1 className="page-title">Who are we? </h1>
      <img className="img-style" src="images/Group_photo.jpg" alt="image"/>
      <div className="blurb-container">
        <div className="blurb-text">
          <p>Rich, Izzy, Josh, Seb, Lui, Scott.</p>
          <p>
            We are a group of web development students at EDA Wellington. We
            love dogs and coding, and decided to combine these interests by
            building 'Follow My Lead', a platform where dog-less dog lovers and
            busy dog owners can meet to arrange dog walks!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
