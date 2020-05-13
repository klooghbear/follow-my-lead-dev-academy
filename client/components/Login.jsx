import React from 'react';
import { signIn, isAuthenticated, getDecodedToken } from 'authenticare/client';
import { getUserDetails } from '../api/walker';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault()
    signIn({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL
    }).then((token) => {
      if(isAuthenticated()) {
        
        //TODO GET USER DETAILS WITH getUserDetails call
        getUserDetails(getDecodedToken().id).then(user => {
          if(user.walker) this.props.history.push('/walker/' + user.walker.id)
          
          //TODO handle the case for dog owner

        })

      }
    })
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
