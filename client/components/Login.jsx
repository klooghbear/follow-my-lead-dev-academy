import React from "react"
import { signIn, isAuthenticated, getDecodedToken } from "authenticare/client"
import { fetchUserDetails } from "../api/users"
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap"

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      isLoading: false,
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ isLoading: true })

    const promise = signIn(
        {
          username: this.state.username,
          password: this.state.password,
        },
        {
          baseUrl: process.env.BASE_API_URL,
        },
    ).then((token) => {
      if (isAuthenticated()) {
        const { id } = getDecodedToken()

        return Promise.resolve(fetchUserDetails(id))
      }
    }).then((user) => {
      console.log(user.walker)
    })

    return promise
  }

  render() {
    return (
      <>
        <Form className="form" onSubmit={(event) => this.handleSubmit(event)}>
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
                  onChange={(event) => this.handleChange(event)}
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
                  onChange={(event) => this.handleChange(event)}
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
    )
  }
}

export default Login
