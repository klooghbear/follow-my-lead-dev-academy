import React from 'react';
// import { signIn, isAuthenticated, getDecodedToken } from 'authenticare/client';
// import { getUserDetails } from '../api/userApi';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
          <div className="box">
            <FormGroup>
              <img className="logoform" src="/images/Logo2.png" alt="logo" />
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label>Username:</Label>
                <Input
                  type="text"
                  placeholder="username"
                  name="username"
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label> Password: </Label>
                <Input
                  type="password"
                  placeholder="password"
                  name="password"
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button className="button">Submit</Button>
              </Col>
            </FormGroup>
          </div>
        </Form>
      </>
    );
  }
}

export default Login;
