import React from 'react';
import { signIn, isAuthenticated, getDecodedToken } from 'authenticare/client';
import { getUserDetails } from '../api/walker';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    signIn(
      {
        username: this.state.username,
        password: this.state.password,
      },
      {
        baseUrl: process.env.BASE_API_URL,
      },
    ).then((token) => {
      if (isAuthenticated()) {
        getUserDetails(getDecodedToken().id).then((user) => {
          console.log('the user is ' + user);
          if (user.walker) this.props.history.push('/walker/' + user.walker.id);
        });
      }
    });
  };

  render() {
    return (
      <>
        <Form className="form" onSubmit={this.handleSubmit}>
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button type="submit" value="submit" className="button">
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </div>
        </Form>
      </>
    );
  }
}

export default Login;
