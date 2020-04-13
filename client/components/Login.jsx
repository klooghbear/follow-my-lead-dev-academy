import React from 'react';
// import { signIn, isAuthenticated, getDecodedToken } from 'authenticare/client';
// import { getUserDetails } from '../api/userApi';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Form className="form">
          <h1 className="page-title">Login</h1>
            <FormGroup className="box">
              <img className="logoform" src="/images/Logo2.png" alt="logo" />
              <Label>Username:</Label>
              <Input
                className="input"
                type="text"
                placeholder="username"
                name="username"
                autoComplete="off"
              />
              <Label> Password: </Label>
              <Input
                className="input"
                type="password"
                placeholder="password"
                name="password"
                autoComplete="off"
              />
              <Input
                className="button"
                type="submit"
                value="Submit"
                autoComplete="off"
              />
            </FormGroup>
        </Form>
      </>
    );
  }
}

export default Login;
