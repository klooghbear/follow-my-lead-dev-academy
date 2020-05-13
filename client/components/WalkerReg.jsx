import React from 'react';
import { register, isAuthenticated } from 'authenticare/client';
import { addWalker } from '../api/walker';

export class RegisterWalker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      blurb: '',
      location: '',
      email: '',
      photo: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    register({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
    .then(token => {
      if(isAuthenticated()) {
        //addwalker
      }
    })
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default RegisterWalker
