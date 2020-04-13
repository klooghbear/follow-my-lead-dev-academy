import React from 'react';

const contactEmail = 'sebastiankloogh@gmail.com'; //subject to change

const Contact = () => {
  return (
    <div>
      <h1 className="page-title">Super Speedy Contact Page!</h1>
      <div className="profile-container">
        <p className="profile-info">
          Email me and I'll be in touch soon! <a href="">{contactEmail}</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
